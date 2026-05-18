/* WIREFRAME 1: NODE GRAPH PORTFOLIO
   The whole site IS a Houdini-style node graph.
   Each section is a node connected by wires. */

const Wire1NodeGraph = () => {
  const [selectedNode, setSelectedNode] = React.useState('projects');

  // Positions on the graph canvas (percentages feel too loose, using absolute px on a 1440 canvas)
  const nodes = [
    { id: 'hero',       x: 80,   y: 80,  w: 340, h: 150, title: 'HERO / identity', type: 'INPUT', desc: 'Juan F. Bovio\nSenior Pipeline TD' },
    { id: 'about',      x: 80,   y: 290, w: 340, h: 170, title: 'ABOUT', type: 'TEXT', desc: '10+ years bridging\ncreative & technical.' },
    { id: 'stack',      x: 80,   y: 520, w: 340, h: 200, title: 'STACK / ENV', type: 'MULTI', desc: 'DCCs · Langs · Infra' },
    { id: 'projects',   x: 520,  y: 130, w: 420, h: 340, title: 'PROJECTS x5', type: 'MERGE', desc: 'Tools · Pipelines · Reels', highlighted: true },
    { id: 'reel',       x: 520,  y: 540, w: 420, h: 200, title: 'REEL / DEMOS', type: 'MEDIA', desc: '.mp4 carousel' },
    { id: 'timeline',   x: 1000, y: 130, w: 320, h: 280, title: 'EXPERIENCE', type: 'TIMELINE', desc: 'Studios · Shows' },
    { id: 'cv',         x: 1000, y: 470, w: 320, h: 120, title: 'CV / DOWNLOAD', type: 'OUTPUT', desc: 'bovio_cv.pdf →' },
    { id: 'contact',    x: 1000, y: 640, w: 320, h: 100, title: 'CONTACT', type: 'OUTPUT', desc: 'hire me →' },
  ];

  // Connections between nodes (ids)
  const wires = [
    ['hero', 'about'],
    ['about', 'stack'],
    ['hero', 'projects'],
    ['stack', 'projects'],
    ['projects', 'reel'],
    ['projects', 'timeline'],
    ['timeline', 'cv'],
    ['reel', 'cv'],
    ['cv', 'contact'],
  ];

  const getNode = (id) => nodes.find(n => n.id === id);
  const wirePath = (a, b) => {
    const x1 = a.x + a.w, y1 = a.y + a.h / 2;
    const x2 = b.x,       y2 = b.y + b.h / 2;
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  };

  return (
    <div className="stage" data-screen-label="01 Node Graph">
      <div className="stage-header">
        <h1>Option 01 — Node Graph <span className="tag">HOUDINI VIBE</span></h1>
        <div className="meta">
          <strong>the site IS a node graph.</strong><br/>
          Artists feel at home. Each section = a node.<br/>
          Zoom/pan canvas. Click a node → detail panel.<br/>
          <span style={{color: 'var(--accent)'}}>● recommended for: technical recruiters</span>
        </div>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1400,
        height: 820,
        background: 'var(--paper)',
        border: '1.6px solid var(--ink)',
        borderRadius: '4px',
        backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.15) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        overflow: 'hidden',
      }}>
        <span className="screen-label">VIEW · /graph</span>

        {/* Top-right HUD */}
        <div style={{ position: 'absolute', top: 12, right: 16, display: 'flex', gap: 8, flexDirection: 'column', alignItems: 'flex-end' }}>
          <div className="monolabel">[ scroll = zoom · drag = pan ]</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span className="chip">⌘ FIT</span>
            <span className="chip filled">PLAY ▶</span>
          </div>
        </div>

        {/* SVG wires layer */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 1400 820" preserveAspectRatio="none">
          {wires.map(([aId, bId], i) => {
            const a = getNode(aId), b = getNode(bId);
            const isHot = aId === selectedNode || bId === selectedNode;
            return (
              <g key={i}>
                <path d={wirePath(a, b)} className={`wire ${isHot ? 'accent' : ''}`} />
                <circle cx={a.x + a.w} cy={a.y + a.h / 2} r="4" fill="var(--ink)" />
                <circle cx={b.x} cy={b.y + b.h / 2} r="4" fill="var(--ink)" />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map(n => (
          <div
            key={n.id}
            onClick={() => setSelectedNode(n.id)}
            style={{
              position: 'absolute',
              left: n.x, top: n.y, width: n.w, height: n.h,
              cursor: 'pointer',
              background: selectedNode === n.id ? 'var(--accent-soft)' : 'var(--paper)',
              border: '1.6px solid var(--ink)',
              borderRadius: '6px',
              boxShadow: selectedNode === n.id ? '4px 4px 0 var(--ink)' : '2px 2px 0 rgba(26,26,26,0.3)',
              padding: '10px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              transition: 'all 0.15s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="monolabel" style={{ color: selectedNode === n.id ? 'var(--accent)' : 'var(--ink-soft)' }}>{n.type}</span>
              <span className="monolabel">#{n.id}</span>
            </div>
            <div className="handlabel" style={{ fontSize: 20, lineHeight: 1 }}>{n.title}</div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--ink-soft)', whiteSpace: 'pre-line', marginTop: 4 }}>
              {n.desc}
            </div>

            {/* Inner preview sketches for some nodes */}
            {n.id === 'projects' && (
              <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="placeholder" style={{ height: 60 }} data-label={`p${i}`}></div>
                ))}
              </div>
            )}
            {n.id === 'stack' && (
              <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {['Maya','Houdini','Nuke','USD','Python','PySide','VEX','ShotGrid','Deadline'].map(t => (
                  <span key={t} className="chip" style={{ fontSize: 9, padding: '2px 6px' }}>{t}</span>
                ))}
              </div>
            )}
            {n.id === 'reel' && (
              <div className="placeholder play" style={{ marginTop: 'auto', height: 100 }} data-label="reel.mp4"></div>
            )}
            {n.id === 'timeline' && (
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['2024 · STUDIO X','2020 · STUDIO Y','2016 · STUDIO Z','2014 · start →'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 8, height: 8, background: 'var(--ink)', borderRadius: '50%' }}></span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>{t}</span>
                  </div>
                ))}
              </div>
            )}
            {n.id === 'cv' && (
              <div style={{ marginTop: 'auto' }}>
                <div className="chip accent" style={{ fontSize: 11 }}>↓ bovio_cv.pdf</div>
              </div>
            )}
          </div>
        ))}

        {/* Annotations */}
        <div className="annotation" style={{ top: 250, left: 440 }}>
          <span>click node →<br/>inspector opens</span>
          <span className="arrow">↗</span>
        </div>
        <div className="annotation right" style={{ top: 490, left: 350, maxWidth: 140 }}>
          <span className="arrow">↘</span>
          <span>hero autoplays<br/>node-cook anim</span>
        </div>

        {/* Floating postit */}
        <div className="postit" style={{ position: 'absolute', bottom: 18, left: 18, transform: 'rotate(-3deg)' }}>
          the cursor is a<br/>node-crosshair ✧
        </div>
      </div>

      {/* Under-canvas notes */}
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
        <div>
          <div className="monolabel">WHY IT WORKS</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            Speaks the language of your audience instantly. Recruiters from Houdini-heavy studios will recognize the metaphor in &lt;1s.
          </p>
        </div>
        <div>
          <div className="monolabel">RISK</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            Too "niche" for non-technical viewers. Mobile requires collapsing to linear scroll.
          </p>
        </div>
        <div>
          <div className="monolabel">KILLER MOMENT</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            On load, wires animate cooking L→R like a fresh Houdini graph. Small but chef's kiss.
          </p>
        </div>
      </div>
    </div>
  );
};

window.Wire1NodeGraph = Wire1NodeGraph;
