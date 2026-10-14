import styles from './Resources.module.css'

/* Docs paths are the MkDocs ones (`capabilities/<page>.html`, since the site is
   built with use_directory_urls: false). The old `/en/latest/...` prefix was
   left over from a Sphinx/ReadTheDocs layout, and two of these pointed at
   harshuljain13/ship-ai-agents, which is not this project's repo. */
const REPO = 'https://github.com/Agent-Ship/agent-ship'

const ITEMS = [
  { title: 'Quick start', desc: 'Install, write one YAML file, run it', link: 'Docs', href: 'https://docs.agent-ship.dev/capabilities/foundation.html' },
  { title: 'Engine & agent', desc: 'The spec reference — engines, prompts, tools, streaming', link: 'Docs', href: 'https://docs.agent-ship.dev/capabilities/engine-and-agent.html' },
  { title: 'Multi-agent', desc: 'A coordinator that routes on each member\'s description', link: 'Docs', href: 'https://docs.agent-ship.dev/capabilities/multi-agent.html' },
  { title: 'Observability', desc: 'Span trees per turn, with token counts and costs', link: 'Docs', href: 'https://docs.agent-ship.dev/capabilities/observability.html' },
  { title: 'Postman collection', desc: 'Ready-to-use API collection for testing', link: 'GitHub', href: `${REPO}/tree/main/postman` },
  { title: 'Examples', desc: 'Runnable specs you can copy', link: 'GitHub', href: `${REPO}/tree/main/examples` },
]

export function Resources() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Resources</p>
        <h2 className="section-title">Explore guides & references</h2>
        <p className="section-subtitle">
          Everything you need to learn, build, and deploy with AgentShip.
        </p>
        <div className={styles.grid}>
          {ITEMS.map((r) => (
            <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
              <span className={styles.cardLink}>{r.link}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
