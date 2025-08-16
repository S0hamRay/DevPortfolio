# DevPortfolio

A modern, interactive developer portfolio built with React, Three.js, and Framer Motion.

## Features

- **3D Interactive Elements**: Built with Three.js and React Three Fiber
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Modern UI with Tailwind CSS
- **Interactive Components**: Parallax effects, 3D models, and dynamic animations
- **Contact Integration**: Email functionality with EmailJS
- **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion, React Spring
- **Styling**: Tailwind CSS, PostCSS
- **Build Tool**: Vite
- **Linting**: ESLint

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/S0hamRay/DevPortfolio.git

# Navigate to the project directory
cd DevPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D Three.js components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Hero.jsx        # Hero section
│   ├── Navbar.jsx      # Navigation
│   ├── Tech.jsx        # Technologies section
│   └── Works.jsx       # Projects showcase
├── assets/             # Images, icons, and 3D models
├── constants/          # Configuration constants
├── hoc/               # Higher-order components
├── styles.js          # Tailwind CSS utilities
└── utils/             # Utility functions
```

## Contributing

This is a personal portfolio project. Feel free to fork and adapt for your own use.

## License

MIT License - feel free to use this code for your own portfolio.
