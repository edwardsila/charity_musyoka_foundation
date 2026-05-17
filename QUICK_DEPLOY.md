# 🚀 QUICK DEPLOYMENT GUIDE

## Domain
**charitymusyokafoundation.co.ke**

---

## Frontend (Vercel)

1. **Connect Repository**
   - Go to https://vercel.com
   - Connect GitHub repository: `edwardsila/charity_musyoka_foundation`

2. **Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install --legacy-peer-deps`

3. **Environment Variables**
   ```
   VITE_API_URL=https://api.charitymusyokafoundation.co.ke
   ```

4. **Domains**
   - Add: `charitymusyokafoundation.co.ke`
   - Add: `www.charitymusyokafoundation.co.ke`
   - Use DNS CNAME records Vercel provides

---

## Backend (Railway or Render)

### Environment Variables (.env.production)
```
MONGODB_URI=mongodb+srv://charity:CMFoundation@cluster0.wzcfrqy.mongodb.net/?appName=Cluster0
PORT=5000
NODE_ENV=production
JWT_SECRET=GENERATE_SECURE_32_CHAR_STRING_HERE
ALLOWED_ORIGINS=https://charitymusyokafoundation.co.ke,https://www.charitymusyokafoundation.co.ke
```

### Using Railway:
1. Go to https://railway.app
2. New Project → GitHub Repository
3. Set environment variables above
4. Deploy
5. Add custom domain: `api.charitymusyokafoundation.co.ke`

### Using Render:
1. Go to https://render.com
2. New → Web Service → GitHub
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Set environment variables above
6. Add custom domain: `api.charitymusyokafoundation.co.ke`

---

## Domain DNS Setup

At your registrar (Safaricom/Jamii.co.ke/Aqenda.io):

| Name | Type | Value |
|------|------|-------|
| @ | CNAME | [Vercel CNAME from deployment] |
| www | CNAME | [Vercel CNAME from deployment] |
| api | CNAME | [Railway/Render domain] |

---

## Testing After Deployment

```bash
# Test Frontend
https://charitymusyokafoundation.co.ke
https://www.charitymusyokafoundation.co.ke

# Test API Health
curl https://api.charitymusyokafoundation.co.ke/api/health

# Check Security Headers
curl -I https://charitymusyokafoundation.co.ke
```

---

## Post-Deployment Checklist

- [ ] Frontend loads at charitymusyokafoundation.co.ke
- [ ] Backend API responds at api.charitymusyokafoundation.co.ke/api/health
- [ ] HTTPS works on both (auto-configured)
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Donation page works
- [ ] WhatsApp button works
- [ ] Images load properly
- [ ] Submit sitemap to Google Search Console
- [ ] Test on mobile devices

---

## Important URLs

- **Frontend:** https://charitymusyokafoundation.co.ke
- **API:** https://api.charitymusyokafoundation.co.ke
- **WhatsApp:** +254 721 831045

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Railway Docs:** https://docs.railway.app
- **Render Docs:** https://render.com/docs
