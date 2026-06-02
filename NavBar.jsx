// NavBar.jsx — sticky translucent top nav
const NAV = [
  ['about', 'About'], ['skills', 'Skills'], ['career', 'Career'],
  ['projects', 'Projects'], ['achievements', 'Achievements'],
];
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
        <button className="btn btn--primary btn--pill nav-cta" style={{ padding: '9px 16px', fontSize: 14 }}
          onClick={() => onNav('contact')}>
          <Icon name="mail" size={16} stroke={2.2} /> Contact
        </button>
      </div>
    </nav>
  );
}
window.NavBar = NavBar;
