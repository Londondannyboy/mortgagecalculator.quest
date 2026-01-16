"""
Mortgage Calculator Agent - Pydantic AI agent for UK mortgage calculations.
"""
import os
from typing import Optional
from pydantic import BaseModel, Field
from pydantic_ai import Agent, RunContext
from pydantic_ai.ag_ui import StateDeps
from dotenv import load_dotenv

load_dotenv()


# =============================================================================
# State Model
# =============================================================================

class MortgageState(BaseModel):
    """Shared state between frontend and agent."""
    principal: float = 300000
    interest_rate: float = 4.5
    term_years: int = 25
    monthly_payment: Optional[float] = None
    total_interest: Optional[float] = None
    property_value: Optional[float] = None
    stamp_duty: Optional[float] = None


# =============================================================================
# UK Stamp Duty Bands (2024/25)
# =============================================================================

STANDARD_BANDS = [
    (250000, 0),       # 0% up to £250k
    (925000, 0.05),    # 5% £250k-£925k
    (1500000, 0.10),   # 10% £925k-£1.5m
    (float('inf'), 0.12)  # 12% above £1.5m
]

FIRST_TIME_BUYER_BANDS = [
    (425000, 0),       # 0% up to £425k
    (625000, 0.05),    # 5% £425k-£625k
]

ADDITIONAL_PROPERTY_SURCHARGE = 0.03  # 3% surcharge


# =============================================================================
# Agent Definition
# =============================================================================

agent = Agent(
    'google-gla:gemini-2.0-flash',
    system_prompt="""You are a UK mortgage calculator assistant.

Your role is to help homebuyers:
1. Calculate monthly mortgage payments
2. Calculate UK stamp duty land tax
3. Compare different mortgage scenarios
4. Explain mortgage concepts clearly

IMPORTANT RULES:
- Always use the appropriate tools to perform calculations
- Never estimate or guess - use the calculator tools
- Provide clear explanations with the results
- Use British English and UK-specific terminology
- All amounts are in GBP (£)
- Interest rates are annual percentages

When users ask about mortgages, proactively offer to calculate payments.
When users mention property values, offer to calculate stamp duty.
""",
    deps_type=StateDeps[MortgageState]
)


# =============================================================================
# Mortgage Calculation Tools
# =============================================================================

@agent.tool
async def calculate_mortgage(
    ctx: RunContext[StateDeps[MortgageState]],
    principal: float,
    annual_rate: float,
    term_years: int
) -> dict:
    """Calculate monthly mortgage payment and total costs.

    Args:
        principal: Loan amount in GBP (e.g., 300000 for £300,000)
        annual_rate: Annual interest rate as percentage (e.g., 4.5 for 4.5%)
        term_years: Loan term in years (e.g., 25)

    Returns:
        Dictionary with monthly_payment, total_interest, and total_paid
    """
    if principal <= 0:
        return {"error": "Principal must be positive"}
    if annual_rate < 0:
        return {"error": "Interest rate cannot be negative"}
    if term_years <= 0:
        return {"error": "Term must be positive"}

    monthly_rate = annual_rate / 100 / 12
    num_payments = term_years * 12

    if monthly_rate == 0:
        monthly_payment = principal / num_payments
    else:
        monthly_payment = principal * (
            monthly_rate * (1 + monthly_rate) ** num_payments
        ) / ((1 + monthly_rate) ** num_payments - 1)

    total_paid = monthly_payment * num_payments
    total_interest = total_paid - principal

    # Update state
    ctx.deps.state.principal = principal
    ctx.deps.state.interest_rate = annual_rate
    ctx.deps.state.term_years = term_years
    ctx.deps.state.monthly_payment = round(monthly_payment, 2)
    ctx.deps.state.total_interest = round(total_interest, 2)

    return {
        "monthly_payment": round(monthly_payment, 2),
        "total_interest": round(total_interest, 2),
        "total_paid": round(total_paid, 2),
        "principal": principal,
        "interest_rate": annual_rate,
        "term_years": term_years
    }


