# Danial Amirjalali Online Resume

A personal online resume built with React, TypeScript, Vite, React Router, and Material UI. The site presents profile information, experience, certifications, resume links, and contact links in a simple portfolio-style layout.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Material UI
- PNPM

## Pages

- `/` - Home page
- `/helloworld` - About/profile page
- `/experience` - Work experience
- `/certifications` - Certifications and resume PDF

## Project Structure

```text
src/
  App.tsx                  Main app routes and layout
  HelloWorld.tsx           About/profile page
  experience.tsx           Experience page
  certifications.tsx       Certifications and resume page
  components/navbar.tsx    Navigation bar
  components/footer.tsx    Footer links
  index.css                Global layout and footer styles
  App.css                  Page-specific styles
  assets/                  Images and resume PDF
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

Run linting:

```bash
pnpm lint
```

## Updating Content

- Update the about text in `src/HelloWorld.tsx`.
- Update work experience in `src/experience.tsx`.
- Update certifications and resume PDF references in `src/certifications.tsx`.
- Update contact and social links in `src/components/footer.tsx`.
- Update navigation labels and links in `src/components/navbar.tsx`.

## Assets

Profile images and resume PDFs are stored in `src/assets/`. If replacing an asset, update the matching import path in the related component.
