/* WIREFRAME 2: TERMINAL / REPL
   Navigation by commands. Very TD. Playful.
   Works like a live shell where each "command" reveals a section. */

const Wire2Terminal = () => {
  const [lineIdx, setLineIdx] = React.useState(3);

  const history = [
    { cmd: 'whoami', out: 'juan.bovio @ senior-pipeline-td\n10+ years · animation + vfx' },
    { cmd: 'cat bio.md', out: 'Bridging creative vision and technical execution.\nShotGrid/Flow · Python tooling · render farm arch.' },
    { cmd: 'ls ./projects', out: 'usd_asset_resolver/   render_dispatcher/\nrig_autobuilder/      shotgrid_sync/\nnuke_gizmos/' },
    { cmd: './show --project usd_asset_resolver', out: '[opening detail view…]' },
  ];

  return (
    <div className="stage" data-screen-label="02 Terminal">
      <div className="stage-header">
        <h1>Option 02 — Terminal / REPL <span className="tag">PLAYFUL · TD</span></h1>
        <div className="meta">
          <strong>the site IS a shell.</strong><br/>
          Type commands to navigate. Tab-complete, man pages, easter eggs.<br/>
          Hero types itself on load.<br/>
          <span style={{color: 'var(--accent)'}}>● recommended for: showing off personality</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'flex-start' }}>

        {/* TERMINAL WINDOW */}
        <div style={{ position: 'relative' }}>
          <span className="screen-label">VIEW · /~</span>
          <div style={{
            background: '#0f0f0f',
            color: '#e8e2d4',
            borderRadius: '4px',
            border: '1.6px solid var(--ink)',
            boxShadow: '6px 6px 0 var(--ink)',
            fontFamily: 'JetBrains Mono, monospace',
            overflow: 'hidden',
          }}>
            {/* Fake titlebar */}
            <div style={{
              background: '#1e1e1e',
              padding: '8px 14px',
              display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid #333',
            }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56' }}></span>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }}></span>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f' }}></span>
              <span style={{ flex: 1, textAlign: 'center', fontSize: 11, color: '#888' }}>— bovio.sh — 100×32 —</span>
              <span style={{ fontSize: 11, color: '#666' }}>zsh</span>
            </div>

            {/* ASCII banner */}
            <div style={{ padding: '20px 24px 8px', fontSize: 11, lineHeight: 1.15, color: 'var(--accent)' }}>
              <pre style={{ margin: 0, fontFamily: 'inherit' }}>{String.raw`   ___   ____  _  __ ____ ____
  / _ ) / __ \| | / // _ // __ \
 / _  |/ /_/ /| |/ // // / /_/ /
/____/ \____/ |___//___/ \____/
  SENIOR · PIPELINE · TD`}</pre>
            </div>
            <div style={{ padding: '0 24px 8px', fontSize: 12, color: '#888' }}>
              <span style={{ color: '#7dd3c0' }}>◆</span> welcome back. type <span style={{ color: 'var(--accent)' }}>help</span> to list commands, or try <span style={{ color: 'var(--accent)' }}>./projects</span>.
            </div>

            {/* history */}
            <div style={{ padding: '8px 24px' }}>
              {history.slice(0, lineIdx + 1).map((h, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 13 }}>
                    <span style={{ color: '#7dd3c0' }}>~/bovio</span>
                    <span style={{ color: '#888' }}> on </span>
                    <span style={{ color: '#c678dd' }}>main</span>
                    <span style={{ color: '#888' }}> ❯ </span>
                    <span style={{ color: '#e8e2d4' }}>{h.cmd}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#b8b0a0', whiteSpace: 'pre-line', marginTop: 2, paddingLeft: 12, borderLeft: '2px solid #333' }}>
                    {h.out}
                  </div>
                </div>
              ))}
              {/* Prompt with caret */}
              <div style={{ fontSize: 13 }}>
                <span style={{ color: '#7dd3c0' }}>~/bovio</span>
                <span style={{ color: '#888' }}> ❯ </span>
                <span style={{
                  display: 'inline-block', width: 9, height: 16, background: 'var(--accent)',
                  verticalAlign: 'middle', animation: 'blink 1s steps(2) infinite',
                }}></span>
              </div>
            </div>

            {/* inline project view (opened by last command) */}
            <div style={{
              margin: '18px 24px 24px',
              border: '1px solid #333',
              background: '#1a1a1a',
              borderRadius: 4,
              padding: 16,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#888', marginBottom: 10 }}>
                <span>╭─ PROJECT VIEW ─────────────────</span>
                <span>[q] close</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="placeholder play" style={{ height: 160, background: '#222', border: '1px dashed #555', color: '#888' }} data-label=".mp4 — 00:34"></div>
                <div style={{ fontSize: 12, lineHeight: 1.6, color: '#d4cdbb' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 700 }}>USD_ASSET_RESOLVER</div>
                  <div style={{ color: '#888', marginBottom: 8 }}>── role: architect + dev</div>
                  <div>Custom ArResolver plugin for USD, routing asset queries through ShotGrid + Perforce.</div>
                  <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {['USD','C++','Python','SG'].map(t => (
                      <span key={t} style={{ border: '1px solid #555', padding: '1px 6px', fontSize: 10 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div style={{ position: 'sticky', top: 80, display: 'flex', flexDirection: 'column', gap: 16 }}>

          <div className="sketch-box" style={{ padding: 14 }}>
            <div className="monolabel">COMMANDS · press TAB</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10, fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
              {[
                ['whoami',      'intro'],
                ['cat bio.md',  'about'],
                ['./projects',  'list x5'],
                ['./reel',      'play demo'],
                ['./timeline',  'experience'],
                ['./stack',     'tech chips'],
                ['./cv',        'download pdf'],
                ['contact',     'get in touch'],
                ['sudo hire',   '(easter egg)'],
              ].map(([c, d]) => (
                <div key={c} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ color: 'var(--accent)' }}>{c}</span>
                  <span style={{ color: 'var(--ink-soft)' }}>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="postit blue">
            non-TDs can just<br/>
            <b>click</b> commands<br/>
            in the sidebar ✓
          </div>

          <div className="sketch-box dashed" style={{ padding: 12 }}>
            <div className="monolabel">KILLER MOMENT</div>
            <p style={{ fontSize: 16, margin: '6px 0 0', lineHeight: 1.25 }}>
              The ASCII banner types itself on load, matrix-style. Then the shell takes your first command.
            </p>
          </div>

          <div className="sketch-box" style={{ padding: 12 }}>
            <div className="monolabel">RISK</div>
            <p style={{ fontSize: 16, margin: '6px 0 0', lineHeight: 1.25 }}>
              Can feel gimmicky if overdone. Recruiters in a hurry may bounce — make clickable fallback first-class.
            </p>
          </div>
        </div>
      </div>

      <style>{`@keyframes blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0.1; } }`}</style>
    </div>
  );
};

window.Wire2Terminal = Wire2Terminal;
