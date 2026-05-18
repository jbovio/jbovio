/* NODE GRAPH PROJECTS — hi-fi v2
   Richer nodes with inner preview sketches, like the original wireframe set.
   Each node has: header (type + id) · title · tagline · inner preview (mini thumb / chips / sparkline) · ports. */

const PROJECTS = [
  {
    id: 'sgctx',
    idx: '01',
    type: 'SHOTGRID / FLOW',
    title: 'ShotGrid Task Context',
    tagline: 'Resolve task → shot → version, every time.',
    desc: 'Entry point of the pipeline: pulls the active ShotGrid task and resolves its full context — project, shot, version, asset deps, and downstream publish targets — handing a clean payload to the renderer downstream.',
    role: 'Architect + dev',
    scale: 'every shot, every show',
    year: '2024 — ongoing',
    impact: 'single source of truth',
    tech: ['ShotGrid', 'Flow API', 'Python', 'PostgreSQL'],
    preview: 'log',
    pos: { x: 20, y: 200, w: 260, h: 200 },
    ports: ['out'],
  },
  {
    id: 'ue5',
    idx: '02',
    type: 'UE5 / SEQUENCER',
    title: 'UE5 Sequencer / MRQ',
    tagline: 'Movie Render Queue, on rails.',
    desc: 'Receives the resolved task context and configures Sequencer + Movie Render Queue automatically — output paths, antialias presets, console variables, render passes — ready to ship to the farm without manual setup.',
    role: 'Lead dev',
    scale: '2k+ shots / show',
    year: '2023 — ongoing',
    impact: 'zero manual setup',
    tech: ['Unreal 5', 'MRQ', 'Python', 'Blueprints'],
    preview: 'sparkline',
    pos: { x: 320, y: 200, w: 260, h: 200 },
    ports: ['in', 'out'],
  },
  {
    id: 'deadline',
    idx: '03',
    type: 'PYTHON / DEADLINE',
    title: 'Deadline · Pre / Render / Post',
    tagline: 'Three-stage job, no babysitting.',
    desc: 'Custom Deadline plugin that wraps the MRQ submission with a Pre-Script (validate context, lock assets, stage cache), the Render itself, and a Post-Script (publish outputs, update SG, dispatch downstream). Idempotent and resumable.',
    role: 'Lead dev',
    scale: '5k+ jobs / day',
    year: '2022 — ongoing',
    impact: '−62% failed jobs',
    tech: ['Python', 'Deadline', 'PySide', 'Redis'],
    preview: 'heatmap',
    pos: { x: 620, y: 190, w: 280, h: 220 },
    ports: ['in', 'out'],
  },
  {
    id: 'sgupdate',
    idx: '04',
    type: 'SHOTGRID / VERSION',
    title: 'SG Task · Version Update',
    tagline: 'Version published. Status flipped.',
    desc: 'Post-render hook that creates a new ShotGrid Version on the originating task — uploads the movie, registers frame range, attaches review notes template, and flips status to "pending review". Audit-logged end-to-end.',
    role: 'Dev',
    scale: 'per-shot, per-iteration',
    year: '2023 — ongoing',
    impact: 'zero data drift',
    tech: ['ShotGrid', 'Python', 'Flow API'],
    preview: 'log',
    pos: { x: 950, y: 100, w: 260, h: 200 },
    ports: ['in'],
  },
  {
    id: 'farm',
    idx: '05',
    type: 'FARM / CLOUD',
    title: 'Render Farm · Cloud Solution',
    tagline: 'Burst on-prem, spill to the cloud.',
    desc: 'Dispatches the actual render workload — local farm first, then bursts to a cloud render solution (AWS / Azure) when the queue saturates. Cost/ETA heat-map per show, priority routing, and license-aware scheduling.',
    role: 'Architect',
    scale: '500+ nodes peak',
    year: '2024 — ongoing',
    impact: '40% faster turnaround',
    tech: ['Deadline', 'AWS', 'Docker', 'Python'],
    preview: 'heatmap',
    pos: { x: 950, y: 360, w: 260, h: 200 },
    ports: ['in'],
  },
];

