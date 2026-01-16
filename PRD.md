# Mortgage Calculator Quest - Product Requirements Document

> This is the **north star document**. All development decisions reference this PRD.

## Vision

An AI-powered mortgage calculator that helps UK homebuyers understand their mortgage options, calculate costs, and make informed financial decisions through natural conversation.

## Problem Statement

UK homebuyers struggle to understand complex mortgage calculations, stamp duty land tax, and the true cost of homeownership. They need an intelligent assistant that can instantly calculate payments, explain concepts, and compare scenarios - all in plain English.

## Target Users

| User Type | Description | Primary Need |
|-----------|-------------|--------------|
| First-time buyers | People buying their first home in the UK | Understanding affordability, stamp duty relief |
| Home movers | Existing homeowners looking to move | Comparing current vs new mortgage costs |
| Remortgagers | Homeowners seeking better deals | Finding savings, understanding early repayment |
| Buy-to-let investors | Property investors | Additional property stamp duty, rental yield |

## Core Features

### 1. Mortgage Payment Calculator

**User Story**: As a homebuyer, I want to calculate my monthly mortgage payments so that I can understand what I can afford.

**Acceptance Criteria**:
- [x] Calculate monthly payments from principal, rate, and term
- [x] Show total interest paid over the loan term
- [x] Show total amount repayable
- [x] Update in real-time as inputs change
- [ ] Display amortization schedule
- [ ] Support interest-only vs repayment comparison

### 2. UK Stamp Duty Calculator

**User Story**: As a homebuyer, I want to calculate stamp duty so that I know my total purchase costs.

**Acceptance Criteria**:
- [x] Calculate SDLT based on property value
- [x] Support first-time buyer relief (up to £625k)
- [x] Support additional property 3% surcharge
- [x] Show effective tax rate
- [x] Display breakdown by tax band
- [ ] Support Welsh LTT and Scottish LBTT

### 3. AI Copilot Assistant

**User Story**: As a user, I want to ask questions about mortgages in natural language so that I get instant, accurate answers.

**Acceptance Criteria**:
- [x] Natural language mortgage queries
- [x] Context-aware responses using calculator state
- [x] Tool-grounded responses (no hallucinated calculations)
- [x] Generative UI for calculation results
- [ ] Suggested follow-up questions
- [ ] Educational explanations of mortgage concepts

### 4. Mortgage Comparison Tool

**User Story**: As a homebuyer, I want to compare different mortgage scenarios so that I can choose the best option.

**Acceptance Criteria**:
- [x] Compare multiple scenarios via chat
- [ ] Side-by-side visual comparison UI
- [ ] Highlight cheapest monthly payment
- [ ] Highlight lowest total interest
- [ ] Show savings/cost difference

### 5. Affordability Estimator

**User Story**: As a potential buyer, I want to estimate how much I can borrow based on my income.

**Acceptance Criteria**:
- [x] Estimate max mortgage from annual income (4-4.5x multiplier)
- [x] Account for existing debts
- [x] Show max property price with deposit
- [ ] Stress test at higher interest rates
- [ ] Display affordability warning thresholds

## Non-Goals (Explicit Exclusions)

- **Mortgage application processing** - We don't submit applications
- **Credit checks** - We don't access credit reports
- **Lender recommendations** - We don't recommend specific products
- **Personal data storage** - We don't save user financial information
- **Financial advice** - We provide calculations, not regulated advice

## Technical Architecture

### System Overview

```
┌─────────────────┐     ┌─────────────────┐
│   Next.js UI    │────▶│  CopilotKit     │
│  (localhost:3000)│     │   Sidebar       │
└────────┬────────┘     └────────┬────────┘
         │                       │
         │    /api/copilotkit    │
         └───────────┬───────────┘
                     │ AG-UI Protocol
                     ▼
         ┌───────────────────────┐
         │   Pydantic AI Agent   │
         │   (localhost:8000)    │
         │                       │
         │  Tools:               │
         │  - calculate_mortgage │
         │  - calculate_stamp_duty│
         │  - compare_mortgages  │
         │  - calculate_affordability│
         └───────────────────────┘
```

### Tech Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| Frontend | Next.js 15, React 19 | Modern SSR, App Router |
| Styling | Tailwind CSS | Rapid UI development |
| AI Chat | CopilotKit | Seamless agent integration |
| Agent | Pydantic AI | Type-safe tools, AG-UI support |
| LLM | Google Gemini 2.0 Flash | Fast, capable model for calculations |

### Key Integration Points

1. **Frontend ↔ Agent**: AG-UI protocol via CopilotKit ExternalAgentRuntime
2. **State Sync**: useCoAgent for shared MortgageState
3. **Generative UI**: useRenderToolCall for calculation result cards

## Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Calculation accuracy | 100% | Unit tests against known values |
| Response latency | <2s | Time from query to tool result |
| User engagement | >3 queries/session | Chat interaction count |
| Mobile usability | 100% responsive | Device testing |

## Milestones

### Phase 1: MVP (Current)
- [x] Mortgage payment calculator
- [x] Stamp duty calculator
- [x] CopilotKit integration
- [x] Pydantic AI agent
- [x] Basic responsive UI

### Phase 2: Enhanced Calculations
- [ ] Amortization schedule visualization
- [ ] Overpayment calculator
- [ ] Early repayment charges
- [ ] Mortgage comparison UI
- [ ] Scottish LBTT / Welsh LTT

### Phase 3: User Experience
- [ ] Save calculations (local storage)
- [ ] Share calculation via URL
- [ ] PDF report generation
- [ ] Dark mode
- [ ] Mobile app (PWA)

### Phase 4: Advanced Features
- [ ] Historical rate trends
- [ ] Remortgage break-even calculator
- [ ] Rental yield calculator (BTL)
- [ ] Help to Buy scheme calculator

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Calculation errors | Low | High | Comprehensive test suite with known values |
| AI hallucinations | Medium | High | All calculations via tools, not LLM math |
| Tax band changes | High | Medium | Configurable bands, easy to update |
| API rate limits | Low | Medium | Caching, graceful degradation |

## Open Questions

- [ ] Should we support Scottish LBTT in Phase 1?
- [ ] Do we need Help to Buy scheme calculations?
- [ ] Should we add broker/lender referral links?
- [ ] Voice interface via Hume EVI?

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2025-01-16 | Initial PRD created with CLAUDE_STARTER_KIT | Claude |
| 2025-01-16 | Added all core features and acceptance criteria | Claude |
