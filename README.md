## Personal Site – MMR Consultancy

Next.js (App Router) site for Mutikanga Mark (MMR Consultancy). Includes a multi-step business lead form powered by Resend emails and consolidated CTAs that direct visitors to the `/contact` page.

## Features
- Multi-step **Business Lead Form** at `/contact` with validation and progress states
- **Resend** email integration: client confirmation + admin notifications
- **Contact CTA unification**: all “Get Started/Get in Touch” buttons go to `/contact`
- Animated UI with **Framer Motion** and custom Shadcn components

## Stack
- Next.js 16 (App Router, TypeScript)
- Shadcn UI components, Radix primitives
- Framer Motion for animations
- Resend for transactional email

## Getting Started
Install dependencies and run dev server:
```bash
npm install
npm run dev
# open http://localhost:3000
```

### Required Environment
Create `.env.local` with:
```
RESEND_API_KEY=your_resend_api_key
```

### Important Routes
- `GET /contact` – main contact page with BusinessLeadForm
- `POST /api/submit-lead` – lead form handler (Resend emails)
- `POST /api/contact` – simple contact form handler (Resend emails)

### Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – lint source

### Deployment
Any Next.js-compatible host works (Vercel recommended). Ensure `RESEND_API_KEY` is set in your hosting environment.

### Contact
- Admin email: `mutikanga.mark@mmrug.com`
- Sender identities used: `hello@updates.mmrug.com`, `leads@updates.mmrug.com`, `contact@updates.mmrug.com`
