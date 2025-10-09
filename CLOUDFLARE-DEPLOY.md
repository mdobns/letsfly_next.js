# Cloudflare Pages Deployment Instructions

## Quick Setup

### 1. Connect Your Repository
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create application** → **Pages** → **Connect to Git**
4. Select your GitHub repository: `mdobns/letsfly.com.bd`
5. Click **Begin setup**

### 2. Configure Build Settings

Use these **exact settings**:

```
Project name:              letsfly-bd (or your choice)
Production branch:         main
Framework preset:          Next.js (Static HTML Export)
Build command:             npm run build
Build output directory:    out
Root directory:            (leave empty)
```

### 3. Environment Variables
No environment variables needed for this project.

### 4. Deploy
Click **Save and Deploy** and wait for the build to complete (~2-3 minutes).

## Build Configuration Explained

- **.node-version**: Ensures Cloudflare uses Node.js 20.19.5
- **package.json engines**: Specifies minimum Node/npm versions
- **postbuild script**: Copies _headers and _redirects to output folder
- **_headers**: Sets security headers and caching rules
- **_redirects**: Enables client-side routing fallback
- **metadataBase**: Fixes the metadata warning for SEO

## After Deployment

### Test Your Site
Your site will be available at: `https://letsfly-bd.pages.dev` (or your chosen name)

### Custom Domain Setup
1. In Cloudflare Pages dashboard, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `letsfly.com.bd`
4. Follow the DNS configuration instructions
5. Add these DNS records in your domain registrar:
   - Type: `CNAME`
   - Name: `@` or `letsfly.com.bd`
   - Target: `letsfly-bd.pages.dev`
   - Proxy: Enabled (orange cloud)

### Verify Everything Works
- ✅ Homepage loads
- ✅ All pages accessible (About, Services, Contact, Reviews)
- ✅ WhatsApp button works
- ✅ Chatbot functions
- ✅ EMI calculator works
- ✅ Images load correctly
- ✅ Forms submit properly
- ✅ Mobile responsive

## Troubleshooting

### Build Fails
- Check that build command is exactly: `npm run build` (no `&& npx next export`)
- Verify output directory is: `out`
- Check build logs for specific errors

### Pages Don't Load
- Clear your browser cache
- Check that _redirects file was copied to out folder
- Verify trailing slash is enabled in next.config.mjs

### Images Don't Load
- Check that images exist in public/images/
- Verify unoptimized: true is set in next.config.mjs
- Check browser console for 404 errors

## Need Help?
Check the build logs in Cloudflare Pages dashboard for detailed error messages.
