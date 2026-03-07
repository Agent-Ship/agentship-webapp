import styles from './Ecosystem.module.css'

const PROJECTS = [
  { name: 'Agent Framework', tag: 'YAML-based config with auto-discovery and registry', href: 'https://github.com/Agent-Ship/agent-ship/tree/main/src/agent_framework' },
  { name: 'Execution Engines', tag: 'Google ADK and LangGraph — swappable via YAML', href: 'https://github.com/Agent-Ship/agent-ship/tree/main/src/agent_framework/engines' },
  { name: 'MCP Integration', tag: 'STDIO and HTTP/OAuth — tools auto-documented for LLM', href: 'https://github.com/Agent-Ship/agent-ship/tree/main/src/agent_framework/mcp' },
  { name: 'REST & SSE API', tag: 'FastAPI endpoints with token-by-token streaming', href: 'https://github.com/Agent-Ship/agent-ship/tree/main/src/service' },
  { name: 'Observability', tag: 'Opik tracing, tool call timeline, and structured logging', href: 'https://github.com/Agent-Ship/agent-ship/tree/main/src/agent_framework/observability' },
  { name: 'Session Memory', tag: 'PostgreSQL-backed persistent conversations', href: 'https://github.com/Agent-Ship/agent-ship/tree/main/src/agent_framework/session' },
  { name: 'AgentShip Studio', tag: 'Browser chat UI with observability panel and stop button', href: 'https://github.com/Agent-Ship/agent-ship/tree/main/studio' },
  { name: 'Documentation', tag: 'Quickstart, guides, API reference, and architecture', href: 'https://docs.agent-ship.dev/' },
]

export function Ecosystem() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Ecosystem</h2>
        <p className="section-subtitle">
          Everything included in AgentShip — the full production stack, ready to use out of the box.
        </p>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.dot}>&middot;</span>
              <span className={styles.tag}>{p.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
