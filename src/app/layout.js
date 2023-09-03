import './globals.css'
import { Outfit } from 'next/font/google'


const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', ],
  subsets: ['latin'],
  suppressHydrationWarning: true,
});

export const metadata = {
  title: 'Alex`s Website',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className='light'>
      <body className={outfit}>{children}</body>
    </html>
  )
}
