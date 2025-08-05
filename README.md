# Selma Bettaieb - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth scrolling navigation, animated sections, and comprehensive project showcases.

## 🚀 Features

- **Modern Tech Stack**: Next.js 13+, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered transitions and scroll animations
- **Project Showcase**: Detailed project cards with filtering and search capabilities
- **Multi-Section Layout**: Hero, About, Experience, Skills, Projects, and Contact sections
- **Performance Optimized**: Static generation with optimized images and lazy loading

## 📋 Sections Completed

### ✅ Implemented Sections:
1. **Hero Section** - Dynamic introduction with animated background
2. **About Section** - Personal introduction and profile image
3. **Experience Section** - International volunteer and work experiences
4. **Skills Section** - Technical skills, soft skills, and achievements
5. **Projects Section** - Comprehensive project showcase with filtering
6. **Contact Section** - Contact information and social links

### 📊 Data Structure:
- **Projects** (`/src/data/projects.json`) - 11 detailed projects including:
  - 🏆 Award-winning NeuroRAG medical AI system
  - 🏢 DocConnect university management platform
  - 🌾 Female farmers health analysis system
  - 🏠 Student housing management system
  - 🔬 Multiple research and academic projects

- **Experiences** (`/src/data/experiences.json`) - International experiences:
  - 🇹🇷 Turkey - AIESEC English teaching volunteer
  - 🇲🇦 Morocco - Baby care center volunteer
  - 🇹🇳 Tunisia - Post office internships
  - 🇮🇳 India - Upcoming healthcare technology work

- **Skills** (`/src/data/skills.json`) - Comprehensive skill set:
  - **Technical**: AI/ML, Backend, Frontend, DevOps, Data Analytics
  - **Soft Skills**: Global collaboration, problem-solving, cultural adaptability
  - **Achievements**: Hackathon wins, international impact, research contributions

## 🛠️ Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── data/
│   ├── projects.json
│   ├── experiences.json
│   └── skills.json
├── types/
│   └── index.ts
├── pages/
│   ├── index.tsx
│   └── _app.tsx
└── styles/
    └── globals.css
```

## 🎯 Key Features

### Navigation
- Smooth scroll navigation between sections
- Auto-hiding navbar on scroll
- Active section highlighting
- Mobile-responsive navigation

### Projects
- Filterable project showcase
- Detailed project modals
- Technology stack highlighting
- Impact metrics and achievements
- Links to live demos and repositories

### Experience
- International volunteer experiences
- Visual country flags and timelines
- Status indicators (completed/upcoming)
- Impact descriptions and skills gained

### Skills
- Organized technical skill categories
- Soft skills with descriptions
- Key achievements showcase
- Visual skill presentations

## 🌍 Global Impact Focus

This portfolio showcases projects and experiences with real-world impact:
- **Healthcare AI**: Medical information systems for neurological diseases
- **Safety Technology**: Construction helmet detection systems
- **Agricultural Health**: Farmer health risk analysis platforms
- **Education**: University management and student housing solutions
- **Global Volunteering**: Cross-cultural education and healthcare initiatives

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Static Generation**: Fast loading with Next.js SSG
- **Optimized Images**: Automatic image optimization
- **Code Splitting**: Dynamic imports for optimal loading

## 🔧 Customization

The portfolio is designed to be easily customizable:
- Update data files in `/src/data/` to reflect your projects and experiences
- Modify component styles in individual section files
- Customize colors and styling in `tailwind.config.js`
- Add new sections by creating components and updating the main page

## 📞 Contact

- **Email**: bettaiebselma@fss.u-sfax.tn
- **LinkedIn**: [linkedin.com/in/sambett](https://www.linkedin.com/in/sambett/)
- **GitHub**: [github.com/sambett](https://github.com/sambett)

---

Built with ❤️ and deployed on Vercel
