import './globals.css'

export const metadata = {
  title: 'Solution Dental - Lake Worth, FL | Family Dentistry & Dental Care',
  description: 'Solution Dental in Lake Worth provides exceptional family dentistry services including general dentistry, cosmetic dentistry, preventive care, and emergency dental services. Call (561) 432-1800 to schedule your appointment.',
  keywords: 'dentist Lake Worth FL, family dentistry, dental care, cosmetic dentistry, teeth cleaning, dental checkup, emergency dentist, Solution Dental',
  authors: [{ name: 'Solution Dental' }],
  creator: 'Solution Dental',
  publisher: 'Solution Dental',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://solutiondental.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Solution Dental - Lake Worth, FL | Family Dentistry & Dental Care',
    description: 'Solution Dental in Lake Worth provides exceptional family dentistry services. Call (561) 432-1800 to schedule your appointment.',
    url: 'https://solutiondental.com',
    siteName: 'Solution Dental',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solution Dental - Lake Worth Family Dentistry',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solution Dental - Lake Worth, FL | Family Dentistry & Dental Care',
    description: 'Solution Dental in Lake Worth provides exceptional family dentistry services. Call (561) 432-1800 to schedule your appointment.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
