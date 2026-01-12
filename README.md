# Emily H - Resume Website

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS. This project showcases your professional experience, education, skills, and provides a contact form for potential employers or collaborators.

## Features

- 🎨 **Modern Design**: Clean and professional design with dark mode support
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js 15 for optimal performance
- 🎯 **TypeScript**: Type-safe code for better development experience
- 💅 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 📧 **Contact Form**: Interactive contact form (ready for integration)
- 🌐 **SEO Friendly**: Optimized for search engines

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository or download the project files

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you edit the files.

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update your name and professional title
   - Modify the introduction text

2. **About Section** (`src/components/About.tsx`):
   - Write your personal story and background

3. **Experience** (`src/components/Experience.tsx`):
   - Add your work experience
   - Include job titles, companies, dates, and achievements

4. **Education** (`src/components/Education.tsx`):
   - Add your educational background
   - Include degrees, institutions, and dates

5. **Skills** (`src/components/Skills.tsx`):
   - List your technical and soft skills
   - Organize them by categories

6. **Contact** (`src/components/Contact.tsx`):
   - Update email and social media links
   - Integrate a contact form service (e.g., Formspree, EmailJS, SendGrid)

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in:
- `tailwind.config.ts` - Modify colors, fonts, and other design tokens
- `src/app/globals.css` - Add custom CSS styles

### Metadata

Update SEO metadata in `src/app/layout.tsx`:
- Page title
- Description
- Other meta tags

## Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed with a production URL

### Other Platforms

You can also deploy to:
- **Netlify**: Connect your Git repository and deploy
- **AWS Amplify**: Deploy with AWS infrastructure
- **DigitalOcean App Platform**: Easy deployment with managed infrastructure
- **Self-hosted**: Build the project and deploy the `.next` folder with Node.js

### Environment Variables

If you add environment variables (e.g., for form submissions), create:
- `.env.local` for local development
- Configure environment variables in your deployment platform

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Home page
│   └── components/
│       ├── About.tsx         # About section
│       ├── Contact.tsx       # Contact form
│       ├── Education.tsx     # Education section
│       ├── Experience.tsx    # Work experience
│       ├── Hero.tsx          # Hero/landing section
│       ├── Navigation.tsx    # Navigation bar
│       └── Skills.tsx        # Skills section
├── public/                   # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React 18](https://react.dev/)** - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Code linting and formatting

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue in the repository or contact the developer.

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!
