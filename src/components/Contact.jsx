import { useState } from "react";

const CONTACT_EMAIL = "kareemenzo29@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // No backend or email service is connected yet. Submitting opens the
  // visitor's own email client with the message pre-filled, so the form is
  // functional today. To send messages directly from the site later, swap
  // this handler for a call to an email service (e.g. EmailJS, Formspree,
  // or a custom API endpoint) using the same `form` state below.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-container">
        <p className="section-tag">// contact</p>

        <div className="contact__layout">
          <div className="contact__info">
            <h2 className="section-heading">Let&rsquo;s work together.</h2>
            <p className="contact__intro">
              I&rsquo;m open to entry-level React Developer opportunities. Feel free to reach out
              directly or send a message using the form.
            </p>

            <ul className="contact__details">
              <li>
                <span className="contact__label">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <span className="contact__label">Phone</span>
                <a href="tel:+201062060467">+20 106 206 0467</a>
              </li>
              <li>
                <span className="contact__label">Location</span>
                <span>Mansoura, Dakahlia, Egypt</span>
              </li>
              <li>
                <span className="contact__label">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/kareemsobhi-23ek"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/kareemsobhi-23ek
                </a>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              Send Message
            </button>
            <p className="contact__note">
              Opens your email client with this message pre-filled — no backend is connected yet.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