const WIRES = [
  ['sgctx',    'ue5'],
  ['ue5',      'deadline'],
  ['deadline', 'sgupdate'],
  ['deadline', 'farm'],
];

// ------ inner-preview renderers ------
const Preview = ({ kind, node }) => {
  const wrap = {
    marginTop: 'auto',
    paddingTop: 10,
    borderTop: '1px solid var(--line)',
  };
  if (kind === 'sparkline') {
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="mono" style={{ fontSize: 9, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>OPEN TIME · MS</span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', letterSpacing: '0.15em' }}>−40%</span>
        </div>
        <svg viewBox="0 0 200 40" width="100%" height="32" preserveAspectRatio="none">
          <polyline fill="none" stroke="var(--accent)" strokeWidth="1.5"
            points="0,10 20,14 40,12 60,18 80,16 100,22 120,20 140,26 160,28 180,32 200,34"/>
          <polyline fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 2"
            points="0,10 200,34"/>
        </svg>
      </div>
    );
  }
  if (kind === 'heatmap') {
    const cells = Array.from({ length: 48 }).map((_, i) => {
      const level = [0.15, 0.3, 0.5, 0.75, 1.0][i % 5];
      return level;
    });
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="mono" style={{ fontSize: 9, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>FARM LOAD · 24H</span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--accent-2)', letterSpacing: '0.15em' }}>2.0k jobs</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 2 }}>
          {cells.map((l, i) => (
            <div key={i} style={{
              height: 14,
              background: `rgba(255,106,61,${l})`,
              border: '1px solid rgba(255,255,255,0.04)',
            }}/>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'bones') {
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="mono" style={{ fontSize: 9, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>GUIDE → RIG</span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', letterSpacing: '0.15em' }}>4H → 12M</span>
        </div>
        <svg viewBox="0 0 240 44" width="100%" height="36" preserveAspectRatio="none">
          {/* spine + limbs */}
          <g stroke="var(--accent)" strokeWidth="1.4" fill="none">
            <line x1="30" y1="6" x2="30" y2="38"/>
            <line x1="30" y1="14" x2="14" y2="22"/>
            <line x1="30" y1="14" x2="46" y2="22"/>
            <line x1="30" y1="32" x2="18" y2="42"/>
            <line x1="30" y1="32" x2="42" y2="42"/>
          </g>
          {/* arrow */}
          <g stroke="var(--ink-faint)" fill="var(--ink-faint)">
            <line x1="70" y1="22" x2="100" y2="22" strokeWidth="1"/>
            <polygon points="100,22 94,19 94,25"/>
          </g>
          {/* joints as dots */}
          <g fill="var(--accent)">
            {[[30,6],[30,14],[30,22],[30,32],[30,38],[14,22],[46,22],[18,42],[42,42]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="2"/>
            ))}
          </g>
          {/* built rig: more joints */}
          <g stroke="var(--accent-2)" strokeWidth="1.4" fill="none">
            <line x1="150" y1="6" x2="150" y2="38"/>
            <line x1="150" y1="12" x2="132" y2="20"/>
            <line x1="132" y1="20" x2="128" y2="30"/>
            <line x1="150" y1="12" x2="168" y2="20"/>
            <line x1="168" y1="20" x2="172" y2="30"/>
            <line x1="150" y1="30" x2="138" y2="42"/>
            <line x1="150" y1="30" x2="162" y2="42"/>
          </g>
          <g fill="var(--accent-2)">
            {[[150,6],[150,12],[150,22],[150,30],[150,38],[132,20],[128,30],[168,20],[172,30],[138,42],[162,42]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="2"/>
            ))}
          </g>
          {/* controls around rig */}
          <g stroke="var(--accent-2)" strokeWidth="0.8" fill="none" opacity="0.6">
            <circle cx="150" cy="6" r="5"/>
            <rect x="125" y="16" width="6" height="6" transform="rotate(45 128 19)"/>
            <rect x="169" y="16" width="6" height="6" transform="rotate(45 172 19)"/>
          </g>
        </svg>
      </div>
    );
  }
  if (kind === 'log') {
    const rows = [
      { t: '14:02', s: 'sync', m: 'shot_010 · note', c: 'var(--accent-2)' },
      { t: '14:02', s: 'sync', m: 'task → approved', c: 'var(--accent-2)' },
      { t: '14:03', s: 'sync', m: 'user @lead assigned', c: 'var(--ink-soft)' },
      { t: '14:04', s: 'ok',   m: 'audit flush', c: 'var(--accent)' },
    ];
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="mono" style={{ fontSize: 9, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>EVENT LOG · LIVE</span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', letterSpacing: '0.15em' }}>● 0 drift</span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5, lineHeight: 1.5 }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 6 }}>
              <span style={{ color: 'var(--ink-faint)' }}>{r.t}</span>
              <span style={{ color: r.c, width: 34 }}>[{r.s}]</span>
              <span style={{ color: 'var(--ink-soft)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.m}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'thumbs') {
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="mono" style={{ fontSize: 9, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>REEL · 5 CLIPS</span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--accent)', letterSpacing: '0.15em' }}>01:24</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 3 }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{
              height: 28,
              background: `linear-gradient(${45+i*20}deg, rgba(255,106,61,${0.15+i*0.08}), #1a1a20)`,
              border: '1px solid var(--line)',
              position: 'relative',
            }}>
              <span className="mono" style={{ position: 'absolute', top: 2, left: 3, fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>0{i}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (kind === 'video') {
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span className="mono" style={{ fontSize: 9, color: 'var(--accent-2)', letterSpacing: '0.15em' }}>✎ VIDEO SLOT</span>
          <span className="mono" style={{ fontSize: 9, color: 'var(--ink-faint)', letterSpacing: '0.15em' }}>{node.videoUrl ? '● ready' : 'empty'}</span>
        </div>
        <div style={{
          height: 52,
          background: '#000',
          border: `1px dashed ${node.videoUrl ? 'var(--accent-2)' : 'var(--line)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent 0 8px, rgba(125,211,192,0.04) 8px 9px)',
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            border: `1px solid ${node.videoUrl ? 'var(--accent-2)' : 'var(--ink-faint)'}`,
            display: 'grid', placeItems: 'center',
          }}>
            <span style={{
              width: 0, height: 0,
              borderLeft: `7px solid ${node.videoUrl ? 'var(--accent-2)' : 'var(--ink-faint)'}`,
              borderTop: '5px solid transparent',
              borderBottom: '5px solid transparent',
              marginLeft: 2,
            }}/>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const Projects = ({ featured }) => {
  const [sel, setSel] = React.useState('sgctx');
  const projects = React.useMemo(() => PROJECTS, [featured]);
  const selected = projects.find(p => p.id === sel);

  const getNode = (id) => projects.find(p => p.id === id);
  const wirePath = (a, b) => {
    const x1 = a.pos.x + a.pos.w, y1 = a.pos.y + a.pos.h / 2;
    const x2 = b.pos.x,           y2 = b.pos.y + b.pos.h / 2;
    const mx = (x1 + x2) / 2;
    return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  };

  return (
    <section className="section projects" id="work" data-screen-label="03 Projects">
      <div className="section-head">
        <div className="tag">§ 02 — work</div>
        <h2>five nodes.<br/><span className="it">one</span> render flow.</h2>
        <div className="meta">
          <b>click a node</b><br/>
          to open its inspector<br/><br/>
          <b>wires</b><br/>
          = data flow between systems<br/><br/>
          <b>flow</b><br/>
          SG → UE5 → Deadline → split
        </div>
      </div>

      <div className="graph-canvas" style={{ height: 600, width: 1240, maxWidth: '100%', margin: '0 auto', position: 'relative' }}>
        <div className="graph-hud">
          <div className="lbl">
            <span>/graph · production_tools.hip</span>
            <span style={{color:'var(--accent)'}}>● cooked</span>
          </div>
          <div className="lbl">
            <span>scroll = zoom</span>
            <span>drag = pan</span>
            <span>space = fit</span>
          </div>
        </div>

        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 1240 600" preserveAspectRatio="xMidYMid meet">
          {WIRES.map(([aId, bId], i) => {
            const a = getNode(aId), b = getNode(bId);
            const hot = aId === sel || bId === sel;
            return (
              <g key={i}>
                <path d={wirePath(a, b)} fill="none" stroke={hot ? '#ff6a3d' : '#2a2a32'} strokeWidth={hot ? 2 : 1.2} />
                <circle cx={a.pos.x + a.pos.w} cy={a.pos.y + a.pos.h / 2} r="3" fill={hot ? '#ff6a3d' : '#4a4a52'} />
                <circle cx={b.pos.x} cy={b.pos.y + b.pos.h / 2} r="3" fill={hot ? '#ff6a3d' : '#4a4a52'} />
              </g>
            );
          })}
        </svg>

        {projects.map(p => (
          <div
            key={p.id}
            className={`node ${sel === p.id ? 'active' : ''}`}
            style={{
              left: p.pos.x, top: p.pos.y, width: p.pos.w, minHeight: p.pos.h,
              display: 'flex', flexDirection: 'column',
              ...(p.editable ? { borderStyle: 'dashed', borderColor: sel === p.id ? 'var(--accent)' : 'var(--accent-2)' } : {})
            }}
            onClick={() => setSel(p.id)}
          >
            <div className="node-head">
              <span className="type" style={p.editable ? { color: 'var(--accent-2)' } : {}}>{p.type}</span>
              <span>#{p.idx}</span>
            </div>
            <div className="node-title">{p.title}</div>
            <div className="node-desc" style={{ marginBottom: 4 }}>{p.tagline}</div>
            <Preview kind={p.preview} node={p} />

            {p.ports.includes('in')  && <span className="port in"></span>}
            {p.ports.includes('out') && <span className="port out"></span>}
          </div>
        ))}
      </div>

      {selected && (
        <div className="node-detail" id="reel">
          <div className="media">
            <div className="media-tag">[ {selected.type} ]</div>
            {selected.videoUrl ? (
              /\.(mp4|webm|mov)$/i.test(selected.videoUrl) ? (
                <video src={selected.videoUrl} controls playsInline
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 3, background: '#000' }}/>
              ) : (
                <iframe src={selected.videoUrl} allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', zIndex: 3, background: '#000' }}/>
              )
            ) : (
              <>
                <div className="play-sym"></div>
                <div className="media-meta">
                  <span>{selected.title.toLowerCase().replace(/\s+/g,'_')}.mp4</span>
                  <span>00:34</span>
                  <span>·</span>
                  <span>{selected.editable ? 'pega una URL en Tweaks →' : 'placeholder — demo video'}</span>
                </div>
              </>
            )}
          </div>
          <div className="info">
            <div className="proj-idx">
              {`node ${selected.idx} / 05`}
            </div>
            <h3>{selected.title}</h3>
            <p>{selected.desc}</p>
            <div className="kv-grid">
              <div><div className="k">role</div><div className="v">{selected.role}</div></div>
              <div><div className="k">scale</div><div className="v">{selected.scale}</div></div>
              <div><div className="k">year</div><div className="v">{selected.year}</div></div>
              <div><div className="k">impact</div><div className="v" style={{color:'var(--accent)'}}>{selected.impact}</div></div>
            </div>
            <div className="tech-chips">
              {selected.tech.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

window.Projects = Projects;
