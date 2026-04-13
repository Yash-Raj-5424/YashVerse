# Portfolio Project

This is the Next.js portfolio for Yash Raj - Backend Engineer.

## Setup Instructions

1. Navigate to the project directory:
   ```bash
   cd YashVerse
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Add Profile Image
- Place your profile image at `public/profile.jpg`
- Recommended size: 400x400px or larger
- Can be JPG, PNG, or WebP

### Update Social Links
- Edit `components/Contact.tsx` and `components/Hero.tsx`
- Replace the `#` placeholders in `href` attributes with your actual URLs:
  - GitHub: `https://github.com/Yash-Raj-5424`
  - Twitter/X: `https://twitter.com/yourhandle`
  - Email: `mailto:your.email@example.com`

### Customize Font
- To use the actual Geist Pixel font:
  1. Download Geist Pixel TTF file
  2. Place it in `public/fonts/geist-pixel.ttf`
  3. Update `app/globals.css` - uncomment the `@font-face` rule and update the path:
     ```css
     @font-face {
       font-family: 'Geist Pixel';
       src: url('/fonts/geist-pixel.ttf') format('truetype');
     }
     ```
  4. Update `tailwind.config.ts`:
     ```typescript
     fontFamily: {
       sans: ['Geist Pixel', 'Courier New', 'monospace'],
       mono: ['Geist Pixel', 'Courier New', 'monospace'],
     },
     ```

### Edit Projects
- Update the `projects` array in `components/Projects.tsx` with your actual projects
- Add/remove projects as needed

### Edit Tech Stack
- Update the `skills` array in `components/TechStack.tsx` to reflect your actual skills

### GitHub Username
- The GitHub activity graph is hardcoded to `Yash-Raj-5424`
- To change it, edit `components/GitHubActivity.tsx` and update the `username` prop

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Type safety
- **react-github-calendar** - GitHub contribution graph
- **Courier Prime** - Web font fallback (or use Geist Pixel)

## Design Notes

- **Dark Theme**: Charcoal dark background (#0f0f0f)
- **No Animations**: Clean, minimal design with no transitions or animations
- **No Gradients**: Solid colors only
- **Typography-Focused**: All text uses Courier Prime/Geist Pixel monospace font
- **Minimal Glassmorphism**: Only on navbar (backdrop blur + semi-transparent)
- **Max Width**: 900px container for optimal readability
- **Pill-Style Tags**: Subtle borders, minimal contrast for tech stack

## Project Structure

```
YashVerse/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Container.tsx       # Reusable container wrapper
│   ├── Navbar.tsx          # Sticky navigation
│   ├── Hero.tsx            # Hero section with profile
│   ├── TechStack.tsx       # Tech stack pills
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact section
│   └── GitHubActivity.tsx  # GitHub calendar graph
├── public/
│   ├── profile.jpg         # Your profile image (add this)
│   └── fonts/              # Custom fonts directory
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── .gitignore              # Git ignore rules
```

## License

© 2024 Yash Raj. All rights reserved.
