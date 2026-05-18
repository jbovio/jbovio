/* WIREFRAME 4: MAGAZINE GRID
   Editorial. Asymmetric grid. Oversized type.
   Treats the portfolio like a printed magazine issue. */

const Wire4Magazine = () => {
  return (
    <div className="stage" data-screen-label="04 Magazine Grid">
      <div className="stage-header">
        <h1>Option 04 — Magazine Grid <span className="tag">EDITORIAL · ASYM</span></h1>
        <div className="meta">
          <strong>portfolio as an issue.</strong><br/>
          Oversized display type, asymmetric columns, marginalia.<br/>
          Proyecto numerado como artículos. Slow scroll, confident.<br/>
          <span style={{color: 'var(--accent)'}}>● recommended for: creative directors / art-side recruiters</span>
        </div>
      </div>

      {/* FAKE "PAGE" */}
      <div style={{
        maxWidth: 1300,
        background: 'var(--paper)',
        border: '1.6px solid var(--ink)',
        borderRadius: 2,
        boxShadow: '6px 6px 0 var(--ink)',
        padding: '40px 48px 60px',
        position: 'relative',
      }}>

        {/* masthead */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          borderBottom: '2.5px solid var(--ink)', paddingBottom: 10, marginBottom: 18,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.15em',
        }}>
          <span>ISSUE Nº 12 · APR 2026</span>
          <span>B O V I O — A MONOGRAPH</span>
          <span>PAGES 01 — 64</span>
        </div>

        {/* HERO BLOCK */}
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 3fr', gap: 28, alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div className="monolabel" style={{ marginBottom: 6 }}>[ cover · story ]</div>
            <div style={{
              fontFamily: 'Archivo Black, sans-serif',
              fontSize: 118, lineHeight: 0.88, letterSpacing: '-0.04em',
              margin: 0,
            }}>
              pipelines,<br/>
              <span style={{ fontStyle: 'italic', fontFamily: 'Caveat, cursive', color: 'var(--accent)', fontSize: 124 }}>not</span>{' '}
              bottlenecks.
            </div>
            <p style={{ fontSize: 18, lineHeight: 1.4, maxWidth: 560, marginTop: 22, fontFamily: 'Kalam, cursive' }}>
              Ten years of sitting next to artists to understand what's slowing them down — then writing the tool that unblocks them. A field guide by <b>Juan F. Bovio</b>, Senior Pipeline TD.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="placeholder" style={{ height: 280 }} data-label="PORTRAIT / HERO"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>
              <span>↑ photo credit: tbd</span>
              <span>fig. 01</span>
            </div>
          </div>
        </div>

        {/* 3 COLUMN META */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
          borderTop: '1.6px solid var(--ink)', borderBottom: '1.6px solid var(--ink)',
          padding: '18px 0', marginBottom: 44,
        }}>
          <div>
            <div className="monolabel">INSIDE · 01</div>
            <div className="handlabel" style={{ fontSize: 22, lineHeight: 1.1, marginTop: 4 }}>Five tools. Five studios running them in production.</div>
          </div>
          <div>
            <div className="monolabel">INSIDE · 02</div>
            <div className="handlabel" style={{ fontSize: 22, lineHeight: 1.1, marginTop: 4 }}>A decade on AAA and broadcast shows, one timeline.</div>
          </div>
          <div>
            <div className="monolabel">INSIDE · 03</div>
            <div className="handlabel" style={{ fontSize: 22, lineHeight: 1.1, marginTop: 4 }}>A reel. Some code. A CV, if you must.</div>
          </div>
        </div>

        {/* FEATURE PROJECT — ASYMMETRIC */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 2fr', gap: 24, marginBottom: 48 }}>
          {/* left caption col */}
          <div style={{ paddingTop: 40 }}>
            <div className="monolabel" style={{ color: 'var(--accent)' }}>FEATURE · PROJECT 01 / 05</div>
            <div style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 44, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: 6 }}>
              USD Asset Resolver
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.45, marginTop: 14, fontFamily: 'Kalam, cursive' }}>
              A C++/Python ArResolver plugin that routes USD queries through ShotGrid and Perforce. 40% faster scene opens. Open-sourced internally.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
              {['USD','C++','Python','ShotGrid','Perforce'].map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>

          {/* big media */}
          <div className="placeholder play" style={{ height: 380 }} data-label="demo.mp4 · 00:34"></div>

          {/* right margin notes */}
          <div style={{ paddingTop: 60, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <div className="monolabel">role</div>
              <div style={{ fontSize: 18, fontFamily: 'Kalam, cursive' }}>architect + dev</div>
            </div>
            <div>
              <div className="monolabel">scale</div>
              <div style={{ fontSize: 18, fontFamily: 'Kalam, cursive' }}>~220 artists, 3 shows</div>
            </div>
            <div>
              <div className="monolabel">year</div>
              <div style={{ fontSize: 18, fontFamily: 'Kalam, cursive' }}>2024 — ongoing</div>
            </div>
            <div className="postit pink" style={{ marginTop: 6 }}>
              "shaved 8 min off every<br/>shot open" — a grateful<br/>layout lead ♡
            </div>
          </div>
        </div>

        {/* PROJECT GRID - the other 4 */}
        <div style={{ borderTop: '1.6px solid var(--ink)', paddingTop: 20, marginBottom: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
            <div className="monolabel">SECTION · THE OTHER FOUR</div>
            <div className="monolabel">pages 14 — 48</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {[
              ['02', 'Render Dispatcher', 'Python · Deadline · PySide'],
              ['03', 'Rig Autobuilder',   'Maya · MEL · PyMEL'],
              ['04', 'ShotGrid Sync',     'Python · Flow API'],
              ['05', 'Nuke Gizmo Pack',   'Nuke · Python · TCL'],
            ].map(([n, t, s]) => (
              <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div className="placeholder" style={{ height: 160 }} data-label={`proj 0${n}`}></div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--ink-soft)' }}>Nº {n}</div>
                <div style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: 22, lineHeight: 1, letterSpacing: '-0.01em' }}>{t}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--ink-soft)' }}>{s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PULL QUOTE */}
        <div style={{
          textAlign: 'center',
          padding: '30px 0',
          borderTop: '2.5px solid var(--ink)', borderBottom: '2.5px solid var(--ink)',
          marginBottom: 40,
        }}>
          <div style={{
            fontFamily: 'Caveat, cursive', fontSize: 54, lineHeight: 1.05,
            maxWidth: 920, margin: '0 auto',
          }}>
            "A pipeline isn't software. It's a <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>trust contract</span> between production and tech."
          </div>
          <div className="monolabel" style={{ marginTop: 10 }}>— JFB, somewhere backstage, 2026</div>
        </div>

        {/* timeline + cv strip */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 28 }}>
          <div>
            <div className="monolabel">CAREER · A DECADE IN ONE LINE</div>
            <div style={{ position: 'relative', height: 70, marginTop: 12, borderTop: '1.6px solid var(--ink)', borderBottom: '1.6px solid var(--ink)' }}>
              {[
                ['2014', 0],
                ['2016', 18],
                ['2019', 40],
                ['2022', 66],
                ['2024', 86],
                ['now', 100],
              ].map(([y, x]) => (
                <div key={y} style={{ position: 'absolute', left: `${x}%`, top: 0, bottom: 0, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                  <span style={{ width: 10, height: 10, background: 'var(--accent)', border: '1.5px solid var(--ink)', borderRadius: '50%' }}></span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>{y}</span>
                </div>
              ))}
              <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 1.6, background: 'var(--ink)' }}></div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
            <div className="chip accent" style={{ alignSelf: 'flex-start', padding: '6px 14px', fontSize: 12 }}>↓ DOWNLOAD CV · PDF</div>
            <div className="chip" style={{ alignSelf: 'flex-start', padding: '6px 14px', fontSize: 12 }}>✉ hire me — write</div>
          </div>
        </div>

        {/* corner page number */}
        <div style={{ position: 'absolute', bottom: 18, right: 28, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--ink-soft)' }}>
          BOVIO · 01
        </div>
      </div>

      {/* pros/cons */}
      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
        <div>
          <div className="monolabel">WHY IT WORKS</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            Signals <b>taste</b> loudly. Perfect for studios that care about art direction as much as technical depth.
          </p>
        </div>
        <div>
          <div className="monolabel">RISK</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            Bigger copywriting lift. Needs real photography/stills to not fall flat on real content.
          </p>
        </div>
        <div>
          <div className="monolabel">KILLER MOMENT</div>
          <p style={{ fontSize: 17, lineHeight: 1.35, marginTop: 4 }}>
            The oversized display headline with the handwritten <i>"not"</i> in accent color. Instantly memorable.
          </p>
        </div>
      </div>
    </div>
  );
};

window.Wire4Magazine = Wire4Magazine;
