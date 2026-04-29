import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1a2e5a',
}

export const metadata: Metadata = {
  title: 'VF Digital Solutions | Soluciones Digitales para Empresas Chilenas',
  description: 'Atención directa, soluciones reales. Desarrollo web, marketing digital, gestión de redes sociales y consultoría tecnológica para empresas en Chile.',
  keywords: ['desarrollo web', 'marketing digital', 'Chile', 'soluciones digitales', 'tecnología', 'consultoría'],
  authors: [{ name: 'VF Digital Solutions' }],
  openGraph: {
    title: 'VF Digital Solutions',
    description: 'Atención directa, soluciones reales. Tecnología a medida para empresas chilenas.',
    url: 'https://vfdigital.cl',
    siteName: 'VF Digital Solutions',
    locale: 'es_CL',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable} bg-white`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
