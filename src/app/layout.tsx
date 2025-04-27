import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./theme.css"
import 'animate.css'
import Script from "next/script"

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block" />
      </head>
      <Script id="mouseflow-analytics">
        {`
          window._mfq = window._mfq || [];
          (function() {
            var mf = document.createElement("script");
            mf.type = "text/javascript"; mf.defer = true;
            mf.src = "//cdn.mouseflow.com/projects/875f19ff-d677-4509-b395-07dc9d1d6e6c.js";
            document.getElementsByTagName("head")[0].appendChild(mf);
          })();
        `}
      </Script>
      <body
        className={`${inter.className} antialiased py-4 bg-surface-default text-neutral-default`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-neutral-default focus:border-2 focus:border-blue-600 focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
