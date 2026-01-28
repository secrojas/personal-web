<div align="center">

# Sebastian Rojas - Portfolio & CV

### Senior Backend Developer | PHP / Laravel

[![Astro](https://img.shields.io/badge/Astro-5-BC52EE?style=for-the-badge&logo=astro)](https://astro.build/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[View Live Demo](https://srojasweb.dev) | [View Resume](https://srojasweb.dev/resume)

</div>

---

## About The Project

A modern portfolio and digital CV built with Astro 5. Features a landing page portfolio with hero section, tech stack, experience highlights, and projects, plus a detailed resume page optimized for print.

**Key Highlights:**
- Portfolio landing page + detailed resume page
- Print-optimized resume layout for PDF exports
- Fully responsive design for all devices
- Static export ready for any hosting
- Fast performance with Astro's partial hydration

---

## Features

- **Dual Layout** - Portfolio landing page + detailed resume
- **Modern Design** - Clean, professional dark theme UI
- **Responsive** - Adapted for desktop, tablet, and mobile
- **Print-Friendly** - Resume page optimized for PDF generation
- **Fast Performance** - Built with Astro 5 and partial hydration
- **Easy to Customize** - Single config file for all content
- **Static Export** - Deploy anywhere (cPanel, Netlify, Vercel)

---

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:secrojas/cv.git
   cd cv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:4321](http://localhost:4321)

5. **Customize your content**

   Edit [src/data/resume-data.ts](./src/data/resume-data.ts) with your information

---

## Build for Production

```bash
npm run build
```

This generates a `dist/` folder with all static files ready to deploy.

**Preview the build:**
```bash
npm run preview
```

---

## Deploy to cPanel (or any static hosting)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to cPanel:**
   - Login to your cPanel
   - Go to **File Manager**
   - Navigate to `public_html`
   - Upload **all contents** from the `dist/` folder
   - Make sure `index.html` is in the root

3. **Done!** Your site should be live

---

## Built With

- **[Astro 5](https://astro.build/)** - Static site generator with partial hydration
- **[React 18](https://reactjs.org/)** - For interactive components (Command Menu)
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS

---

## Project Structure

```
cv/
├── src/
│   ├── components/
│   │   ├── icons/        # SVG icon components
│   │   ├── portfolio/    # Portfolio page components
│   │   ├── resume/       # Resume page components
│   │   └── ui/           # Shared UI components
│   ├── data/
│   │   └── resume-data.ts  # All content configuration
│   ├── layouts/          # Page layouts
│   ├── pages/            # Astro pages (index, resume)
│   └── styles/           # Global styles
├── public/               # Static assets
└── package.json
```

---

## Configuration

All content is in a single file: **[src/data/resume-data.ts](./src/data/resume-data.ts)**

Update your:
- Personal information
- Work experience
- Education
- Skills
- Certifications
- Projects
- Contact details

---

## Author

**Sebastian Rojas**

- Website: [srojasweb.dev](https://srojasweb.dev)
- GitHub: [@secrojas](https://github.com/secrojas)
- LinkedIn: [linkedin.com/in/secrojas](https://www.linkedin.com/in/secrojas)

---

## Acknowledgments

- Original template inspired by [Bartosz Jarocki's CV](https://github.com/BartoszJarocki/cv)
- Icons by [Lucide](https://lucide.dev/)

</div>
