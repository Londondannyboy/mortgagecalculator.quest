# Mortgage Calculator Quest

AI-powered mortgage calculator for UK homebuyers with CopilotKit and Pydantic AI.

## Features

- Monthly mortgage payment calculator
- UK Stamp Duty Land Tax (SDLT) calculator
- First-time buyer and additional property support
- Mortgage comparison tool
- Affordability estimator
- AI-powered chat assistant

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **AI Chat**: CopilotKit
- **Agent**: Pydantic AI with OpenAI GPT-4o

## Quick Start

### 1. Install Frontend Dependencies

```bash
npm install
```

### 2. Set Up Python Agent

```bash
cd agent
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Configure Environment

Create `.env` in the `agent/` folder:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Run Development Servers

In one terminal (frontend):
```bash
npm run dev:ui
```

In another terminal (agent):
```bash
cd agent
source .venv/bin/activate
uvicorn src.agent:app --reload --port 8000
```

Or run both together:
```bash
npm run dev
```

### 5. Open the App

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
mortgage-calculator.quest/
├── .claude/                 # Claude Code configuration
│   ├── commands/           # Workflow commands
│   └── reference/          # Reference documentation
├── agent/                  # Pydantic AI agent
│   ├── src/
│   │   └── agent.py       # Agent with mortgage tools
│   └── requirements.txt
├── src/
│   ├── app/
│   │   ├── api/copilotkit/ # CopilotKit API route
│   │   ├── page.tsx        # Main page
│   │   └── layout.tsx      # Root layout with CopilotKit
│   ├── components/
│   │   ├── MortgageCalculator.tsx
│   │   └── MortgageResultCard.tsx
│   └── lib/
├── CLAUDE.md               # Project context for Claude
├── PRD.md                  # Product requirements
└── package.json
```

## Commands

| Command | Purpose |
|---------|---------|
| `/prime` | Load project context |
| `/plan {feature}` | Create implementation plan |
| `/execute {plan}` | Execute approved plan |
| `/evolve` | Improve system after bugs |

## License

MIT
