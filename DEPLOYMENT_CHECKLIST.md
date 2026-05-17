# Deployment Checklist

## Security ✅
- [x] Added Helmet.js for security headers
- [x] Configured CORS with allowed origins
- [x] Added rate limiting (15 min window, 100 requests)
- [x] Input validation and sanitization with express-validator
- [x] XSS protection (escape user input)
- [x] MongoDB ObjectId validation
- [x] Environment variables for sensitive data
- [x] Added .env.production template

## SEO ✅
- [x] Meta descriptions and keywords in HTML head
- [x] Open Graph tags for social sharing
- [x] Twitter card meta tags
- [x] Canonical URL tag
- [x] Created robots.txt
- [x] Created XML sitemap
- [x] Mobile responsive design

## Performance ✅
- [x] Configured Vite build optimization
- [x] Enabled CSS code splitting
- [x] Vendor chunk optimization
- [x] Terser minification enabled
- [x] Asset optimization in build process

## Error Handling ✅
- [x] React Error Boundary component
- [x] Global error handler in Express
- [x] 404 error handling
- [x] Validation error responses
- [x] Console error logging

## Frontend Requirements
- [ ] Install dependencies: `npm install`
- [ ] Build for production: `npm run build`
- [ ] Test production build locally: `npm run preview`

## Backend Requirements
- [ ] Install dependencies: `npm install`
- [ ] Update .env.production with real values:
  - MongoDB production URI
  - JWT secret (generate random 32+ char string)
  - ALLOWED_ORIGINS (your domain)
- [ ] Test API locally

## Deployment Steps

### Frontend (Vercel/Netlify)
1. Connect repository to Vercel/Netlify
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable for API URL
5. Deploy

### Backend (Railway/Render/Heroku)
1. Connect repository
2. Set environment variables from .env.production
3. Set start command: `node server.js`
4. Deploy

## Production Recommendations
- [ ] Use HTTPS everywhere
- [ ] Enable CSP (Content Security Policy) headers
- [ ] Set up SSL/TLS certificate
- [ ] Enable compression (gzip)
- [ ] Set up logging service (Sentry, DataDog)
- [ ] Monitor API performance
- [ ] Regular security audits
- [ ] Backup MongoDB regularly
- [ ] Set up email notifications for errors
- [ ] Use CDN for static assets

## Environment Variables Needed

### Frontend (.env)
```
VITE_API_URL=https://api.yourdomain.com
```

### Backend (.env.production)
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
PORT=5000
NODE_ENV=production
JWT_SECRET=your_secure_random_key
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## Post-Deployment
- [ ] Test all forms (contact, donations, testimonials)
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Run Google PageSpeed Insights
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor error logs
- [ ] Set up automated backups
