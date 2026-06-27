import Link from "next/link";
import { notFound } from "next/navigation";
import { getMinisterBySlug, getMinisterDepartments, getReformsForMinister, ministers } from "@/lib/data";
import { initials, partyClass } from "@/lib/utils";
import ReformCard from "@/components/ReformCard";

export function generateStaticParams() {
  return ministers.map((minister) => ({ slug: minister.slug }));
}

export default async function MinisterProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const minister = getMinisterBySlug(slug);
  if (!minister) return notFound();

  const departments = getMinisterDepartments(minister);
  const relatedReforms = getReformsForMinister(minister.name);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Link className="small-link" href="/ministers">← Back to ministers</Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container two-col">
          <div>
            <div className="profile-hero-card">
              <div className="profile-header">
                <div className="big-avatar">{initials(minister.name)}</div>
                <div>
                  <div className="tag-row" style={{ marginTop: 0 }}>
                    <span className={`party ${partyClass(minister.party)}`}>{minister.party}</span>
                    {minister.is_cm && <span className="tag">Chief Minister</span>}
                  </div>
                  <h1 style={{ fontSize: "clamp(38px, 5vw, 62px)", margin: "10px 0 12px" }}>{minister.name}</h1>
                  <p className="lead" style={{ marginBottom: 0 }}>{minister.designation}</p>
                </div>
              </div>

              <div className="detail-list">
                <div className="detail-item"><span>Constituency</span><strong>{minister.constituency}</strong></div>
                <div className="detail-item"><span>District</span><strong>{minister.district}</strong></div>
                <div className="detail-item"><span>Official Email</span><strong>{minister.official_email === "VERIFY" ? "Pending verification" : minister.official_email}</strong></div>
                <div className="detail-item"><span>Office Phone</span><strong>{minister.office_phone === "VERIFY" ? "Pending verification" : minister.office_phone}</strong></div>
              </div>
            </div>

            <section className="section">
              <h2 className="section-title">Portfolios</h2>
              <div className="card-grid">
                {departments.map((dept) => (
                  <Link href={`/ministries?focus=${encodeURIComponent(dept)}`} className="ministry-card" key={dept}>
                    <h3>{dept}</h3>
                    <p className="meta">Handled by {minister.name}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="section">
              <h2 className="section-title">Related reforms</h2>
              {relatedReforms.length ? (
                <div className="card-grid">
                  {relatedReforms.map((reform) => <ReformCard key={reform.id} reform={reform} />)}
                </div>
              ) : (
                <div className="empty-state">No reform entries are currently tagged to this minister in the seed database.</div>
              )}
            </section>
          </div>

          <aside className="source-box">
            <h3>Verification status</h3>
            <p>
              This profile is generated from the uploaded ministers CSV. Before public launch,
              contact details and portfolio ownership should be rechecked with official government
              and Legislature sources.
            </p>
            {minister.notes && <p><strong>Note:</strong> {minister.notes}</p>}
          </aside>
        </div>
      </section>
    </main>
  );
}
