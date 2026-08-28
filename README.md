# MASSH Hospital Website

A responsive hospital website recreated in Next.js from the supplied MASSH design references. The project includes a detailed homepage, information and service pages, responsive card sliders, a functional mobile navigation drawer, quick-enquiry workflows, and server-side email delivery using Nodemailer.

## Features

- Responsive desktop, tablet, and mobile layouts
- Sticky header with functional mobile hamburger navigation
- Homepage sections built as native React components
- Responsive card sliders with navigation arrows
- Interactive treatment tabs
- Quick Enquiry callback modal
- Contact enquiry and feedback forms
- Nodemailer-powered server email endpoint
- Floating phone and scroll-to-top actions
- Mobile quick-contact action bar
- Shared site header and footer
- SEO metadata for individual pages

## Pages

| Route | Description |
| --- | --- |
| `/` | Main MASSH hospital homepage |
| `/about` | About MASSH, values, leadership, hospitals, and contact information |
| `/contact` | Enquiry and feedback form, hospital contact details, and location map |
| `/home-healthcare` | Elderly care, critical care, palliative care, attendants, and COVID care |
| `/hospitals` | MASSH hospital network with directions and call actions |
| `/international-patients` | Consultation, travel, visa, insurance, billing, and rehabilitation services |
| `/api/enquiry` | Server-side POST endpoint for enquiry email delivery |

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 tooling
- Custom responsive CSS
- Nodemailer

## Getting Started

### Requirements

- Node.js 20 or newer
- npm
- SMTP account for live form email delivery

### Installation

```bash
git clone https://github.com/SHIV167/MASSH_HOSPITAL.git
cd MASSH_HOSPITAL
npm install
```

Create the local environment file:

```bash
copy .env.example .env.local
```

On macOS or Linux:

```bash
cp .env.example .env.local
```

Configure the SMTP values in `.env.local`, then start development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Email Configuration

The Quick Enquiry modal and Contact Us forms submit to `/api/enquiry`. SMTP credentials remain server-side and must not use the `NEXT_PUBLIC_` prefix.

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
MAIL_FROM=MASSH Website <website@example.com>
MAIL_TO=info@massh.in
```

For SMTP over port `465`, set:

```env
SMTP_PORT=465
SMTP_SECURE=true
```

Without valid SMTP values, the forms display a configuration error and no email is sent.

> The visible “I'm not a robot” control is currently a consent-style verification checkbox. Integrate a server-verified CAPTCHA provider before relying on it as production bot protection.

## Available Scripts

```bash
npm run dev       # Start the local development server
npm run build     # Create an optimized production build
npm run start     # Run the production build
npm run lint      # Run ESLint
```

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── api/enquiry/
│   ├── contact/
│   ├── home-healthcare/
│   ├── hospitals/
│   ├── international-patients/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── MasshHome.tsx
    ├── MasshAbout.tsx
    ├── ContactDesign.tsx
    ├── ServicePages.tsx
    ├── SiteHeader.tsx
    ├── SiteFooter.tsx
    ├── QuickEnquiryModal.tsx
    ├── ProcedureTabs.tsx
    └── CardSlider.tsx
```

Static website images are stored in `public/images/`.

## Form API

`POST /api/enquiry` accepts JSON with the following fields:

```json
{
  "name": "Patient name",
  "phone": "+91-00000-00000",
  "email": "patient@example.com",
  "message": "Appointment or enquiry details",
  "formType": "Quick Enquiry"
}
```

The API validates required fields, sanitizes submitted text, includes a honeypot field, and sends formatted text and HTML emails through the configured SMTP server.

## Production Deployment

1. Run `npm run build` and confirm it completes successfully.
2. Configure all SMTP environment variables on the hosting platform.
3. Deploy using a Node.js-compatible Next.js hosting environment.
4. Confirm `/api/enquiry` can reach the SMTP provider from the production network.
5. Test enquiry, feedback, mobile navigation, phone, WhatsApp, maps, and directions actions.

## Security Notes

- Never commit `.env.local` or production SMTP credentials.
- Rotate credentials immediately if they are exposed.
- Add rate limiting and a server-verified CAPTCHA before high-traffic production use.
- Use an SMTP provider with authenticated TLS connections.

## License

This repository contains a website implementation for MASSH Hospital. Brand names, logos, content, and associated visual assets remain the property of their respective owners.
