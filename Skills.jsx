// Skills.jsx — Skills & Tools, grouped category cards.
// Tech logos via Devicon (jsdelivr) — reliable individual brand SVGs.
const DEV = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;
const SKILL_GROUPS = [
  { icon: 'code', title: 'Languages & Frameworks', items: [
    ['Java', DEV('java/java-original')], ['Spring', DEV('spring/spring-original')],
    ['Node.js', DEV('nodejs/nodejs-original')], ['JavaScript', DEV('javascript/javascript-original')] ] },
  { icon: 'database', title: 'Databases', items: [
    ['PostgreSQL', DEV('postgresql/postgresql-original')], ['MySQL', DEV('mysql/mysql-original')] ] },
  { icon: 'map', title: 'GIS Tools', items: [
    ['QGIS', 'assets/img/skill/qgis.png'], ['ArcGIS', 'assets/img/skill/ArcGIS.png'] ] },
  { icon: 'layers', title: 'Dev Tools & DevOps', items: [
    ['IntelliJ', DEV('intellij/intellij-original')], ['VS Code', DEV('vscode/vscode-original')],
    ['Docker', DEV('docker/docker-original')], ['Git', DEV('git/git-original')] ] },
];
function SkillChip({ name, src }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--bg-sunken)',
      border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '7px 13px 7px 9px',
      fontSize: 13.5, fontWeight: 600, color: 'var(--fg-1)' }}>
      <img src={src} alt={name} style={{ height: 24, width: 24, objectFit: 'contain' }} />{name}
    </span>
  );
}
function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Skills &amp; Tools</div>
          <h2 className="section-title">백엔드 중심의 기술 스택</h2>
          <p className="section-sub">서버 · 데이터 · 공간정보(GIS)를 아우르는 개발 도구</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="card skill-card" style={{ padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-md)',
                  background: 'var(--brand-blue-weak)', color: 'var(--brand-blue)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={g.icon} size={20} />
                </span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--fg-strong)', margin: 0,
                  letterSpacing: '-0.01em' }}>{g.title}</h3>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>
                {g.items.map(([name, src]) => <SkillChip key={name} name={name} src={src} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Skills = Skills;
