// Achievements.jsx — certifications
const ACH = [
  { name: 'MOS Master', year: '2019.02', org: 'Microsoft', verified: true },
  { name: 'SQLD', year: '2025.04', org: '한국데이터산업진흥원', verified: true },
  { name: '정보처리기사 (필기)', year: '2025.02', org: '한국산업인력공단', verified: false },
];
function Achievements() {
  return (
    <section className="section section--tint" id="achievements">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Achievements</div>
          <h2 className="section-title">자격증</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="ach-grid">
          {ACH.map((a) => (
            <div key={a.name} className="card ach-card" style={{ padding: '24px 22px' }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                background: a.verified ? 'var(--brand-blue-weak)' : 'var(--bg-muted)',
                color: a.verified ? 'var(--brand-blue)' : 'var(--fg-4)' }}>
                <Icon name="award" size={24} />
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg-strong)', margin: '0 0 10px',
                letterSpacing: '-0.015em' }}>{a.name}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>
                  <span style={{ color: 'var(--fg-4)' }}>취득 </span>{a.year}</span>
                <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>
                  <span style={{ color: 'var(--fg-4)' }}>발급 </span>{a.org}</span>
              </div>
              {!a.verified && (
                <span className="tech" style={{ marginTop: 16, background: 'var(--warning-weak)', color: 'var(--warning)' }}>필기 합격</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Achievements = Achievements;
