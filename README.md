# Charity Musyoka Foundation Website

A modern, responsive website for the Charity Musyoka Foundation built with React, Vite, Node.js, Express, and MongoDB.

## Features

- **Responsive Design** - Works on all devices
- **Interactive Components** - Animated statistics, hero sections, and galleries
- **Contact Management** - Form submissions saved to database
- **Testimonials** - User testimonials with admin approval system
- **Donation System** - Track and manage donations
- **Modern Tech Stack** - React + Vite frontend with Express backend

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
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── models/             # MongoDB schemas
│   ├── controllers/        # Business logic
│   ├── routes/             # API routes
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## Website Sections

1. **Navbar** - Navigation with logo and links
2. **Hero Section** - Eye-catching banner with CTA buttons
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
- MongoDB
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
```

Run the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## API Endpoints

### Contacts
- `POST /api/contacts` - Create contact message
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

## Color Scheme
- Primary: #667eea (Purple)
- Secondary: #764ba2 (Dark Purple)
- Light: #f8f9fa
- Dark: #2c3e50

## License
MIT License

## Contact
For inquiries about the Charity Musyoka Foundation, please visit the website or contact us through the contact form.
