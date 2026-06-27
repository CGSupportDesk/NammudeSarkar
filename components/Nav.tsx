import Link from "next/link";

const links = [
  ["Ministers", "/ministers"],
  ["Ministries", "/ministries"],
  ["Reforms", "/reforms"],
  ["Cabinet Decisions", "/cabinet-decisions"],
  ["Contacts", "/contact-directory"],
  ["Timeline", "/timeline"],
  ["About", "/about"],
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Nammude Sarkar home">
          <span className="logo-mark">NS</span>
          <span>NAMMUDE <span>SARKAR</span></span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <Link className="nav-cta" href="/reforms">Track Updates</Link>
        </nav>
      </div>
      <div className="container mobile-links" aria-label="Mobile navigation">
        {links.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </div>
    </header>
  );
}
