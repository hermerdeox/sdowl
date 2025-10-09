#!/bin/bash

# Solution Dental Website - Development Startup Script

echo "🦷 Starting Solution Dental Website Development Server..."
echo "=================================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  Warning: .env.local file not found!"
    echo "📝 Please create .env.local with your Resend API key:"
    echo "   RESEND_API_KEY=re_your_actual_api_key_here"
    echo ""
    echo "📖 See env.config.md for detailed setup instructions"
    echo ""
fi

# Start the development server
echo "🚀 Starting Next.js development server..."
echo "📱 Website will be available at: http://localhost:3000"
echo "📧 API endpoint: http://localhost:3000/api/send-appointment-email"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=================================================="

npm run dev
