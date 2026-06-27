import Link from "next/link";
import { ministers } from "@/lib/data";

const issueMap = [
  ["School education", "General Education", "N Samsudheen"],
  ["Higher education", "Higher Education", "Roji M John"],
  ["Health / hospital", "Health", "K Muraleedharan"],
  ["Police / law and order", "Home", "Ramesh Chennithala"],
  ["Roads / public works", "PWD", "P K Basheer"],
  ["Business / startups", "Industries & Commerce", "P K Kunhalikutty"],
  ["Local body / panchayat", "Local Self Governments", "K M Shaji"],
  ["Land / revenue", "Land Revenue", "A P Anil Kumar"],
  ["Women & child welfare", "Women & Child Development", "Bindhu Krishna"],
];

export default function ContactDirectoryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Citizen helper</span>
          <h1>Contact directory</h1>
          <p className="lead">
            Find the right ministry by issue. Public launch should only show contacts that are verified from official sources.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container card-grid">
          {issueMap.map(([issue, department, ministerName]) => {
            const minister = ministers.find((m) => m.name === ministerName);
            return (
              <article className="info-card" key={issue}>
                <h3>{issue}</h3>
                <p className="meta">Relevant ministry: {department}</p>
                <div className="tag-row">
                  <span className="tag">Minister: {ministerName}</span>
                  <span className="status">Contact verification required</span>
                </div>
                {minister && <Link className="small-link" href={`/ministers/${minister.slug}`}>View profile →</Link>}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
