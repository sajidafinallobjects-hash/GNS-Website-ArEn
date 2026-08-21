# GNS — Gulf Net Solution SPC

A standalone corporate website for Gulf Net Solution SPC, built with React, TypeScript, Vite, Tailwind CSS, React Router and Lucide React.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

The generated production files are placed in `dist/` and can be deployed to any static web server. Configure the server to serve `index.html` for client-side routes.

## Environment variables

No environment variables are required for the current website. The contact form is intentionally prepared for future service integration and currently provides an on-page confirmation without sending data to a fake API.

When a real service is connected later, expose its base URL through a Vite variable such as `VITE_API_BASE_URL` and keep secrets on the server.

## Routes

- `/` — Home
- `/about` — About GNS
- `/services` — Services
- `/projects` — Portfolio
- `/projects/dermavision-ai` — DermaVision AI case study
- `/contact` — Contact