@agent.tool
async def calculate_stamp_duty(
    ctx: RunContext[StateDeps[MortgageState]],
    property_value: float,
    is_first_time_buyer: bool = False,
    is_additional_property: bool = False
) -> dict:
    """Calculate UK Stamp Duty Land Tax (SDLT).

    Args:
        property_value: Property purchase price in GBP
        is_first_time_buyer: True if this is buyer's first property
        is_additional_property: True if buyer already owns a property

    Returns:
        Dictionary with stamp_duty amount and effective_rate
    """
    if property_value <= 0:
        return {"error": "Property value must be positive"}

    # Select appropriate bands
    if is_first_time_buyer and property_value <= 625000:
        bands = FIRST_TIME_BUYER_BANDS
    else:
        bands = STANDARD_BANDS

    # Calculate stamp duty
    stamp_duty = 0
    remaining = property_value
    previous_threshold = 0
    breakdown = []

    for threshold, rate in bands:
        if remaining <= 0:
            break
        taxable = min(remaining, threshold - previous_threshold)
        tax_for_band = taxable * rate
        stamp_duty += tax_for_band

        if tax_for_band > 0:
            breakdown.append({
                "band": f"£{previous_threshold:,.0f} - £{threshold:,.0f}",
                "rate": f"{rate * 100}%",
                "tax": round(tax_for_band, 2)
            })

        remaining -= taxable
        previous_threshold = threshold

    # Add surcharge for additional properties
    surcharge = 0
    if is_additional_property:
        surcharge = property_value * ADDITIONAL_PROPERTY_SURCHARGE
        stamp_duty += surcharge

    effective_rate = (stamp_duty / property_value) * 100

    # Update state
    ctx.deps.state.property_value = property_value
    ctx.deps.state.stamp_duty = round(stamp_duty, 2)

    return {
        "stamp_duty": round(stamp_duty, 2),
        "effective_rate": round(effective_rate, 2),
        "property_value": property_value,
        "is_first_time_buyer": is_first_time_buyer,
        "is_additional_property": is_additional_property,
        "surcharge": round(surcharge, 2) if is_additional_property else 0,
        "breakdown": breakdown
    }


@agent.tool
async def compare_mortgages(
    ctx: RunContext[StateDeps[MortgageState]],
    scenarios: list[dict]
) -> dict:
    """Compare multiple mortgage scenarios.

    Args:
        scenarios: List of scenarios, each with principal, annual_rate, term_years

    Returns:
        Comparison of all scenarios with differences
    """
    if not scenarios or len(scenarios) < 2:
        return {"error": "Please provide at least 2 scenarios to compare"}

    results = []
    for i, scenario in enumerate(scenarios):
        principal = scenario.get("principal", 300000)
        annual_rate = scenario.get("annual_rate", 4.5)
        term_years = scenario.get("term_years", 25)

        monthly_rate = annual_rate / 100 / 12
        num_payments = term_years * 12

        if monthly_rate == 0:
            monthly_payment = principal / num_payments
        else:
            monthly_payment = principal * (
                monthly_rate * (1 + monthly_rate) ** num_payments
            ) / ((1 + monthly_rate) ** num_payments - 1)

        total_paid = monthly_payment * num_payments
        total_interest = total_paid - principal

        results.append({
            "scenario": i + 1,
            "principal": principal,
            "annual_rate": annual_rate,
            "term_years": term_years,
            "monthly_payment": round(monthly_payment, 2),
            "total_interest": round(total_interest, 2),
            "total_paid": round(total_paid, 2)
        })

    # Calculate differences from first scenario
    baseline = results[0]
    for result in results[1:]:
        result["monthly_diff"] = round(result["monthly_payment"] - baseline["monthly_payment"], 2)
        result["total_interest_diff"] = round(result["total_interest"] - baseline["total_interest"], 2)

    return {
        "scenarios": results,
        "cheapest_monthly": min(results, key=lambda x: x["monthly_payment"]),
        "lowest_total_interest": min(results, key=lambda x: x["total_interest"])
    }


@agent.tool
async def calculate_affordability(
    ctx: RunContext[StateDeps[MortgageState]],
    annual_income: float,
    monthly_outgoings: float = 0,
    deposit: float = 0
) -> dict:
    """Estimate affordable mortgage amount based on income.

    Args:
        annual_income: Gross annual income in GBP
        monthly_outgoings: Regular monthly outgoings (debts, etc.)
        deposit: Available deposit amount

    Returns:
        Estimated maximum mortgage and affordable property price
    """
    if annual_income <= 0:
        return {"error": "Annual income must be positive"}

    # Standard UK multiplier is typically 4-4.5x income
    max_multiplier = 4.5
    standard_multiplier = 4.0

    max_mortgage = annual_income * max_multiplier
    standard_mortgage = annual_income * standard_multiplier

    # Reduce if significant monthly outgoings
    if monthly_outgoings > 0:
        debt_reduction = monthly_outgoings * 12 * 4  # Rough debt-to-income impact
        max_mortgage = max(0, max_mortgage - debt_reduction)
        standard_mortgage = max(0, standard_mortgage - debt_reduction)

    return {
        "annual_income": annual_income,
        "deposit": deposit,
        "max_mortgage": round(max_mortgage, 2),
        "standard_mortgage": round(standard_mortgage, 2),
        "max_property_price": round(max_mortgage + deposit, 2),
        "standard_property_price": round(standard_mortgage + deposit, 2),
        "note": "These are estimates. Actual affordability depends on credit history, other factors."
    }


# =============================================================================
# Expose as AG-UI endpoint
# =============================================================================

app = agent.to_ag_ui(deps=StateDeps(MortgageState()))


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", "8000"))
    uvicorn.run(app, host="0.0.0.0", port=port)
