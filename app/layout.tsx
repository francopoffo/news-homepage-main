import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ["400", "700", "800"] })

export const metadata = {
  title: 'News Page',
  description: 'Landing page of news website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-36`}>{children}</body>
    </html>
  )
}
