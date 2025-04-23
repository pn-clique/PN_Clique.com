import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/contexts/ContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PN Clique',
  description:
    'Somos uma empresa de tecnologia especializada no desenvolvimento de soluções móveis e web, que impactam positivamente a vida de centenas de pessoas e empresas.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <meta
          name="google-site-verification"
          content="Vsx1PTIBGdl2s7Bt4oGCIDBbtbIRorCnJtyHD__8DJg"
        />
      </head>
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
