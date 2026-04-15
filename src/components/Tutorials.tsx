import styles from './Tutorials.module.css'

interface Tutorial {
  title: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced'
  tags: string[]
  estimatedTime: string
}

const TUTORIALS: Tutorial[] = [
  {
    title: 'Your First Agent in 5 Minutes',
    description: 'Create a two-file agent, run it locally with Docker, and query it via the Studio UI and REST API.',
    level: 'beginner',
    tags: ['ADK', 'Docker', 'Studio'],
    estimatedTime: '5 min',
  },
  {
    title: 'Swap ADK for LangGraph',
    description: 'Take an existing ADK agent and change one YAML line to run it on LangGraph — without touching the Python class.',
    level: 'beginner',
    tags: ['LangGraph', 'Engine Swap'],
    estimatedTime: '10 min',
  },
  {
    title: 'Add a PostgreSQL MCP Tool',
    description: 'Connect an STDIO MCP server to your agent and let the LLM query your database using natural language.',
    level: 'intermediate',
    tags: ['MCP', 'STDIO', 'PostgreSQL'],
    estimatedTime: '20 min',
  },
  {
    title: 'Connect GitHub via OAuth MCP',
    description: 'Wire the GitHub MCP server with OAuth 2.0. Create pull requests and read issues through a conversational agent.',
    level: 'intermediate',
    tags: ['MCP', 'OAuth', 'GitHub'],
    estimatedTime: '30 min',
  },
  {
    title: 'Build an Orchestrator Agent',
    description: 'Create a main agent that delegates to two sub-agents — a flight search agent and a hotel search agent.',
    level: 'intermediate',
    tags: ['Orchestrator', 'Sub-agents', 'ADK'],
    estimatedTime: '25 min',
  },
  {
    title: 'Token-by-Token Streaming with LangGraph',
    description: 'Set up streaming_mode: token_based on a LangGraph agent and consume the SSE stream in a client application.',
    level: 'intermediate',
    tags: ['LangGraph', 'Streaming', 'SSE'],
    estimatedTime: '20 min',
  },
  {
    title: 'Observability with Opik',
    description: 'Enable Opik tracing, explore the tool call timeline in AgentShip Studio, and export traces for analysis.',
    level: 'intermediate',
    tags: ['Opik', 'Observability', 'Studio'],
    estimatedTime: '15 min',
  },
  {
    title: 'Deploy to Heroku',
    description: 'Run make heroku-deploy, provision PostgreSQL, and set environment variables for a production deployment.',
    level: 'advanced',
    tags: ['Heroku', 'Deployment', 'Production'],
    estimatedTime: '30 min',
  },
  {
    title: 'Write Integration Tests for Agents',
    description: 'Use the built-in test fixtures to mock ADK runners and LangGraph LLM calls without spending tokens.',
    level: 'advanced',
    tags: ['Testing', 'pytest', 'CI'],
    estimatedTime: '25 min',
  },
]

const LEVEL_LABELS: Record<Tutorial['level'], string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export function Tutorials() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Learn by building</p>
          <h1 className={styles.heading}>
            <span className="gradient-text">Tutorials</span>
          </h1>
          <p className={styles.subtitle}>
            Step-by-step guides for building, configuring, and deploying agents with AgentShip.
            From your first two-file agent to production OAuth MCP integrations.
          </p>
          <div className={styles.comingSoonBadge}>
            <span className={styles.pulseDot} />
            Coming soon — tutorials are in progress
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {TUTORIALS.map((t) => (
          <div key={t.title} className={`${styles.card} ${styles.cardDisabled}`}>
            <div className={styles.cardTop}>
              <span className={`${styles.levelBadge} ${styles['level_' + t.level]}`}>
                {LEVEL_LABELS[t.level]}
              </span>
              <span className={styles.time}>{t.estimatedTime}</span>
            </div>
            <h3 className={styles.cardTitle}>{t.title}</h3>
            <p className={styles.cardDesc}>{t.description}</p>
            <div className={styles.tags}>
              {t.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.comingSoon}>Coming soon</div>
          </div>
        ))}
      </div>

      <div className={styles.notify}>
        <p className={styles.notifyText}>
          Want to contribute a tutorial or get notified when they launch?
        </p>
        <a
          href="https://discord.gg/zCEtKH2P"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.notifyBtn}
        >
          Join our Discord
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M3.5 1h7.5v7.5M11 1L4.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
