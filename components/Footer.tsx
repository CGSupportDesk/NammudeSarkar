export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            <span className="logo-mark">NS</span>
            <span>NAMMUDE <span>SARKAR</span></span>
          </div>
          <p className="disclaimer" style={{ marginTop: 16 }}>
            Kerala’s public dashboard for government clarity — ministers, ministries,
            reforms, decisions, contacts, and source-backed updates.
          </p>
        </div>
        <div className="disclaimer">
          <strong>Disclaimer:</strong> Nammude Sarkar is an independent citizen information
          platform and is not the official website of the Government of Kerala. The current
          build uses the uploaded seed database. Public launch data must be verified against
          official government sources before publishing contact details or legally relevant
          information.
        </div>
      </div>
    </footer>
  );
}
