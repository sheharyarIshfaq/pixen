# Pixen - AI Image Generation Platform

![Pixen](https://i.imgur.com/PJY7VrU.png) <!-- Replace with an actual screenshot of your application -->

Pixen is a modern web application that transforms text descriptions into stunning visual imagery using AI. Built with Next.js and powered by Nebius AI, this platform allows users to easily generate high-quality images from text prompts.

<p align="center">
  <a href="https://github.com/sheharyarIshfaq/pixen.git">
    <img src="https://img.shields.io/github/stars/sheharyarIshfaq/pixen?style=social" alt="GitHub stars">
  </a>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Next.js-15-black" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-blue" alt="React">
</p>

## Features

- **Text-to-Image Generation**: Convert your text descriptions into detailed images
- **User-Friendly Interface**: Clean, intuitive design for a seamless experience
- **Instant Downloads**: Save your generated images with a single click
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Fast Performance**: Optimized for speed with Next.js and React 19
- **Modern UI**: Beautiful interface with TailwindCSS animations
- **User Authentication**: Secure user authentication with Clerk

## Tech Stack

- **Frontend**: Next.js 15, React 19, TailwindCSS 4
- **UI Components**: Radix UI, Lucide React icons
- **Styling**: TailwindCSS with custom animations
- **API Integration**: Nebius AI for image generation
- **Authentication**: Clerk for user authentication and management
- **Notifications**: Sonner toast notifications

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- A Nebius API key for image generation
- Clerk account and API keys for authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sheharyarIshfaq/pixen.git
   cd pixen
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Add your API keys to the `.env` file:
     ```
     NEBIUS_API_KEY=your_nebius_api_key_here
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
     CLERK_SECRET_KEY=your_clerk_secret_key_here
     ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Sign in to your account (or create a new one)
2. Enter a detailed description of the image you want to create in the text area
3. Click the "Generate Image" button
4. Wait a few seconds for the AI to process your request
5. View your generated image
6. Click the download button to save the image to your device

## Authentication

Pixen uses [Clerk](https://clerk.com/) for user authentication and management. This provides:

- **Secure Authentication**: Industry-standard security practices
- **Multiple Sign-in Methods**: Email/password, social logins, and more
- **User Management**: User profiles and account settings
- **Protected Routes**: Only authenticated users can generate images
- **API Protection**: Backend routes are secured against unauthorized access

The authentication flow is seamlessly integrated into the application:
- Users must sign in to generate images
- The Sign In button replaces the Generate button for unauthenticated users
- API routes are protected to ensure only authenticated users can generate images

## Project Structure

```
pixen/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   │   └── generate-image/ # Image generation endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── Footer/           # Footer component
│   ├── Header/           # Header component
│   ├── ImageGenerator/   # Main image generation component
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...                   # Configuration files
```

## Deployment

The application can be deployed on Vercel or any other platform that supports Next.js applications:

```bash
npm run build
npm run start
```

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Environment Variables

| Variable                            | Description                                    |
| ----------------------------------- | ---------------------------------------------- |
| `NEBIUS_API_KEY`                    | API key for Nebius AI image generation service |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Publishable key for Clerk authentication       |
| `CLERK_SECRET_KEY`                  | Secret key for Clerk authentication            |

## SEO Optimization

Pixen includes several features to improve search engine visibility:

- **Metadata**: Proper title and description tags in the layout component
- **Semantic HTML**: Structured content with appropriate heading levels
- **Responsive Design**: Mobile-friendly interface for better search rankings
- **Performance**: Optimized loading times with Next.js
- **Image Optimization**: Proper image handling with alt tags

## Contributing

Contributions to Pixen are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE)

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework for production
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Nebius AI](https://nebius.ai/) - AI image generation service
- [Clerk](https://clerk.com/) - Authentication and user management
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/sheharyarIshfaq">Sheharyar Ishfaq</a>
</p>

<!-- Keywords for SEO -->
<!--
  AI image generation, text to image, Pixen, Next.js image generator,
  AI art generator, Nebius AI, React image generation, TailwindCSS UI, authentication
-->
