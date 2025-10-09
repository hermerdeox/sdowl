#!/usr/bin/env node

// Comprehensive Style Diagnosis Script for Solution Dental Website

const diagnoseStyling = async () => {
  console.log('🎨 Solution Dental Website - Style Diagnosis');
  console.log('=============================================');

  try {
    // Test main page
    console.log('🔍 Testing main page...');
    const pageResponse = await fetch('http://localhost:6001');
    const pageHtml = await pageResponse.text();
    
    console.log('📄 Page Status:', pageResponse.status);
    console.log('📏 Page Size:', pageHtml.length, 'characters');
    
    // Check for CSS link
    const cssLinks = pageHtml.match(/<link[^>]*stylesheet[^>]*>/gi) || [];
    console.log('🎨 CSS Links Found:', cssLinks.length);
    cssLinks.forEach((link, i) => {
      console.log(`   ${i + 1}. ${link}`);
    });

    // Check for TailwindCSS classes
    const tailwindClasses = [
      'bg-gradient-to-b',
      'animate-blob',
      'animate-fadeIn',
      'text-blue-600',
      'rounded-full',
      'shadow-lg'
    ];

    console.log('\n🎯 TailwindCSS Class Check:');
    tailwindClasses.forEach(className => {
      const found = pageHtml.includes(className);
      console.log(`   ${found ? '✅' : '❌'} ${className}: ${found ? 'Found' : 'Missing'}`);
    });

    // Check for inline styles
    const inlineStyles = pageHtml.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
    console.log(`\n💫 Inline Styles Found: ${inlineStyles.length}`);
    if (inlineStyles.length > 0) {
      console.log('   ✅ Custom animations should be working');
    }

    // Test CSS file directly
    console.log('\n🎨 Testing CSS file...');
    const cssUrl = pageHtml.match(/href="([^"]*layout\.css[^"]*)"/);
    if (cssUrl) {
      const cssResponse = await fetch(`http://localhost:6001${cssUrl[1]}`);
      const cssContent = await cssResponse.text();
      
      console.log('📊 CSS File Status:', cssResponse.status);
      console.log('📏 CSS File Size:', cssContent.length, 'characters');
      
      // Check for key animations
      const animations = ['@keyframes blob', 'animate-blob', 'bg-gradient-to-b'];
      console.log('\n🎭 Animation Check in CSS:');
      animations.forEach(anim => {
        const found = cssContent.includes(anim);
        console.log(`   ${found ? '✅' : '❌'} ${anim}: ${found ? 'Found' : 'Missing'}`);
      });
    }

    // Test specific elements
    console.log('\n🔍 Element Analysis:');
    const elementChecks = [
      { name: 'Header', pattern: 'Solution Dental' },
      { name: 'Hero Section', pattern: 'Your Family' },
      { name: 'Service Cards', pattern: 'General Dentistry' },
      { name: 'Contact Info', pattern: '561' },
      { name: 'Footer', pattern: 'All rights reserved' }
    ];

    elementChecks.forEach(check => {
      const found = pageHtml.includes(check.pattern);
      console.log(`   ${found ? '✅' : '❌'} ${check.name}: ${found ? 'Rendered' : 'Missing'}`);
    });

  } catch (error) {
    console.log('❌ Error during diagnosis:', error.message);
    console.log('Make sure the development server is running on port 6001');
  }

  console.log('\n=============================================');
  console.log('Diagnosis complete. Check results above.');
};

// Check if server is running
const checkServer = async () => {
  try {
    const response = await fetch('http://localhost:6001', { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Main execution
(async () => {
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('⚠️  Development server not detected at http://localhost:6001');
    console.log('Please start the server first: npm run dev -- -p 6001');
    process.exit(1);
  }

  await diagnoseStyling();
})();
