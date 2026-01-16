# Mortgage Calculator Quest

> **Cole Medin Methodology**: PRD-first, modular rules, command-ify, context reset, system evolution.

## Quick Start

```bash
# Frontend (Terminal 1)
npm install
npm run dev:ui           # → localhost:3000

# Agent (Terminal 2)
cd agent
source .venv/bin/activate
pip install -r requirements.txt
uvicorn src.agent:app --reload --port 8000
```

## Architecture

AI-powered UK mortgage calculator. Next.js frontend with CopilotKit sidebar connects to a Pydantic AI agent that performs mortgage calculations, stamp duty calculations, and provides financial guidance via AG-UI protocol.

For details: `.claude/reference/architecture.md`

---

## Key Files

| Purpose | Location |
|---------|----------|
| Main page | `src/app/page.tsx` |
| Calculator UI | `src/components/MortgageCalculator.tsx` |
| Result cards | `src/components/MortgageResultCard.tsx` |
| CopilotKit API | `src/app/api/copilotkit/route.ts` |
| Pydantic AI Agent | `agent/src/agent.py` |
| Agent tools | `calculate_mortgage`, `calculate_stamp_duty`, `compare_mortgages`, `calculate_affordability` |

---

## Commands

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/prime` | Load project context | Start of session |
| `/plan {feature}` | Create implementation plan | Before coding features |
| `/execute {plan}` | Build from plan (fresh context) | After plan approval |
| `/evolve` | Improve system after bugs | After fixing issues |

---

## Reference Files (Load On-Demand)

| Reference | When to Load |
|-----------|--------------|
| `copilotkit.md` | CopilotKit hooks, shared state |
| `pydantic-ai.md` | Agent tools, state management |
| `architecture.md` | System design decisions |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind |
| AI Chat | CopilotKit (useCoAgent, useRenderToolCall) |
| Agent | Pydantic AI with Google Gemini 2.0 Flash |
| Protocol | AG-UI for frontend-agent communication |

---

## Agent Tools

| Tool | Purpose |
|------|---------|
| `calculate_mortgage` | Monthly payment, total interest, total cost |
| `calculate_stamp_duty` | UK SDLT with first-time buyer/additional property |
| `compare_mortgages` | Side-by-side scenario comparison |
| `calculate_affordability` | Income-based mortgage estimate |

---

## UK Stamp Duty Bands (2024/25)

**Standard rates:**
- 0% up to £250,000
- 5% from £250,001 to £925,000
- 10% from £925,001 to £1,500,000
- 12% above £1,500,000

**First-time buyers (properties up to £625k):**
- 0% up to £425,000
- 5% from £425,001 to £625,000

**Additional property:** +3% surcharge on all bands

---

## Environment Variables

```bash
# Frontend (.env.local)
AGENT_URL=http://localhost:8000

# Agent (agent/.env)
GOOGLE_API_KEY=AIzaSy...
PORT=8000
```

---

## Current Focus

- [x] Basic mortgage calculator UI
- [x] CopilotKit integration
- [x] Pydantic AI agent with mortgage tools
- [ ] Stamp duty breakdown visualization
- [ ] Amortization schedule chart
- [ ] Save/share calculations
- [ ] Mobile responsive design

---

## Session Log

### 2025-01-16
- Project created using CLAUDE_STARTER_KIT template
- Full CopilotKit + Pydantic AI integration
- 4 agent tools: mortgage, stamp duty, comparison, affordability
