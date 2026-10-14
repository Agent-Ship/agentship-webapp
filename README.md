# AgentShip website

Marketing site for [AgentShip](https://github.com/Agent-Ship/agent-ship) — production plumbing for
AI agents, without the rewrite. Deployed to Netlify at [agent-ship.dev](https://agent-ship.dev).

## Stack

- **Vite** + **React 18** + **TypeScript** (strict)
- CSS Modules for scoped styles
- No UI framework, no CSS framework — the brand tokens in `src/index.css` are the design system

## Branding

Everything visual comes from the **AgentShip brand kit**. Do not introduce a colour, a font or a
logo variant that is not in it.

- **Tokens** — `src/index.css` defines the kit's values as `--as-*` custom properties, then maps
  the component-level variables (`--bg-page`, `--text-heading`, `--brand-indigo`, …) onto them.
  Add a colour by pointing a component variable at an `--as-*` token; never paste a hex into a
  component stylesheet.
- **Logo** — `src/components/Logo.tsx` is the only place the mark geometry and the wordmark's
  500/800 weight pairing live. Use `<Logo>`, `<Mark>` or `<Wordmark>` from there.
- **Fonts** — Bricolage Grotesque (display), Instrument Sans (text) and JetBrains Mono (code) are
  self-hosted from `public/fonts/` and loaded by a `<link>` in `index.html`, not from a CDN. They
  are licensed under the SIL OFL; the licence files sit beside them in `public/fonts/` and must
  stay there.
- **Dark is the default.** Light is a documented override, and it swaps the accent to `#6A47C2` —
  `#A685EE` does not carry enough contrast as text on a light ground.

Three rules the kit is strict about, enforced throughout this codebase:

1. The accent is **one** colour, for emphasis only — never a large background fill. A category is
   not distinguished by hue.
2. **No gradients and no glows.** The `--gradient-*` and `--glow-*` variables survive as names so
   existing rules resolve, but they evaluate to flat brand surfaces and to `transparent`.
3. No pure white text (use Fog `#E8EEF0`) and no pure black ground (use Ink `#0D1317`).

## Copy rules

The brand kit forbids promising what is not built. As of AgentShip 0.0.4, **these are not in the
tree and must not appear as available**: long-term memory, guardrails/PII, sandboxing, evals, and
the Pydantic AI and Google ADK engine adapters. Two engines ship: `langgraph` and `echo`.

Where a page lists a planned capability anyway — the roadmap, the recipe grid — it has to be
visibly marked as planned, not styled like a shipped one.

Claims should be checkable against the project README, `docs/capabilities/` and
`docs/CHANGELOG.md` in the framework repo. The changelog page here is a summary of that file; keep
the two in step rather than inventing entries.

## Develop

```bash
npm install
npm run dev           # http://localhost:5173
```

## Build

```bash
npm run build         # tsc -b && vite build -> dist/
npm run preview
```

There is no test suite and no linter configured; `tsc -b` in the build is the gate.

## Project structure

```
agentship-website/
├── public/
│   ├── fonts/                 self-hosted woff2/woff + fonts.css + OFL licences
│   ├── favicon.svg .ico       brand mark
│   ├── apple-touch-icon-180.png
│   ├── agentship-*.svg        lockups and marks, on-dark and on-light
│   └── github-social-preview.png   1280x640, referenced by og:image
├── src/
│   ├── components/            Header, Hero, Logo, ValueProps, RecipeCards, …
│   ├── context/ThemeContext.tsx
│   ├── index.css              brand tokens + global styles
│   └── main.tsx
├── index.html                 head tags: icons, theme-color, Open Graph, fonts
└── netlify.toml
```

## Links

- [AgentShip repo](https://github.com/Agent-Ship/agent-ship)
- [Documentation](https://docs.agent-ship.dev/)
- [PyPI](https://pypi.org/project/agentship-sdk/)
