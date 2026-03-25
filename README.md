# Premium 2025 Portfolio - Nizam Khan M

A breathtaking, high-performance personal portfolio built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- 🚀 **Ultra-Fast**: Built with Vite for instant HMR and optimized production builds.
- 🌓 **Dark Mode**: Persists with localStorage and respects system preferences.
- 🖱️ **Custom Cursor**: Interactive dot and ring cursor for a premium feel.
- ✨ **Smooth Animations**: Powered by Framer Motion for scroll-triggered and page transitions.
- 📱 **Mobile First**: Fully responsive design for all screen sizes.
- 🎨 **Glassmorphism**: Modern UI with soft shadows and blurred backgrounds.
- 🛠️ **Centralized Config**: All content is managed in `src/constants.ts`.

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

To update the content, simply edit `src/constants.ts`. You can change:
- Personal information (name, bio, photo)
- Social media links
- Skills and categories
- Projects (thumbnails, descriptions, links)
- Experience timeline
- EmailJS configuration

## Contact Form (EmailJS)

The contact form is ready to be integrated with EmailJS. 
1. Create an account at [emailjs.com](https://www.emailjs.com/).
2. Get your `Service ID`, `Template ID`, and `Public Key`.
3. Update the `emailJsConfig` in `src/constants.ts`.
4. Implement the `emailjs-com` package in `Contact.tsx` (currently simulated).

## Deployment

### Vercel / Netlify
1. Connect your GitHub repository.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Add any environment variables if needed.

---
Built with ❤️ by Nizam Khan M
