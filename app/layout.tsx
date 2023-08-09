import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import ActivesectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mustapha | Portfolio',
  description: 'Mustapha is a fullstack developer based in France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <ActivesectionContextProvider>
        <Header />
                {children}
      </ActivesectionContextProvider>
      </body>
    </html>
  )
}
