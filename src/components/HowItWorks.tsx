import styles from './HowItWorks.module.css'

function YamlCode() {
  const k = styles.hlKey
  const v = styles.hlVal
  const s = styles.hlStr
  const c = styles.hlComment
  const p = styles.hlPunct

  return (
    <code>
      <span className={k}>agent_name</span><span className={p}>: </span><span className={v}>my_agent</span>{'\n'}
      <span className={k}>llm_provider_name</span><span className={p}>: </span><span className={v}>openai</span>{'\n'}
      <span className={k}>llm_model</span><span className={p}>: </span><span className={v}>gpt-4o</span>{'\n'}
      <span className={k}>temperature</span><span className={p}>: </span><span className={v}>0.4</span>{'\n'}
      <span className={k}>execution_engine</span><span className={p}>: </span><span className={v}>adk</span>      <span className={c}># swap to langgraph</span>{'\n'}
      <span className={k}>description</span><span className={p}>: </span><span className={s}>A helpful assistant</span>{'\n'}
      <span className={k}>instruction_template</span><span className={p}>: </span><span className={p}>|</span>{'\n'}
      <span className={s}>  You are a helpful assistant.</span>
    </code>
  )
}

function PythonCode() {
  const kw = styles.hlKw
  const fn = styles.hlFn
  const s = styles.hlStr
  const v = styles.hlVal
  const p = styles.hlPunct

  return (
    <code>
      <span className={kw}>from</span> <span className={v}>src.all_agents.base_agent</span> <span className={kw}>import</span> <span className={fn}>BaseAgent</span>{'\n'}
      <span className={kw}>from</span> <span className={v}>src.service.models.base_models</span> <span className={kw}>import</span> <span className={fn}>TextInput</span><span className={p}>, </span><span className={fn}>TextOutput</span>{'\n'}
      <span className={kw}>from</span> <span className={v}>src.agent_framework.utils.path_utils</span> <span className={kw}>import</span> <span className={fn}>resolve_config_path</span>{'\n'}
      {'\n'}
      <span className={kw}>class</span> <span className={fn}>MyAgent</span><span className={p}>(</span><span className={fn}>BaseAgent</span><span className={p}>):</span>{'\n'}
      {'    '}<span className={kw}>def</span> <span className={fn}>__init__</span><span className={p}>(</span><span className={v}>self</span><span className={p}>):</span>{'\n'}
      {'        '}<span className={v}>super</span><span className={p}>().</span><span className={fn}>__init__</span><span className={p}>(</span>{'\n'}
      {'            '}<span className={v}>config_path</span><span className={p}>=</span><span className={fn}>resolve_config_path</span><span className={p}>(</span><span className={v}>relative_to</span><span className={p}>=</span><span className={v}>__file__</span><span className={p}>),</span>{'\n'}
      {'            '}<span className={v}>input_schema</span><span className={p}>=</span><span className={fn}>TextInput</span><span className={p}>,</span>{'\n'}
      {'            '}<span className={v}>output_schema</span><span className={p}>=</span><span className={fn}>TextOutput</span><span className={p}>,</span>{'\n'}
      {'        '}<span className={p}>)</span>
    </code>
  )
}

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>How it works</p>
        <h2 className="section-title">Two files. That's an agent.</h2>
        <p className="section-subtitle">
          YAML for config, Python for logic. Auto-discovery registers agents on
          startup – no wiring, no routing, no registration code.
        </p>

        <div className={styles.codeGrid}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} style={{ background: '#ff5f57' }} />
              <span className={styles.codeDot} style={{ background: '#febc2e' }} />
              <span className={styles.codeDot} style={{ background: '#28c840' }} />
              <span className={styles.fileName}>main_agent.yaml</span>
            </div>
            <pre className={styles.codeBody}>
              <YamlCode />
            </pre>
          </div>

          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} style={{ background: '#ff5f57' }} />
              <span className={styles.codeDot} style={{ background: '#febc2e' }} />
              <span className={styles.codeDot} style={{ background: '#28c840' }} />
              <span className={styles.fileName}>main_agent.py</span>
            </div>
            <pre className={styles.codeBody}>
              <PythonCode />
            </pre>
          </div>
        </div>

        <p className={styles.note}>
          Change <code>execution_engine: adk</code> to <code>langgraph</code> – your Python class stays the same.
        </p>
      </div>
    </section>
  )
}
