import React from "react"
import type { Metadata } from 'next'
import { Poppins, Space_Grotesk, Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins" 
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk" 
});
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});
const firaCode = Fira_Code({ 
  subsets: ["latin"], 
  variable: "--font-fira-code" 
});

export const metadata: Metadata = {
  title: 'Anilkumar Mutyala | Software Developer',
  description: 'Ambitious Software Developer with hands-on experience in full-stack web development. Skilled in React.js, Node.js, MongoDB, and AWS.',
  keywords: ['Software Developer', 'Full Stack Developer', 'React.js', 'Node.js', 'MongoDB', 'AWS', 'Hyderabad'],
  authors: [{ name: 'Anilkumar Mutyala' }],
  openGraph: {
    title: 'Anilkumar Mutyala | Software Developer',
    description: 'Ambitious Software Developer with hands-on experience in full-stack web development.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
