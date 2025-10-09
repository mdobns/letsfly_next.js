# 📋 Deployment Checklist for Cloudflare Pages

Use this checklist to ensure smooth deployment of your Next.js website.

## Pre-Deployment Tasks

### 1. Local Setup
- [ ] Navigate to project folder: `cd "Lets Fly next.js"`
- [ ] Install dependencies: `npm install`
- [ ] Verify installation completed without errors

### 2. Add Images
- [ ] Copy `logo.png` to `public/images/logo.png`
- [ ] Copy `hero-bg.jpg` to `public/images/hero-bg.jpg`
- [ ] Verify images are in correct location

### 3. Test Locally
- [ ] Run development server: `npm run dev`
- [ ] Open http://localhost:3000 in browser
- [ ] Check all pages load correctly:
  - [ ] Homepage (with Omrah campaign)
  - [ ] About page
  - [ ] Services page
  - [ ] Contact page
  - [ ] Reviews page
- [ ] Test interactive features:
  - [ ] WhatsApp button appears
  - [ ] WhatsApp notification shows after 3 seconds
  - [ ] Chatbot opens and responds
  - [ ] EMI calculators work
  - [ ] Contact form submits
  - [ ] Collapsible sections expand/collapse
- [ ] Test on mobile (responsive design)
- [ ] Check navigation menu works

### 4. Build for Production
- [ ] Stop development server (Ctrl+C)
- [ ] Run production build: `npm run build`
- [ ] Verify build completes successfully
- [ ] Check `out` folder was created
- [ ] No build errors shown

### 5. Content Verification
- [ ] Office location: "Nimnagar Balubari, Dinajpur" is correct
- [ ] Phone numbers: 01550077404, 01550077411, 01550077413 are correct
- [ ] Email: bdletsfly@gmail.com is correct
- [ ] WhatsApp number: 8801550077404 is correct
- [ ] Omrah price: ১,৩৫,০০০/- টাকা is correct
- [ ] Special offers prices are up to date
- [ ] Google Maps link works

## GitHub Setup (Recommended Method)

### 6. Initialize Git Repository
- [ ] Open terminal in project folder
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit - Next.js conversion"`
- [ ] Run: `git branch -M main`

### 7. Connect to GitHub
- [ ] Create new repository on GitHub: "letsfly.com.bd"
- [ ] Copy repository URL
- [ ] Run: `git remote add origin https://github.com/mdobns/letsfly.com.bd.git`
- [ ] Run: `git push -u origin main`
- [ ] Verify code appears on GitHub

## Cloudflare Pages Deployment

### 8. Connect to Cloudflare Pages
- [ ] Go to https://dash.cloudflare.com/
- [ ] Click "Pages" in sidebar
- [ ] Click "Create a project"
- [ ] Click "Connect to Git"
- [ ] Select "GitHub"
- [ ] Authorize Cloudflare
- [ ] Select your repository "letsfly.com.bd"

### 9. Configure Build Settings
- [ ] Framework preset: **Next.js (Static HTML Export)**
- [ ] Build command: `npm run build`
- [ ] Build output directory: `out`
- [ ] Root directory: `/` (leave default)
- [ ] Node.js version: 18 or higher

### 10. Environment Variables (Optional)
- [ ] Add if needed:
  - `NEXT_PUBLIC_WHATSAPP_NUMBER=8801550077404`
  - `NEXT_PUBLIC_SITE_URL=https://letsfly.com.bd`

### 11. Deploy
- [ ] Click "Save and Deploy"
- [ ] Wait for build to complete (usually 2-5 minutes)
- [ ] Check build logs for errors
- [ ] Build status shows "Success"

### 12. Verify Deployment
- [ ] Click on deployment URL (e.g., `letsfly-abc.pages.dev`)
- [ ] Check homepage loads
- [ ] Test all pages:
  - [ ] Homepage
  - [ ] About
  - [ ] Services
  - [ ] Contact
  - [ ] Reviews
- [ ] Test interactive features:
  - [ ] WhatsApp button
  - [ ] Chatbot
  - [ ] EMI calculator
  - [ ] Contact form
- [ ] Test on mobile device
- [ ] Check page loading speed

## Custom Domain Setup

### 13. Configure Custom Domain
- [ ] In Cloudflare Pages, go to "Custom domains"
- [ ] Click "Set up a custom domain"
- [ ] Enter: `letsfly.com.bd`
- [ ] Follow DNS configuration instructions
- [ ] Wait for DNS propagation (can take 24 hours)
- [ ] Verify SSL certificate is issued

### 14. DNS Configuration
- [ ] Go to Cloudflare DNS settings
- [ ] Add CNAME record:
  - Name: `@` (or `letsfly.com.bd`)
  - Target: `letsfly-abc.pages.dev` (your Pages URL)
  - Proxy status: Proxied (orange cloud)
- [ ] Add CNAME for www:
  - Name: `www`
  - Target: `letsfly-abc.pages.dev`
  - Proxy status: Proxied

### 15. Final Testing
- [ ] Visit https://letsfly.com.bd
- [ ] Verify site loads correctly
- [ ] Check SSL certificate (padlock icon)
- [ ] Test all pages and features
- [ ] Test from different devices
- [ ] Test from different locations
- [ ] Check Google Maps works
- [ ] Verify WhatsApp links work
- [ ] Test phone number links

## Post-Deployment

### 16. SEO & Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (if needed)
- [ ] Verify meta tags are correct
- [ ] Check mobile-friendliness in Google tools

### 17. Performance Check
- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights
- [ ] Verify Core Web Vitals
- [ ] Test loading speed

### 18. Social Media
- [ ] Update Facebook page with new URL
- [ ] Update Instagram bio link
- [ ] Update WhatsApp Business profile
- [ ] Share on social media

### 19. Monitoring
- [ ] Set up Cloudflare Web Analytics
- [ ] Enable Cloudflare email notifications
- [ ] Monitor deployment success
- [ ] Check error logs regularly

### 20. Documentation
- [ ] Update README with live URL
- [ ] Document any custom configurations
- [ ] Keep deployment notes
- [ ] Share access with team members

## Troubleshooting

### If Build Fails:
1. Check build logs in Cloudflare Pages
2. Verify Node.js version is 18+
3. Check package.json dependencies
4. Try building locally first: `npm run build`
5. Check for TypeScript errors

### If Site Doesn't Load:
1. Check DNS propagation: https://dnschecker.org/
2. Verify CNAME records are correct
3. Check SSL certificate status
4. Clear browser cache
5. Try incognito/private mode

### If Images Don't Show:
1. Verify images are in `public/images/` folder
2. Check image file names match code
3. Rebuild and redeploy
4. Check image paths start with `/images/`

## Support Contacts

- **Cloudflare Support:** https://dash.cloudflare.com/support
- **Next.js Docs:** https://nextjs.org/docs
- **Developer:** https://github.com/mdobns
- **Email:** bdletsfly@gmail.com

---

## ✅ Success Criteria

Your deployment is successful when:
- ✅ Site loads at your custom domain
- ✅ All pages are accessible
- ✅ Images display correctly
- ✅ Forms work properly
- ✅ Mobile version looks good
- ✅ SSL certificate is valid
- ✅ Loading time < 3 seconds
- ✅ No console errors
- ✅ WhatsApp integration works
- ✅ Google Maps displays

**Congratulations! Your site is now live on Cloudflare Pages! 🎉**
