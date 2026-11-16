/* TIMELINE + PULLQUOTE + CV + FOOTER */

const Timeline = () => {
  const years = [2010, 2014, 2018, 2022, 2026];
  const pct = (y) => (y - 2010) / (2026 - 2010) * 100;

  const tracks = [
  {
    name: 'STUDIOS',
    kind: 'studio',
    rows: 1,
    clips: [
    { y1: 2010, y2: 2012, row: 0, label: 'ExpertSys · 3D Modeler' },
    { y1: 2012, y2: 2017, row: 0, label: 'Animarte · Technical Director' },
    { y1: 2018, y2: 2021, row: 0, label: 'Huevo Cartoon · TD & CG Supervisor' },
    { y1: 2021, y2: 2026, row: 0, label: 'Steamroller · Senior Pipeline TD' }]

  },
  {
    name: 'PROJECTS',
    kind: 'project',
    rows: 3,
    clips: [
    { y1: 2012, y2: 2017, row: 0, label: 'Heriberto y Demetrio' },
    { y1: 2017, y2: 2019, row: 1, label: 'Un Rescate de Huevitos' },
    { y1: 2019, y2: 2021, row: 0, label: 'Un Gallo Congelado' },
    { y1: 2021, y2: 2023, row: 1, label: 'Spice Frontier' },
    { y1: 2022, y2: 2024, row: 0, label: 'Batman · Horizon Zero' },
    { y1: 2022, y2: 2024, row: 2, label: 'Fortnite' },
    { y1: 2024, y2: 2026, row: 1, label: 'Mortal Kombat · Overwatch · +more' },
    { y1: 2024, y2: 2026, row: 2, label: 'Fortnite Lego' }]

  },
  {
    name: 'ROLE',
    kind: 'tech',
    rows: 3,
    clips: [
    { y1: 2010, y2: 2012, row: 0, label: '3D Modeling' },
    { y1: 2012, y2: 2021, row: 0, label: 'Pipeline TD' },
    { y1: 2021, y2: 2026, row: 0, label: 'Senior Pipeline TD' },
    { y1: 2012, y2: 2021, row: 1, label: 'Rig Supervisor' },
    { y1: 2017, y2: 2021, row: 2, label: 'CG Supervisor' }]

  }];


  return (
    <section className="section" id="experience" data-screen-label="04 Timeline">
      <div className="section-head">
        <div className="tag">03 — the road so far</div>
        <h2>from modeler<br /><span className="it">to</span> lead.</h2>
        <div className="meta">
          <b>tracks</b><br />
          studios · projects · role<br /><br />
          <b>playhead</b><br />
          currently at 2026<br /><br />
          <b>total</b><br />
          16 years
        </div>
      </div>

      <div className="timeline-wrap">
        <div className="ruler">
          {years.map((y) =>
          <div key={y} className="year" style={{ left: `${pct(y)}%` }}>
              <span>{y}</span>
              <span className="tick"></span>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          {tracks.map((t, i) => {
            const rows = t.rows || 1;
            const rowH = 32;
            const rowGap = 4;
            const padY = 6;
            const trackH = padY * 2 + rows * rowH + (rows - 1) * rowGap;
            return (
              <div key={t.name} className="track" style={{ height: trackH }}>
                <div className="lbl">
                  <span className="sq" style={{
                    background: t.kind === 'studio' ? 'var(--accent)' :
                    t.kind === 'tech' ? 'var(--accent-2)' :
                    '#4a4a52'
                  }}></span>
                  {t.name}
                </div>
                <div className="lane">
                  {t.clips.map((c, j) => {
                    const row = c.row || 0;
                    return (
                      <div key={j}
                      className={`clip ${t.kind}`}
                      style={{
                        left: `${pct(c.y1)}%`,
                        width: `${pct(c.y2) - pct(c.y1)}%`,
                        top: padY + row * (rowH + rowGap),
                        height: rowH,
                        bottom: 'auto'
                      }}>
                        {c.label}
                      </div>);

                  })}
                </div>
              </div>);

          })}

          {/* Playhead — at 2026 position within the lane area */}
          <div className="playhead" style={{
            left: `calc(140px + ${pct(2026)}% * (100% - 140px) / 100%)`,
            top: -34
          }}>
            <div className="diamond"></div>
            <div className="now">NOW · 2026</div>
          </div>
        </div>

        <div className="transport">
          <div className="btns">
            <span className="btn">⏮</span>
            <span className="btn">◀</span>
            <span className="btn">▶</span>
            <span className="btn">⏭</span>
          </div>
          <span className="tc-disp">00:16:00 / 00:16:00</span>
          <span>· 16 YEARS IN PRODUCTION</span>
          <span style={{ flex: 1 }}></span>
          <span>fps 24 · quality: hero</span>
        </div>
      </div>
    </section>);

};

const PullQuote = () =>
<section className="pullquote" data-screen-label="05 Quote">
    <blockquote>
      A pipeline isn't software. It's a <span className="accent">trust contract</span> between people — and leading it means keeping that promise.
    </blockquote>
    <cite>— Juan · probably over coffee</cite>
  </section>;


const CV = () =>
<section className="section cv" id="contact" data-screen-label="06 CV">
    <div className="section-head" style={{ marginBottom: 40 }}>
      <div className="tag">04 — say hi</div>
      <h2>let's talk.<br /><span className="it"></span></h2>
      <div className="meta">
        <b>looking for</b><br />
        Pipeline Lead · Sr. Pipeline TD<br />
        remote · hybrid · MX<br /><br />
        <b>response time</b><br />
        under 24h
      </div>
    </div>

    <div className="cv-grid">
      <div>
        <p style={{ fontFamily: 'Fraunces, serif', fontSize: 28, lineHeight: 1.35, fontWeight: 300, color: 'var(--ink-soft)', maxWidth: 620 }}>
          If you're building a team for animation or game cinematics and need someone who can <span style={{ color: 'var(--accent)' }}>lead the pipeline</span> and still sit down with an artist to fix their scene — write me. No formal pitch needed, just tell me about your show.
        </p>
      </div>

      <div className="cv-actions">
        <a className="cv-btn primary" href="jBovio_pipeline_TD.pdf" download="jBovio_pipeline_TD.pdf" target="_blank" rel="noopener">
          <span>↓ download CV · pdf</span>
          <span className="arrow">→</span>
        </a>
        <a className="cv-btn" href="mailto:jbovio001@gmail.com" onClick={(e) => { try { navigator.clipboard.writeText('jbovio001@gmail.com'); } catch(err) {} }}>
          <span>✉ JBOVIO001@GMAIL.COM</span>
          <span className="arrow">→</span>
        </a>
        <a className="cv-btn" href="https://www.linkedin.com/in/jbovio/" target="_blank" rel="noopener noreferrer">
          <span>linkedin · /in/jbovio</span>
          <span className="arrow">→</span>
        </a>
        <a className="cv-btn" href="https://github.com/jbovio" target="_blank" rel="noopener noreferrer">
          <span>github · /bovio</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </div>
  </section>;


const Footer = () =>
<footer className="footer" data-screen-label="07 Footer">
    <div className="footer-top">
      <div className="footer-big">
        B<span className="dim">O</span>VIO<span className="dim">.</span>
      </div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: 'var(--ink-soft)', textTransform: 'uppercase', textAlign: 'right' }}>
        senior · pipeline · td<br />
        happy to chat anytime<br />
        <span style={{ color: 'var(--accent)' }}>● open to work</span>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 · juan f. bovio</span>
      <span>made in HTML · no frameworks harmed</span>
      <a href="#top">↑ back to top</a>
    </div>
  </footer>;


window.Timeline = Timeline;
window.PullQuote = PullQuote;
window.CV = CV;
window.Footer = Footer;