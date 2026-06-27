import Link from "next/link";

const links = [
  ["മുഖം", "/"],
  ["മന്ത്രിമാർ", "/ministers"],
  ["വകുപ്പുകൾ", "/ministries"],
  ["പരിഷ്കാരങ്ങൾ", "/reforms"],
  ["മന്ത്രിസഭാ തീരുമാനങ്ങൾ", "/cabinet-decisions"],
  ["ബന്ധപ്പെടുക", "/contact-directory"],
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Nammude Sarkar home">
          <img className="site-logo-img" src="/assets/nammude-sarkar-logo.png" alt="Nammude Sarkar" />
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>
        <div className="nav-tools" aria-label="Language and search">
          <span className="lang-pill active">ML</span>
          <span className="lang-pill">EN</span>
          <Link className="nav-search" href="/reforms" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m20 20-4.2-4.2M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="container mobile-links" aria-label="Mobile navigation">
        {links.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </div>
    </header>
  );
}
