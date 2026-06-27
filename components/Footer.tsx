export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">
            <img className="site-logo-img" src="/assets/nammude-sarkar-logo.png" alt="Nammude Sarkar" />
          </div>
          <p className="disclaimer footer-copy">
            കേരളത്തിലെ മന്ത്രിമാർ, വകുപ്പുകൾ, പരിഷ്കാരങ്ങൾ, തീരുമാനങ്ങൾ,
            ബന്ധപ്പെടാനുള്ള വഴികൾ എന്നിവ ലളിതമായി കണ്ടെത്താൻ സഹായിക്കുന്ന ജനസൗഹൃദ പ്ലാറ്റ്ഫോം.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a href="/ministers">മന്ത്രിമാർ</a>
          <a href="/ministries">വകുപ്പുകൾ</a>
          <a href="/reforms">പരിഷ്കാരങ്ങൾ</a>
          <a href="/timeline">ടൈംലൈൻ</a>
          <a href="/about">ബാധ്യതാകുറിപ്പ്</a>
        </nav>

        <div className="footer-social" aria-label="Social links">
          <span>f</span>
          <span>X</span>
          <span>◎</span>
          <span>▶</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2025 Nammude Sarkar. All rights reserved.</span>
        <span>പ്രസിദ്ധീകരിക്കുന്നതിന് മുമ്പ് എല്ലാ വിവരങ്ങളും സർക്കാർ സ്രോതസ്സുകളിൽ പരിശോധിക്കുക.</span>
      </div>
    </footer>
  );
}
