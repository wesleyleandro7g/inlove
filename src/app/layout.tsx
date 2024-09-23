import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const feather = localFont({
  src: './fonts/FeatherBold.woff',
  variable: '--font-feather-sans',
})

export const metadata: Metadata = {
  title: 'Inlove',
  description: 'Inlove is a quiz app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${feather.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
