/* HERO + ABOUT sections */

const Hero = () => {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-reel"></div>

      <div className="letterbox-t"></div>

      <div className="slate">
        <div className="row"><span className="rec">◉ REC</span><span>REEL_2026.v04</span></div>
        <div className="row"><span>CAM_A</span><span>ROLL 01</span><span>TAKE 12</span></div>
        <div className="row"><span>2.39 : 1</span><span>24 fps</span></div>
      </div>

      <div className="tc">
        <div>JFB / PIPELINE TD</div>
        <div>00:00:03:14</div>
        <div>SCENE — PORTFOLIO</div>
      </div>

      <div className="hero-content">
        <div className="eyebrow">
          <span className="rule"></span>
          <span>Pipeline Lead · Senior TD · 16 yrs</span>
        </div>
        <h1>
          J.F.<br />
          Bovio<span className="it">.</span>
        </h1>
        <p className="sub">
          Hi, I'm Juan. For 16 years I've been the person standing between the artists and the tech — building pipelines, leading TD and CG teams, and making sure nobody loses a Friday night to a broken render. I love Python, USD and a well-tuned render farm, but what I care about most is a team that ships calm.
        </p>
      </div>

      <div className="hero-footer">
        <a className="play" href="https://www.youtube.com/playlist?list=PLd1C1jo9OdEAxlaxi1ABQNjy-Wzx4C1Va" target="_blank" rel="noopener noreferrer">
          <span className="circle"></span>
          <span>play reel · </span>
        </a>
        <div className="chips">
          <span className="chip accent">◉ open to work</span>
          <span className="chip">Maya</span>
          <span className="chip">Houdini</span>
          <span className="chip">Nuke</span>
          <span className="chip">USD</span>
          <span className="chip">Python</span>
          <span className="chip">ShotGrid</span>
        </div>
      </div>

      <div className="letterbox-b"></div>

      <div className="scroll-cue">
        <span>scroll</span>
        <span className="line"></span>
      </div>
    </section>);

};

const About = () => {
  return (
    <section className="section about" id="about" data-screen-label="02 About">
      <div className="section-head">
        <div className="tag">01 — about me</div>
        <h2>good tools,<br /><span className="it">better</span> teams.</h2>
        <div className="meta">
          <b>based in</b><br />
          Monterrey, MX<br /><br />
          <b>availability</b><br />
          open · remote / hybrid<br /><br />
          <b>languages</b><br />
          Español · English
        </div>
      </div>

      <div className="about-grid">
        <div className="lead">
          I started as a modeler, became the TD people called when something broke, and ended up supervising rigging and CG for whole shows. Along the way I learned the real job: <span className="underline">listen first</span>, then build. Today I lead pipeline work on AAA game cinematics — setting direction, helping other TDs grow, and still writing the Python myself when it matters. I'd rather <span className="accent">earn trust</span> than enforce process.
        </div>

        <div className="about-side">
          <div className="kv">
            <span className="k">how I lead</span>
            <span className="v">Listen first · decide in the open · protect the artists' time</span>
          </div>
          <div className="kv">
            <span className="k">focus</span>
            <span className="v">ShotGrid/Flow · Python · USD · Render farm architecture</span>
          </div>
          <div className="kv">
            <span className="k">DCCs</span>
            <span className="v">Maya · Houdini · Nuke · Blender · Unreal · ZBrush</span>
          </div>
          <div className="kv">
            <span className="k">languages</span>
            <span className="v">Python · PySide/Qt · MEL/PyMEL · VEX </span>
          </div>
          <div className="kv">
            <span className="k">infra</span>
            <span className="v">Deadline · Perforce · PostgreSQL · Docker</span>
          </div>
        </div>
      </div>

      <div className="tape-stack-head">
        <span className="lbl">some work I'm proud of</span>
        <span className="title">a few clips.</span>
        <span className="count">04 / 04 · 2024–2026</span>
      </div>
      <div className="tape-stack">
        {[
        { n: '02', id: 'tWuorM43hv4', title: 'Spice Frontier', tag: 'Pipeline · Tools', studio: 'AAA CINEMATIC' },
        { n: '02', id: 'dadLtfngQH8', title: 'Batman', tag: 'Pipeline · USD', studio: 'ANIMATION' },
        { n: '03', id: 'HFeqtXim69g', title: 'Randal', tag: 'Pipeline · Python · Unity', studio: 'RIG, MOTION CAPTURE' },
        { n: '04', id: 'eHS_WYrK69Q', title: 'Huevocartoon', tag: 'Pipeline · Broadcast', studio: 'BROADCAST' }].
        map((t, i) => {
          return (
            <a
              key={i}
              className={`tape t${i + 1}`}
              href={`https://www.youtube.com/watch?v=${t.id}`}
              target="_top"
              rel="noopener noreferrer">
              
              <div className="tape-thumb">
                <img src={`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`} alt={t.title} />
              </div>
              <div className="tape-slate">
                <span className="rec">REC</span>
                <span>YT · {t.n}</span>
              </div>
              <span className="tape-play"></span>
              <div className="tape-meta">
                <div className="num">CLIP · {t.n} — {t.studio}</div>
                <div className="title">{t.title}</div>
                <div className="row">
                  <span>{t.tag}</span>
                  <span>2.39:1</span>
                </div>
              </div>
            </a>);

        })}
      </div>

      <div className="about-stats">
        <div className="stat">
          <div className="n">16<span style={{ color: 'var(--accent)' }}>+</span></div>
          <div className="l">years in production</div>
        </div>
        <div className="stat">
          <div className="n">tons</div>
          <div className="l">tools shipped (lost count)</div>
        </div>
        <div className="stat">
          <div className="n">06</div>
          <div className="l">studios, one crew mindset</div>
        </div>
        <div className="stat">
          <div className="n">∞</div>
          <div className="l">artists unblocked</div>
        </div>
      </div>
    </section>);

};

window.Hero = Hero;
window.About = About;