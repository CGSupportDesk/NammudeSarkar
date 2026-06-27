import ReformsTracker from "@/components/ReformsTracker";

export default function ReformsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Policy tracking</span>
          <h1>Reforms tracker</h1>
          <p className="lead">
            Search by reform, scheme, ministry, minister, source, category, and implementation status.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <ReformsTracker />
        </div>
      </section>
    </main>
  );
}
