# Nahiyan Portfolio — Deploy Instructions (for Nayem)

This is your NEW, honest portfolio website. Extracting this over your cloned
`protfolio` repo folder and pushing will replace the old site on
https://nahiyandev.vercel.app automatically (Vercel rebuilds on every push).

## Steps (in VS Code)

1. Clone your repo (if not done yet):
   `git clone https://github.com/Nahiyandev/protfolio.git`
2. Extract the zip **into** the cloned `protfolio` folder, overwriting all files.
   (Delete the old `src/` folder first if it exists, so no old files remain.)
3. In VS Code terminal, inside the `protfolio` folder:
   ```
   git add -A
   git commit -m "Replace with new honest portfolio"
   git push
   ```
4. Wait 1–2 minutes — open https://nahiyandev.vercel.app to see the new site.

## What's inside

- `app/` — the site (Next.js App Router). `app/page.tsx` assembles the sections.
- `components/` — Navbar, Hero, About, Skills, Projects, Experience,
  Education, Contact, Footer.
- `data/portfolio.ts` — ALL text content in one place. Edit this file to
  change any wording, add a project, or update skills.
- `public/profile.jpg` — your photo (used in the hero section).
- `public/cv.pdf` — your CV, served at `/cv.pdf` via the Download CV buttons.

## To run locally

```
npm install
npm run dev
```
Then open http://localhost:3000
