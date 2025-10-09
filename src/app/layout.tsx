import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://letsfly.com.bd'),
  title: 'Lets Fly - Air Tickets, Visa Processing & Travel Services',
  description: 'Your trusted partner for domestic and international air tickets. We offer the best prices, easy booking, visa support, and EMI facilities with low interest rates.',
  keywords: 'air tickets, visa processing, travel agency, EMI facilities, Hajj, Umrah, Bangladesh, Dinajpur',
  authors: [{ name: 'mdobns', url: 'https://github.com/mdobns' }],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Lets Fly - Air Tickets & Visa Processing',
    description: 'Your trusted travel partner in Bangladesh',
    type: 'website',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  )
}
