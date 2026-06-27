 "use client";

import { useMemo, useState } from "react";
import { ministers, parties } from "@/lib/data";
import MinisterCard from "@/components/MinisterCard";

export default function MinisterDirectory() {
  const [query, setQuery] = useState("");
  const [party, setParty] = useState("All");
  const [district, setDistrict] = useState("All");

  const districts = useMemo(() => Array.from(new Set(ministers.map((m) => m.district))).filter(Boolean).sort(), []);

  const filtered = ministers.filter((minister) => {
    const haystack = `${minister.name} ${minister.designation} ${minister.constituency} ${minister.district} ${minister.party} ${minister.key_departments}`.toLowerCase();
    return (
      haystack.includes(query.toLowerCase()) &&
      (party === "All" || minister.party === party) &&
      (district === "All" || minister.district === district)
    );
  });

  return (
    <>
      <div className="filters">
        <input className="input" placeholder="Search minister, constituency, ministry..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="select" value={party} onChange={(e) => setParty(e.target.value)}>
          <option>All</option>
          {parties.map((p) => <option key={p}>{p}</option>)}
        </select>
        <select className="select" value={district} onChange={(e) => setDistrict(e.target.value)}>
          <option>All</option>
          {districts.map((d) => <option key={d}>{d}</option>)}
        </select>
        <div className="source-box" style={{ padding: "13px 15px", borderRadius: 16 }}>
          {filtered.length} people found
        </div>
      </div>
      {filtered.length ? (
        <div className="card-grid">
          {filtered.map((minister) => <MinisterCard key={minister.id} minister={minister} />)}
        </div>
      ) : (
        <div className="empty-state">No ministers match this filter.</div>
      )}
    </>
  );
}
