# Kareem Sobhi Soliman — Portfolio

A personal portfolio site built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Things to customize before publishing

1. **Profile photo** — replace `src/assets/profile.jpg` with your own photo
   (same filename, any real image will work — the component just imports
   this file).
2. **Project links** — open `src/data/projects.js` and replace every
   `githubUrl: "#"` and `liveUrl: "#"` with your real GitHub repo and live
   demo URLs.
3. **Contact form** — the form currently opens the visitor's email client
   with the message pre-filled (via a `mailto:` link), since no backend is
   connected. To send messages directly from the site instead, connect a
   service such as EmailJS, Formspree, or your own API endpoint inside
   `handleSubmit` in `src/components/Contact.jsx`.

## Project structure

```
src/
├── assets/
│   └── profile.jpg        # replace with your real photo
├── components/            # one component per section
├── data/
│   └── projects.js        # project content — edit here, not in JSX
├── App.jsx
├── main.jsx
└── index.css               # design tokens + all component styles
```
