function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-container">
        
        <h2 className="section-heading">Education</h2>

        <div className="education__card">
          <div className="education__timeline" aria-hidden="true">
            <span className="education__timeline-dot"></span>
            <span className="education__timeline-line"></span>
          </div>

          <div className="education__content">
            <p className="education__years">2023 — Expected 2027</p>
            <h3 className="education__degree">Bachelor of Science in Information Systems (IS)</h3>
            <p className="education__school">
              Mansoura University — Faculty of Computers and Information
            </p>
            <p className="education__grade">
              Cumulative Grade: <span>Very Good</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
