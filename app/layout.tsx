import Head from 'next/head'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: {
    template: '%s | Boltviz Auto',
  },
  description: 'Boltviz Auto with integrated CMS developed by Boltviz',
  openGraph: {
    description: 'Boltviz Auto with integrated CMS developed by Boltviz',
    images: 'https://boltviz-auto.netlify.app/openGraphImage.png',
  },
  category: 'technology',
  icons: {
    apple: [
      { url: '/apple-touch-icon.png' },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
