import styles from './RecipeCards.module.css'

/*
 * Every card says whether the recipe is in the tree or not.
 *
 * It used to present all twelve identically, with a phase number from the old
 * sixteen-phase plan — so Guardrails, Long-term memory, Sandboxing and Evals
 * read exactly like Tools & MCP, which actually ships. The kit forbids
 * promising those four, so they now carry a "planned" marker and are styled
 * back.
 */
interface Recipe {
  capability: string
  consume: string
  build: string
  status: 'shipped' | 'planned'
  icon: JSX.Element
  color: 'teal' | 'purple' | 'blue'
}

const RECIPES: Recipe[] = [
  {
    capability: 'Agent authoring',
    consume: 'LangGraph',
    build: 'Engine base class + adapter',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    color: 'teal',
  },
  {
    capability: 'Model routing',
    consume: 'LiteLLM',
    build: 'ModelRouter seam',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8l-8 8M8 8l8 8"/></svg>,
    color: 'purple',
  },
  {
    capability: 'Guardrails & PII',
    consume: 'not chosen yet',
    build: 'not built',
    status: 'planned',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    color: 'teal',
  },
  {
    capability: 'Short-term memory',
    consume: 'LangGraph checkpointer → Postgres',
    build: 'Session seam (load/save)',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    color: 'blue',
  },
  {
    capability: 'Long-term memory',
    consume: 'not chosen yet',
    build: 'not built',
    status: 'planned',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    color: 'purple',
  },
  {
    capability: 'Tools & MCP',
    consume: 'MCP · langchain-mcp-adapters',
    build: 'Tool seam, stdio and streamable HTTP',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
    color: 'teal',
  },
  {
    capability: 'Observability',
    consume: 'OTel → Phoenix · Langfuse · Opik · LangSmith',
    build: 'Observer seam, span tree per turn',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    color: 'blue',
  },
  {
    capability: 'Durable runs',
    consume: 'LangGraph checkpointer · PostgreSQL',
    build: 'ResumeToken and :resume',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    color: 'purple',
  },
  {
    capability: 'Agent↔Agent (A2A)',
    consume: 'A2A protocol',
    build: 'AgentRef (local | remote)',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 014-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 01-4 4H3"/></svg>,
    color: 'teal',
  },
  {
    capability: 'Voice pipeline',
    consume: 'Pipecat · LiveKit',
    build: 'VoiceTurn seam, echo guard, barge-in',
    status: 'shipped',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
    color: 'blue',
  },
  {
    capability: 'Sandboxing',
    consume: 'not chosen yet',
    build: 'not built',
    status: 'planned',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
    color: 'purple',
  },
  {
    capability: 'Evals',
    consume: 'not chosen yet',
    build: 'not built',
    status: 'planned',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    color: 'blue',
  },
]

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className={`${styles.card} ${styles[recipe.color]} ${styles[recipe.status]}`}>
      <div className={styles.cardHeader}>
        <div className={styles.cardIcon}>{recipe.icon}</div>
        <span className={styles.phase}>
          {recipe.status === 'shipped' ? 'shipped' : 'planned'}
        </span>
      </div>
      <h4 className={styles.cardTitle}>{recipe.capability}</h4>
      <div className={styles.recipeBody}>
        <div className={styles.recipeItem}>
          <span className={styles.recipeLabel}>consume</span>
          <span className={styles.consume}>{recipe.consume}</span>
        </div>
        <div className={styles.recipeItem}>
          <span className={styles.recipeLabel}>build</span>
          <span className={styles.build}>{recipe.build}</span>
        </div>
      </div>
    </div>
  )
}

export function RecipeCards() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">The recipe model</p>
        <h2 className="section-title">Consume best-of-breed. Build only thin seams.</h2>
        <p className="section-subtitle">
          Every capability maps to an upstream tool we consume and a thin seam we build.
          The ones marked planned are not in the tree — no tool is chosen and no seam exists yet.
        </p>

        <div className={styles.grid}>
          {RECIPES.map((recipe) => (
            <RecipeCard key={recipe.capability} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}
