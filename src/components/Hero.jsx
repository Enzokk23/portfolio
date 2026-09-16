import { useState } from "react";
import profileImg from "../assets/profile.jpg";

function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true"></div>

      <div className="section-container hero__inner">
        <div className="hero__content">
          <p className="hero__kicker">
            <span className="hero__kicker-dot"></span>
            Available for entry-level React roles
          </p>

          <h1 className="hero__name">
            Kareem Sobhi
            <br />
            Soliman
          </h1>

          <p className="hero__role">
            Frontend Developer <span className="hero__role-divider">/</span> Information
            Systems Student
          </p>

          <p className="hero__intro">
            Dedicated and detail-oriented Frontend Developer with an academic background in
            Information Systems and practical experience building responsive web applications
            using React.js and modern JavaScript.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__code-chip" aria-hidden="true">
            <span className="hero__code-dot hero__code-dot--gold"></span>
            <span className="hero__code-dot hero__code-dot--blue"></span>
            <span className="hero__code-dot"></span>
            <code>&lt;Developer stack=&quot;React&quot; /&gt;</code>
          </div>

          <div className="hero__frame">
            <div className="hero__frame-ring" aria-hidden="true"></div>
            {!imgFailed ? (
              <img
                src={profileImg}
                alt="Portrait of Kareem Sobhi Soliman"
                className="hero__image"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="hero__image hero__image--fallback" role="img" aria-label="Portrait of Kareem Sobhi Soliman">
                KS
              </div>
            )}
          </div>

          <div className="hero__brackets" aria-hidden="true">
            <span>{"{"}</span>
            <span>{"}"}</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <span className="hero__scroll-line"></span>
        Scroll
      </a>
    </section>
  );
}

export default Hero;
