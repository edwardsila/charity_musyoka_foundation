# ⚡ VERCEL DEPLOYMENT - QUICK START

## 🎯 Your Setup After Changes

Everything is now configured for Vercel. Here's what was done:

```
backend/
├── api/
│   └── index.js ✅ NEW - Entry point for Vercel
├── vercel.json ✅ NEW - Vercel configuration
├── server.js ✅ UPDATED - Now exports module
├── package.json
└── .env.production
```

---

## 🚀 DEPLOYMENT IN 5 MINUTES

### 1️⃣ Push to GitHub

```bash
cd /home/islam/Desktop/charity_musyoka_foundation

# Add all changes
git add .

# Commit
git commit -m "Add Vercel configuration and prepare for deployment"

# Push to GitHub
git push origin main
```

### 2️⃣ Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select: `edwardsila/charity_musyoka_foundation`
5. Click "Import"

**Configuration:**
- Framework: **Vite**
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

Click **Deploy** ✓

Wait for completion (~3-5 minutes)

### 3️⃣ Get Frontend URL

After deployment, you'll get a URL like:
```
https://charity-musyoka-foundation.vercel.app
```

Note this URL!

### 4️⃣ Deploy Backend to Vercel

1. Go back to https://vercel.com dashboard
2. Click "New Project"
3. Select same repository: `edwardsila/charity_musyoka_foundation`
4. Click "Import"

**Configuration:**
- Root Directory: `backend`
- Framework: **Other**
- Build Command: (leave empty)
- Install Command: `npm install`

**Environment Variables:** Add these before deploying:

```
MONGODB_URI = mongodb+srv://charity:CMFoundation@cluster0.wzcfrqy.mongodb.net/?appName=Cluster0

NODE_ENV = production

JWT_SECRET = 57bbd301f8a992304bd0eb29cd1909a1221ab7da24b32915d21e753af1cba9a150b4e8565928003cb833e19d3758f9ce32818a1e57b4027dda226c8836e1d6c1

ALLOWED_ORIGINS = https://charity-musyoka-foundation.vercel.app
```

Click **Deploy** ✓

Wait for completion (~3-5 minutes)

### 5️⃣ Get Backend URL

After deployment, you'll get a URL like:
```
https://charity-musyoka-backend.vercel.app
```

Note this URL!

### 6️⃣ Update Frontend with Backend URL

1. Go to Frontend Vercel project
2. Go to "Settings" → "Environment Variables"
3. Find: `VITE_API_URL`
4. Change value to: `https://charity-musyoka-backend.vercel.app`
5. Click "Save"

Go to "Deployments" → Click "Redeploy" on latest deployment

### 7️⃣ Register Domain & Add DNS

Register `charitymusyokafoundation.co.ke` at:
- Safaricom
- Jamii.co.ke
- Aqenda.io

Then in Vercel:

**Frontend Project:**
1. Settings → Domains
2. Add: `charitymusyokafoundation.co.ke`
3. Copy CNAME from Vercel
4. Add to registrar DNS

**Backend Project:**
1. Settings → Domains
2. Add: `api.charitymusyokafoundation.co.ke`
3. Copy CNAME from Vercel
4. Add to registrar DNS

### 8️⃣ Test

```bash
# Test frontend
https://charitymusyokafoundation.co.ke

# Test backend health
curl https://api.charitymusyokafoundation.co.ke/api/health
```

---

## 📊 WHAT YOU NOW HAVE

| Component | URL | Type |
|-----------|-----|------|
| Frontend | https://charitymusyokafoundation.co.ke | React App |
| API | https://api.charitymusyokafoundation.co.ke | Node.js |
| Database | MongoDB Atlas (external) | Database |

All on **Vercel**! No other servers needed.

---

## ✨ BENEFITS

- ✅ **Completely Free**
- ✅ **Auto HTTPS** everywhere
- ✅ **Git auto-deploy** on every push
- ✅ **Super fast** with CDN
- ✅ **One dashboard** to manage everything
- ✅ **Instant rollbacks** if something breaks
- ✅ **Unlimited deployments**

---

## 🔧 IF YOU NEED TO MAKE CHANGES

After deployment:

1. Make changes locally
2. Test locally with: `npm run dev` (frontend)
3. Push to GitHub: `git add . && git commit -m "..." && git push`
4. Vercel auto-deploys (no manual action needed!)

---

## 📞 QUICK REFERENCE

**Frontend Vercel Project:**
- GitHub: https://github.com/edwardsila/charity_musyoka_foundation
- Root: `frontend`
- Build: `npm run build`

**Backend Vercel Project:**
- GitHub: https://github.com/edwardsila/charity_musyoka_foundation
- Root: `backend`
- API: `/api/*` routes

**Domain Registrar:**
- charitymusyokafoundation.co.ke

**Environment Variables:**
- Frontend: `VITE_API_URL=https://api.charitymusyokafoundation.co.ke`
- Backend: `MONGODB_URI`, `NODE_ENV`, `JWT_SECRET`, `ALLOWED_ORIGINS`

---

## 🎉 DONE!

Your entire website is now ready to deploy to Vercel.

**Next Step:** Follow steps 1-8 above to go live!

Estimated time: **15-20 minutes** (plus DNS propagation 24-48 hours)
