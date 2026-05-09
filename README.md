# MC Heating & Plumbing - React Website

A premium, high-performance website built with React 18, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- **Modern Dark UI**: High-end look with fiery orange gradients and glow effects.
- **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- **Animations**: Smooth scroll reveals and micro-interactions using Framer Motion.
- **SEO Ready**: Configured with `react-helmet-async` for meta tags and Open Graph.
- **Type-Safe**: Built with TypeScript and Zod for form validation.
- **Contact Form**: Ready for integration with Formspree or Web3Forms.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Customization Guide

### 1. Contact Form Integration (Formspree)
To make the contact form functional:
- Go to [Formspree](https://formspree.io/) and create a new form.
- Copy your unique Form ID.
- In `src/components/Contact.tsx`, update the `onSubmit` function:
  ```tsx
  const onSubmit = async (data: ContactFormData) => {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Message sent!");
      reset();
    }
  };
  ```

### 2. Updating Images
All images are currently using high-quality placeholders from Unsplash. To replace them, update the URLs in `src/constants.tsx`.

### 3. Business Information
Update company details, phone numbers, and social links in `src/constants.tsx`. The entire site will reflect these changes automatically.

### 4. Logo
The logo is a custom React SVG component located at `src/components/Logo.tsx`. You can replace the Lucide `Flame` icon with a custom SVG if needed.

## Tech Stack
- **Framework**: React 18
- **Bundler**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
