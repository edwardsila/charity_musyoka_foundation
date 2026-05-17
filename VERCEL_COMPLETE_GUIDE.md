# 🎯 VERCEL DEPLOYMENT - COMPLETE INSTRUCTIONS

Your website is now fully configured to deploy entirely on **Vercel** - both frontend and backend, completely free!

---

## ✅ What's Ready

### Files Created/Updated:
- ✅ `backend/vercel.json` - Vercel configuration
- ✅ `backend/api/index.js` - Serverless entry point
- ✅ `backend/server.js` - Updated to export for Vercel
- ✅ All environment files configured

### Architecture:
```
Your Domain
    ↓
Vercel CDN (Frontend)  +  Vercel Serverless (Backend)  +  MongoDB Atlas
     ↓                               ↓                             ↓
React App                      Node.js API                    Database
HTTPS                          HTTPS                          External
Auto-cached                    Auto-scaled                     Secure
```

---

## 🚀 DEPLOYMENT STEPS (Copy-Paste)

### STEP 1: Push to GitHub

In your terminal:

```bash
cd /home/islam/Desktop/charity_musyoka_foundation

git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

---

### STEP 2: Create Frontend Project on Vercel

1. **Go to:** https://vercel.com/dashboard
2. **Click:** "New Project"
3. **Select:** your GitHub repository
4. **Click:** "Import"

**Settings (leave defaults, just check these):**
- Root Directory: `frontend`
- Framework: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

**Click:** Deploy ✓

**Wait:** 3-5 minutes for completion

**Note your Frontend URL:** (looks like `https://charity-musyoka-xxx.vercel.app`)

---

### STEP 3: Create Backend Project on Vercel

1. **Go to:** https://vercel.com/dashboard
2. **Click:** "New Project"
3. **Select:** same GitHub repository again
4. **Click:** "Import"

**Settings:**
- Root Directory: `backend`
- Framework: **Other** (or leave default)
- Build Command: (leave EMPTY)

**Before clicking Deploy - Add Environment Variables:**

Click "Environment Variables" and add these 4:

| Name | Value | Add |
|------|-------|-----|
| MONGODB_URI | `mongodb+srv://charity:CMFoundation@cluster0.wzcfrqy.mongodb.net/?appName=Cluster0` | ✓ |
| NODE_ENV | `production` | ✓ |
| JWT_SECRET | `57bbd301f8a992304bd0eb29cd1909a1221ab7da24b32915d21e753af1cba9a150b4e8565928003cb833e19d3758f9ce32818a1e57b4027dda226c8836e1d6c1` | ✓ |
| ALLOWED_ORIGINS | `https://your-frontend-url.vercel.app` | ✓ |

(Replace `your-frontend-url` with your actual Frontend URL from Step 2)

**Click:** Deploy ✓

**Wait:** 3-5 minutes for completion

**Note your Backend URL:** (looks like `https://charity-musyoka-backend-xxx.vercel.app`)

---

### STEP 4: Update Frontend with Backend URL

1. **Go to:** Frontend Vercel Project Dashboard
2. **Click:** "Settings"
3. **Click:** "Environment Variables"
4. **Find or Add:** `VITE_API_URL`
5. **Set value to:** Your backend URL from Step 3

Example:
```
VITE_API_URL = https://charity-musyoka-backend-xxx.vercel.app
```

**Click:** "Save"

6. **Go back to:** "Deployments"
7. **Click on latest deployment's "..." menu**
8. **Click:** "Redeploy"

**Wait:** 2-3 minutes for redeployment

---

### STEP 5: Test Your Deployment

#### Test Frontend
```
https://your-frontend-url.vercel.app
```
Should load your website

#### Test Backend
```
curl https://your-backend-url.vercel.app/api/health
```
Should return:
```json
{"status":"Server is running","timestamp":"2026-05-17T..."}
```

#### Test Contact Form
- Fill out contact form on website
- Should submit successfully
- Check MongoDB to confirm data saved

---

### STEP 6: Register Domain

Register `charitymusyokafoundation.co.ke` at any Kenyan registrar:
- **Safaricom:** https://safaricom.co.ke
- **Jamii.co.ke:** https://jamii.co.ke
- **Aqenda.io:** https://aqenda.io

*Cost: ~$10-15/year*

---

### STEP 7: Connect Domain to Frontend

