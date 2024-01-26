import { SearchContextProvider } from './components/SearchContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Voyager',
  description: 'Car Rental Website',
}


export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </SearchContextProvider>

  )
}
