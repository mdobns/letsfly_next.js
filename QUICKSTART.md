# QUICK START GUIDE

## ✅ Project Successfully Converted to Next.js!

Your "Lets Fly" website has been converted from HTML to a modern Next.js application, ready for deployment on Cloudflare Pages.

## 📁 What's Been Created

```
Lets Fly next.js/
├── src/
│   ├── app/                    # Pages
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Homepage (with Omrah campaign)
│   │   ├── about/page.tsx      # About page
│   │   ├── services/page.tsx   # Services page (with visa details)
│   │   ├── contact/page.tsx    # Contact page (with form)
│   │   └── reviews/page.tsx    # Reviews page
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── WhatsAppButton.tsx  # WhatsApp floating button
│   │   ├── Chatbot.tsx         # AI chatbot
│   │   ├── EMICalculator.tsx   # Dual EMI calculator
│   │   ├── BankList.tsx        # SSL bank list
│   │   └── BankDetails.tsx     # Bank account details
│   └── app/globals.css         # Global styles
├── public/
│   └── images/                 # Place your images here
│       ├── logo.png            # Your logo
│       └── hero-bg.jpg         # Hero background
├── package.json                # Dependencies
├── next.config.mjs             # Next.js config
├── tailwind.config.js          # Tailwind CSS config
└── README.md                   # Documentation

```

## 🚀 Getting Started (3 Steps)

### Step 1: Install Dependencies

```bash
cd "Lets Fly next.js"
npm install
```

This will install Next.js, React, Tailwind CSS, and all required dependencies.

### Step 2: Add Your Images

Copy your images to the `public/images/` folder:
- Logo: `public/images/logo.png`
- Hero background: `public/images/hero-bg.jpg`
- Any other images you need

### Step 3: Run Locally

```bash
npm run dev
```

Visit http://localhost:3000 to see your site!

## 📤 Deploy to Cloudflare Pages

### Method 1: GitHub (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Convert to Next.js"
git branch -M main
git remote add origin https://github.com/mdobns/letsfly.com.bd.git
git push -u origin main
```

2. **Connect Cloudflare Pages:**
   - Go to https://dash.cloudflare.com/
   - Click "Pages" → "Create a project"
   - Connect your repository
   - Build settings:
     ```
     Build command: npm run build
     Build output directory: out
     ```
   - Deploy!

### Method 2: Direct Deploy

```bash
# Build the project
npm run build

# Deploy using Wrangler
npx wrangler pages deploy out --project-name=letsfly
```

## ✨ What's Included

### All Original Features:
✅ WhatsApp button (left side with notification)
✅ AI Chatbot (right side)
✅ Omrah Campaign section (October 2025, ১,৩৫,০০০/-)
✅ EMI Calculator (Direct + SSLCommerz)
✅ Visa Processing information
✅ Google Maps integration
✅ Contact form
✅ Bank details
✅ Customer reviews
✅ Responsive design (mobile-friendly)

### New Benefits:
✅ Lightning-fast performance
✅ SEO optimized
✅ Global CDN (Cloudflare)
✅ Modern React components
✅ Easy to maintain and update
✅ TypeScript support
✅ Automatic code splitting

## 🎨 Customization

### Change Colors:
Edit `tailwind.config.js` - Primary color is teal (#14b8a6)

### Update Content:
Edit files in `src/app/` folders

### Add New Pages:
Create new folders in `src/app/` (e.g., `src/app/packages/page.tsx`)

## 📞 Support

- **Email:** bdletsfly@gmail.com
- **Phone:** 01550077404
- **Developer:** https://github.com/mdobns

## 🐛 Troubleshooting

**Build errors?**
- Make sure Node.js 18+ is installed (`node --version`)
- Delete `node_modules` and run `npm install` again

**Images not showing?**
- Place images in `public/images/` folder
- Reference them as `/images/filename.jpg` in code

**TypeScript errors?**
- These are expected before `npm install`
- Run `npm install` to install dependencies

## 📚 Learn More

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Cloudflare Pages: https://developers.cloudflare.com/pages

---

**Ready to Deploy!** 🎉

Your site is now a modern, fast, and SEO-friendly Next.js application ready for Cloudflare Pages!
