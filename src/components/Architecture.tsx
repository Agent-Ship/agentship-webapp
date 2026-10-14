import styles from './Architecture.module.css'

/*
 * The layer diagram, matching the architecture diagram in the project README.
 *
 * The previous version described a system that does not exist: Guardrail and
 * Memory middleware, a Multimodal stage, a DurableTasks store, pgvector/mem0,
 * Docker/E2B sandboxing, Presidio/LlamaGuard, and Pydantic AI and ADK engines.
 * Per the brand kit, none of that may be promised — it is on the roadmap, not in
 * the tree. Every row below is in the published packages today.
 *
 * Colour carries one meaning here: `accent` marks the kernel, the part of the
 * design everything else hangs off. The kit allows one accent and no gradients,
 * so the other roles are neutral or the code teal.
 */

type Role = 'kernel' | 'adapter' | 'consumed' | 'interface'

interface Layer {
  name: string
  note: string
  items: string[]
  role: Role
}

const LAYERS: Layer[] = [
  {
    name: 'Interfaces',
    note: 'how a caller reaches an agent',
    items: [
      '/v1 REST · SSE · WebSocket',
      'Studio at /studio',
      'Voice (Pipecat · LiveKit)',
      'CLI: init · new-agent · run · serve · doctor · verify',
    ],
    role: 'interface',
  },
  {
    name: 'Seams',
    note: 'contracts the kernel defines and does not implement',
    items: ['auth', 'tenancy', 'tools', 'observability', 'A2A'],
    role: 'interface',
  },
  {
    name: 'Kernel — agentship-core',
    note: 'imports no vendor library',
    items: ['AgentSpec', 'RunnableAgent', 'engine registry', 'conformance matrix'],
    role: 'kernel',
  },
  {
    name: 'Engine adapters',
    note: 'the only code that names a vendor',
    items: ['langgraph — the reference engine', 'echo — no provider, no network'],
    role: 'adapter',
  },
  {
    name: 'Consumed, never reimplemented',
    note: 'upstream projects, used as they are',
    items: [
      'LangGraph',
      'LiteLLM',
      'MCP adapters',
      'OpenTelemetry',
      'PostgreSQL checkpoints',
      'Phoenix · Langfuse · Opik · LangSmith',
    ],
    role: 'consumed',
  },
]

const ROLE_LABELS: { role: Role; label: string }[] = [
  { role: 'kernel', label: 'Kernel (vendor-free)' },
  { role: 'adapter', label: 'Engine adapters' },
  { role: 'interface', label: 'Interfaces and seams' },
  { role: 'consumed', label: 'Consumed services' },
]

function LayerBar({ layer }: { layer: Layer }) {
  return (
    <div className={`${styles.layer} ${styles[layer.role]}`}>
      <div className={styles.layerLabel}>
        <span className={styles.layerName}>{layer.name}</span>
        <span className={styles.layerNote}>{layer.note}</span>
      </div>
      <div className={styles.layerItems}>
        {layer.items.map((item) => (
          <div key={item} className={styles.layerItem}>
            <span className={styles.itemText}>{item}</span>
          </div>
        ))}
      </div>
      <div className={styles.layerBar} />
    </div>
  )
}

export function Architecture() {
  return (
    <section className="section section--alt">
      <div className="container">
        <p className="section-label">Architecture</p>
        <h2 className="section-title">Your spec never names a vendor.</h2>
        <p className="section-subtitle">
          One spec is compiled by an engine adapter into somebody else's graph, then run by a
          kernel that imports no vendor library. The adapter is the single place a vendor appears
          — which is why replacing LangGraph is one package rather than a rewrite.
        </p>

        <div className={styles.diagram}>
          {LAYERS.map((layer) => (
            <LayerBar key={layer.name} layer={layer} />
          ))}
        </div>

        <div className={styles.legend}>
          {ROLE_LABELS.map(({ role, label }) => (
            <div key={role} className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles[role]}`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
