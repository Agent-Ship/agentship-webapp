import styles from './Community.module.css'

const REPO = 'https://github.com/Agent-Ship/agent-ship'

const CHANNELS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>,
    title: 'GitHub Issues',
    desc: 'Bug reports, feature requests & design discussions',
    href: 'https://github.com/Agent-Ship/agent-ship/issues',
    action: 'Open Issues',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>,
    title: 'Documentation',
    desc: 'Capability guides, architecture decisions, releasing',
    href: 'https://docs.agent-ship.dev/',
    action: 'Read Docs',
  },
]

/* These used to link to `.spec-dev/DESIGN.md`, `.spec-dev/PHASES.md` and a
   `proposals/` directory. None of those exist in the published repo, and the
   relative ones resolved against this site, so every one of them 404'd. */
const RESOURCES = [
  { title: 'Quick start', desc: 'Install, write one YAML file, run it', href: 'https://docs.agent-ship.dev/capabilities/foundation.html' },
  { title: 'Capability guides', desc: 'One page per capability, in the order they were built', href: `${REPO}/tree/main/docs/capabilities` },
  { title: 'Architecture decisions', desc: 'Why we integrate rather than reimplement', href: `${REPO}/tree/main/docs/decisions` },
  { title: 'Tools & MCP', desc: 'Built-in tools, your own functions, and any MCP server', href: 'https://docs.agent-ship.dev/capabilities/tools-and-mcp.html' },
  { title: 'Service & security', desc: 'Auth, per-tenant isolation, and the error model', href: 'https://docs.agent-ship.dev/capabilities/service-and-security.html' },
  { title: 'Changelog', desc: 'What changed in each release, and what is still unproven', href: `${REPO}/blob/main/docs/CHANGELOG.md` },
]

export function Community() {
  return (
    <section id="community" className="section section--alt">
      <div className="container">
        <h2 className="section-title">Community & Resources</h2>
        <p className="section-subtitle">
          Development happens in the open. Bugs, feature requests and design discussions all go
          through GitHub.
        </p>

        <div className={styles.grid}>
          {CHANNELS.map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.cardIcon}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <span className={styles.cardAction}>
                {c.action}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L8 4m3 3L8 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          ))}
        </div>

        <h3 className={styles.resourcesHeading}>Guides & References</h3>
        <div className={styles.resourcesGrid}>
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
              <h4 className={styles.resourceTitle}>{r.title}</h4>
              <p className={styles.resourceDesc}>{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
