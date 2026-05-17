# ✅ VERCEL DEPLOYMENT CHECKLIST

## Pre-Deployment
- [ ] Read VERCEL_COMPLETE_GUIDE.md
- [ ] Upload images to asset folders (if not done)
- [ ] Test locally: `npm run dev` in frontend folder
- [ ] Make sure you have GitHub account
- [ ] Make sure you have Vercel account (sign up with GitHub)

## GitHub Push
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Ready for Vercel deployment"`
- [ ] Run: `git push origin main`
- [ ] Confirm on GitHub.com that files are there

## Vercel Frontend Deployment
- [ ] Go to https://vercel.com/dashboard
- [ ] Click "New Project"
- [ ] Select repository: `charity_musyoka_foundation`
- [ ] Root Directory: `frontend`
- [ ] Framework: **Vite**
- [ ] Build: `npm run build`
- [ ] Output: `dist`
- [ ] Click "Deploy"
- [ ] Wait 3-5 minutes
- [ ] Note the Frontend URL provided

## Vercel Backend Deployment
- [ ] Go to https://vercel.com/dashboard
- [ ] Click "New Project"
- [ ] Select repository again: `charity_musyoka_foundation`
- [ ] Root Directory: `backend`
- [ ] Framework: **Other**
- [ ] Build: (leave empty)

### Add Environment Variables
- [ ] MONGODB_URI = `mongodb+srv://charity:CMFoundation@cluster0.wzcfrqy.mongodb.net/?appName=Cluster0`
- [ ] NODE_ENV = `production`
- [ ] JWT_SECRET = `57bbd301f8a992304bd0eb29cd1909a1221ab7da24b32915d21e753af1cba9a150b4e8565928003cb833e19d3758f9ce32818a1e57b4027dda226c8836e1d6c1`
- [ ] ALLOWED_ORIGINS = Your Frontend URL from above

### Deploy
- [ ] Click "Deploy"
- [ ] Wait 3-5 minutes
- [ ] Note the Backend URL provided

## Update Frontend Environment
- [ ] Go to Frontend Vercel Project
- [ ] Settings → Environment Variables
- [ ] Find: `VITE_API_URL`
- [ ] Change value to: Backend URL from above
- [ ] Click "Save"
- [ ] Go to "Deployments"
- [ ] Redeploy latest deployment
- [ ] Wait 2-3 minutes

## Test Deployment
- [ ] Test Frontend URL in browser (should load website)
- [ ] Test Backend Health: `curl <backend-url>/api/health`
- [ ] Fill out contact form (test it works)
- [ ] Test WhatsApp button
- [ ] Check donation page displays correctly
- [ ] Test on mobile device

## Domain Registration
- [ ] Register: `charitymusyokafoundation.co.ke`
- [ ] Registrar options: Safaricom, Jamii.co.ke, Aqenda.io
- [ ] Get login credentials from registrar
- [ ] Access DNS management panel

## Connect Frontend Domain
- [ ] Frontend Vercel Project → Settings → Domains
- [ ] Click "Add"
- [ ] Enter: `charitymusyokafoundation.co.ke`
- [ ] Copy CNAME from Vercel
- [ ] At Registrar: Add DNS CNAME record for @ (root)
- [ ] At Registrar: Add DNS CNAME record for www
- [ ] Wait 24-48 hours for DNS propagation

## Connect Backend Domain
- [ ] Backend Vercel Project → Settings → Domains
- [ ] Click "Add"
- [ ] Enter: `api.charitymusyokafoundation.co.ke`
- [ ] Copy CNAME from Vercel
- [ ] At Registrar: Add DNS CNAME record for api
- [ ] Wait 24-48 hours for DNS propagation

## Final Configuration
- [ ] Update Frontend env: VITE_API_URL = `https://api.charitymusyokafoundation.co.ke`
- [ ] Redeploy Frontend
- [ ] Wait 2-3 minutes

## Final Testing (after DNS propagates)
- [ ] Open https://charitymusyokafoundation.co.ke (should load)
- [ ] Open www.charitymusyokafoundation.co.ke (should redirect to root)
- [ ] Test contact form submission
- [ ] Test donation page displays M-Pesa info
- [ ] Test WhatsApp button opens chat
- [ ] Check HTTPS lock icon on all pages
- [ ] Test on mobile (iOS and Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check all images load properly
- [ ] Check no console errors (F12 → Console)

## Optional: Submit to Search Engines
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)

## Post-Launch Monitoring
- [ ] Check Vercel dashboard daily for first week
- [ ] Monitor error logs
- [ ] Check Core Web Vitals in Search Console
- [ ] Monitor donation submissions
- [ ] Monitor contact form submissions
- [ ] Respond to WhatsApp messages

---

## 🎉 DEPLOYMENT COMPLETE!

Your site is now live on Vercel!

**Production URLs:**
- Frontend: https://charitymusyokafoundation.co.ke
- API: https://api.charitymusyokafoundation.co.ke
- WhatsApp: +254 721 831045

---

## 📝 NOTES

- DNS propagation can take up to 48 hours
- Vercel auto-deploys on every git push
- No monthly hosting costs (completely free!)
- All environments use auto HTTPS
- Databases are managed by MongoDB Atlas (external)

---

*Last Updated: May 17, 2026*
