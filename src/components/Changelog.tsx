import { useState } from 'react'
import styles from './Changelog.module.css'

interface ChangelogEntry {
  date: string
  version?: string
  title: string
  highlights: string[]
  type: 'release' | 'feature' | 'fix' | 'docs'
  link?: string
}

/*
 * Summarised from the project's own changelog — docs/CHANGELOG.md in
 * Agent-Ship/agent-ship, which is the source GitHub release notes are generated
 * from. Keep this in step with it; do not invent entries here.
 *
 * The previous list described a different codebase: a Google ADK engine, an
 * `agentship mcp connect` CLI, an `SSEMCPClient`, Fernet token storage — none of
 * which exist — and linked to AgentShippingKit/agent-ship and
 * harshuljain13/ship-ai-agents rather than to this project.
 */
const REPO = 'https://github.com/Agent-Ship/agent-ship'

const CHANGELOG: ChangelogEntry[] = [
  {
    date: '2026-10-11',
    version: '0.0.4',
    title: 'Voice turn-taking, and a Studio renderer that survives streaming',
    highlights: [
      'The agent no longer hears itself: an EchoGuard drops a transcript made of the words TTS is currently speaking, while letting a human talking over it through',
      'Your own questions appear on screen again — the client is now told what the human said, driven through the real pipeline',
      'Barge-in is seen as fast as the recogniser allows: `openai-realtime` reports partial words as they are spoken, and `interrupt_min_words` is a real field rather than a dead getattr',
      'Studio renders what a model actually writes — numbered and nested lists, headings anywhere, blockquotes, and code fences that are safe mid-stream',
    ],
    type: 'release',
    link: `${REPO}/blob/main/docs/CHANGELOG.md`,
  },
  {
    date: '2026-10-05',
    version: '0.0.3',
    title: 'Voice, and a long list of durability fixes',
    highlights: [
      '`agentship-voice`: talk to an agent over `WS /v1/agents/{name}/voice`, declared with a `voice:` block — same spec, same memory, same tools, same trace',
      'A spoken turn is traced like any other: a `voice.turn` span with `ttft_ms` kept apart from `total_ms`, and six voice conformance cells including an 850 ms first-audio budget',
      'Fixed: an agent had no conversation memory on any path, and two tenants could read each other\'s conversations',
      'Fixed: a crash could fire a side-effecting tool twice, and a resume token could be pointed at someone else\'s conversation',
      'Fixed: `durability: checkpoint` fell back to memory without a word; streamed turns were never checkpointed at all',
      'Every tracing backend — Phoenix, Opik, LangSmith, Langfuse — now proves delivery in CI',
    ],
    type: 'release',
    link: `${REPO}/blob/main/docs/CHANGELOG.md`,
  },
  {
    date: '2026-09-07',
    version: '0.0.2',
    title: 'The first release that can actually run an agent',
    highlights: [
      'An agent runs without the observability adapter installed — `provider` no longer defaults to a package that is not in `[starter]`',
      'A tag now publishes: the release workflow\'s tag trigger had been commented out, so pushing a tag did nothing',
      'The release gate runs the README quickstart keyless, in a clean directory, so a broken quickstart fails the release',
    ],
    type: 'release',
    link: `${REPO}/blob/main/docs/CHANGELOG.md`,
  },
  {
    date: '2026-09-06',
    version: '0.0.1',
    title: 'Name reservation — yanked',
    highlights: [
      'Reserved the package names on PyPI, but could not run an agent: tracing was on by default and the adapter is not in `[starter]`, so every run failed with "observability provider \'otel\' is not installed"',
      'Yanked, so every resolver skips it — a plain `pip install` gets a working version',
      'Also shipped the conformance catalogue as the vendor-free `agentship.conformance` module, and the `agentship verify` CLI behind it',
    ],
    type: 'release',
    link: `${REPO}/blob/main/docs/CHANGELOG.md`,
  },
  {
    date: '2026-08-07',
    title: 'Rebuilt foundation-first',
    highlights: [
      'AgentShip was rebuilt from the ground up: one thin working slice per phase, with tests and a runnable demo before anything is called done',
      'The entries above are the published history. Work before the rebuild lived in a predecessor repository, on a different engine and a different licence, and is not part of these packages',
    ],
    type: 'docs',
    link: `${REPO}/blob/main/CONTRIBUTING.md`,
  },
]

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatMonth(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

function groupByMonth(entries: ChangelogEntry[]) {
  const groups: { month: string; entries: ChangelogEntry[] }[] = []
  let currentMonth = ''

  for (const entry of entries) {
    const month = formatMonth(entry.date)
    if (month !== currentMonth) {
      currentMonth = month
      groups.push({ month, entries: [] })
    }
    groups[groups.length - 1].entries.push(entry)
  }
  return groups
}

const TYPE_LABELS: Record<string, string> = {
  release: 'Release',
  feature: 'Feature',
  fix: 'Fix',
  docs: 'Docs',
}

export function Changelog() {
  const [search, setSearch] = useState('')

  const filtered = CHANGELOG.filter(
    (e) =>
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.highlights.some((h) => h.toLowerCase().includes(search.toLowerCase()))
  )

  const groups = groupByMonth(filtered)

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heading}>
            <span className="gradient-text">Changelog</span>
          </h1>
          <p className={styles.subtitle}>
            What's new in AgentShip — features, fixes, and improvements from the actual repository.
          </p>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              type="text"
              placeholder="Search changelog..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        {groups.length > 0 ? (
          groups.map((g) => (
            <div key={g.month} className={styles.monthGroup}>
              <div className={styles.monthLabel}>{g.month}</div>
              {g.entries.map((entry, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={`${styles.badge} ${styles['badge_' + entry.type]}`}>
                      {TYPE_LABELS[entry.type]}
                    </span>
                    <span className={styles.date}>{formatDate(entry.date)}</span>
                  </div>
                  <h3 className={styles.cardTitle}>
                    {entry.version && <span className={styles.version}>{entry.version}</span>}
                    {entry.title}
                  </h3>
                  <ul className={styles.highlights}>
                    {entry.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                  {entry.link && (
                    <a href={entry.link} target="_blank" rel="noopener noreferrer" className={styles.commitLink}>
                      View commit
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 1h7.5v7.5M11 1L4.5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className={styles.empty}>No entries matching "{search}"</p>
        )}
      </div>
    </div>
  )
}
