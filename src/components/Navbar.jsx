import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Training", href: "#training" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          <span className="navbar__brand-mark">KS</span>
          <span className="navbar__brand-text">Kareem Sobhi</span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          Let&rsquo;s talk
        </a>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!isOpen}
      >
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            style={{ transitionDelay: `${index * 30}ms` }}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="navbar__mobile-cta" onClick={handleLinkClick}>
          Let&rsquo;s talk
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
