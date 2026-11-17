## Pavel Terenin — Portfolio Website

Personal portfolio showcasing recent work, services, skills, and contact options. Includes an integrated AI assistant that answers questions about Pavel’s background using a serverless function.

### Highlights

- **Modern UI**: Responsive, accessible design with Tailwind CSS and shadcn/ui components
- **Projects**: Featured case studies with links and impact metrics
- **Services & Skills**: Clear overview of specialties and tooling
- **Contact**: Email form powered by EmailJS
- **AI Assistant**: Chat widget backed by a WordPress REST API and OpenAI

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, React Router
- **UI**: Tailwind CSS, shadcn/ui (Radix primitives), Lucide icons
- **State/Data**: @tanstack/react-query
- **Integrations**: WordPress (Ask AI), EmailJS

## Project Structure

```
src/
  components/              # UI sections (Hero, Portfolio, Services, About, Contact, Footer, AIChat)
  components/ui/           # shadcn/ui primitives
  hooks/                   # shared hooks
  pages/                   # routes (Index, NotFound)
  main.tsx, App.tsx        # app bootstrap
wordpress/
  pavel-ask-ai/            # WordPress REST API, public facts, and key settings
```

## Features in Detail

- **Hero**: Background video, quick CTAs (connect, portfolio, résumé download)
- **Portfolio**: Highlighted projects (e.g., Lululemon login, EA dashboard, Realtor.com property page)
- **Services**: Front-end, full‑stack, and DevOps/architecture capabilities
- **About/Skills**: Timeline and categorized skills
- **Contact**: Email form via EmailJS with toast notifications
- **AI Chat**: Floating widget calling the WordPress portfolio chat route for contextual Q&A

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
npm install
npm run dev
```

App runs on `http://localhost:8080` by default (see `vite.config.ts`).

### Build & Preview

```bash
npm run build
npm run preview
```

## Configuration

### Portfolio Ask AI

The public blog hosts the chat backend. See [the WordPress plugin setup](wordpress/README.md). The server owns the OpenAI API key and public profile context. If the endpoint is unavailable, the widget offers a labeled excerpt from the portfolio.

### EmailJS (Contact Form)

The contact form (`src/components/Contact.tsx`) uses EmailJS. Provide your own:

- Public key
- Service ID
- Template ID

Update the initialization and `send` call accordingly, or externalize them via environment variables in your hosting platform.

## Deployment

Any static host (Vercel, Netlify, Cloudflare Pages, S3/CloudFront) will work:

- Build with `npm run build`
- Publish the `dist/` directory
- Activate the portfolio chat plugin in the WordPress blog at /blog/.

## Scripts

- `npm run dev`: Start local dev server
- `npm run build`: Create production build
- `npm run build:dev`: Development-mode bundle
- `npm run preview`: Preview the production build
- `npm run lint`: Lint the project

## Acknowledgements

- shadcn/ui, Radix UI, Tailwind CSS, Lucide, React Query
- OpenAI API

## Contact

- Website: `https://pavelterenin.com`
- Email: `mailto:pavel.terenin@gmail.com`
- LinkedIn: `https://linkedin.com/in/pavelterenin`

© Pavel Terenin. All rights reserved.
