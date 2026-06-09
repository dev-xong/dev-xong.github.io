// Hero.jsx — About / profile masthead
const PROFILE_INFO = [
  ['user', '이름', '송윤아'],
  ['calendar', '생년월일', '97.12.09'],
  ['pin', '위치', '부산광역시'],
  ['mail', '이메일', 'xongyuna.dev@gmail.com'],
];
function Hero({ onNav }) {
  // 경력: 2024년 3월 입사 기준, 현재 날짜까지 자동 계산
  const start = new Date(2024, 2, 1); // month index 2 = 3월
  const now = new Date();
  let totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (totalMonths < 0) totalMonths = 0;
  const careerYears = Math.floor(totalMonths / 12);
  const careerMonths = totalMonths % 12;
  return (
    <header className="section" id="about" style={{ paddingTop: 128, position: 'relative' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(900px 420px at 78% -8%, var(--brand-blue-weak), transparent 60%)',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 40, alignItems: 'center',
        }} className="hero-grid">
          <div className="reveal" style={{ position: 'relative', flex: 'none' }}>
            <div style={{
              width: 168, height: 168, borderRadius: '50%', background: 'var(--brand-blue-weak)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'var(--shadow-lg)', overflow: 'hidden',
            }}>
              <img src="assets/img/profile/me.png" alt="dev-xong" style={{ width: 160, height: 160, objectFit: 'contain' }} />
            </div>
            <span style={{
              position: 'absolute', right: 12, bottom: 16, display: 'inline-flex', alignItems: 'center',
              gap: 6, background: '#fff', borderRadius: 'var(--radius-pill)', padding: '6px 12px',
              boxShadow: 'var(--shadow-md)', fontSize: 12.5, fontWeight: 700, color: 'var(--success)', whiteSpace: 'nowrap',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)' }} />구직 중
            </span>
          </div>
          <div className="reveal">
            <div className="section-eyebrow">Backend Developer</div>
            <h1 style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.035em',
              color: 'var(--fg-strong)', margin: '6px 0 14px', lineHeight: 1.1 }}>dev-xong</h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0, maxWidth: 720 }}>
              24년 3월부터 웹 개발자로 일하고 있습니다.<br />
              시스템 유지보수 사업에 참여하면서 기술부채를 고민하며 개발해왔습니다.<br />
              리팩토링, 성능향상, 백엔드 아키텍처 설계에 관심을 두고 지속적으로 공부중입니다.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginTop: 18,
              background: 'var(--brand-green-weak)', borderRadius: 'var(--radius-pill)',
              padding: '8px 15px 8px 13px', whiteSpace: 'nowrap' }}>
              <Icon name="briefcase" size={16} stroke={2.2} style={{ color: 'var(--brand-green)', flex: 'none' }} />
              <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--fg-2)' }}>경력</span>
              <span style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--brand-green-press)',
                letterSpacing: '-0.01em' }}>{careerYears}년 {careerMonths+1}개월</span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <button className="btn btn--primary" onClick={() => onNav('projects')}>
                프로젝트 보기 <Icon name="arrowRight" size={17} stroke={2.2} />
              </button>
              <a className="btn btn--outline" href="https://github.com/dev-xong" target="_blank" rel="noreferrer">
                <Icon name="github" size={17} /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="profile-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 44,
        }}>
          {PROFILE_INFO.map(([icon, label, value], i) => (
            <div key={label} className="reveal card" style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 16px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
            }}>
              <span style={{
                width: 40, height: 40, borderRadius: 'var(--radius-md)', flex: 'none',
                background: 'var(--brand-blue-weak)', color: 'var(--brand-blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}><Icon name={icon} size={19} /></span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--fg-3)' }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg-strong)',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;
