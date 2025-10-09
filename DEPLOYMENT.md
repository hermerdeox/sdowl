# Vercel Deployment Guide

This guide will walk you through deploying the Solution Dental website to Vercel with full email functionality.

## 🚀 Quick Deployment

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd /path/to/solutionsdentalwestlake
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? `solution-dental-website`
   - In which directory is your code located? `./`

### Option 2: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/solution-dental-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

## ⚙️ Environment Configuration

### Set Environment Variables in Vercel

1. **Go to Project Settings**
   - Navigate to your project dashboard
   - Click on "Settings" tab
   - Select "Environment Variables"

2. **Add Required Variables**
   ```
   Name: RESEND_API_KEY
   Value: re_your_actual_api_key_here
   Environment: Production, Preview, Development
   ```

3. **Save and Redeploy**
   - Click "Save"
   - Go to "Deployments" tab
   - Click "Redeploy" on the latest deployment

## 📧 Email Service Setup

### 1. Resend Account Setup

1. **Create Resend Account**
   - Visit [resend.com](https://resend.com)
   - Sign up with your email
   - Verify your account

2. **Generate API Key**
   - Go to Dashboard → API Keys
   - Click "Create API Key"
   - Name it "Solution Dental Website"
   - Copy the generated key (starts with `re_`)

3. **Add API Key to Vercel**
   - Use the key in your Vercel environment variables
   - Make sure it's added to all environments

### 2. Domain Verification (Recommended)

1. **Add Domain in Resend**
   - Go to Dashboard → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `solutiondental.com`)

2. **Configure DNS Records**
   - Add the provided DNS records to your domain
   - Wait for verification (can take up to 24 hours)

3. **Update Email Configuration**
   - Edit `app/api/send-appointment-email/route.js`
   - Change `from: 'Solution Dental <onboarding@resend.dev>'`
   - To `from: 'Solution Dental <noreply@yourdomain.com>'`

### 3. Update Recipient Email

1. **Edit API Route**
   - Open `app/api/send-appointment-email/route.js`
   - Find the line: `to: ['appointments@solutiondental.com']`
   - Replace with your actual practice email

2. **Test Email Delivery**
   - Deploy the changes
   - Submit a test appointment
   - Check your email inbox

## 🔧 Custom Domain Setup

### 1. Add Domain to Vercel

1. **Go to Project Settings**
   - Navigate to "Domains" tab
   - Click "Add"
   - Enter your domain (e.g., `www.solutiondental.com`)

2. **Configure DNS**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Or A record: `@` → Vercel's IP address
   - Wait for DNS propagation

### 2. SSL Certificate

- Vercel automatically provides SSL certificates
- Your site will be available at `https://yourdomain.com`
- Certificate auto-renews

## 📊 Performance Optimization

### 1. Build Settings

The project is already optimized with:
- Next.js App Router for better performance
- Static optimization enabled
- Image optimization configured
- Bundle analysis available

### 2. Monitoring

1. **Vercel Analytics**
   - Enable in project settings
   - Monitor Core Web Vitals
   - Track user interactions

2. **Function Logs**
   - Monitor API route performance
   - Check email sending success rates
   - Debug any issues

## 🚨 Troubleshooting

### Common Issues

1. **Email Not Sending**
   ```bash
   # Check environment variables
   vercel env ls
   
   # Check function logs
   vercel logs
   ```

2. **Build Failures**
   ```bash
   # Test build locally
   npm run build
   
   # Check for TypeScript errors
   npm run lint
   ```

3. **Domain Issues**
   - Verify DNS records are correct
   - Check domain propagation: `nslookup yourdomain.com`
   - Ensure SSL certificate is active

### Debug Steps

1. **Check Deployment Logs**
   - Go to Vercel dashboard
   - Click on failed deployment
   - Review build and runtime logs

2. **Test API Endpoints**
   ```bash
   # Test email API
   curl -X POST https://yourdomain.com/api/send-appointment-email \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","phone":"123-456-7890","date":"Monday, January 1, 2024","time":"10:00 AM","reason":"Checkup"}'
   ```

3. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names match exactly
   - Verify values are correct

## 🔄 Updates and Maintenance

### Deploying Updates

1. **Push Changes**
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```

2. **Automatic Deployment**
   - Vercel automatically deploys on push
   - Monitor deployment in dashboard
   - Test functionality after deployment

### Regular Maintenance

1. **Update Dependencies**
   ```bash
   npm update
   npm audit fix
   ```

2. **Monitor Performance**
   - Check Vercel Analytics
   - Review function execution times
   - Monitor email delivery rates

3. **Backup Configuration**
   - Export environment variables
   - Document any custom settings
   - Keep deployment notes updated

## 📞 Support

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

### Resend Support
- [Resend Documentation](https://resend.com/docs)
- [Resend Support](https://resend.com/support)

### Project Support
- Check the README.md for project-specific information
- Review the code comments for implementation details

---

**Deployment Complete!** 🎉

Your Solution Dental website should now be live and fully functional with appointment booking and email notifications.
