import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


//components
import Navbar from './components/Navbar.jsx'


export const metadata = {
  title: 'My To-Do App',
  description: 'A simple to-do app built with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          
        
        
        {children}</body>
    </html>
  )
}
