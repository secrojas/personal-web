<div align="center">

# 💼 Sebastian Rojas - Digital CV

### Full Stack Web Developer | Software Engineer

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[View Live Demo](https://srojasweb.dev) • [Report Bug](https://github.com/secrojas/cv/issues) • [Request Feature](https://github.com/secrojas/cv/issues)

</div>

---

## 📋 About The Project

A modern, minimalist digital CV/resume built with cutting-edge web technologies. This project showcases my professional experience, skills, and education in a clean, print-friendly, and responsive layout.

**Key Highlights:**
- Single-page application with smooth user experience
- Print-optimized layout for PDF exports
- Fully responsive design for all devices
- Static export ready for any hosting (cPanel, Netlify, Vercel, etc.)
- Fast and optimized with Next.js 14

---

## ✨ Features

- 🎨 **Modern Design** - Clean and professional minimalist UI
- 📱 **Responsive** - Perfectly adapted for desktop, tablet, and mobile
- 🖨️ **Print-Friendly** - Optimized layout for PDF generation
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🔍 **SEO Optimized** - Meta tags and structured data included
- 🎯 **Easy to Customize** - Single config file for all content
- 📦 **Static Export** - Deploy anywhere (cPanel, Netlify, Vercel, GitHub Pages)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or npm/yarn/pnpm installed

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:secrojas/cv.git
   cd cv
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Customize your CV**

   Edit the [resume-data.tsx](./src/data/resume-data.tsx) file with your information

---

## 🏗️ Build for Production

This project is configured for **static export**, making it compatible with any hosting provider.

```bash
# Create optimized static build
npm run build
```

This will generate an `out/` folder with all static files ready to deploy.

---

## 🚀 Deploy to cPanel (or any static hosting)

### Method 1: Via File Manager (Recommended for cPanel)

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Locate the output:**
   - All files will be in the `out/` folder

3. **Upload to cPanel:**
   - Login to your cPanel
   - Go to **File Manager**
   - Navigate to `public_html` (or your domain's root directory)
   - Upload **all contents** from the `out/` folder (not the folder itself)
   - Make sure `index.html` is in the root of your public_html

4. **Done!** Your CV should be live at your domain

### Method 2: Via FTP

1. Build the project: `npm run build`
2. Connect to your server via FTP (FileZilla, WinSCP, etc.)
3. Upload all files from `out/` folder to your `public_html` directory
4. Ensure proper permissions (644 for files, 755 for folders)

### Method 3: Via Git on cPanel (Advanced)

If your cPanel supports Git deployment:

1. Clone the repository on your server
2. Install Node.js on cPanel (if available)
3. Run `npm install && npm run build`
4. Point your domain to the `out/` directory

---

## 🐳 Run with Docker

**Build the container:**
```bash
docker compose build
```

**Run the container:**
```bash
docker compose up -d
```

**Stop the container:**
```bash
docker compose down
```

---

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework for production (Static Export)
- **[React 18](https://reactjs.org/)** - JavaScript library for building UIs
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components

---

## 📂 Project Structure

```
cv/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── data/            # Resume data configuration
│   ├── images/          # Static images
│   └── lib/             # Utility functions
├── public/              # Public assets
└── package.json         # Dependencies
```

---

## ⚙️ Configuration

All resume content can be customized in a single file:

**[src/data/resume-data.tsx](./src/data/resume-data.tsx)**

Update your:
- Personal information
- Work experience
- Education
- Skills
- Certifications
- Projects
- Contact details

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Sebastian Rojas**

- Website: [srojasweb.dev](https://srojasweb.dev)
- GitHub: [@secrojas](https://github.com/secrojas)
- LinkedIn: [linkedin.com/in/secrojas](https://www.linkedin.com/in/secrojas)
- Email: sec.rojas@gmail.com

---

## 🙏 Acknowledgments

- Original template inspired by [Bartosz Jarocki's CV](https://github.com/BartoszJarocki/cv)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ by [Sebastian Rojas](https://github.com/secrojas)

</div>
