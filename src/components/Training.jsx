const TRAINING_POINTS = [
  "Completed intensive technical training focused on Single Page Application (SPA) architecture and modern frontend best practices.",
  "Engineered reusable, component-driven interfaces in React utilizing hooks, state management, and props workflows.",
  "Collaborated with peers within agile sprint cycles, delivering assigned application modules on schedule.",
];

function Training() {
  return (
    <section id="training" className="section training">
      <div className="section-container">
        <p className="section-tag">// training</p>
        <h2 className="section-heading">Practical Training</h2>

        <div className="training__card">
          <div className="training__card-header">
            <div>
              <h3 className="training__org">Information Technology Institute (ITI)</h3>
              <p className="training__role">React.js Web Development Trainee</p>
            </div>
            <span className="training__badge">Training Program</span>
          </div>

          <ul className="training__points">
            {TRAINING_POINTS.map((point) => (
              <li key={point} className="training__point">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Training;
