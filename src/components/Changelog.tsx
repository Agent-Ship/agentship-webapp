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

const CHANGELOG: ChangelogEntry[] = [
  {
    date: '2026-02-24',
    title: 'MCP (Model Context Protocol) STDIO Integration',
    highlights: [
      'Full MCP server integration with STDIO transport for external tools',
      'Dual engine support — MCP works identically with both ADK and LangGraph',
      'Auto tool discovery and documentation via PromptBuilder',
      'Event loop-safe reconnection for production web servers',
      'Dynamic schema extraction for proper tool parameter handling',
      '66 tests including 37 new critical unit tests for MCP components',
      'GitHub Actions CI/CD workflows for automated testing on PRs',
    ],
    type: 'release',
    link: 'https://github.com/AgentShippingKit/agent-ship/pull/15',
  },
  {
    date: '2026-02-10',
    title: 'LangGraph Engine + Streaming + Opik Observability',
    highlights: [
      'Added LangGraph as a second execution engine alongside Google ADK — configurable per agent via YAML',
      'True token-by-token SSE streaming via LangGraph + LiteLLM',
      'Opik observability integration for both ADK and LangGraph engines',
      'Major refactor: factories for engines, tools, memory, and observability',
      'New session adapters for ADK and LangGraph with PostgreSQL persistence',
      'Added Sphinx docs requirements for Read the Docs deployment',
    ],
    type: 'release',
    link: 'https://github.com/harshuljain13/ship-ai-agents/commit/d5fe6e0',
  },
  {
    date: '2026-01-11',
    title: 'Improved Heroku Deployment',
    highlights: [
      'Enhanced Heroku deploy scripts with better error handling',
      'Fixed Procfile and environment variable configuration',
    ],
    type: 'feature',
    link: 'https://github.com/harshuljain13/ship-ai-agents/commit/f992d19',
  },
  {
    date: '2026-01-01',
    version: 'v1.0.0',
    title: 'Documentation, Branding & Architecture',
    highlights: [
      'Full Sphinx documentation with Furo theme — quickstart, building agents, patterns, API reference',
      'Architecture documentation with system diagram',
      'AgentShip branding: logos, icons, favicons, and GitHub banner',
      'Debug UI URL added to Docker setup output',
      'README overhaul with technology badges',
    ],
    type: 'docs',
    link: 'https://github.com/harshuljain13/ship-ai-agents/commit/90d003f',
  },
  {
    date: '2025-12-31',
    title: 'Open-Source Cleanup',
    highlights: [
      'Generalized agent examples — removed domain-specific content',
      'Cleaned up redundant documentation and sync scripts',
    ],
    type: 'fix',
  },
  {
    date: '2025-12-29',
    title: 'Debug UI & Streaming',
    highlights: [
      'Built-in Debug UI for testing agents in the browser',
      'SSE streaming support for agent chat responses',
      'Added AI articles on agentic patterns',
    ],
    type: 'feature',
  },
  {
    date: '2025-12-26',
    title: 'Sphinx Docs & Docker Setup',
    highlights: [
      'Migrated docs to Sphinx with Markdown + RST support',
      'Makefile commands for building and serving docs',
      'Docker Compose setup with PostgreSQL and hot-reload',
      'One-command `make docker-setup`',
    ],
    type: 'feature',
  },
  {
    date: '2025-12-22',
    title: 'Agent Tools & Testing',
    highlights: [
      'Added composable agent tools (action items, Azure artifact reading)',
      'YAML-based tool configuration with function and agent tool types',
      'Unit and integration test suite',
      'Code modularization following DRY principles',
    ],
    type: 'feature',
  },
  {
    date: '2025-12-12',
    title: 'A2A Protocol & Heroku Fix',
    highlights: [
      'Conversation insights via A2A (Agent-to-Agent) protocol',
      'Fixed Heroku build by resolving Pipfile.lock conflicts',
    ],
    type: 'fix',
  },
  {
    date: '2025-10-08',
    title: 'Initial Open-Source Release',
    highlights: [
      'Production-ready AI agents framework — open sourced under MIT',
      'Google ADK-based agent engine with YAML configuration',
      'Auto-discovery: drop in a folder, agent registers itself',
      'FastAPI REST API with session management',
      'Three agent patterns: single agent, orchestrator, and tool-based',
      'PostgreSQL session storage with in-memory fallback',
      'Heroku deployment scripts',
      'Postman collection for API testing',
    ],
    type: 'release',
    link: 'https://github.com/harshuljain13/ship-ai-agents/commit/1fdba8d',
  },
  {
    date: '2025-10-04',
    title: 'Agent Patterns & Observability',
    highlights: [
      'Translation agent as single-agent pattern example',
      'Supervisor agent (orchestrator) pattern example',
      'Basic observability layer',
      'Tool support for agents',
    ],
    type: 'feature',
  },
  {
    date: '2025-09-27',
    title: 'Heroku Deployment & Dynamic API',
    highlights: [
      'First Heroku deployment with gunicorn',
      'Dynamic API model accepting multiple query types',
      'Architecture diagram',
    ],
    type: 'feature',
  },
  {
    date: '2025-09-24',
    title: 'Project Genesis',
    highlights: [
      'Initial framework setup for AI agents',
      'Service layer with FastAPI chat endpoints',
      'Environment-based configuration',
    ],
    type: 'release',
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
