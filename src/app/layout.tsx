import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Bitter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
const bitter = Bitter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plana Adhoc',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={bitter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
