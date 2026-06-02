// Footer.jsx — contact CTA band + footer
function Footer() {
  const [copied, setCopied] = React.useState(false);
  const email = 'xongyuna.dev@gmail.com';
  const copy = () => {
    navigator.clipboard?.writeText(email).catch(() => {});
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  };
  return (
    <footer id="contact">
      <section className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container">
          <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)',
            padding: '52px 48px', position: 'relative', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0,
              background: 'radial-gradient(600px 300px at 88% 120%, rgba(20,184,108,0.12), transparent 60%)' }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn btn--primary" onClick={copy}>
                <Icon name={copied ? 'check' : 'mail'} size={17} stroke={2.2} />
                {copied ? '복사됨!' : email}
              </button>
              <a className="btn btn--outline" href="https://github.com/dev-xong" target="_blank" rel="noreferrer">
                <Icon name="github" size={17} /> github.com/dev-xong
              </a>
            </div>
          </div>
        </div>
      </section>
      <div style={{ borderTop: '1px solid var(--border)', padding: '24px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>© 2025 xongyuna. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
