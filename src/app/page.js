"use client"

import DefaultNavbar from './components/DefaultNavbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

function Home() {
  return (
  <>
    <main className='bg-light-cream dark:bg-dark-gray'>
      <DefaultNavbar />
      <HomePage />
      <AboutPage />
      <ContactPage />
      <Footer />
    </main>
  </>
 )
}

export default Home;