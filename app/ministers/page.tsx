import MinisterDirectory from "@/components/MinisterDirectory";

export default function MinistersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Directory</span>
          <h1>Ministers</h1>
          <p className="lead">
            Search and filter the full council by minister, party, district, constituency, and portfolio.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <MinisterDirectory />
        </div>
      </section>
    </main>
  );
}
