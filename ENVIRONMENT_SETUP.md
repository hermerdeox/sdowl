# 🔐 Environment Variables Setup - Solution Dental Website

## 📧 Email Functionality Configuration

### Required Environment Variable

**RESEND_API_KEY**: `re_BFLF3GPu_GmR8CyA7NsARhMqVNdJDtSCC`

This API key enables:
- ✅ Appointment booking email notifications
- ✅ Contact form submissions
- ✅ Automated patient communication
- ✅ Email delivery to Solution Dental team

## 🚀 Vercel Deployment Setup

### Step-by-Step Instructions

1. **Deploy to Vercel** (if not already done)
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository: `hermerdeox/sdowl`

2. **Add Environment Variable**
   - Navigate to: **Project Settings** → **Environment Variables**
   - Click **"Add New"**
   - Enter the following:
     ```
     Name: RESEND_API_KEY
     Value: re_BFLF3GPu_GmR8CyA7NsARhMqVNdJDtSCC
     Environments: ✅ Production ✅ Preview ✅ Development
     ```

3. **Save and Redeploy**
   - Click **"Save"**
   - Go to **Deployments** tab
   - Click **"Redeploy"** to apply the environment variable

## 🧪 Local Development

For local development, the environment variable is already configured in `.env.local`:

```bash
RESEND_API_KEY=re_BFLF3GPu_GmR8CyA7NsARhMqVNdJDtSCC
```

## 📧 Email Configuration Details

### Resend Service
- **Provider**: Resend (https://resend.com)
- **API Endpoint**: Used in `/app/api/send-appointment-email/route.js`
- **Email Template**: Appointment booking notifications
- **Recipient**: Solution Dental team

### Email Features
- **Appointment Requests**: Sent when patients book appointments
- **Patient Information**: Name, phone, email, preferred date/time
- **Reason for Visit**: Captured in booking form
- **Additional Notes**: Optional patient messages

## 🔒 Security Notes

- ✅ API key is securely stored in Vercel environment variables
- ✅ Not exposed in client-side code
- ✅ Only accessible by server-side API routes
- ✅ Follows security best practices

## ✅ Verification

After setup, verify email functionality:

1. **Visit your deployed website**
2. **Click "Book Appointment"**
3. **Fill out the form completely**
4. **Submit the appointment request**
5. **Check for success message**

If emails are not working:
- Verify the environment variable is set correctly
- Check Vercel function logs for errors
- Ensure Resend account is active

## 📞 Support

**Solution Dental Contact:**
- **Phone**: (561) 432-1800
- **Address**: 3095 S Military Trl #22, Lake Worth Beach, FL 33463

For technical issues with email functionality, check:
- Vercel deployment logs
- Resend dashboard for delivery status
- Environment variable configuration
