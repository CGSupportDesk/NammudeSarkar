import Link from "next/link";
import type { Minister } from "@/lib/data";
import { getMinisterDepartments } from "@/lib/data";
import { initials, partyClass } from "@/lib/utils";

export default function MinisterCard({ minister }: { minister: Minister }) {
  const departments = getMinisterDepartments(minister).slice(0, 3);
  return (
    <Link className="minister-card" href={`/ministers/${minister.slug}`}>
      <div className="profile-row">
        <div className="avatar">{initials(minister.name)}</div>
        <div>
          <h3>{minister.name}</h3>
          <div className="meta">{minister.designation}</div>
        </div>
      </div>
      <div className="tag-row">
        <span className={`party ${partyClass(minister.party)}`}>{minister.party}</span>
        <span className="tag">📍 {minister.constituency}</span>
        {minister.is_cm && <span className="tag">Chief Minister</span>}
      </div>
      <p className="meta">{departments.join(" • ")}</p>
      <span className="small-link">View full profile →</span>
    </Link>
  );
}
