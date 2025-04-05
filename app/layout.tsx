import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { Header } from './components/header'
import './globals.css'

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
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
