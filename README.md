# Solution Dental Website

A modern, responsive dental practice website built with Next.js, React, and TailwindCSS, featuring appointment booking with email integration via Resend.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Appointment Booking**: Interactive appointment scheduling system
- **Email Integration**: Automated email notifications using Resend
- **Mobile-First**: Fully responsive design optimized for all devices
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Frontend**: React 19+, TypeScript
- **Styling**: TailwindCSS 4+
- **Email Service**: Resend
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd solutionsdentalwestlake
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.config.md .env.local
   # Edit .env.local with your Resend API key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### Email Configuration

Update the email settings in `app/api/send-appointment-email/route.js`:

1. **From Address**: Change `onboarding@resend.dev` to your verified domain
2. **To Address**: Change `appointments@solutiondental.com` to your practice email
3. **Domain Verification**: Verify your domain in Resend dashboard for better deliverability

## 🚀 Deployment

### Deploy to Vercel

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set Environment Variables**
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add `RESEND_API_KEY` with your API key

3. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📧 Email Setup

### Resend Configuration

1. **Sign up for Resend**
   - Visit [resend.com](https://resend.com)
   - Create an account and verify your email

2. **Get API Key**
   - Go to your Resend dashboard
   - Navigate to API Keys
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Verify Domain (Recommended)**
   - Add your domain in Resend dashboard
   - Follow DNS verification steps
   - Use your verified domain in the `from` field

### Email Template

The appointment emails include:
- Patient information (name, email, phone)
- Appointment details (date, time, reason)
- Additional notes from the patient
- Professional HTML formatting
- Practice contact information

## 🎨 Customization

### Colors and Branding

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  dental: {
    blue: '#2563eb',
    purple: '#7c3aed',
    pink: '#ec4899',
  },
}
```

### Content Updates

- **Practice Information**: Update contact details in `dental-website.tsx`
- **Services**: Modify the services array with your offerings
- **Hours**: Update the hours array with your schedule
- **About Section**: Customize the about content

### Styling

- **Global Styles**: Edit `app/globals.css`
- **Component Styles**: Modify TailwindCSS classes in components
- **Animations**: Customize animations in the CSS files

## 📱 Features Overview

### Appointment Booking
- Interactive calendar with available dates
- Time slot selection based on practice hours
- Form validation and error handling
- Email confirmation system

### Contact Information
- Practice location with Google Maps integration
- Phone number with click-to-call functionality
- Office hours display
- Social media links

### Services Showcase
- Interactive service cards with hover effects
- Detailed service descriptions
- Professional iconography

### Chat Widget
- Interactive chat interface
- Automated responses
- Contact form integration

## 🔒 Security

- Environment variables for sensitive data
- Input validation and sanitization
- CORS headers configuration
- Security headers in Next.js config

## 📊 Performance

- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size
- Fast loading times

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📞 Support

For technical support or customization requests, please contact the development team.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Solution Dental** - Providing exceptional dental care to the Lake Worth community.
