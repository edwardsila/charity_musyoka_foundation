# 🚀 DEPLOY FULL SITE TO VERCEL (Frontend + Backend)

## ✅ Why This Works

Your backend is **simple and stateless**, making it perfect for Vercel:
- ✅ Node.js/Express API (Vercel supports)
- ✅ MongoDB Atlas (external database, no local storage needed)
- ✅ No long-running processes
- ✅ API is just simple REST endpoints
- ✅ Perfect for Vercel's serverless functions

---

## 📋 COMPLETE DEPLOYMENT GUIDE

### STEP 1: Create Vercel Configuration Files

Create this file in your **backend** folder:

**File: `backend/vercel.json`**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ],
  "env": {
    "NODE_ENV": "production",
    "MONGODB_URI": "@mongodb_uri",
    "JWT_SECRET": "@jwt_secret",
    "ALLOWED_ORIGINS": "@allowed_origins"
  }
}
```

---

### STEP 2: Update Backend for Vercel

Your backend needs ONE small change to work with Vercel's serverless functions.

**File: `backend/server.js`** - Modify the last few lines:

**Current code (lines 80-97):**
```javascript
// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err)
  
  const status = err.status || 500
  const message = process.env.NODE_ENV === 'production' 
    ? 'Internal Server Error' 
    : err.message
  
  res.status(status).json({ 
    error: message,
    status: status
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`)
  console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`)
})
```

**Replace with:**
```javascript
// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err)
  
  const status = err.status || 500
  const message = process.env.NODE_ENV === 'production' 
    ? 'Internal Server Error' 
    : err.message
  
  res.status(status).json({ 
    error: message,
    status: status
  })
})

// Export for Vercel serverless functions
module.exports = app

// Local development server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`✓ Server running on port ${PORT}`)
    console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`)
  })
}
```

---

### STEP 3: Create API Folder Structure

Create this folder structure in backend:

```
backend/
├── api/
│   └── index.js (symlink or copy of server.js)
├── server.js
├── vercel.json
└── package.json
```

**File: `backend/api/index.js`**

```javascript
const app = require('../server')

module.exports = app
```

---

### STEP 4: Update Frontend Environment

**File: `frontend/.env.production`** - Update to:

```dotenv
VITE_API_URL=https://your-project.vercel.app/api
```

Replace `your-project` with your Vercel project name.

---

### STEP 5: Update Frontend vite.config.js

**File: `frontend/vite.config.js`** - Keep the dev proxy but add base:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        }
      }
    },
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets'
  },
})
```

---

### STEP 6: Prepare Backend .env.production

**File: `backend/.env.production`** - Update:

```dotenv
MONGODB_URI=mongodb+srv://charity:CMFoundation@cluster0.wzcfrqy.mongodb.net/?appName=Cluster0
NODE_ENV=production
JWT_SECRET=57bbd301f8a992304bd0eb29cd1909a1221ab7da24b32915d21e753af1cba9a150b4e8565928003cb833e19d3758f9ce32818a1e57b4027dda226c8836e1d6c1
ALLOWED_ORIGINS=https://charitymusyokafoundation.co.ke,https://www.charitymusyokafoundation.co.ke
```

---

### STEP 7: Deploy to Vercel (Step-by-Step)

#### 7A. Sign In to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Sign in with GitHub (recommended)

#### 7B. Connect Your Repository

1. Click "New Project"
2. Select your GitHub repository: `charity_musyoka_foundation`
3. Click "Import"

#### 7C. Configure Root Project (Frontend)

**Import Settings:**
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install --legacy-peer-deps`

**Environment Variables:** (leave empty for now)

Click **Deploy** (this deploys frontend)

#### 7D. Add Backend API Project

After frontend is deployed:

1. Go back to https://vercel.com dashboard
2. Click "New Project"
3. Select same repository again
4. Change settings:

**Root Directory:** Click "Edit" → Select `backend`

**Configure:**
- Framework: **Node.js**
- Build Command: Leave empty
- Start Command: `node server.js`
- Install Command: `npm install`

**Environment Variables:** Add these:

| Key | Value |
|-----|-------|
| MONGODB_URI | mongodb+srv://charity:CMFoundation@cluster0.wzcfrqy.mongodb.net/?appName=Cluster0 |
| NODE_ENV | production |
| JWT_SECRET | 57bbd301f8a992304bd0eb29cd1909a1221ab7da24b32915d21e753af1cba9a150b4e8565928003cb833e19d3758f9ce32818a1e57b4027dda226c8836e1d6c1 |
| ALLOWED_ORIGINS | https://charitymusyokafoundation.co.ke,https://www.charitymusyokafoundation.co.ke |

Click **Deploy** (this deploys backend)

---

### STEP 8: Configure Domain

#### 8A. Register Domain

1. Register `charitymusyokafoundation.co.ke` at:
   - Safaricom
   - Jamii.co.ke
   - Aqenda.io

