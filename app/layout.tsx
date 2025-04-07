import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { BackToTop } from './components/back-to-top'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Toaster } from './components/toaster'
import './globals.css'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | AW Portfolio'
  },
  icons: [
    {
      url: '/images/logo.svg'
    }
  ]
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
