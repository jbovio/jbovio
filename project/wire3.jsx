/* WIREFRAME 3: CINEMATIC TIMELINE
   Horizontal scroll like a VFX edit timeline.
   Shots = sections. Scrub through the career. */

const Wire3Cinematic = () => {
  const tracks = [
    {
      name: 'PROJECTS',
      color: '#ff5b2e',
      clips: [
        { x: 2,  w: 16, label: 'USD Asset Resolver' },
        { x: 22, w: 12, label: 'Render Dispatcher' },
        { x: 38, w: 10, label: 'Rig Autobuilder' },
        { x: 52, w: 14, label: 'ShotGrid Sync Suite' },
        { x: 70, w: 12, label: 'Nuke Gizmo Pack' },
      ],
    },
    {
      name: 'STUDIOS',
      color: '#1a1a1a',
      clips: [
        { x: 0,  w: 18, label: 'Studio A · Junior TD' },
        { x: 20, w: 22, label: 'Studio B · Pipeline TD' },
        { x: 44, w: 20, label: 'Studio C · Senior TD' },
        { x: 66, w: 18, label: 'Studio D · Senior Pipeline TD' },
      ],
    },
    {
      name: 'TECH',
      color: '#4a4a4a',
      clips: [
        { x: 0,  w: 28, label: 'Maya / MEL / PyMEL' },
        { x: 12, w: 30, label: 'Python / PySide' },
        { x: 30, w: 25, label: 'Houdini / VEX' },
        { x: 44, w: 22, label: 'ShotGrid / Flow' },
        { x: 58, w: 26, label: 'USD / Hydra' },
      ],
    },
    {
      name: 'REEL .mp4',
      color: '#7dd3c0',
      clips: [
        { x: 8,  w: 8, label: 'breakdown_01' },
        { x: 24, w: 6, label: 'tool_demo_02' },
        { x: 40, w: 10, label: 'pipeline_walk_03' },
        { x: 58, w: 7, label: 'rig_demo_04' },
        { x: 74, w: 8, label: 'usd_demo_05' },
      ],
    },
  ];

  const years = [2014, 2016, 2018, 2020, 2022, 2024, 2026];
  const playhead = 74;

  return (
    <div className="stage" data-screen-label="03 Cinematic Timeline">
      <div className="stage-header">
        <h1>Option 03 — Cinematic Timeline <span className="tag">SHOWREEL EDIT</span></h1>
        <div className="meta">
          <strong>horizontal scroll = career playback.</strong><br/>
          Tracks stacked like a NLE. Click a clip to open.<br/>
          Hero is a fullscreen reel that pauses as you scrub.<br/>
          <span style={{color: 'var(--accent)'}}>● recommended for: studios from film/VFX</span>
        </div>
      </div>

      {/* HERO: fullscreen reel with chrome */}
      <div style={{ position: 'relative', marginBottom: 24 }}>
        <span className="screen-label">VIEW · /reel</span>
        <div style={{
          height: 360,
          border: '1.6px solid var(--ink)',
          background: '#0a0a0a',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '5px 5px 0 var(--ink)',
        }}>
          {/* grainy stripe bg */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'repeating-linear-gradient(-45deg, transparent 0 14px, rgba(255,255,255,0.02) 14px 15px)',
          }}></div>

          {/* letterbox text */}
          <div style={{ position: 'absolute', top: 18, left: 24, color: '#888', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em' }}>
            REEL_2026.v04 · 01:24 · 2.39:1
          </div>
          <div style={{ position: 'absolute', top: 18, right: 24, color: '#888', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em' }}>
            ◉ REC · PIPELINE TD · JFB
          </div>

          {/* Center title treatment */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 8,
          }}>
            <div style={{ fontFamily: 'Archivo Black, sans-serif', color: '#e8e2d4', fontSize: 72, lineHeight: 1, letterSpacing: '-0.04em', textAlign: 'center' }}>
              JUAN F. BOVIO
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)', fontSize: 13, letterSpacing: '0.4em' }}>
              SENIOR · PIPELINE · TD
            </div>
          </div>

          {/* Play button bottom-left */}
          <div style={{ position: 'absolute', bottom: 18, left: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 32, height: 32, border: '1.5px solid #e8e2d4', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#e8e2d4' }}>▶</span>
            <span style={{ color: '#e8e2d4', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>PLAY REEL</span>
          </div>

          {/* Scroll hint right */}
          <div style={{ position: 'absolute', bottom: 18, right: 24, color: '#888', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>
            scroll ↓ to scrub timeline →
          </div>

          {/* Letterbox bars */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, background: 'black' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'black' }}></div>
        </div>
      </div>

      {/* TIMELINE */}
      <div style={{ position: 'relative' }}>
        <span className="screen-label" style={{ top: -20 }}>VIEW · /timeline (horizontal scroll)</span>

        {/* Ruler */}
        <div style={{ position: 'relative', height: 28, borderBottom: '1.6px solid var(--ink)', marginBottom: 10 }}>
          {years.map((y, i) => (
            <div key={y} style={{
              position: 'absolute',
              left: `${(i / (years.length - 1)) * 100}%`,
              transform: 'translateX(-50%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--ink-soft)' }}>{y}</span>
              <span style={{ width: 1, height: 8, background: 'var(--ink)' }}></span>
            </div>
          ))}
          {/* minor ticks */}
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} style={{
              position: 'absolute', bottom: 0, left: `${(i / 24) * 100}%`,
              width: 1, height: 4, background: 'var(--ink-faint)',
            }}></span>
          ))}
        </div>

        {/* Tracks */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {tracks.map((t, i) => (
            <div key={t.name} style={{ position: 'relative', height: 52, display: 'flex', alignItems: 'stretch' }}>
              {/* Track label */}
              <div style={{
                width: 120, borderRight: '1.6px solid var(--ink)',
                display: 'flex', alignItems: 'center', paddingLeft: 8, gap: 8,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                background: 'var(--paper-alt)',
              }}>
                <span style={{ width: 10, height: 10, background: t.color, border: '1px solid var(--ink)' }}></span>
                {t.name}
              </div>

              {/* Track clips */}
              <div style={{ position: 'relative', flex: 1, background: i % 2 ? 'rgba(0,0,0,0.03)' : 'transparent', borderBottom: '1px dashed var(--ink-faint)' }}>
                {t.clips.map((c, j) => (
                  <div key={j} style={{
                    position: 'absolute',
                    left: `${c.x}%`, width: `${c.w}%`,
                    top: 6, bottom: 6,
                    background: t.color,
                    color: t.color === '#1a1a1a' ? 'var(--paper)' : (t.color === '#ff5b2e' ? 'white' : 'var(--ink)'),
                    border: '1.6px solid var(--ink)',
                    borderRadius: 3,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10,
                    padding: '3px 6px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '1px 1px 0 rgba(0,0,0,0.3)',
                  }}>
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Playhead */}
          <div style={{
            position: 'absolute',
            left: `calc(120px + ${playhead}% * (100% - 120px) / 100%)`,
            top: -30, bottom: 0,
            width: 2, background: 'var(--accent)',
            pointerEvents: 'none',
          }}>
            <div style={{
              position: 'absolute', top: -6, left: -8,
              width: 18, height: 12, background: 'var(--accent)',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}></div>
            <div style={{
              position: 'absolute', top: -26, left: 6,
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)',
              whiteSpace: 'nowrap',
            }}>
              NOW · 2026
            </div>
          </div>
        </div>

        {/* Transport controls */}
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>
          <div style={{ display: 'flex', gap: 4 }}>
            {['⏮','◀','▶','⏭'].map(s => (
              <span key={s} className="chip" style={{ padding: '4px 10px', fontSize: 13 }}>{s}</span>
            ))}
          </div>
          <span style={{ color: 'var(--ink-soft)' }}>00:10:24 / 00:12:00 · 12 YEARS</span>
          <span style={{ flex: 1 }}></span>
          <span className="chip accent">↓ CV.pdf</span>
        </div>
      </div>

      {/* detail card floating below */}
      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        <div className="sketch-box" style={{ padding: 14 }}>
          <div className="monolabel" style={{ color: 'var(--accent)' }}>◉ SELECTED · Nuke Gizmo Pack</div>
          <div className="handlabel" style={{ fontSize: 22, margin: '4px 0 8px' }}>10 gizmos, 3 studios shipping.</div>
          <div className="placeholder play" style={{ height: 120 }} data-label="demo.mp4"></div>
        </div>
        <div>
          <div className="monolabel">WHY IT WORKS</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            Career + projects + reel on one canvas. The <b>scrub</b> metaphor makes 10 years of work feel like one piece of work.
          </p>
        </div>
        <div>
          <div className="monolabel">RISK / KILLER</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            Horizontal scroll needs clear affordances. <b>Killer:</b> playhead drags open clip detail modals mid-flight.
          </p>
        </div>
      </div>
    </div>
  );
};

window.Wire3Cinematic = Wire3Cinematic;
