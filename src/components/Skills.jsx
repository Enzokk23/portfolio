const SKILL_GROUPS = [
  {
    title: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "State & API Integration",
    skills: ["React Router", "Axios", "RESTful APIs", "LocalStorage Management"],
  },
  {
    title: "Databases",
    skills: ["SQL", "Relational Schema Design", "Queries"],
  },
  {
    title: "Developer Tools",
    skills: ["Visual Studio Code", "Figma"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-container">
        
        <h2 className="section-heading">What I build with.</h2>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skills__card">
              <h3 className="skills__card-title">{group.title}</h3>
              <div className="skills__badges">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
