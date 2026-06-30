# Chirag Mendiratta — Portfolio

A React + Vite + Tailwind CSS portfolio site. Dark, terminal-inspired design with
sections for Hero, About, Skills, Experience, Services, Projects, Testimonials, and Contact.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are output to `dist/`.

## Project structure

```
src/
  components/      one file per section (Hero, About, Skills, Experience,
                    Services, Projects, Testimonials, Contact, Navbar, Footer)
  data/content.js  all text content — profile info, skills, experience,
                    projects, testimonials. Edit this file to update the site.
  assets/projects/ put project screenshots here
  index.css        Tailwind import + fonts + CSS variables (--accent, --cyan)
```

## Adding your real project data

Open `src/data/content.js`:

- **Live demo links**: set `demo: "https://your-deployed-app.com"` on a project.
  Leave it as `""` and the card shows "Demo coming soon" automatically.
- **GitHub links**: set `github` per project if it differs from your main profile.
- **Screenshots**: drop an image into `src/assets/projects/`, then either:
  - `import shot from "../assets/projects/luna.png"` in `content.js` and set
    `screenshot: shot`, or
  - reference it directly as `screenshot: "/src/assets/projects/luna.png"`.

## Wiring up the contact form

The form in `src/components/Contact.jsx` currently only updates local state
(no email is actually sent). To receive real messages without a backend:

**Option A — Formspree** (easiest)
1. Create a form at https://formspree.io and copy your endpoint.
2. In `handleSubmit`, replace the body with:
   ```js
   await fetch("https://formspree.io/f/YOUR_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(form),
   });
   ```

**Option B — EmailJS**
1. Set up a service/template at https://www.emailjs.com.
2. `npm install @emailjs/browser` and call `emailjs.send(...)` in `handleSubmit`.

## Deploying

This is a static site — deploy the `dist/` folder (after `npm run build`) to:

- **Vercel**: `npm i -g vercel` → `vercel` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder at app.netlify.com/drop, or connect
  the GitHub repo with build command `npm run build` and publish directory `dist`
- **GitHub Pages**: use the `gh-pages` package or GitHub Actions with the Vite build

## Tech stack

React 19 · Vite · Tailwind CSS v4 · lucide-react icons
