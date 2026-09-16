const FOCUS_AREAS = [
  {
    label: "REST APIs & Auth",
    detail: "Connecting client applications to backend services and handling sign-in flows.",
  },
  {
    label: "React Router",
    detail: "Structuring multi-page, navigable single-page applications.",
  },
  {
    label: "Component Architecture",
    detail: "Building interfaces from reusable, maintainable pieces.",
  },
  {
    label: "Debugging & Teamwork",
    detail: "Tracing issues methodically and collaborating well in a team.",
  },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-container">

        <div className="about__layout">
          <div className="about__copy">
            <h2 className="section-heading">A frontend developer grounded in fundamentals.</h2>
            <p className="about__paragraph">
              I&rsquo;m a dedicated and detail-oriented Frontend Developer with an academic
              background in Information Systems. My practical experience comes from building
              responsive web applications with React.js and modern JavaScript.
            </p>
            <p className="about__paragraph">
              That experience includes working with RESTful APIs, authentication flows, React
              Router, Axios, and LocalStorage — alongside component-based development, debugging,
              and collaborating as part of a team.
            </p>
            <p className="about__paragraph">
              I&rsquo;m currently seeking an entry-level React Developer opportunity where I can
              keep building on that foundation.
            </p>
          </div>

          <ul className="about__list">
            {FOCUS_AREAS.map((item) => (
              <li key={item.label} className="about__list-item">
                <span className="about__list-marker" aria-hidden="true"></span>
                <div>
                  <p className="about__list-label">{item.label}</p>
                  <p className="about__list-detail">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
