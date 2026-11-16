/* TAB-STYLE PROJECTS — hi-fi v3
   Reuses the same PROJECT data, Preview renderers, and detail layout from the graph version,
   but presents nodes as a horizontal tab bar (like an editor tab strip / Houdini network tabs).
   Each tab acts as the project switcher; the detail panel below shows the active project. */

const PROJECTS = [
  {
    id: 'sgupdate',
    idx: '01',
    type: 'USD ASSEMBLY',
    title: 'USD Assembly · 3D Pipeline Management System',
    tagline: 'Pipeline tool for managing USD files in 3D production.',
    desc: "A modular system developed in Python for managing 3D animation workflows using Pixar's USD standard. The tool provides a complete architecture for creating, reading, modifying, and conforming USD scenes in professional production environments.",
    descBlocks: [
      { type: 'p', text: "A modular system developed in Python for managing 3D animation workflows using Pixar's USD standard. The tool provides a complete architecture for creating, reading, modifying, and conforming USD scenes in professional production environments." },
      { type: 'h', text: 'Key Features' },
      {
        type: 'sub',
        label: 'Modular Architecture',
        text: 'Production-grade core built for scale and forward-compatibility.',
        items: [
          'Centralized schema management system with Singleton pattern',
          'Separate modules for reading, writing, and building USD scenes',
          '100% backward compatibility with existing code',
          'Scalable structure for production pipelines',
        ],
      },
      {
        type: 'sub',
        label: 'DCC Integrations',
        text: 'Native tooling inside the artists\u2019 working environments.',
        items: [
          'Maya 2025 — Full PySide6 interface for asset, variant, and version management',
          'Blender 3.0+ — Add-on with automatic variant set detection and interactive import control',
        ],
      },
      {
        type: 'sub',
        label: 'Pipeline Functionality',
        text: 'End-to-end coverage of the asset lifecycle.',
        items: [
          'Asset versioning system',
          'Variant and representation management (LOD, modeling, rendering)',
          'Automatic scene conforming according to production standards',
          'Material export and USD rig management',
          'Configurable path templates for project organization',
        ],
      },
      {
        type: 'sub',
        label: 'Use Cases',
        text: 'Ideal for animation and VFX studios that need to standardize and automate USD workflows, manage multiple asset versions, and maintain consistency across complex production pipelines.',
      },
    ],
    role: 'Lead dev',
    scale: 'Studio-wide, multi-DCC',
    year: '2024 — ongoing',
    impact: 'Standardizes USD workflows across the pipeline',
    tech: ['Python 3.x', 'USD', 'PySide6 / Qt', 'Maya', 'Blender', 'UE5'],
    preview: 'log',
    flow: 'in: assets  →  out: conformed.usd',
    imageUrl: 'assets/usd_assembly_thumbnail.png',
  },
  {
    id: 'sgctx',
    idx: '02',
    type: 'Fortnite',
    title: 'Assembly tool',
    tabTitle: 'Animation',
    headerLabel: 'Assembly',
    tagline: 'Resolve animation tansfer → shot → version, every time.',
    desc: 'This tool was created to streamline Maya scene setup and enable animation transfer, leveraging task context through Shotgrid and P4.',
    role: 'Architect + dev',
    scale: 'every shot, clip',
    year: '2024 — ongoing',
    impact: 'Cuts down scene setup and animation transfer from 10-15 mins to under 2 mins.',
    tech: ['ShotGrid', 'P4', 'Python', 'Maya'],
    preview: 'log',
    flow: 'in: sg.task_id  →  out: ctx.payload',
    videoUrl: 'https://www.youtube-nocookie.com/embed/8AXh1TsxMCU?rel=0&modestbranding=1&playsinline=1',
  },
  {
    id: 'ue5',
    idx: '03',
    type: 'STEAMROLLER',
    title: 'Hair rig',
    tabTitle: 'Hair rig',
    headerLabel: 'Hair rig',
    typeHeader: 'Maya / nHair',
    tagline: 'Rig - Sim - Bake',
    desc: "This tool streamlines rigging by blending simulation with keyframes. It lets us add a hair system to any rig non-destructively, which is a lifesaver when clients won't allow rig edits. We can deliver high-quality animation by baking the simulation straight to keyframes without ever touching the base file.",
    role: 'Lead dev, Rig architecture',
    scale: 'Quick, reproducible setup.',
    year: '2023 — ongoing',
    impact: 'Improved animation quality.',
    tech: ['Autodesk Maya', 'Rig', 'Python', 'nHair'],
    preview: 'sparkline',
    flow: '',
    videoUrl: 'https://www.youtube-nocookie.com/embed/MkyMm8qrtnk?rel=0&modestbranding=1&playsinline=1',
  },
  {
    id: 'deadline',
    idx: '04',
    type: 'UE5 DEADLINE',
    title: 'Render Pipeline Automation System for Thinkbox Deadline',
    tagline: 'render job, no babysitting.',
    desc: 'Python-based render pipeline automation system designed to manage pre- and post-render processes on distributed compute farms using Thinkbox Deadline. The project handles multiple simultaneous animation productions across two render farm infrastructures (RFX and SRS).',
    descBlocks: [
      { type: 'p', text: 'Python-based render pipeline automation system designed to manage pre- and post-render processes on distributed compute farms using Thinkbox Deadline. The project handles multiple simultaneous animation productions across two render farm infrastructures (RFX and SRS).' },
      { type: 'h', text: 'Key Features' },
      {
        type: 'sub',
        label: 'Pre-Scripts',
        text: 'Automate the creation and identification of correct versions based on render job parameters.',
        items: [
          'Plastic SCM workspace management',
          'Unreal Engine rendering environment configuration',
        ],
      },
      {
        type: 'sub',
        label: 'Post-Scripts',
        text: 'Handle the complete post-processing workflow:',
        items: [
          'Color space conversion using OpenColorIO (OCIO)',
          '.exr sequence processing with OpenImageIO (OIIO)',
          'Conversion to .mxf format using FFmpeg',
          'Automatic thumbnail uploads to ShotGrid',
          'PublishedFile entity creation with complete metadata',
          'Plastic SCM changeset information synchronization',
        ],
      },
    ],
    role: 'Lead dev',
    scale: 'Any type of project, any type of shot.',
    year: '2022 — ongoing',
    impact: 'Eliminates human error during render submission',
    tech: ['Python', 'Deadline', 'LOCAL RENDER FARM', 'CLOUD RENDER FARM'],
    preview: 'heatmap',
    flow: 'in: mrq.job  →  out: render.frames',
    repo: 'https://github.com/jbovio/deadline.git',
    imageUrl: 'assets/deadline_thumbnail.png',
    imageAspect: '1536 / 2752',
  },
];

