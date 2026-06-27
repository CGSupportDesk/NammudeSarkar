import Link from "next/link";
import { ministers, reforms, stats, departments } from "@/lib/data";
import MinisterCard from "@/components/MinisterCard";
import ReformCard from "@/components/ReformCard";

const quickChips = ["Health", "Education", "PWD", "Industries", "Local Self Government", "Women & Child", "Agriculture", "Fisheries", "Finance", "Transport"];

export default function Home() {
  const cm = ministers.find((m) => m.is_cm);
  const featuredMinisters = ministers.filter((m) => !m.is_cm).slice(0, 6);
  const featuredReforms = reforms.slice(0, 6);
  const topMinistries = departments.slice(0, 9);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Public beta concept · source-backed civic information</span>
            <h1>Understand Kerala’s government. <strong>Clearly.</strong></h1>
            <p className="lead">
              Nammude Sarkar brings ministers, ministries, reforms, cabinet decisions,
              government orders, and verified contact information into one clean public platform.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/ministers">Explore Ministers →</Link>
              <Link className="btn btn-secondary" href="/reforms">Track Reforms</Link>
              <Link className="btn btn-secondary" href="/contact-directory">Find the Right Ministry</Link>
            </div>
            <div className="search-panel">
              <div className="search-bar">
                <span className="search-icon">⌕</span>
                <input readOnly placeholder="Search by minister, ministry, scheme, reform, district, or order" />
              </div>
              <div className="chips">
                {quickChips.map((chip) => <Link className="chip" key={chip} href={`/reforms?search=${encodeURIComponent(chip)}`}>{chip}</Link>)}
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <img className="org-chart-img" src="/assets/cabinet-org-chart.png" alt="Nammude Sarkar Kerala cabinet organizational chart" />
            <div className="hero-card-caption">
              <span>{cm?.name} · Chief Minister</span>
              <span>Org chart concept</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container stats-grid">
          <div className="stat"><strong>{stats.cabinetMembers}</strong><span>Cabinet members tracked</span></div>
          <div className="stat"><strong>{stats.totalPeople}</strong><span>Total public functionaries in seed data</span></div>
          <div className="stat"><strong>{stats.reforms}</strong><span>Initial reforms/policies seeded</span></div>
          <div className="stat"><strong>{stats.verifiedEmails}</strong><span>Verified email entries</span></div>
          <div className="stat"><strong>{stats.unverifiedContacts}</strong><span>Contacts pending verification</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">Council of Ministers</h2>
              <p className="section-copy">A clean, searchable directory of ministers, parties, constituencies, and portfolios from the uploaded seed database.</p>
            </div>
            <Link className="btn btn-secondary" href="/ministers">View all ministers</Link>
          </div>
          <div className="card-grid">
            {featuredMinisters.map((minister) => <MinisterCard key={minister.id} minister={minister} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">Explore by ministry</h2>
              <p className="section-copy">Let citizens start from the issue they care about: health, education, roads, land, police, welfare, business, or transport.</p>
            </div>
            <Link className="btn btn-secondary" href="/ministries">All ministries</Link>
          </div>
          <div className="card-grid">
            {topMinistries.map((department) => {
              const owner = ministers.find((m) => m.key_departments.includes(department));
              return (
                <Link className="ministry-card" key={department} href={`/ministries?focus=${encodeURIComponent(department)}`}>
                  <h3>{department}</h3>
                  <p className="meta">Minister: {owner?.name || "To be mapped"}</p>
                  <span className="small-link">Open ministry →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">Reforms & policy tracker</h2>
              <p className="section-copy">A filterable timeline of major and minor changes: announced, approved, implemented, or pending verification.</p>
            </div>
            <Link className="btn btn-primary" href="/reforms">Open tracker</Link>
          </div>
          <div className="card-grid">
            {featuredReforms.map((reform) => <ReformCard key={reform.id} reform={reform} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          <div className="info-card">
            <h3>Citizen issue finder</h3>
            <p className="section-copy">A guided flow that maps normal citizen problems to the right ministry, minister, department, and official source.</p>
            <Link className="small-link" href="/contact-directory">Open contact directory →</Link>
          </div>
          <div className="info-card">
            <h3>Cabinet decisions simplified</h3>
            <p className="section-copy">Turn official decisions into short public summaries with date, department, source, and implementation status.</p>
            <Link className="small-link" href="/cabinet-decisions">View cabinet decisions →</Link>
          </div>
          <div className="info-card">
            <h3>Trust & verification</h3>
            <p className="section-copy">Every public entry should carry source, last verified date, and correction request support before launch.</p>
            <Link className="small-link" href="/about">Read methodology →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