1. **Go to:** Frontend Vercel Project → "Settings" → "Domains"
2. **Click:** "Add"
3. **Enter:** `charitymusyokafoundation.co.ke`
4. **Click:** "Add"

Vercel shows DNS records. Copy them.

**At your registrar, add these DNS records:**

```
Type: CNAME
Name: @
Value: [Copy from Vercel]

Type: CNAME
Name: www
Value: [Copy from Vercel]
```

---

### STEP 8: Connect Domain to Backend

1. **Go to:** Backend Vercel Project → "Settings" → "Domains"
2. **Click:** "Add"
3. **Enter:** `api.charitymusyokafoundation.co.ke`
4. **Click:** "Add"

Vercel shows DNS record. Copy it.

**At your registrar, add this DNS record:**

```
Type: CNAME
Name: api
Value: [Copy from Vercel]
```

---

### STEP 9: Update Frontend Environment Variable

1. **Go to:** Frontend Vercel Project → "Settings" → "Environment Variables"
2. **Update:** `VITE_API_URL`

Change from:
```
https://your-backend-url.vercel.app
```

To:
```
https://api.charitymusyokafoundation.co.ke
```

**Save** and **Redeploy**

---

### STEP 10: Wait for DNS Propagation

**DNS takes 24-48 hours to fully propagate**

Check status:
```bash
nslookup charitymusyokafoundation.co.ke
```

Should show Vercel's IP address.

---

### STEP 11: Final Tests

After DNS propagates:

✓ Open https://charitymusyokafoundation.co.ke
✓ Fill out contact form
✓ Click WhatsApp button
✓ Check donation page
✓ Test on mobile
✓ Test on different browser
✓ Check images load
✓ Verify HTTPS works (green lock)

---

## 📊 FINAL ARCHITECTURE

```
charitymusyokafoundation.co.ke
    ↓
Vercel (Frontend CDN)
    ├─ React app
    ├─ Auto HTTPS
    ├─ Global CDN
    └─ Auto-redeploy on git push

api.charitymusyokafoundation.co.ke
    ↓
Vercel (Backend Serverless)
    ├─ Node.js/Express API
    ├─ Auto HTTPS
    ├─ Auto-scales
    └─ Connects to MongoDB Atlas

MongoDB Atlas (External)
    └─ Shared database for both
```

---

## 💰 TOTAL COST

- **Vercel Hosting:** FREE
- **Domain:** $10-15/year
- **MongoDB:** FREE (512MB included)
- **HTTPS:** FREE (auto)
- **CDN:** FREE (included)

**Total:** ~$1/month (domain only)

---

## 🆘 TROUBLESHOOTING

**Backend not responding?**
- Check env variables in Vercel: Settings → Environment Variables
- Verify MONGODB_URI is copied exactly
- Check Backend deployment status: Deployments tab

**CORS errors?**
- Make sure ALLOWED_ORIGINS includes your frontend domain
- Update it in Backend env variables
- Trigger new deployment

**Images not showing?**
- Make sure images are in GitHub repository
- Images must be in `frontend/src/assets/`
- Rebuild frontend

**Domain shows Vercel page?**
- Wait 24-48 hours for DNS propagation
- Check DNS records were added correctly
- Test with: `nslookup charitymusyokafoundation.co.ke`

**Contact form not working?**
- Check backend health: `/api/health`
- Check ALLOWED_ORIGINS includes frontend domain
- Check MongoDB connection in logs

---

## 📱 FUTURE UPDATES

After deployment, to make changes:

1. **Edit file locally**
2. **Test with:** `npm run dev`
3. **Push to GitHub:** `git add . && git commit -m "..." && git push`
4. **Vercel auto-deploys** (no manual action!)

Done! Your change is live in 2-5 minutes.

---

## 🎉 YOU'RE DONE!

Follow the steps above and your site will be live in:
- **Deployment:** 10-15 minutes
- **DNS:** 24-48 hours for full propagation

**Your website will be:**
- ✅ Completely free
- ✅ Production-ready
- ✅ Global CDN
- ✅ Auto HTTPS everywhere
- ✅ Automatically scaling
- ✅ Git auto-deploy

---

## 📞 SUPPORT

- **Vercel Docs:** https://vercel.com/docs
- **Domain Registrar Support:** Contact your registrar
- **Your WhatsApp:** +254 721 831045 (for contact inquiries)

---

**Ready to deploy? Follow the steps above!** 🚀
