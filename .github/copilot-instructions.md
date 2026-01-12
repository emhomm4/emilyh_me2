- Project Type: Next.js Resume Website
- Framework: Next.js 15 with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Package Manager: npm

## Project Structure
- All React components are in `src/components/`
- Main page is at `src/app/page.tsx`
- Global styles in `src/app/globals.css`
- Configuration files at project root

## Customization Guidelines
- Update personal information in all component files
- Replace placeholder text with actual content
- Add real email and social media links in Contact component
- Integrate a contact form service for form submissions
- Customize colors and theme in `tailwind.config.ts`

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Notes
- Dark mode is automatically supported via Tailwind
- All components are responsive by default
- Navigation is sticky and includes mobile menu
- Form submission needs email service integration
