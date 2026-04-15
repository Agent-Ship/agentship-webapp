# AgentShip Website

Marketing site for [AgentShip](https://github.com/harshuljain13/ship-ai-agents) — the production layer for AI agents. Built to mirror the style of [vLLM](https://vllm.ai/) with AgentShip branding (teal/slate theme).

## Stack

- **Vite** + **React** + **TypeScript**
- CSS Modules for scoped styles
- No UI framework; custom components and AgentShip theme

## Theme (AgentShip branding)

- **Primary**: Teal (`#0d9488`, `#14b8a6`) — aligns with FastAPI/AgentShip badges and production feel
- **Background**: Dark slate (`#0f172a`, `#1e293b`)
- **Text**: Slate grays for contrast and readability

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output in `dist/`. Preview with:

```bash
npm run preview
```

## Project structure

```
agentship-website/
├── public/           # Static assets (favicon)
├── src/
│   ├── components/   # Header, Hero, ValueProps, QuickStart, etc.
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css    # Global + CSS variables (theme)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Links

- [AgentShip repo](https://github.com/harshuljain13/ship-ai-agents)
- [Quick start (ai-ecosystem)](https://github.com/harshuljain13/ship-ai-agents/tree/main/ai/ai-ecosystem#-quick-start)
- [Discord Community](https://discord.gg/zCEtKH2P)