#### 8B. Add Domain to Frontend Project

In Vercel Dashboard:

1. Select Frontend project
2. Go to "Settings" → "Domains"
3. Click "Add"
4. Enter: `charitymusyokafoundation.co.ke`
5. Vercel shows DNS records to add at registrar

**Add these DNS records at your registrar:**

```
Type: CNAME
Name: @ (or charitymusyokafoundation.co.ke)
Value: [Vercel CNAME provided]

Type: CNAME
Name: www
Value: [Vercel CNAME provided]
```

#### 8C. Add Domain to Backend Project

In Vercel Dashboard:

1. Select Backend project
2. Go to "Settings" → "Domains"
3. Click "Add"
4. Enter: `api.charitymusyokafoundation.co.ke`
5. Vercel shows DNS record to add at registrar

**Add this DNS record at your registrar:**

```
Type: CNAME
Name: api
Value: [Vercel CNAME provided]
```

---

### STEP 9: Update Frontend to Use Backend Domain

After backend is deployed and you know its domain:

**File: `frontend/.env.production`** - Update:

```dotenv
VITE_API_URL=https://api.charitymusyokafoundation.co.ke
```

**Or use:**

```dotenv
VITE_API_URL=https://your-backend-project.vercel.app
```

---

### STEP 10: Test Everything

#### Test 1: Frontend Loads
```bash
https://charitymusyokafoundation.co.ke
```
✓ Should show your website

#### Test 2: Backend Health
```bash
curl https://api.charitymusyokafoundation.co.ke/api/health
```
✓ Should return: `{"status":"Server is running","timestamp":"..."}`

#### Test 3: Contact Form
- Fill out contact form on website
- Should submit to `/api/contacts`
- Should save to MongoDB

#### Test 4: Donations
- Check M-Pesa details display
- WhatsApp button should work

---

## 🔑 ENVIRONMENT VARIABLES REFERENCE

### Frontend (.env.production)
```
VITE_API_URL=https://api.charitymusyokafoundation.co.ke
```

### Backend (.env.production)
```
MONGODB_URI=mongodb+srv://charity:CMFoundation@cluster0.wzcfrqy.mongodb.net/?appName=Cluster0
NODE_ENV=production
JWT_SECRET=57bbd301f8a992304bd0eb29cd1909a1221ab7da24b32915d21e753af1cba9a150b4e8565928003cb833e19d3758f9ce32818a1e57b4027dda226c8836e1d6c1
ALLOWED_ORIGINS=https://charitymusyokafoundation.co.ke,https://www.charitymusyokafoundation.co.ke
```

---

## 📋 DEPLOYMENT CHECKLIST

- [ ] Create `backend/vercel.json`
- [ ] Create `backend/api/index.js`
- [ ] Update `backend/server.js` (add module.exports)
- [ ] Upload images to asset folders
- [ ] Test locally: `npm run build` (frontend)
- [ ] Push to GitHub (all changes)
- [ ] Create Frontend project on Vercel
- [ ] Create Backend project on Vercel
- [ ] Register domain
- [ ] Add DNS records for both projects
- [ ] Update `frontend/.env.production` with backend domain
- [ ] Trigger new Frontend deployment
- [ ] Test health endpoint
- [ ] Test contact form
- [ ] Test on mobile devices

---

## 🎯 FINAL URLS

After deployment:

```
Frontend:  https://charitymusyokafoundation.co.ke
API:       https://api.charitymusyokafoundation.co.ke
WhatsApp:  +254 721 831045
```

---

## ✅ ADVANTAGES OF THIS APPROACH

- ✅ **Completely FREE** (no monthly costs)
- ✅ **Auto HTTPS** on all domains
- ✅ **Git auto-deploy** on every push
- ✅ **Super fast** (CDN included)
- ✅ **Scalable** (handles growth)
- ✅ **Easy to manage** (one dashboard)
- ✅ **Automatic rollbacks** if deployment fails
- ✅ **Environment management** built-in

---

## 🆘 TROUBLESHOOTING

**Backend not responding?**
- Check env variables in Vercel
- Verify MONGODB_URI is correct
- Check ALLOWED_ORIGINS includes your frontend domain
- View logs: Backend project → "Deployments" → "Logs"

**CORS errors?**
- Make sure ALLOWED_ORIGINS includes your frontend domain
- Restart backend after env changes

**Images not loading?**
- Make sure images are committed to GitHub
- Images in `frontend/src/assets/` are included in build

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Test: `nslookup charitymusyokafoundation.co.ke`

---

## 📚 HELPFUL LINKS

- Vercel Docs: https://vercel.com/docs
- Vercel Node.js: https://vercel.com/docs/functions/nodejs
- Vercel Serverless Functions: https://vercel.com/docs/concepts/functions/serverless-functions

---

Done! Your full site will be on Vercel. 🚀
