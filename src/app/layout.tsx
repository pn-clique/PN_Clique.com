import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PN Clique',
  description:
    'Somos uma empresa de tecnologia especializada no desenvolvimento de soluções móveis e web, que impactam positivamente a vida de centenas de pessoas e empresas.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <link href="/favicon.png" rel="icon" sizes="32x32" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
