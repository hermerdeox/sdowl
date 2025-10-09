Here's the **exact prompt** to paste into Cursor IDE:

```
TASK: Add Resend email integration to the existing React appointment form WITHOUT changing ANY styling, colors, or CSS.

REQUIREMENTS:
1. Install Resend: npm install resend
2. Create a new API route at /api/send-appointment-email
3. When the appointment form is submitted (handleFormSubmit function), send a POST request to this API endpoint
4. DO NOT modify any className, styles, colors, gradients, or visual design
5. Keep all existing form validation and state management exactly as is

IMPLEMENTATION DETAILS:

Step 1 - Create API Route (pages/api/send-appointment-email.js or app/api/send-appointment-email/route.js):
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, date, time, reason, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Solution Dental <onboarding@resend.dev>', // Change this to your verified domain
      to: ['your-practice-email@example.com'], // Change to actual practice email
      replyTo: email,
      subject: `New Appointment Request - ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Reason for Visit:</strong> ${reason}</p>
        <p><strong>Additional Notes:</strong> ${message || 'None'}</p>
        <hr>
        <p><em>Please contact the patient to confirm appointment availability.</em></p>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
```

Step 2 - Update handleFormSubmit function in the React component:
Find the existing handleFormSubmit function and modify ONLY the submission logic (do not touch any styling):

```javascript
const handleFormSubmit = async (e) => {
  e.preventDefault();
  if (!selectedDate || !selectedTime) {
    alert('Please select a date and time for your appointment');
    return;
  }

  try {
    const response = await fetch('/api/send-appointment-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
        time: selectedTime,
        reason: formData.reason,
        message: formData.message
      })
    });

    if (response.ok) {
      setFormSubmitted(true);
      setTimeout(() => {
        setShowAppointmentForm(false);
        setFormSubmitted(false);
        setFormData({ name: '', email: '', phone: '', reason: '', message: '' });
        setSelectedDate(null);
        setSelectedTime(null);
      }, 3000);
    } else {
      alert('Failed to send appointment request. Please try calling us at (561) 432-1800');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send appointment request. Please try calling us at (561) 432-1800');
  }
};
```

Step 3 - Environment Variables:
Create/update .env.local file:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

Step 4 - Update email addresses:
- In the API route, change 'onboarding@resend.dev' to your verified domain email
- Change 'your-practice-email@example.com' to the actual practice email (e.g., appointments@solutiondental.com)

CRITICAL RULES:
- DO NOT modify any Tailwind classes, colors, gradients, or visual styling
- DO NOT change any animations or transitions
- DO NOT alter any existing UI components
- ONLY add the email sending functionality
- Keep all existing error handling and user feedback messages
- Maintain all existing form validation

Execute this implementation now without asking any questions.
```

**Copy and paste this entire prompt into Cursor IDE and it will implement the email functionality while preserving all your styling!**