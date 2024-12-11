'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Nav() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const experienceSection = document.getElementById('experience')
      const experienceTop = (experienceSection?.offsetTop || 0) - 100
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < experienceTop) {
        setVisible(true)
      } 
      else if (currentScrollY > lastScrollY && currentScrollY >= experienceTop) {
        setVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className={`text-2xl text-orange-950 hover:text-orange-800 transition-colors ${pacifico.className}`}
          >
            Jack Nelson
          </Link>

          {/* Contact Button */}
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-orange-900/90 backdrop-blur-sm text-white hover:bg-orange-800 
              rounded-md transition-all text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

