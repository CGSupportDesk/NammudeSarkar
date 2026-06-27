import Link from "next/link";
import { departments, ministers, reforms } from "@/lib/data";

export default function MinistriesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Issue-first navigation</span>
          <h1>Ministries</h1>
          <p className="lead">
            Browse portfolios and departments mapped to ministers. This page is designed for citizens who know their issue, not the political hierarchy.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container card-grid">
          {departments.map((department) => {
            const owner = ministers.find((m) => m.key_departments.includes(department));
            const related = reforms.filter((r) => r.department_tag && department.toLowerCase().includes(r.department_tag.toLowerCase()));
            return (
              <article className="ministry-card" key={department}>
                <h3>{department}</h3>
                <p className="meta">Minister: {owner ? owner.name : "To be mapped"}</p>
                <div className="tag-row">
                  {owner && <span className="party">{owner.party}</span>}
                  <span className="tag">{related.length} reform entries</span>
                </div>
                <p className="section-copy">
                  Use this ministry page to connect cabinet decisions, government orders, source documents, and public contacts.
                </p>
                {owner && <Link className="small-link" href={`/ministers/${owner.slug}`}>View minister →</Link>}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
