import { reforms } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function TimelinePage() {
  const sorted = [...reforms].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Chronology</span>
          <h1>Timeline of change</h1>
          <p className="lead">
            A chronological public view of announcements, administrative changes, schemes, and policy entries from the uploaded tracker.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container timeline">
          {sorted.map((item) => (
            <article className="timeline-item" key={item.id}>
              <div className="timeline-date">{formatDate(item.date)}</div>
              <div>
                <h3>{item.title}</h3>
                <p className="section-copy">{item.description}</p>
                <div className="tag-row">
                  <span className={`status ${item.status}`}>{item.status}</span>
                  <span className="tag">{item.department_tag}</span>
                  <span className="tag">{item.minister_tag}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
