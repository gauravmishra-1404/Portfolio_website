# Gaurav Mishra — Portfolio

Personal portfolio site — a single-page static site built with plain HTML, CSS, and JavaScript
(no framework, no build step).

**Live:** https://gauravmishra-1404.github.io/Portfolio_website/

## Sections

- **Hero** — name, role, social links, resume download
- **Experience** — timeline (Bodh Sea, JSW One Platform, Mountblue, Coding Samurai, EDERA), with
  a pulsing dot marking the current role
- **Skills** — grouped by category (languages & frameworks, backend & architecture, data &
  caching, cloud & DevOps, practices & tooling)
- **Achievements** — GATE, NIT CGPA, Scaler percentile, problems solved
- **Education** — Scaler Academy, NIT Bhopal, RGPV
- **Other Projects** — Bodh Sea, Weather App, Amazon Clone, research thesis
- **Certifications** — Scaler Skill Mastery badges, Udemy courses, HackerRank, each linking to
  its public verification page where one exists
- **Contact** — email, phone, location, live visitor count

## Tech

- Static HTML5 / CSS3 / vanilla JS — no build tooling, no dependencies to install
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) /
  [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) via Google Fonts
- [GoatCounter](https://www.goatcounter.com/) for privacy-friendly, cookieless visitor analytics
  — the footer's live visitor count reads from GoatCounter's public
  [`/counter/TOTAL.json`](https://www.goatcounter.com/help/visitor-counter) endpoint
- Deployed on **GitHub Pages**, straight from the `main` branch

## Project structure

```
index.html              Page markup (single page, anchor-linked sections)
style.css                All styling — CSS custom properties for the design tokens (colors,
                          fonts) at the top, then one block per section, responsive rules at
                          the bottom (breakpoints: 900px, 720px, 420px)
script.js                Mobile nav toggle + the live visitor count fetch

Gaurav-Mishra-Resume.pdf  Résumé linked from the nav and hero ("download_resume()")
certificates/             Full-resolution certificate images
certificates/thumbs/      Downsized versions actually used in the Certifications section
```

Everything else in the repo root (the videos, the old `nav_back.jpg` / `gav-ani.mp4` /
`amazonclonev.mp4` etc., `Certificate.pdf`, `clean energy certificate.pdf`,
`Edera internship.pdf`, `Gaurav_scaler.pdf`, `Gaurav_final PPT_(202118114).pptx`) are leftover
assets from an earlier version of the site. `index.html` doesn't reference them anymore — they're
just sitting in the repo, not wired to anything.

## Running locally

No build step — just serve the folder and open it:

```bash
python3 -m http.server 8085
# then open http://localhost:8085
```

(GoatCounter's visitor counter reads from a live endpoint, so it won't show a real number when
testing locally — only real visits to the deployed GitHub Pages URL count.)

## Deploying

Push to `main` — GitHub Pages rebuilds automatically. It usually takes a minute or two to go
live; browsers (and GitHub's CDN) can cache the old version for a bit, so a hard refresh
(Ctrl/Cmd+Shift+R) after deploying is often needed to see the change.

## Updating content

- **Résumé**: replace `Gaurav-Mishra-Resume.pdf` with the new file (same filename — nothing else
  needs to change).
- **Certifications**: add the image to `certificates/`, a downsized copy to
  `certificates/thumbs/` (keep these small — under ~70 KB each — since they load on first paint),
  then add a `.cert-row` entry in the Certifications section of `index.html`.
- **Visitor analytics**: dashboard at https://gauravmishra.goatcounter.com — the "allow visitor
  counter" setting must stay on for the footer count to keep working.
