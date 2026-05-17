# Charity Musyoka Foundation Website

A modern, responsive, and secure website for the Charity Musyoka Foundation built with React, Vite, Node.js, Express, and MongoDB.

## Features

- **Responsive Design** - Works perfectly on all devices
- **Interactive Components** - Animated statistics, hero sections, and galleries
- **Secure Backend** - Helmet.js, rate limiting, input validation, XSS protection
- **SEO Optimized** - Meta tags, Open Graph, XML sitemap, robots.txt
- **Contact Management** - Form submissions with validation saved to database
- **Testimonials** - User testimonials with admin approval system
- **Donation System** - Track and manage donations
- **Modern Tech Stack** - React + Vite frontend with Express backend
- **Error Handling** - React Error Boundary, global error handlers
- **Performance Optimized** - Code splitting, minification, asset optimization

## Security Features

✅ Helmet.js for HTTP security headers  
✅ CORS configuration with allowed origins  
✅ Rate limiting on API endpoints  
✅ Input validation and sanitization  
✅ XSS protection  
✅ MongoDB ObjectId validation  
✅ Environment variable configuration  
✅ Error boundary for React crashes  

## Project Structure

```
charity-musyoka-foundation/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── styles/         # CSS files
│   │   ├── services/       # API services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/             # Static assets, robots.txt, sitemap
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── models/             # MongoDB schemas
│   ├── controllers/        # Business logic
│   ├── routes/             # API routes
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.production
└── DEPLOYMENT_CHECKLIST.md
```

## Website Sections

1. **Navbar** - Navigation with logo and links
2. **Hero Section** - Full-screen banner with CTA buttons
3. **About** - Mission and vision statements
4. **Focus Areas** - 4 key areas: Education, Health, PWDs, Youth & Women
5. **Impact Stats** - Animated statistics
6. **Gallery** - Featured community photos
7. **Testimonials** - Beneficiary quotes
8. **Call to Action** - Join us section
9. **Footer** - Contact info and social links

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb://localhost:27017/charity_foundation
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5000
```

Run the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## API Endpoints

### Contacts
- `POST /api/contacts` - Create contact message (with validation)
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get single contact
- `DELETE /api/contacts/:id` - Delete contact

### Testimonials
- `POST /api/testimonials` - Submit testimonial
- `GET /api/testimonials` - Get approved testimonials
- `GET /api/testimonials/admin/all` - Get all testimonials
- `PATCH /api/testimonials/:id/approve` - Approve testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

### Donations
- `POST /api/donations` - Create donation
- `GET /api/donations` - Get all donations
- `GET /api/donations/:id` - Get single donation
- `PATCH /api/donations/:id/status` - Update donation status
- `GET /api/donations/stats/total` - Get donation statistics

## Technologies Used

### Frontend
- React 18
- Vite
- CSS3
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Helmet (Security)
- Express Validator
- Express Rate Limit

## Color Scheme
- Primary: #667eea (Purple)
- Secondary: #764ba2 (Dark Purple)
- Light: #f8f9fa
- Dark: #2c3e50

## Production Deployment

See `DEPLOYMENT_CHECKLIST.md` for comprehensive deployment instructions.

### Quick Deployment Summary:
1. **Frontend**: Deploy to Vercel, Netlify, or GitHub Pages
2. **Backend**: Deploy to Railway, Render, Heroku, or similar
3. **Database**: Use MongoDB Atlas
4. **SSL**: Enable HTTPS via your hosting provider
5. **Environment**: Update all .env variables for production

## Security Best Practices

- Keep dependencies updated: `npm audit`
- Regularly backup MongoDB
- Monitor API logs for suspicious activity
- Use strong JWT secrets (32+ random characters)
- Enable HTTPS/SSL in production
- Set up error logging service (Sentry, DataDog)
- Regular security audits

## License
MIT License

## Contact
For inquiries about the Charity Musyoka Foundation, please visit the website or use the contact form.

## Contributing
Pull requests welcome for improvements and bug fixes.

