// app.jsx — composes the portfolio
function App() {
  const onNav = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };
  return (
    <React.Fragment>
      <NavBar onNav={onNav} />
      <Hero onNav={onNav} />
      <Skills />
      <Career />
      <Projects />
      <Achievements />
      <Footer />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
