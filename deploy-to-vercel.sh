#!/bin/bash

# Solution Dental Website - Vercel Deployment Script
echo "🚀 Solution Dental Website - Vercel Deployment"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if build is successful
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Solution Dental website ready for deployment"
fi

# Check Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

# Fix Vercel CLI permissions if needed
if [ ! -w "$HOME/Library/Application Support/com.vercel.cli/" ]; then
    echo "🔧 Fixing Vercel CLI permissions..."
    sudo chown -R $(whoami) "$HOME/Library/Application Support/com.vercel.cli/" 2>/dev/null || true
fi

# Attempt to deploy
echo "🚀 Deploying to Vercel..."
echo ""
echo "If this is your first time, you'll need to:"
echo "1. Login to Vercel when prompted"
echo "2. Choose your deployment settings"
echo "3. Confirm the deployment"
echo ""

# Try to deploy
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "Your Solution Dental website is now live on Vercel!"
    echo ""
    echo "Next steps:"
    echo "- Visit your Vercel dashboard to see the live URL"
    echo "- Set up custom domain if needed"
    echo "- Configure environment variables for email functionality"
    echo ""
else
    echo ""
    echo "⚠️  Automatic deployment failed. Please try manual deployment:"
    echo ""
    echo "Option 1 - Vercel Dashboard:"
    echo "1. Go to https://vercel.com/dashboard"
    echo "2. Click 'Add New...' → 'Project'"
    echo "3. Upload this project folder"
    echo "4. Deploy with default Next.js settings"
    echo ""
    echo "Option 2 - Fix CLI and retry:"
    echo "1. Run: vercel login"
    echo "2. Run: vercel --prod"
    echo ""
    echo "See DEPLOYMENT_GUIDE.md for detailed instructions."
fi
