# 📸 IMAGE ASSETS CHECKLIST

## Images You Need to Provide

### 1. Logo
**File:** `frontend/src/assets/logo/logo.jpeg`
**Size:** 200x200px (or larger, will scale to 40x40px in navbar)
**Format:** JPEG or PNG
**Purpose:** Navbar logo in top-left corner

---

### 2. Hero Section
**File:** `frontend/src/assets/images/hero/hero-banner.jpg`
**Size:** 1920x1080px (or larger for retina displays)
**Format:** JPG (optimized)
**Purpose:** Full-screen hero background image
**Description:** Should be inspiring, related to community/charity work

---

### 3. Gallery Images
**Location:** `frontend/src/assets/images/gallery/`
**Required:** At least 6 images
**Suggested:** 8-12 images for better display

**Image Names:**
- `gallery-1.jpg` (or gallery-01.jpg)
- `gallery-2.jpg` (or gallery-02.jpg)
- `gallery-3.jpg`
- `gallery-4.jpg`
- `gallery-5.jpg`
- `gallery-6.jpg`
- (optional) `gallery-7.jpg`, `gallery-8.jpg`, etc.

**Size:** 800x600px or 1200x900px
**Format:** JPG (optimized)
**Purpose:** Gallery carousel showing foundation work

---

### 4. Testimonial Images
**Location:** `frontend/src/assets/images/testimonials/`
**Required:** At least 4 images (one for each testimonial)

**Image Names:**
- `testimonial-1.jpg`
- `testimonial-2.jpg`
- `testimonial-3.jpg`
- `testimonial-4.jpg`

**Size:** 300x300px (square images work best)
**Format:** JPG or PNG
**Purpose:** Profile pictures for testimonial section

---

## 📋 Directory Structure After Adding Images

```
frontend/src/assets/
├── logo/
│   └── logo.jpeg (40x40px display)
├── images/
│   ├── hero/
│   │   └── hero-banner.jpg (1920x1080px)
│   ├── gallery/
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   ├── gallery-4.jpg
│   │   ├── gallery-5.jpg
│   │   ├── gallery-6.jpg
│   │   └── (more optional)
│   └── testimonials/
│       ├── testimonial-1.jpg
│       ├── testimonial-2.jpg
│       ├── testimonial-3.jpg
│       └── testimonial-4.jpg
```

---

## 🖼️ Image Optimization Tips

1. **Compression:**
   - Use TinyPNG, ImageOptim, or similar tool
   - Target: < 200KB per gallery image

2. **Format:**
   - Use JPG for photos
   - Use PNG for graphics with transparency
   - Consider WebP for modern browsers (Vite handles fallbacks)

3. **Dimensions:**
   - Provide larger versions than displayed size (for retina/2x screens)
   - Gallery: 1200x900px is ideal for web
   - Hero: 1920x1080px minimum, 2560x1440px better
   - Testimonials: 300x300px (or 600x600px for 2x)

4. **Quality:**
   - Gallery: 70-80% JPG quality
   - Hero: 75-85% JPG quality
   - Logo: PNG with transparency preferred

---

## 📸 How Images Are Used

### Logo
- Displayed at 40x40px in navbar
- Used as favicon (see `public/favicon.svg`)
- Used in footer

### Hero Image
- Full-screen background
- Fixed attachment (parallax effect on desktop)
- Overlaid with semi-transparent dark gradient
- Has call-to-action buttons on top

### Gallery
- Grid layout (3 columns on desktop, 1 on mobile)
- Hover effect with zoom (1.1x scale)
- Overlay with image title animation
- Clicking could open lightbox (currently basic)

### Testimonials
- Circular images (rounded via CSS)
- Displayed above testimonial text
- 100x100px display size
- Good for face photos or organization logos

---

## ✅ Recommended Images

### Hero Banner Suggestions:
- Community members working together
- Wheelchair/disability-inclusive activities
- Education/learning environment
- Smiling faces of beneficiaries
- Colorful, diverse, hopeful imagery

### Gallery Suggestions:
- Projects in action
- Beneficiaries receiving services
- Training/education moments
- Medical/health services
- Success stories
- Community events
- Office/team photos

### Testimonial Suggestions:
- Face photos of beneficiaries
- Profile photos of community leaders
- Organization logos of partners
- Real people sharing their stories

---

## 🚀 Next Steps

1. Prepare images according to specifications above
2. Compress images using online tools or software
3. Copy images to corresponding directories
4. Run `npm run build` in frontend folder to test
5. Verify images load correctly with `npm run preview`
6. Deploy to Vercel

---

## 💡 Placeholder Strategy

**During Testing:**
If you don't have all images yet, the site will still work:
- Hero section shows gradient overlay (no image)
- Gallery will be empty (but structure ready)
- Testimonial images will be missing (but text shows)

**In Production:**
All images MUST be added before launch for best UX.

---

## 📞 Need Image Help?

**Suggested Free Resources:**
- Unsplash: https://unsplash.com (free stock photos)
- Pexels: https://pexels.com (free stock photos)
- Pixabay: https://pixabay.com (free stock photos)
- Freepik: https://freepik.com (free graphics)

**Image Compression:**
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app (Google's tool)
- ImageOptim: https://imageoptim.com (macOS)
- FileOptimizer: https://nikkhokkho.sourceforge.io/ (Windows)

---

Good luck with your image preparation! 📸
