import styles from './Roadmap.module.css'

interface RoadmapItem {
  label: string
  done?: boolean
}

interface RoadmapPhase {
  phase: string
  period: string
  status: 'shipped' | 'building' | 'planned'
  summary: string
  items: RoadmapItem[]
}

const PHASES: RoadmapPhase[] = [
  {
    phase: 'v1',
    period: 'Now — March 2026',
    status: 'shipped',
    summary: 'The runtime-agnostic production layer. Two engines, full MCP support, production-grade infrastructure.',
    items: [
      { label: 'Google ADK execution engine', done: true },
      { label: 'LangGraph + LiteLLM execution engine', done: true },
      { label: 'Engine swap via single YAML line', done: true },
      { label: 'MCP STDIO transport (npx, Python subprocesses)', done: true },
      { label: 'MCP HTTP/OAuth transport (GitHub, Slack, etc.)', done: true },
      { label: 'Auto tool discovery and LLM documentation injection', done: true },
      { label: 'Per-agent OAuth client isolation', done: true },
      { label: 'PostgreSQL session storage — both engines', done: true },
      { label: 'Token-by-token SSE streaming', done: true },
      { label: 'Opik observability for ADK and LangGraph', done: true },
      { label: 'AgentShip Studio — browser UI with observability panel', done: true },
      { label: 'One-command Docker setup (make docker-setup)', done: true },
      { label: 'Heroku one-command deploy', done: true },
      { label: 'Comprehensive integration test suite', done: true },
    ],
  },
  {
    phase: 'v2',
    period: 'Q2–Q3 2026',
    status: 'building',
    summary: 'More engines, more memory backends, guardrails, and inter-agent protocols.',
    items: [
      { label: 'OpenAI Agents SDK execution engine' },
      { label: 'CrewAI execution engine' },
      { label: 'mem0 long-term memory backend' },
      { label: 'Supermemory backend' },
      { label: 'LangFuse observability backend' },
      { label: 'Response caching layer' },
      { label: 'Input and output guardrails' },
      { label: 'A2A (Agent-to-Agent) protocol support' },
      { label: 'AgentShip CLI for scaffolding and management' },
    ],
  },
  {
    phase: 'v3',
    period: 'Later',
    status: 'planned',
    summary: 'Evaluation, vector memory, community registry, and one-click cloud deploys.',
    items: [
      { label: 'Eval framework for agent quality measurement' },
      { label: 'pgvector memory backend' },
      { label: 'AgentShip Hub — community agent registry' },
      { label: 'One-click Render / Railway deploy' },
      { label: 'Autogen engine adapter' },
      { label: 'Agent-to-UI (A2UI) protocol' },
    ],
  },
]

const STATUS_LABELS: Record<RoadmapPhase['status'], string> = {
  shipped: 'Shipped',
  building: 'Building',
  planned: 'Planned',
}

export function Roadmap() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Where we're going</p>
          <h1 className={styles.heading}>
            <span className="gradient-text">Roadmap</span>
          </h1>
          <p className={styles.subtitle}>
            AgentShip is the production layer above execution engines and below protocol layers.
            Every item here widens that layer — more engines, more protocols, more backends — without
            changing the interface your agent code talks to.
          </p>
        </div>
      </div>

      <div className={styles.phases}>
        {PHASES.map((phase) => (
          <div key={phase.phase} className={`${styles.phaseCard} ${styles[phase.status]}`}>
            <div className={styles.phaseHeader}>
              <div className={styles.phaseMeta}>
                <span className={`${styles.statusBadge} ${styles['badge_' + phase.status]}`}>
                  {STATUS_LABELS[phase.status]}
                </span>
                <span className={styles.period}>{phase.period}</span>
              </div>
              <div className={styles.phaseVersion}>{phase.phase}</div>
            </div>

            <p className={styles.phaseSummary}>{phase.summary}</p>

            <ul className={styles.items}>
              {phase.items.map((item, i) => (
                <li key={i} className={`${styles.item} ${item.done ? styles.itemDone : ''}`}>
                  <span className={styles.itemCheck}>
                    {item.done ? (
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2.5 6.5l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <span className={styles.itemDot} />
                    )}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>
          Missing something? Open an issue or upvote existing requests on GitHub.
        </p>
        <a
          href="https://github.com/Agent-Ship/agent-ship/issues"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          View GitHub Issues
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M3.5 1h7.5v7.5M11 1L4.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
