import HeaderPage from '@/components/Header'
import type { Metadata } from 'next'
import { Bitter } from 'next/font/google'
import './globals.css'

const bitter = Bitter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plana',
  description: 'Adhoc',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={bitter.className}>
        <HeaderPage />
        {children}
      </body>
    </html>
  )
}