// ------ inner-preview renderers (mini visuals shown inside the active tab panel) ------
const Preview = ({ kind, node }) => {
  const wrap = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  };
  if (kind === 'sparkline') {
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}>OPEN TIME · MS</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.2em' }}>−40%</span>
        </div>
        <svg viewBox="0 0 200 40" width="100%" height="44" preserveAspectRatio="none">
          <polyline fill="none" stroke="var(--accent)" strokeWidth="1.5"
            points="0,10 20,14 40,12 60,18 80,16 100,22 120,20 140,26 160,28 180,32 200,34"/>
          <polyline fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 2"
            points="0,10 200,34"/>
        </svg>
      </div>
    );
  }
  if (kind === 'heatmap') {
    const cells = Array.from({ length: 48 }).map((_, i) => [0.15, 0.3, 0.5, 0.75, 1.0][i % 5]);
    return (
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}>FARM LOAD · 24H</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--accent-2)', letterSpacing: '0.2em' }}>2.0k jobs</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 2 }}>
          {cells.map((l, i) => (
            <div key={i} style={{
              height: 16,
              background: `rgba(255,106,61,${l})`,
              border: '1px solid rgba(255,255,255,0.04)',
            }}/>
          ))}
        </div>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.2em' }}>EVENT LOG · LIVE</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--accent)', letterSpacing: '0.2em' }}>● 0 drift</span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, lineHeight: 1.6 }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 10 }}>
              <span style={{ color: 'var(--ink-faint)' }}>{r.t}</span>
              <span style={{ color: r.c, width: 44 }}>[{r.s}]</span>
              <span style={{ color: 'var(--ink-soft)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.m}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const Projects = ({ featured }) => {
  const [sel, setSel] = React.useState('sgctx');
  const [unlocked, setUnlocked] = React.useState(false);
  const [pwInput, setPwInput] = React.useState('');
  const [pwError, setPwError] = React.useState(false);
  const projects = PROJECTS;
  const selected = projects.find(p => p.id === sel);
  const selectedIdx = projects.findIndex(p => p.id === sel);

  const go = (delta) => {
    const next = (selectedIdx + delta + projects.length) % projects.length;
    setSel(projects[next].id);
  };

  const tryUnlock = (e) => {
    e && e.preventDefault();
    if (pwInput.trim().toLowerCase() === 'bovio') {
      setUnlocked(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  return (
    <section className="section projects" id="work" data-screen-label="03 Projects">
      <div className="section-head">
        <div className="tag">02 — work</div>
        <h2>what I've<br/><span className="it">been</span> building.</h2>
        <div className="meta">
          <b>click a tab</b><br/>
          to open its inspector<br/><br/>
          <b>← / →</b><br/>
          paginate nodes
        </div>
      </div>

      {!unlocked && (
        <div className="pw-gate">
          <div className="pw-card">
            <div className="pw-head mono">
              <span>● restricted</span>
              <span style={{ color: 'var(--accent)' }}>NDA · auth required</span>
            </div>
            <div className="pw-body">
              <div className="pw-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="10" y="22" width="28" height="20" rx="2"/>
                  <path d="M16 22 v-6 a8 8 0 0 1 16 0 v6"/>
                  <circle cx="24" cy="32" r="2.2" fill="currentColor"/>
                  <line x1="24" y1="34" x2="24" y2="38"/>
                </svg>
              </div>
              <h3 className="pw-title">protected work</h3>
              <p className="pw-sub">
                Studio NDAs cover most of the production work shown here. Enter the access key shared in my outreach to view project details and demo media.
              </p>
              <form className="pw-form" onSubmit={tryUnlock}>
                <label className="pw-label mono" htmlFor="pw-input">access key</label>
                <div className="pw-row">
                  <input
                    id="pw-input"
                    type="password"
                    className={`pw-input mono ${pwError ? 'err' : ''}`}
                    value={pwInput}
                    onChange={(e) => { setPwInput(e.target.value); setPwError(false); }}
                    placeholder="••••••"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button type="submit" className="pw-btn">
                    <span>unlock</span>
                    <span className="arrow">→</span>
                  </button>
                </div>
                <div className={`pw-msg mono ${pwError ? 'err' : ''}`}>
                  {pwError ? '✗ invalid key — try again' : 'request a key via email · jbovio001@gmail.com'}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {unlocked && (
      <React.Fragment>

      {/* TAB STRIP */}
      <div className="tabstrip">
        <div className="tabstrip-rail">
          {projects.map((p) => (
            <button
              key={p.id}
              className={`tab ${sel === p.id ? 'active' : ''}`}
              onClick={() => setSel(p.id)}
            >
              <span className="tab-idx">{p.idx}</span>
              <span className="tab-body">
                <span className="tab-type">{p.type}</span>
                <span className="tab-title">{p.tabTitle || p.title}</span>
              </span>
              <span className="tab-dot" aria-hidden="true"></span>
            </button>
          ))}
        </div>
        <div className="tabstrip-pager">
          <button className="pg" onClick={() => go(-1)} aria-label="previous">←</button>
          <span className="pg-count mono">
            {String(selectedIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <button className="pg" onClick={() => go(1)} aria-label="next">→</button>
        </div>
      </div>

      {/* ACTIVE PANEL */}
      {selected && (
        <div className="tab-panel" id="reel">
          {/* HEADER ROW */}
          <div className="tab-panel-head">
            <div className="tph-left">
              <span className="mono" style={{ color: 'var(--accent)', letterSpacing: '0.25em', fontSize: 11 }}>
                ● {selected.headerLabel || `node ${selected.idx} / 05`}
              </span>
              <span className="mono" style={{ color: 'var(--ink-faint)', letterSpacing: '0.2em', fontSize: 11 }}>
                {selected.typeHeader || selected.type}
              </span>
            </div>
            <div className="tph-right mono">{selected.flow}</div>
          </div>

          {/* BODY GRID */}
          <div className="tab-panel-body">
            {/* MEDIA */}
            <div className={`media${selected.imageUrl && !selected.videoUrl ? ' media-image' : ''}`} style={
              selected.videoUrl ? { aspectRatio: '16 / 9', minHeight: 0 } :
              (selected.imageUrl && !selected.videoUrl) ? { alignSelf: 'stretch', minHeight: 0 } :
              undefined
            }>
              <div className="media-tag">[ {selected.type} ]</div>
              {selected.videoUrl ? (
                /\.(mp4|webm|mov)$/i.test(selected.videoUrl) ? (
                  <video src={selected.videoUrl} controls playsInline
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 3, background: '#000' }}/>
                ) : (
                  <iframe src={selected.videoUrl} allowFullScreen
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', zIndex: 3, background: '#000' }}/>
                )
              ) : selected.imageUrl ? (
                <img src={selected.imageUrl} alt={selected.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 3, background: 'transparent' }}/>
              ) : (
                <>
                  <div className="play-sym"></div>
                  <div className="media-meta">
                    <span>{selected.title.toLowerCase().replace(/\s+/g,'_')}.mp4</span>
                    <span>00:34</span>
                    <span>·</span>
                    <span>placeholder — demo video</span>
                  </div>
                </>
              )}
            </div>

            {/* INFO */}
            <div className="info">
              {selected.imageUrl && selected.videoUrl && (
                <img src={selected.imageUrl} alt={selected.title} className="info-thumb" />
              )}
              <h3>{selected.title}</h3>
              <p className="tagline">{selected.tagline}</p>
              {selected.descBlocks ? (
                <div className="desc-blocks">
                  {selected.descBlocks.map((b, i) => {
                    if (b.type === 'p') return <p key={i}>{b.text}</p>;
                    if (b.type === 'h') return <h4 key={i} className="desc-h">{b.text}</h4>;
                    if (b.type === 'sub') return (
                      <div key={i} className="desc-sub">
                        <p><strong>{b.label}:</strong> {b.text}</p>
                        {b.items && b.items.length > 0 && (
                          <ul className="desc-list">
                            {b.items.map((it, j) => <li key={j}>{it}</li>)}
                          </ul>
                        )}
                      </div>
                    );
                    return null;
                  })}
                </div>
              ) : (
                <p>{selected.desc}</p>
              )}
              {selected.repo && (
                <p className="repo-link">
                  <a href={selected.repo} target="_blank" rel="noopener noreferrer">
                    <span className="repo-glyph" aria-hidden="true">[ git ]</span>
                    <span className="repo-url">{selected.repo.replace(/^https?:\/\//, '')}</span>
                    <span className="repo-arrow" aria-hidden="true">↗</span>
                  </a>
                </p>
              )}
            </div>

            {/* FULL-WIDTH META BAR */}
            <div className="info-meta-bar">
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
        </div>
      )}
      </React.Fragment>
      )}
    </section>
  );
};

window.Projects = Projects;
