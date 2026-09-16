function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container footer__inner">
        <div>
          <p className="footer__name">Kareem Sobhi Soliman</p>
          <p className="footer__role">Frontend Developer</p>
        </div>

        <div className="footer__links">
          <a href="https://linkedin.com/in/kareemsobhi-23ek" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:kareemenzo29@gmail.com">Email</a>
        </div>

        <p className="footer__copyright">© {year} Kareem Sobhi Soliman. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
