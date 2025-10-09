# Environment Configuration

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
RESEND_API_KEY=re_your_actual_api_key_here
```

## Setup Instructions

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create an account and verify your email

2. **Get your API Key**
   - Go to your Resend dashboard
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key (starts with `re_`)

3. **Create .env.local file**
   ```bash
   echo "RESEND_API_KEY=your_actual_api_key_here" > .env.local
   ```

4. **Update Email Configuration**
   - In `app/api/send-appointment-email/route.js`:
   - Change `from: 'Solution Dental <onboarding@resend.dev>'` to your verified domain
   - Change `to: ['appointments@solutiondental.com']` to the actual practice email

5. **Verify Domain (Optional but Recommended)**
   - In Resend dashboard, add and verify your domain
   - Use your verified domain in the `from` field for better deliverability

## For Vercel Deployment

Add the environment variable in Vercel dashboard:
1. Go to your project settings
2. Navigate to Environment Variables
3. Add `RESEND_API_KEY` with your API key value
4. Deploy your project
