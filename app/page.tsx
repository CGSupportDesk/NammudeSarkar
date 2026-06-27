import Link from "next/link";
import type { ReactNode } from "react";
import { ministers, reforms, stats } from "@/lib/data";

type IconName =
  | "people"
  | "growth"
  | "shield"
  | "calendar"
  | "health"
  | "education"
  | "road"
  | "rupee"
  | "agriculture"
  | "industry"
  | "search"
  | "filter"
  | "user"
  | "pin"
  | "chat"
  | "building"
  | "arrow";

function Icon({ name }: { name: IconName }) {
  const common = {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  const paths: Record<IconName, ReactNode> = {
    people: (
      <>
        <circle cx="10" cy="10" r="4" fill="currentColor" />
        <circle cx="19" cy="11" r="3" fill="currentColor" opacity=".72" />
        <path d="M3.5 23c.9-5 4.1-7 7.1-7s6.2 2 7.1 7H3.5Z" fill="currentColor" />
        <path d="M16.5 22c.5-3.3 2.6-5.1 5-5.1 2.2 0 4.2 1.6 4.9 5.1h-9.9Z" fill="currentColor" opacity=".72" />
      </>
    ),
    growth: (
      <>
        <path d="M4 23h20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M7 20v-5m6 5v-9m6 9V7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="m5 12 6-5 5 4 7-7" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    shield: (
      <path d="M14 3.5 23 7v6.5c0 5.6-3.5 9.2-9 11-5.5-1.8-9-5.4-9-11V7l9-3.5Z" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity=".14" />
    ),
    calendar: (
      <>
        <rect x="5" y="6" width="18" height="17" rx="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M9 4v5m10-5v5M6 12h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
    health: (
      <path d="M14 24S4.8 18.8 4.8 11.4c0-3.3 2.3-5.7 5.2-5.7 1.8 0 3.2.9 4 2.2.8-1.3 2.2-2.2 4-2.2 2.9 0 5.2 2.4 5.2 5.7C23.2 18.8 14 24 14 24Z M14 11v6m-3-3h6" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round" />
    ),
    education: (
      <>
        <path d="M3 10.5 14 5l11 5.5-11 5.5L3 10.5Z" fill="currentColor" />
        <path d="M8 14v5.2c2.6 2 9.4 2 12 0V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    road: (
      <>
        <path d="M8 24 13 4h2l5 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 8v3m0 4v3m0 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    rupee: (
      <>
        <circle cx="14" cy="14" r="11" fill="currentColor" opacity=".14" />
        <path d="M10 8h9M10 12h9m-8.5-4c5.5 0 6.1 6.8.2 6.8H10L17.8 22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    agriculture: (
      <>
        <path d="M14 24V9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M14 13c-4.5-.2-7.3-2.6-8.4-7.2 4.4 0 7.3 2.7 8.4 7.2ZM14 16c4.7-.3 7.7-3.1 8.7-8.2-4.8.2-7.7 3.1-8.7 8.2Z" fill="currentColor" />
      </>
    ),
    industry: (
      <>
        <path d="M4 23V11l7 4v-4l7 4V8h5v15H4Z" fill="currentColor" opacity=".18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 19h2m4 0h2m4 0h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    search: (
      <path d="m22 22-5.3-5.3M19 12.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    ),
    filter: (
      <>
        <path d="M5 8h18M8 14h12M11 20h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="10" cy="8" r="2" fill="currentColor" />
        <circle cx="18" cy="14" r="2" fill="currentColor" />
      </>
    ),
    user: (
      <>
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M6 23c1-5.2 4.2-7.4 8-7.4s7 2.2 8 7.4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
    pin: (
      <path d="M14 25s8-7.4 8-14a8 8 0 1 0-16 0c0 6.6 8 14 8 14Zm0-10.8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" stroke="currentColor" strokeWidth="2.1" fill="currentColor" fillOpacity=".12" />
    ),
    chat: (
      <path d="M6 6.5h16v10.8H11.6L6 22v-4.7H6V6.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ),
    building: (
      <>
        <path d="M4 23h20M6 20h16M8 11v9m4-9v9m4-9v9m4-9v9M5 10l9-6 9 6H5Z" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    arrow: <path d="M7 14h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const ministryTiles = [
  { label: "ആരോഗ്യം", sub: "Health", icon: "health" as IconName, tone: "green" },
  { label: "വിദ്യാഭ്യാസം", sub: "Education", icon: "education" as IconName, tone: "blue" },
  { label: "പൊതുമരാമത്ത്", sub: "PWD", icon: "road" as IconName, tone: "gold" },
  { label: "റവന്യൂ", sub: "Revenue", icon: "rupee" as IconName, tone: "green" },
  { label: "കൃഷി", sub: "Agriculture", icon: "agriculture" as IconName, tone: "green" },
  { label: "വ്യവസായം", sub: "Industries", icon: "industry" as IconName, tone: "violet" },
];

const policyCards = [
  {
    title: "ആരോഗ്യ കേരളം 2.0",
    copy: "ജീവൻ രക്ഷാ ആരോഗ്യ ഇൻഷുറൻസ് പദ്ധതി",
    status: "Implemented",
    date: "മേയ് 10, 2026",
    tone: "green",
  },
  {
    title: "നവകേരള സ്റ്റാർട്ട് മിഷൻ",
    copy: "യുവാക്കൾക്കും സംരംഭകർക്കും മെന്ററിംഗ്",
    status: "Announced",
    date: "മേയ് 21, 2026",
    tone: "blue",
  },
  {
    title: "ഹരിത കേരള മിഷൻ",
    copy: "പരിസ്ഥിതി സംരക്ഷണവും ഹരിത വികസനവും",
    status: "Approved",
    date: "മേയ് 02, 2026",
    tone: "gold",
  },
  {
    title: "ഡിജിറ്റൽ ഗവേണൻസ് 2.0",
    copy: "ജനസേവനങ്ങൾ ഓൺലൈനാക്കി ലഭ്യമാക്കൽ",
    status: "Implemented",
    date: "ഏപ്രിൽ 28, 2026",
    tone: "green",
  },
];

const timelineItems = [
  { date: "മാർച്ച് 23, 2025", title: "കർമ്മിക് കാരുണ്യ പാക്കേജ് പ്രഖ്യാപിച്ചു", tag: "കൃഷി വകുപ്പ്", tone: "green" },
  { date: "മേയ് 22, 2025", title: "വീടുകൾക്കായുള്ള സഹായ പദ്ധതി ആരംഭിച്ചു", tag: "വിദ്യാഭ്യാസ വകുപ്പ്", tone: "blue" },
  { date: "ജൂൺ 21, 2025", title: "പൊതുമരാമത്ത് റോഡ് പദ്ധതികൾക്ക് അംഗീകാരം", tag: "PWD", tone: "gold" },
  { date: "ജൂൺ 20, 2025", title: "ആരോഗ്യ ഇൻഷുറൻസ് പദ്ധതി വിപുലീകരണം", tag: "ആരോഗ്യ വകുപ്പ്", tone: "green" },
];

const ministerPhotos = [
  "/assets/ministers/v-d-satheesan.png",
  "/assets/ministers/ramesh-chennithala.png",
  "/assets/ministers/k-muraleedharan.png",
  "/assets/ministers/sunny-joseph.png",
];

function MinisterMiniCard({ minister, index }: { minister: (typeof ministers)[number]; index: number }) {
  return (
    <Link className="home-minister-card" href={`/ministers/${minister.slug}`}>
      <div
        className="home-minister-photo"
        style={{ backgroundImage: `url(${ministerPhotos[index]})` }}
      />
      <div className="home-minister-copy">
        <h3>{minister.name.replace("V D", "വി. ഡി.")}</h3>
        <span className="minister-party">{minister.is_cm ? "Chief Minister" : minister.party}</span>
        <p>{minister.constituency.toUpperCase()}</p>
        <small>{minister.key_departments.split(";").slice(0, 2).join(", ")}</small>
      </div>
      <span className="card-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

export default function Home() {
  const cm = ministers.find((m) => m.is_cm) || ministers[0];
  const featuredMinisters = [cm, ...ministers.filter((m) => !m.is_cm).slice(0, 3)];
  const featuredReforms = reforms.slice(0, 4);

  return (
    <main className="home-page">
      <section className="portal-hero">
        <div className="kerala-map-mark" aria-hidden="true" />
        <div className="container portal-hero-grid">
          <div className="portal-hero-copy">
            <p className="portal-kicker">ഒരു പ്ലാറ്റ്ഫോം · ഒരു വിവരണം കേന്ദം</p>
            <h1>
              കേരള സർക്കാരിലെ
              <span>മാറ്റങ്ങൾ ഇനി ലളിതമായി</span>
            </h1>
            <p className="portal-lead">
              മന്ത്രിമാർ, വകുപ്പുകൾ, പരിഷ്കാരങ്ങൾ, തീരുമാനങ്ങൾ, ഉത്തരവുകൾ,
              പൊതുവിവരങ്ങൾ എല്ലാം ഒരു ഇടത്ത്.
            </p>
            <div className="portal-actions">
              <Link className="portal-btn primary" href="/ministers">
                <Icon name="user" />
                മന്ത്രിമാരെ കാണുക
              </Link>
              <Link className="portal-btn green" href="/reforms">
                <Icon name="growth" />
                പരിഷ്കാരങ്ങൾ പരിശോധിക്കുക
              </Link>
              <Link className="portal-btn subtle" href="/contact-directory">
                <Icon name="chat" />
                ഏത് വകുപ്പിനെ സമീപിക്കണം?
              </Link>
            </div>
          </div>

          <aside className="leader-card" aria-label="Chief Minister profile highlight">
            <div className="leader-photo" />
            <div className="leader-nameplate">
              <h2>വി. ഡി. സതീശൻ</h2>
              <p>മുഖ്യമന്ത്രി <span /> Chief Minister</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container search-dock" aria-label="Search">
        <div className="portal-search">
          <Icon name="search" />
          <input readOnly placeholder="മന്ത്രിമാർ, വകുപ്പുകൾ, പദ്ധതികൾ, പരിഷ്കാരങ്ങൾ എന്നിവ തിരയുക..." />
          <button type="button">
            <Icon name="filter" />
            എല്ലാ വിഭാഗങ്ങളിലും
          </button>
        </div>
      </section>

      <section className="container metric-strip" aria-label="Dashboard statistics">
        <div className="metric-item">
          <span className="metric-icon blue"><Icon name="people" /></span>
          <div><small>മന്ത്രിമാർ</small><strong>22</strong><p>മന്ത്രിസഭാംഗങ്ങൾ</p></div>
        </div>
        <div className="metric-item">
          <span className="metric-icon green"><Icon name="growth" /></span>
          <div><small>പരിഷ്കാരങ്ങൾ</small><strong>{stats.reforms}+</strong><p>ട്രാക്ക് ചെയ്യുന്നു</p></div>
        </div>
        <div className="metric-item">
          <span className="metric-icon blue-soft"><Icon name="shield" /></span>
          <div><small>സോഴ്സ് പരിശോധന</small><strong>100%</strong><p>സൂചനാ വിവരങ്ങൾ</p></div>
        </div>
        <div className="metric-item">
          <span className="metric-icon gold"><Icon name="calendar" /></span>
          <div><small>അപ്ഡേറ്റ് ആവർത്തനം</small><strong>Every Week</strong><p>പുതിയ വിവരങ്ങൾ</p></div>
        </div>
      </section>

      <section className="container home-section">
        <div className="home-section-head">
          <h2>മന്ത്രിസഭ</h2>
          <Link href="/ministers">എല്ലാ മന്ത്രിമാരെയും കാണുക <span>→</span></Link>
        </div>
        <div className="home-minister-grid">
          {featuredMinisters.map((minister, index) => (
            <MinisterMiniCard key={minister.id} minister={minister} index={index} />
          ))}
          <Link className="round-next" href="/ministers" aria-label="View all ministers">→</Link>
        </div>
      </section>

      <section className="container home-section">
        <div className="home-section-head">
          <h2>വകുപ്പുകൾ വഴി കണ്ടെത്തുക</h2>
          <Link href="/ministries">എല്ലാ വകുപ്പുകളും കാണുക <span>→</span></Link>
        </div>
        <div className="ministry-tile-grid">
          {ministryTiles.map((tile) => (
            <Link className={`home-ministry-tile ${tile.tone}`} href={`/ministries?focus=${encodeURIComponent(tile.sub)}`} key={tile.label}>
              <Icon name={tile.icon} />
              <h3>{tile.label}</h3>
              <p>{tile.sub}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container home-section">
        <div className="home-section-head">
          <h2>പരിഷ്കാരങ്ങൾ</h2>
          <Link href="/reforms">എല്ലാം കാണുക <span>→</span></Link>
        </div>
        <div className="policy-grid">
          {policyCards.map((policy, index) => (
            <Link className="policy-card" href={`/reforms#${featuredReforms[index]?.slug || ""}`} key={policy.title}>
              <h3>{policy.title}</h3>
              <p>{policy.copy}</p>
              <span className={`policy-status ${policy.tone}`}>{policy.status}</span>
              <small>{policy.date}</small>
            </Link>
          ))}
          <Link className="round-next policy-next" href="/reforms" aria-label="View policies">→</Link>
        </div>
      </section>

      <section className="container issue-finder">
        <div className="issue-illustration" aria-hidden="true">
          <Icon name="chat" />
        </div>
        <div>
          <h2>എന്താണ് നിങ്ങളുടെ പ്രശ്നം?</h2>
          <p>ശരിയായ വകുപ്പിനെയും മന്ത്രിയെയും ഞങ്ങൾ സഹായിക്കും.</p>
        </div>
        <form className="issue-form">
          <label>
            <Icon name="user" />
            <select defaultValue="">
              <option value="" disabled>നിങ്ങളുടെ പ്രശ്ന വിഭാഗം തിരഞ്ഞെടുക്കുക</option>
              <option>ആരോഗ്യം</option>
              <option>വിദ്യാഭ്യാസം</option>
              <option>റോഡ് / പൊതുമരാമത്ത്</option>
            </select>
          </label>
          <label>
            <Icon name="pin" />
            <select defaultValue="">
              <option value="" disabled>നിങ്ങളുടെ ജില്ല തിരഞ്ഞെടുക്കുക</option>
              <option>തിരുവനന്തപുരം</option>
              <option>എറണാകുളം</option>
              <option>മലപ്പുറം</option>
            </select>
          </label>
          <Link className="portal-btn primary issue-submit" href="/contact-directory">
            മാർഗനിർദേശം നേടുക
            <Icon name="arrow" />
          </Link>
        </form>
        <div className="issue-building" aria-hidden="true">
          <Icon name="building" />
        </div>
      </section>

      <section className="container home-section timeline-section">
        <div className="home-section-head">
          <h2>അവസാന അപ്ഡേറ്റുകൾ</h2>
          <Link href="/timeline">എല്ലാം കാണുക <span>→</span></Link>
        </div>
        <div className="home-timeline">
          {timelineItems.map((item) => (
            <article className={`timeline-card ${item.tone}`} key={item.title}>
              <span className="timeline-dot" />
              <small>{item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.tag}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-band">
        <div className="container trust-grid">
          <div className="trust-shield">
            <Icon name="shield" />
          </div>
          <div>
            <h2>വിശ്വാസ്യത · സുതാര്യത · ജനസേവനം</h2>
            <p>ഇത് ഔദ്യോഗിക സർക്കാർ പോർട്ടൽ അല്ല. പൊതുവിവരങ്ങൾ ഔദ്യോഗിക സ്രോതസ്സുകൾ പരിശോധിച്ച ശേഷം പ്രസിദ്ധീകരിക്കേണ്ടതാണ്.</p>
          </div>
          <p>ഈ പ്ലാറ്റ്ഫോം ജനങ്ങൾക്ക് സർക്കാർ വിവരങ്ങൾ ലളിതമായി കണ്ടെത്താൻ സഹായിക്കുന്നതിനാണ്.</p>
        </div>
      </section>
    </main>
  );
}
