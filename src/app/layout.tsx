import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import 'animate.css'

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "WCAG hands on",
  description: "A playground to learn WCAG success criteria with hands on examples",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased py-4`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:border-2 focus:border-blue-600 focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
