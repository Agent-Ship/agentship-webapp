import styles from './Roadmap.module.css'

interface RoadmapItem {
  label: string
  done?: boolean
}

interface RoadmapPhase {
  phase: string
  period: string
  status: 'shipped' | 'building' | 'planned'
  milestone: string
  summary: string
  items: RoadmapItem[]
}

/*
 * Grouped by what is true of the tree, not by a date.
 *
 * The previous version had voice, observability, tools/MCP and service/security
 * sitting under "planned" long after they shipped, and gave week estimates for
 * work already released. Shipped items are the eleven capability pages in
 * docs/capabilities/; the "not built yet" list is the project README's, verbatim.
 */
const PHASES: RoadmapPhase[] = [
  {
    phase: '0.0.4',
    period: 'On PyPI now',
    status: 'shipped',
    milestone: 'One capability page per item, each with a passing conformance cell',
    summary:
      'The spec and the vendor-free kernel, two engines, the /v1 service, the CLI, OpenTelemetry tracing, and voice. `agentship verify` proves each engine honours what it declares.',
    items: [
      { label: 'Foundation & base classes', done: true },
      { label: 'Engine & agent authoring', done: true },
      { label: 'Multi-agent supervisors', done: true },
      { label: 'Checkpointing & human-in-the-loop', done: true },
      { label: 'Durable resume', done: true },
      { label: 'Tools & MCP', done: true },
      { label: 'Observability & tracing', done: true },
      { label: 'Service & security', done: true },
      { label: 'Agent gateway / A2A', done: true },
      { label: 'Voice', done: true },
      { label: 'Verify & conformance', done: true },
    ],
  },
  {
    phase: 'Next',
    period: 'No date yet',
    status: 'building',
    milestone: 'Close the gaps the conformance grid already records',
    summary:
      'The open items are tracked as xfails and status notes rather than promises: child-span wiring for model, tool, MCP and graph-node spans, and per-member model routing in a supervisor.',
    items: [
      { label: 'Model / tool / MCP / graph-node child spans' },
      { label: 'Per-member model routing' },
    ],
  },
  {
    phase: 'Later',
    period: 'Not built — do not plan around these',
    status: 'planned',
    milestone: 'Named so the absence is on the record',
    summary:
      'These are not in the tree and are not promised for a release. The engine contract is designed to take a second and third adapter, which is what makes the ADK and Pydantic AI work tractable rather than done.',
    items: [
      { label: 'Long-term memory' },
      { label: 'Guardrails & PII' },
      { label: 'Sandboxing' },
      { label: 'Evals' },
      { label: 'Pydantic AI engine adapter' },
      { label: 'Google ADK engine adapter' },
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
            Nothing is called done until it has a capability page, a changelog entry, and a passing
            cell in the conformance grid. What is not built is named below rather than left to
            look imminent.
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
            <p className={styles.milestone}><strong>Milestone:</strong> {phase.milestone}</p>

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
          Early, on the 0.x line — the API can change between minor versions. The changelog is
          the authoritative record of what landed.
        </p>
        <a
          href="https://github.com/Agent-Ship/agent-ship"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          View on GitHub
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M3.5 1h7.5v7.5M11 1L4.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
