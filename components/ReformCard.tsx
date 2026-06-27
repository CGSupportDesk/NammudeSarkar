import type { Reform } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function ReformCard({ reform }: { reform: Reform }) {
  return (
    <article className="reform-card">
      <div className="tag-row">
        <span className={`status ${reform.status}`}>{reform.status}</span>
        <span className="tag">{reform.category}</span>
      </div>
      <h3>{reform.title}</h3>
      <div className="meta">{formatDate(reform.date)} · {reform.department_tag}</div>
      <p className="section-copy" style={{ marginTop: 14 }}>{reform.description}</p>
      <div className="tag-row">
        <span className="tag">Minister: {reform.minister_tag}</span>
        <span className="tag">Source: {reform.source}</span>
      </div>
    </article>
  );
}
