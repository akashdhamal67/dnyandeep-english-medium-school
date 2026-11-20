# Dnyandeep English School Website

Modern, fully responsive, and accessible website for **Dnyandeep English School** (Manjari Khurd, Pune), built to replace the legacy site at [des.org.in](https://des.org.in).

## ✨ Features & Architecture

- **Visual Design**: Academic, warm, and prestigious design system featuring Deep Royal Navy (`#0b1f44`), Warm Gold/Amber (`#c59328`), and soft cream surfaces (`#fcfbf7`).
- **Typography**: Serif headlines (*Playfair Display*) paired with clean body text (*Plus Jakarta Sans*).
- **Responsive & Mobile-First**: Sticky header with navigation dropdowns, full mobile hamburger menu, rounded cards, and smooth scroll animations.
- **Dark Mode**: System-aware and manual toggle with persistence in `localStorage`.
- **SEO & Social**:
  - Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Unique meta titles, descriptions, and Open Graph tags across every page.
  - School Schema (`School` JSON-LD) with official contact and location details.
  - `robots.txt` and `sitemap.xml` included.
- **Forms & Interactivity**:
  - Client-side validated Admission Enquiry Form (Home & Admissions).
  - Career Job Application Form with resume upload.
  - Contact Us Form.
  - Interactive FAQ Accordion.
  - Filterable School Photo Gallery (Classroom, Cultural, Sports, Annual Functions).
  - Interactive Google Maps embed and YouTube video showcase (`swoo5zICo18`).
- **Clean Content**:
  - No lorem ipsum, no fake testimonials, and zero Acadrova template leftovers.
  - Commented-out stats block with `TODO` placeholders pending verified school administration figures.

---

## 📂 Page Directory

| File | Page & Purpose |
| :--- | :--- |
| `index.html` | **Home Page** with all 11 required sections (Hero, About 1944, Why Choose, Academics, Video Quote, Facilities, Filterable Gallery, Admissions CTA Band, FAQ Accordion, Admission Form, Google Map). |
| `about.html` | **About Us**: School heritage since 1944, educational philosophy, vision & values, Principal's message slot, and photo gallery. |
| `admissions.html` | **Admissions 2026–27**: 3-step process (Enquire → Apply Online → Confirmation), age criteria (Nursery: 3–5 years), required documents, and direct application links. |
| `academics.html` | **Academics Overview**: Three progressive tiers, concept-based methodology, and individual academic support. |
| `pre-primary.html` | **Pre-Primary Section**: Nursery, Jr. KG, Sr. KG program overview, play-way approach, and Apply CTA. |
| `primary.html` | **Primary Section**: Std 1 to 4 fundamentals, curriculum details, and Apply CTA. |
| `secondary.html` | **Secondary Section**: Std 5 to 10 Maharashtra SSC Board preparation, labs, exhibitions, and Apply CTA. |
| `resources.html` | **Resources Hub**: Quick links to the NeverSkip Student Parent Portal, Online Admission Form, and School portals. |
| `career.html` | **Career**: Introduction and candidate application form with resume file upload. |
| `contact.html` | **Contact Us**: Address, dual contact numbers, email, office timings, Google Map embed, and contact form. |

---

## 🛠️ How to Edit Content & Replace Placeholders

### 1. Updating School Photos & Logo
- **Logo**: Place your official logo at `images/logo.png`. Update the `src` in header or replace the decorative `D` crest inside the header templates.
- **Campus Photos**: Replace the placeholder image cards marked `[Photo Placeholder]` in `index.html` and `about.html` with your actual photography:
  ```html
  <img src="images/campus-1.jpg" alt="Dnyandeep English School Campus" class="w-full h-full object-cover rounded-2xl" />
  ```

### 2. Updating Stats (When Confirmed)
- In `index.html`, locate the commented section labeled `<!-- TODO: STATS SECTION -->`.
- Fill in the verified student count, educator count, and SSC board pass percentage, then uncomment the HTML block.

### 3. Contact & Phone Details
- Top bar and footer phone numbers (`+91-8484844067` and `+91-7276095235`) and email (`info@des.org.in`) can be updated across the files or centralized if converting to Next.js components.

---

## 🚀 Deployment to Vercel

This repository is structured for instant zero-configuration deployment to Vercel as a static production website:

1. Push this project to GitHub / GitLab / Bitbucket:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Dnyandeep English School website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import your repository.
4. Framework Preset: **Other** (leave Root Directory as `./`).
5. Click **Deploy**. Vercel will instantly generate a global CDN URL (e.g. `https://des-pune.vercel.app`) with free SSL.
6. Connect your custom domain `des.org.in` in **Project Settings > Domains**.

# dnyandeep-english-medium-school
