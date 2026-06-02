// NavBar.jsx — sticky translucent top nav
const NAV = [
  ['about', 'About'], ['skills', 'Skills'], ['career', 'Career'],
  ['projects', 'Projects'], ['achievements', 'Achievements'],
];

// 접속수 — 외부 무료 카운터(counterapi.dev)로 전체 접속 횟수 집계.
// 서비스 실패 시 localStorage 기반 로컬 카운트로 안전하게 대체.
function HitCount() {
  const [count, setCount] = React.useState(null);
  React.useEffect(() => {
    let done = false;
    const fallback = () => {
      if (done) return;
      done = true;
      const n = (parseInt(localStorage.getItem('hit-count') || '0', 10) || 0) + 1;
      localStorage.setItem('hit-count', String(n));
      setCount(n);
    };
    fetch('https://api.counterapi.dev/v1/dev-xong-portfolio/visits/up')
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((d) => { if (!done) { done = true; setCount(d.count); } })
      .catch(fallback);
    const t = setTimeout(fallback, 2500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div title="총 접속수" style={{ display: 'inline-flex', alignItems: 'center', gap: 7,
      background: 'var(--brand-green-weak)', borderRadius: 'var(--radius-pill)',
      padding: '7px 13px', whiteSpace: 'nowrap' }}>
      <Icon name="eye" size={15} stroke={2.2} style={{ color: 'var(--brand-green)', flex: 'none' }} />
      <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--fg-2)' }}>방문수</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 700,
        color: 'var(--brand-green-press)' }}>
        {count === null ? '···' : count.toLocaleString()}
      </span>
    </div>
  );
}

function NavBar({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.getElementById('scroll-root') || window;
    const el = document.getElementById('scroll-root');
    const handler = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    root.addEventListener('scroll', handler);
    return () => root.removeEventListener('scroll', handler);
  }, []);
  return (
    <nav className={'nav' + (scrolled ? ' nav--scrolled' : '')}>
      <div className="container">
        <div className="brand" onClick={() => onNav('about')} style={{ cursor: 'pointer' }}>
          <span className="mark">&lt;/&gt;</span>
          <span><span className="dev">dev</span>-xong</span>
        </div>
        <div className="nav-links">
          {NAV.map(([id, label]) => (
            <span key={id} className="nav-link" onClick={() => onNav(id)}>{label}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <HitCount />
          <button className="btn btn--primary btn--pill nav-cta" style={{ padding: '9px 16px', fontSize: 14 }}
            onClick={() => onNav('contact')}>
            <Icon name="mail" size={16} stroke={2.2} /> Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
window.NavBar = NavBar;
