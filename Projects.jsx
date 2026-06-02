// Projects.jsx — Project Experience grid + click-through detail modal
const PROJECTS = [
  {
    id: 'admin-code',
    eyebrow: 'Data Modeling',
    title: '행정구역 코드 개선을 통한 데이터 검색 시스템 구축',
    stack: ['Spring Framework', 'iBatis', 'PostgreSQL'],
    problem: '매년 변경되는 행정구역 코드로 인해 시계열 데이터 검색 시 과거 데이터 누락 및 오류 발생.',
    solution: '과거–현재 행정구역 코드 간 매핑 테이블을 직접 설계하고, 이를 활용한 데이터 조회 로직을 시스템에 적용.\n최신 코드로 검색해도 과거 데이터까지 포괄하여 출력되도록 개선.',
    role: '시스템 분석 · 데이터베이스 설계 · 시스템 개발',
    result: '시계열 데이터 조회 정확도 및 검색 편의성 향상\n행정구역 데이터의 정합성과 활용성을 보장하여 시스템 안정성에 기여',
    maps: [],
  },
  {
    id: 'gis-maps',
    eyebrow: 'GIS Development',
    title: 'OpenLayers · Chart.js 기반 웹 지도 제작',
    stack: ['OpenLayers 6.15', 'QGIS 3.0', 'Chart.js 2.8'],
    problem: '도시재생 통계 데이터를 직관적으로 탐색할 수 있는 공간 시각화 도구 필요.',
    solution: 'OpenLayers와 Chart.js를 활용해 쇠퇴지역·정책통계·준공사업을 주제로 한 인터랙티브 웹 지도를 제작.\nQGIS로 공간 데이터를 전처리하여 지도 레이어를 구성.',
    role: '공간 데이터 처리 · 웹 지도 개발 · 통계 시각화',
    result: '3종 주제도 서비스 — 쇠퇴지역 / 정책통계 / 준공사업 지도',
    maps: [
      ['쇠퇴지역지도', '../../assets/img/portfolio/gis/decline-map.png'],
      ['정책통계지도', '../../assets/img/portfolio/gis/policy-map.png'],
      ['준공사업지도', '../../assets/img/portfolio/gis/completion-map.png'],
      ['마을관리사회적협동조합', '../../assets/img/portfolio/gis/coop-status.png', 'https://www.city.go.kr/portal/business/vilmgrcoop/center/list.do'],
    ],
  },
  {
    id: 'web-a11y',
    eyebrow: 'Web Accessibility',
    title: '웹 접근성 개선 (KWCAG 2.1)',
    cover: '../../assets/img/ach/wa-web-accessibility.png',
    coverContain: true,
    stack: ['JSP', 'JavaScript', 'KWCAG 2.1'],
    problem: '2024–2025년 웹 접근성 진단 대응',
    solution: 'KWCAG 2.1(한국형 웹 콘텐츠 접근성 지침)에 따라 다음 항목을 직접 점검하고 개선',
    items: [
      '적절한 대체 텍스트 제공',
      '텍스트 및 이미지 콘텐츠 명도 대비 수정',
      '초점과 이동 표시',
      '적절한 링크 텍스트 제공',
      '제목 제공',
      '콘텐츠의 선형 구조',
      '색에 무관한 콘텐츠 인식',
      '활성/비활성 상태를 색뿐만 아니라 무늬 패턴 또는 주변 정보로 제공',
    ],
    role: '웹 접근성 점검 · 마크업/스타일 개선 · 지침 적용',
    result: 'KWCAG 2.1 주요 항목 준수 — 누구나 동등하게 이용 가능한 화면 구현',
    maps: [],
  },
  {
    id: 'security-sparrow',
    eyebrow: 'Security',
    title: '도시재생 종합정보체계 보안 취약점 조치',
    stack: ['SPARROW', 'Java', '행안부 보안약점'],
    problem: '운영 시스템의 안정성과 보안성 확보를 위한 취약점 조치가 필요.',
    stats: [
      ['상위 프로젝트', 'HUG'],
      ['체커 그룹', '행안부 보안약점'],
      ['소스 파일 수', '4,246개'],
      ['빌드 라인', '1,043,608줄'],
    ],
    solution: 'SPARROW 정적 분석 도구로 전체 소스를 진단하고, 발견된 보안약점을 항목별로 직접 조치.',
    itemsLabel: '✔️ 조치 항목',
    items: [
      '자원 누수',
      '빈 catch 블록',
      '부적절한 예외 처리',
      '표준 라이브러리의 널 반환 값 역참조',
      '시스템 정보 노출',
      '널 반환 값 역참조',
      '사이트 간 요청 위조(CSRF)',
      '세션 간 데이터 노출',
    ],
    role: '정적 분석 진단 · 보안약점 조치 · 코드 개선',
    result: '행안부 보안약점 기준 주요 취약점 조치 완료 - 운영 시스템 보안성 강화',
    maps: [],
  },
  {
    id: 'required-param',
    eyebrow: 'Troubleshooting',
    title: '필수 파라미터 누락 대응 (feat. 로그 개선)',
    stack: ['Spring Legacy', 'Java', 'HandlerInterceptor'],
    problem: '게시물 상세보기 등 일부 요청에서 필수 파라미터가 누락되면 too many results 예외가 발생하는 문제.',
    code: 'java.sql.SQLException:\nError: excuteQueryForObject returned too many results.',
    solution: '시스템 전역에서 필수 파라미터 누락에 대응하도록\n@RequiredParam 커스텀 어노테이션과 HandlerInterceptor를 활용해 문제를 해결.\n필수 파라미터 없이 컨트롤러를 호출하면 Exception을 던지는 대신,\n요청 URL과 누락된 필수 파라미터 정보를 로그로 남기도록 개선.',
    link: 'https://velog.io/@dev-xong/Spring-Legacy-%ED%95%84%EC%88%98%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-%EB%88%84%EB%9D%BD-%EB%8C%80%EC%9D%91-feat-%EC%86%8D%EC%83%81%ED%95%A8-%ED%92%80%EC%9D%B4',
    linkLabel: 'Velog에서 자세히 보기',
    maps: [],
  },
  {
    id: 'gis-skill',
    eyebrow: 'GIS Engineering',
    title: '공간데이터(GIS) 처리 역량',
    summary: 'Shapefile · File Geodatabase · GeoJSON 등 공간데이터를 파싱·변환·정제하고,\n스프링 백엔드에서 공간데이터 조회 API를 구현',
    stack: ['Spring', 'PostGIS', 'QGIS', 'ArcGIS'],
    solutionLabel: '🗺️ 공간데이터(GIS) 처리',
    itemsLabel: '✔️ 보유 역량',
    items: [
      '.shp, .gdb 등 공간데이터 파싱·변환·정제 경험',
      'GeoJSON 파일 가공',
      '스프링 백엔드에서 공간데이터 조회 API 구현',
    ],
    maps: [
      ['기초생활인프라', '../../assets/img/portfolio/gis/park-distribution.png'],
      ['도시재생 선정사업지', '../../assets/img/portfolio/gis/seoul-regen.png'],
    ],
    mapsLabel: '🛰️ 공간데이터 활용 화면 - 우리동네재생정보',
  },
];

