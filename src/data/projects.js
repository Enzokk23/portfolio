// Replace githubUrl and liveUrl below with real links once available.
// These are intentionally left as "#" placeholders — search for "#" in this
// file to find every link that still needs to be filled in.

const projects = [
  {
    id: "luxe-ecommerce",
    name: "Luxe",
    tagline: "E-Commerce Web Application",
    type: "Team Project — 4 Members",
    description:
      "A multi-page e-commerce application built collaboratively by a team of four. I was responsible for the authentication system and the client-side session handling that keeps users signed in as they browse.",
    technologies: [
      "React.js",
      "React Router",
      "Axios",
      "JavaScript (ES6+)",
      "CSS",
      "LocalStorage",
    ],
    contribution: [
      "Architected the end-to-end authentication module, including Login and Sign-Up, with client-side form validation rules.",
      "Integrated backend REST API endpoints using Axios for login requests and session tokens.",
      "Configured session state caching using browser LocalStorage to maintain authentication across tab sessions.",
      "Structured navigation pathways and programmatic redirects using React Router for a smooth user flow.",
    ],
    features: [
      "Login & Sign-Up flows",
      "Persistent session handling",
      "Protected route redirects",
      "Form validation",
    ],
    image: null,
    githubUrl: "https://github.com/Enzokk23/luxe-e-commerce-react",
    liveUrl: "https://luxe-e-commerce-react.vercel.app",
  },
  {
    id: "movie-explorer",
    name: "Movie Explorer",
    tagline: "Dynamic Web Application",
    type: "Individual Project",
    description:
      "A responsive movie catalog that fetches live data from a public REST API. Built solo to practice API integration, dynamic routing, and handling real-world async states like loading and errors.",
    technologies: [
      "React.js",
      "React Router",
      "Axios",
      "Public REST API",
      "CSS",
    ],
    contribution: [
      "Designed and built the full application independently, from data fetching to UI.",
      "Implemented Axios-based API integration with async/await request handling.",
      "Built dynamic, parameterized routes for individual movie detail pages.",
    ],
    features: [
      "Responsive media catalog",
      "Instant live search filtering",
      "Dynamic movie detail routes",
      "Loading indicators & error recovery states",
    ],
    image: null,
    githubUrl: "https://github.com/Enzokk23/movies",
    liveUrl: "https://movies-nu-lilac.vercel.app",
  },
];

export default projects;
