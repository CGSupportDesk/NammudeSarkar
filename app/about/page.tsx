export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Trust layer</span>
          <h1>About Nammude Sarkar</h1>
          <p className="lead">
            Nammude Sarkar is designed as an independent public information platform that makes government data easier to understand, search, and verify.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container card-grid">
          <article className="info-card">
            <h3>What this platform does</h3>
            <p className="section-copy">
              It brings ministers, ministries, reforms, cabinet decisions, government orders,
              contact information, and timelines into one citizen-friendly interface.
            </p>
          </article>
          <article className="info-card">
            <h3>Verification policy</h3>
            <p className="section-copy">
              Every public entry should include source, last verified date, and correction support.
              Unverified contact data should remain hidden or clearly marked until confirmed.
            </p>
          </article>
          <article className="info-card">
            <h3>Independence disclaimer</h3>
            <p className="section-copy">
              This is not an official government website. It is a civic information layer built to
              help citizens understand official data more easily.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container source-box">
          <h2 className="section-title" style={{ fontSize: 34 }}>Public launch checklist</h2>
          <p>
            Before going live, verify minister photos, portfolio allocation, department emails,
            office phone numbers, cabinet decisions, and government orders against official government
            sources. Keep a visible correction request flow for citizens and officials.
          </p>
        </div>
      </section>
    </main>
  );
}