function ProjectCard({ p, onOpen }) {
  return (
    <div className="card project-card" onClick={() => onOpen(p)}
      style={{ overflow: 'hidden', cursor: 'pointer', padding: '24px 24px 22px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.03em',
        textTransform: 'uppercase', color: 'var(--brand-green)' }}>{p.eyebrow}</div>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--fg-strong)', margin: '8px 0 12px',
        letterSpacing: '-0.015em', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{p.title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.62, color: 'var(--fg-2)', margin: '0 0 16px' }}>{p.problem || p.summary}</p>
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
        {p.stack.map((s) => <span key={s} className="tech">{s}</span>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 18, whiteSpace: 'nowrap',
        fontSize: 13.5, fontWeight: 600, color: 'var(--brand-green)' }}>
        자세히 보기 <Icon name="arrowRight" size={15} stroke={2.3} />
      </div>
    </div>
  );
}

function ProjectModal({ p, onClose }) {
  React.useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  const Block = ({ label, color, children }) => (
    <div style={{ marginTop: 24 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color, marginBottom: 7 }}>{label}</div>
      <p style={{ fontSize: 16.5, lineHeight: 1.66, color: 'var(--fg-2)', margin: 0, whiteSpace: 'pre-line' }}>{children}</p>
    </div>
  );
  // 첫 줄은 강조, 이어지는 줄은 작고 얙게 렌더링
  const MultiLine = ({ text }) => {
    const [head, ...rest] = String(text).split('\n');
    return (
      <React.Fragment>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg-strong)', lineHeight: 1.5,
          letterSpacing: '-0.005em' }}>{head}</div>
        {rest.length > 0 && (
          <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--fg-2)', lineHeight: 1.55,
            marginTop: 6, whiteSpace: 'pre-line' }}>{rest.join('\n')}</div>
        )}
      </React.Fragment>
    );
  };
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="닫기" style={{ position: 'absolute', top: 16, right: 16, zIndex: 3,
          width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)', cursor: 'pointer',
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', color: 'var(--fg-1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <Icon name="x" size={21} stroke={2.2} />
        </button>
        {p.cover && (
          <div style={{ height: 250,
            backgroundImage: `url(${p.cover})`,
            backgroundSize: p.coverContain ? 'contain' : 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: p.coverContain ? 'var(--white)' : 'transparent',
            borderBottom: p.coverContain ? '1px solid var(--border)' : 'none',
            borderTopLeftRadius: 'var(--radius-2xl)',
            borderTopRightRadius: 'var(--radius-2xl)' }} />
        )}
        <div style={{ padding: p.cover ? '30px 38px 38px' : '38px 38px 38px' }}>
          <div className="section-eyebrow">{p.eyebrow}</div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: 'var(--fg-strong)', margin: '8px 0 0',
            letterSpacing: '-0.02em', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{p.title}</h2>

          {p.problem && <Block label="문제점" color="var(--danger)">{p.problem}</Block>}

          {p.code && (
            <pre style={{ margin: '14px 0 0', background: 'var(--grey-900)', borderRadius: 'var(--radius-md)',
              padding: '15px 18px', overflowX: 'auto', fontFamily: 'var(--font-mono)', fontSize: 13,
              lineHeight: 1.6, color: '#FF9B9B', whiteSpace: 'pre-wrap' }}>{p.code}</pre>
          )}

          {p.stats && p.stats.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, marginTop: 20 }}
              className="stats-grid">
              {p.stats.map(([label, value]) => (
                <div key={label} style={{ background: 'var(--bg-sunken)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: '14px 16px' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg-3)', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--fg-strong)',
                    letterSpacing: '-0.01em' }}>{value}</div>
                </div>
              ))}
            </div>
          )}

          {(p.solution || p.summary) && (
            <Block label={p.solutionLabel || '💡 해결 방안'} color="var(--brand-green)">{p.solution || p.summary}</Block>
          )}

          {p.items && p.items.length > 0 && (
            <React.Fragment>
              {p.itemsLabel && (
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--brand-green)',
                  marginTop: 20, marginBottom: 2 }}>{p.itemsLabel}</div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 14px',
                marginTop: p.itemsLabel ? 10 : 16 }} className="a11y-list">
                {p.items.map((it) => (
                  <div key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: 9,
                    padding: '4px 0' }}>
                    <span style={{ flex: 'none', width: 20, height: 20, borderRadius: '50%', marginTop: 1,
                      background: 'var(--brand-green)', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="check" size={13} stroke={3} />
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-1)', lineHeight: 1.45 }}>{it}</span>
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {p.maps.length > 0 && (
            <React.Fragment>
              {p.mapsLabel && (
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--brand-green)',
                  marginTop: 22, marginBottom: -4 }}>{p.mapsLabel}</div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, marginTop: 22 }}
                className="maps-grid">
                {p.maps.map(([name, src, href]) => (
                  <a key={name} href={href || src} target="_blank" rel="noreferrer" className="card"
                    style={{ overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ height: 150, backgroundImage: `url(${src})`, backgroundSize: 'cover',
                      backgroundPosition: 'top center' }} />
                    <div style={{ padding: '9px 10px', fontSize: 13, fontWeight: 700,
                      color: 'var(--fg-2)', textAlign: 'center' }}>{name}</div>
                  </a>
                ))}
              </div>
            </React.Fragment>
          )}

          {(p.role || p.result) && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 24 }}>
              <div style={{ background: 'var(--bg-sunken)', borderRadius: 'var(--radius-lg)', padding: '18px 20px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--fg-3)', marginBottom: 8 }}>✔️ 주요 역할</div>
                <MultiLine text={p.role} />
              </div>
              <div style={{ background: 'var(--brand-yellow-weak)', borderRadius: 'var(--radius-lg)', padding: '18px 20px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--brand-yellow-deep)', marginBottom: 8 }}>📊 주요 성과</div>
                <MultiLine text={p.result} />
              </div>
            </div>
          )}

          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" className="btn btn--secondary"
              style={{ marginTop: 24, textDecoration: 'none' }}>
              {p.linkLabel || '자세히 보기'} <Icon name="external" size={15} stroke={2.2} />
            </a>
          )}

          <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {p.stack.map((s) => <span key={s} className="tech">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = React.useState(null);
  return (
    <section className="section section--tint" id="projects">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Project Experience</div>
          <h2 className="section-title">프로젝트 주요 경험</h2>
          <p className="section-sub">문제를 정의하고, 직접 설계하고, 결과로 증명한 작업들</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="projects-grid">
          {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} onOpen={setActive} />)}
        </div>
      </div>
      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </section>
  );
}
window.Projects = Projects;
