 "use client";

import { useMemo, useState } from "react";
import { reforms, ministers } from "@/lib/data";
import ReformCard from "@/components/ReformCard";

export default function ReformsTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [department, setDepartment] = useState("All");
  const [minister, setMinister] = useState("All");

  const statuses = useMemo(() => Array.from(new Set(reforms.map((r) => r.status))).filter(Boolean).sort(), []);
  const departments = useMemo(() => Array.from(new Set(reforms.map((r) => r.department_tag))).filter(Boolean).sort(), []);

  const filtered = reforms.filter((reform) => {
    const haystack = `${reform.title} ${reform.category} ${reform.department_tag} ${reform.minister_tag} ${reform.description} ${reform.source} ${reform.status}`.toLowerCase();
    return (
      haystack.includes(query.toLowerCase()) &&
      (status === "All" || reform.status === status) &&
      (department === "All" || reform.department_tag === department) &&
      (minister === "All" || reform.minister_tag === minister)
    );
  });

  return (
    <>
      <div className="filters">
        <input className="input" placeholder="Search reform, scheme, ministry, source..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All</option>
          {statuses.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select className="select" value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option>All</option>
          {departments.map((d) => <option key={d}>{d}</option>)}
        </select>
        <select className="select" value={minister} onChange={(e) => setMinister(e.target.value)}>
          <option>All</option>
          {ministers.map((m) => <option key={m.name}>{m.name}</option>)}
        </select>
      </div>
      {filtered.length ? (
        <div className="card-grid">
          {filtered.map((reform) => <ReformCard key={reform.id} reform={reform} />)}
        </div>
      ) : (
        <div className="empty-state">No reforms match this filter.</div>
      )}
    </>
  );
}
