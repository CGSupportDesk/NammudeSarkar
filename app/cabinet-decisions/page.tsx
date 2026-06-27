import { reforms } from "@/lib/data";
import ReformCard from "@/components/ReformCard";

export default function CabinetDecisionsPage() {
  const cabinetRelated = reforms.filter((reform) =>
    `${reform.title} ${reform.description} ${reform.category}`.toLowerCase().includes("cabinet")
  );

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Decision archive</span>
          <h1>Cabinet decisions</h1>
          <p className="lead">
            This page is prepared for official cabinet decision entries with citizen-friendly summaries, source links, and status mapping.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          {cabinetRelated.length ? (
            <div className="card-grid">
              {cabinetRelated.map((reform) => <ReformCard key={reform.id} reform={reform} />)}
            </div>
          ) : (
            <div className="empty-state">
              No separate cabinet-decision database is attached yet. Add cabinet decisions as a dedicated CSV/table and this page will display them.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
