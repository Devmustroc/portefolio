import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/header";

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
      <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[20rem] h-[60.25rem] w-[380.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-20rem] h-[50.25rem] w-[500rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
      <Header />
      {children}
      </body>
    </html>
  )
}
