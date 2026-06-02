// Career.jsx — Project / career timeline + linked live sites
const SITES = [
  { name: '우리동네재생정보', img: '../../assets/img/about/analysis.png', href: 'https://www.city.go.kr/map/index.do' },
  { name: '도시재생종합정보체계', img: '../../assets/img/about/portal.png', href: 'https://www.city.go.kr/index.do' },
];
const TIMELINE = [
  { title: '도시재생종합정보체계 시스템 유지관리 사업 1차', period: '2024.03 — 2024.08', done: true },
  { title: '도시재생종합정보체계 시스템 유지관리 사업 2차', period: '2024.09 — 2025.08', done: true },
  { title: '도시재생종합정보체계 시스템 유지관리 사업 3차', period: '2025.09 — 현재', done: false },
];
function Career() {
  return (
    <section className="section" id="career" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: 36 }}>
          <div className="section-eyebrow">Career</div>
          <h2 className="section-title">참여 중인 프로젝트</h2>
          <p className="section-sub">2024년 3월, 부산에서 웹 개발을 시작했습니다</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 44, alignItems: 'stretch' }}
          className="career-grid">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {SITES.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="card site-card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, minHeight: 168, backgroundImage: `url(${s.img})`, backgroundSize: 'cover',
                  backgroundPosition: 'top center' }} />
                <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 8 }}>
                  <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--fg-strong)' }}>{s.name}</span>
                  <Icon name="arrowUpRight" size={16} stroke={2.2} style={{ color: 'var(--fg-4)' }} />
                </div>
              </a>
            ))}
          </div>
          <div style={{ position: 'relative', paddingLeft: 28, display: 'flex', alignItems: 'center' }}>
            <span style={{ position: 'absolute', left: 5, top: 8, bottom: 8, width: 2,
              background: 'var(--border)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30, width: '100%' }}>
              {TIMELINE.map((t) => (
                <div key={t.title} style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: -28, top: 4, width: 13, height: 13,
                    borderRadius: '50%', background: t.done ? 'var(--brand-green)' : '#fff',
                    border: `2.5px solid ${t.done ? 'var(--brand-green)' : 'var(--brand-yellow)'}`,
                    boxShadow: '0 0 0 4px var(--bg-page)' }} />
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-strong)', margin: 0,
                    letterSpacing: '-0.015em', lineHeight: 1.45 }}>{t.title}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginTop: 7 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, color: 'var(--fg-3)' }}>{t.period}</span>
                    {!t.done && <span style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--brand-yellow-deep)', whiteSpace: 'nowrap',
                      background: 'var(--brand-yellow-weak)', padding: '3px 9px', borderRadius: 'var(--radius-pill)' }}>진행 중</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Career = Career;
