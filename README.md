## Pavel Terenin — Portfolio Website

Personal portfolio showcasing recent work, services, skills, and contact options. Includes an integrated AI assistant that answers questions about Pavel’s background using a serverless function.

### Highlights

- **Modern UI**: Responsive, accessible design with Tailwind CSS and shadcn/ui components
- **Projects**: Featured case studies with links and impact metrics
- **Services & Skills**: Clear overview of specialties and tooling
- **Contact**: Email form powered by EmailJS
- **AI Assistant**: Chat widget backed by a Supabase Edge Function and OpenAI

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, React Router
- **UI**: Tailwind CSS, shadcn/ui (Radix primitives), Lucide icons
- **State/Data**: @tanstack/react-query
- **Integrations**: Supabase (Edge Functions), EmailJS

## Project Structure

```
src/
  components/              # UI sections (Hero, Portfolio, Services, About, Contact, Footer, AIChat)
  components/ui/           # shadcn/ui primitives
  hooks/                   # shared hooks
  integrations/supabase/   # Supabase client
  pages/                   # routes (Index, NotFound)
  main.tsx, App.tsx        # app bootstrap
supabase/
  functions/ai-chat/       # Supabase Edge Function (OpenAI-powered chat)
```

## Features in Detail

- **Hero**: Background video, quick CTAs (connect, portfolio, résumé download)
- **Portfolio**: Highlighted projects (e.g., Lululemon login, EA dashboard, Realtor.com property page)
- **Services**: Front-end, full‑stack, and DevOps/architecture capabilities
- **About/Skills**: Timeline and categorized skills
- **Contact**: Email form via EmailJS with toast notifications
- **AI Chat**: Floating widget calling `ai-chat` function for contextual Q&A

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

### Supabase (AI Assistant)

The chat widget calls a Supabase Edge Function at `supabase/functions/ai-chat/index.ts` which uses OpenAI.

Set the following environment variables in your Supabase project (Dashboard → Project Settings → Secrets):

- `OPENAI_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

The function expects a payload with `message`, optional `cvContext`, and metadata. It returns a concise model response.

Deploy the function using the Supabase CLI or the Dashboard. Example with CLI:

```bash
supabase functions deploy ai-chat
```

Frontend invocation is handled in `src/components/AIChat.tsx` via:

```ts
supabase.functions.invoke("ai-chat", {
  body: {
    /* ... */
  },
});
```

### Supabase client

`src/integrations/supabase/client.ts` is auto-generated and currently contains constants for URL and anon key. If you fork this repo, replace these values with your own project’s URL and anon key or wire them via environment variables in your build system.

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
- Ensure the Supabase Edge Function is deployed and accessible from your domain (CORS is permissive by default in the function).

## Scripts

- `npm run dev`: Start local dev server
- `npm run build`: Create production build
- `npm run build:dev`: Development-mode bundle
- `npm run preview`: Preview the production build
- `npm run lint`: Lint the project

## Acknowledgements

- shadcn/ui, Radix UI, Tailwind CSS, Lucide, React Query
- Supabase Edge Functions
- OpenAI API

## Contact

- Website: `https://pavelterenin.com`
- Email: `mailto:pavel.terenin@gmail.com`
- LinkedIn: `https://linkedin.com/in/pavelterenin`

© Pavel Terenin. All rights reserved.
