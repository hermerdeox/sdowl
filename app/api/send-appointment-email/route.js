import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend only when API key is available
let resend;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request) {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Initialize Resend if not already done
    if (!resend) {
      resend = new Resend(process.env.RESEND_API_KEY);
    }

    const { name, email, phone, date, time, reason, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !reason) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For production deployment, emails will work properly
    // In development, Resend restricts to verified emails only
    const data = await resend.emails.send({
      from: 'Solution Dental <onboarding@resend.dev>', // Using Resend's default domain
      to: ['solutionsdentaldmd@gmail.com'], // Solution Dental practice Gmail
      replyTo: email,
      subject: `New Appointment Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 28px; font-weight: bold;">Solution Dental</h1>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Lake Worth, FL</p>
            </div>
            
            <h2 style="color: #1f2937; margin-bottom: 25px; font-size: 24px; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">New Appointment Request</h2>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Patient Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Patient Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #2563eb;">
              <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Appointment Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e40af; width: 140px;">Preferred Date:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: bold;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e40af;">Preferred Time:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: bold;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e40af;">Reason for Visit:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${reason}</td>
                </tr>
              </table>
            </div>
            
            ${message ? `
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Additional Notes</h3>
              <p style="color: #1f2937; margin: 0; line-height: 1.6;">${message}</p>
            </div>
            ` : ''}
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-weight: bold; font-size: 16px;">⚠️ Action Required</p>
              <p style="margin: 10px 0 0 0; color: #92400e; line-height: 1.6;">
                Please contact the patient to confirm appointment availability and provide any pre-appointment instructions.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                Solution Dental | 3095 S Military Trl #22, Lake Worth Beach, FL 33463 | (561) 432-1800
              </p>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">
                Email: solutionsdentaldmd@gmail.com
              </p>
            </div>
          </div>
        </div>
      `
    });

    // Check if there was an error in the response
    if (data.error) {
      console.log('Resend API response:', data);
      
      // In development, Resend restricts emails - but still return success for form UX
      if (data.error.message && data.error.message.includes('testing emails')) {
        console.log('Development mode: Email restricted but appointment data received');
        return NextResponse.json({ 
          success: true, 
          message: 'Appointment request received (email restricted in development)',
          data: { appointmentData: { name, email, phone, date, time, reason, message } }
        });
      }
      
      return NextResponse.json(
        { success: false, error: data.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
