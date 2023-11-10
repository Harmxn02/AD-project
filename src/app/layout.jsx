import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'X-Plor',
  description: 'Developed by Harman and Layton',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[#F6F6F6]'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
