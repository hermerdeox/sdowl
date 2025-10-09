#!/usr/bin/env node

// Test script for Solution Dental email functionality
// Run with: node test-email.js

const testAppointmentEmail = async () => {
  console.log('🦷 Testing Solution Dental Email Functionality...');
  console.log('================================================');

  const testData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(561) 123-4567',
    date: 'Monday, January 15, 2024',
    time: '10:00 AM',
    reason: 'Routine Checkup',
    message: 'This is a test appointment request to verify email functionality.'
  };

  try {
    console.log('📧 Sending test appointment email...');
    console.log('Patient:', testData.name);
    console.log('Date:', testData.date);
    console.log('Time:', testData.time);
    console.log('');

    const response = await fetch('http://localhost:7001/api/send-appointment-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ SUCCESS: Email sent successfully!');
      console.log('📨 Email ID:', result.data?.id || 'N/A');
      console.log('📬 Check info@solutiondentallakeworth.com for the test email');
    } else {
      console.log('❌ ERROR: Failed to send email');
      console.log('Status:', response.status);
      console.log('Error:', result.error);
    }
  } catch (error) {
    console.log('❌ NETWORK ERROR:', error.message);
    console.log('Make sure the development server is running (npm run dev)');
  }

  console.log('');
  console.log('================================================');
  console.log('Test completed. Check your email inbox!');
};

// Check if server is likely running
const checkServer = async () => {
  try {
    const response = await fetch('http://localhost:7001', { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Main execution
(async () => {
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('⚠️  Development server not detected at http://localhost:7001');
    console.log('Please start the server first: npm run dev -- -p 7001');
    console.log('Then run this test again: node test-email.js');
    process.exit(1);
  }

  await testAppointmentEmail();
})();
