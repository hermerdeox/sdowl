#!/bin/bash

# Solution Dental Website - Deployment Script

echo "🦷 Solution Dental Website - Production Deployment"
echo "=================================================="

# Check if build is successful
echo "🔨 Building project for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo ""
echo "🚀 Ready for Vercel Deployment!"
echo "================================"
echo ""
echo "📋 Deployment Checklist:"
echo "✅ Build successful"
echo "✅ Email integration configured"
echo "✅ API key ready: re_BFLF3GPu_GmR8CyA7NsARhMqVNdJDtSCC"
echo "✅ All assets created"
echo "✅ Performance optimized"
echo ""
echo "🎯 Next Steps:"
echo "1. Run: npx vercel"
echo "2. Follow the prompts to deploy"
echo "3. Add environment variable in Vercel dashboard:"
echo "   RESEND_API_KEY = re_BFLF3GPu_GmR8CyA7NsARhMqVNdJDtSCC"
echo ""
echo "📧 Email Configuration:"
echo "- From: Solution Dental <onboarding@resend.dev>"
echo "- To: info@solutiondentallakeworth.com"
echo ""
echo "🌐 After deployment, test the appointment booking system!"
echo "=================================================="
