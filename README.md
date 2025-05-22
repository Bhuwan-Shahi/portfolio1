Bhuwan Shahi Portfolio
A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark theme with vibrant accents, and professional design.

🚀 Features
Modern Design: Dark theme with blue/green gradient accents
Responsive Layout: Works perfectly on all devices
Smooth Animations: AOS (Animate On Scroll) library integration
Interactive Elements: Hover effects, animated counters, and transitions
Professional Sections: Hero, About, Services, Portfolio, Testimonials, Contact
Performance Optimized: Built with Vite for fast loading
Clean Code: Well-structured and maintainable React components
🛠️ Tech Stack
Frontend: React 18
Build Tool: Vite
Styling: Tailwind CSS
Icons: Lucide React
Animations: AOS (Animate On Scroll)
Font: Poppins (Google Fonts)
📦 Installation
Clone the repository
bash
git clone <your-repo-url>
cd PORTFOLIO1
Install dependencies
bash
npm install
Start development server
bash
npm run dev
Build for production
bash
npm run build
Preview production build
bash
npm run preview
🎨 Customization
Personal Information
Update the following in src/App.jsx:

Name and branding
Contact information (email, phone, location)
Social media links
About section content
Services and skills
Project portfolio
Testimonials
Styling
Colors: Modify gradient colors in tailwind.config.js
Fonts: Change font family in tailwind.config.js
Animations: Customize animations in src/index.css
Images
Replace placeholder images with your actual photos:

Profile picture in About section
Project thumbnails in Portfolio section
Add your own project screenshots
📱 Sections
Hero Section: Introduction with animated text and CTA
About Section: Personal background with animated counters
Services Section: Skills and services offered
Portfolio Section: Project showcase with hover effects
Testimonials Section: Client/peer reviews
Contact Section: Contact form and information
Footer: Simple footer with copyright
🌐 Deployment
Netlify Deployment
Build the project: npm run build
Upload the dist folder to Netlify
Configure custom domain (optional)
Vercel Deployment
Connect your GitHub repository to Vercel
Set build command: npm run build
Set output directory: dist
Deploy automatically
GitHub Pages
Install gh-pages: npm install --save-dev gh-pages
Add to package.json scripts:
json
"homepage": "https://yourusername.github.io/PORTFOLIO1",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
Run: npm run deploy
🔧 Configuration Files
package.json: Dependencies and scripts
vite.config.js: Vite configuration
tailwind.config.js: Tailwind CSS configuration
postcss.config.js: PostCSS configuration
eslint.config.js: ESLint configuration
📄 File Structure
PORTFOLIO1/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite config
├── tailwind.config.js   # Tailwind config
├── postcss.config.js    # PostCSS config
├── eslint.config.js     # ESLint config
└── README.md           # Documentation
🎯 Performance Tips
Image Optimization: Use WebP format for images
Lazy Loading: Implement lazy loading for images
Code Splitting: Use React.lazy() for large components
Bundle Analysis: Use npm run build -- --analyze
🐛 Troubleshooting
Common Issues:
Node modules: Delete node_modules and run npm install
Build errors: Check console for specific error messages
Styling issues: Ensure Tailwind CSS is properly configured
Animation problems: Verify AOS initialization in main.jsx
📞 Support
For support or questions about customization:

Check the documentation
Review the code comments
Search for similar issues in the project
📝 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Design inspiration from modern portfolio websites
Icons from Lucide React
Fonts from Google Fonts
Animation library: AOS
Framework: React + Vite + Tailwind CSS
Built with ❤️ for Bhuwan Shahi

