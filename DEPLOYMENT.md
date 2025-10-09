# Deployment Guide for Cloudflare Pages

## Quick Start

1. **Install dependencies**
```bash
cd "Lets Fly next.js"
npm install
```

2. **Test locally**
```bash
npm run dev
```
Visit http://localhost:3000

3. **Build for production**
```bash
npm run build
```

## Deploy to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Next.js conversion"
git branch -M main
git remote add origin https://github.com/mdobns/letsfly.com.bd.git
git push -u origin main
```

2. **Connect to Cloudflare Pages**
   - Go to https://dash.cloudflare.com/
   - Click "Pages" → "Create a project"
   - Connect your GitHub repository
   - Configure build settings:
     ```
     Framework preset: Next.js (Static HTML Export)
     Build command: npm run build
     Build output directory: out
     Root directory: /
     ```
   - Click "Save and Deploy"

### Method 2: Direct Upload via Wrangler

1. **Install Wrangler**
```bash
npm install -g wrangler
```

2. **Login to Cloudflare**
```bash
wrangler login
```

3. **Create Pages Project**
```bash
wrangler pages project create letsfly
```

4. **Deploy**
```bash
npm run build
wrangler pages deploy out --project-name=letsfly
```

### Method 3: Drag & Drop (Simple)

1. Build the project:
```bash
npm run build
```

2. Go to Cloudflare Pages Dashboard
3. Click "Upload assets"
4. Drag and drop the `out` folder

## Custom Domain Setup

1. In Cloudflare Pages Dashboard, go to your project
2. Click "Custom domains"
3. Add `letsfly.com.bd`
4. Follow DNS setup instructions

## Environment Variables (if needed)

Add these in Cloudflare Pages Dashboard → Settings → Environment variables:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=8801550077404
NEXT_PUBLIC_SITE_URL=https://letsfly.com.bd
```

## Troubleshooting

**Issue:** Build fails
- Make sure you're using Node.js 18+ (`node --version`)
- Delete `node_modules` and run `npm install` again

**Issue:** Images not loading
- Make sure images are in the `public/images/` folder
- Use Image component with `unoptimized: true` in next.config.mjs

**Issue:** 404 errors
- Cloudflare Pages automatically handles routing for Next.js static exports
- Make sure `output: 'export'` is in next.config.mjs

## Performance Tips

- All images should be optimized (use WebP format)
- Tailwind CSS purges unused styles automatically
- Static export means fast loading worldwide via Cloudflare CDN

## Support

For issues, contact: bdletsfly@gmail.com
Developer: https://github.com/mdobns
