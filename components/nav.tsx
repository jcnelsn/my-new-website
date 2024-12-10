'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Nav({ pacifico }: { pacifico: any }) {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const experienceSection = document.getElementById('experience')
      const experienceTop = (experienceSection?.offsetTop || 0) - 100
      const currentScrollY = window.scrollY

      if (!isAutoScrolling) {
        if (currentScrollY < lastScrollY || currentScrollY < experienceTop) {
          setVisible(true)
        } 
        else if (currentScrollY > lastScrollY && currentScrollY >= experienceTop) {
          setVisible(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY, isAutoScrolling])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault()
    setIsAutoScrolling(true)
    const element = document.getElementById(sectionId)
    
    if (element) {
      const navHeight = 96 // This is the height of your navbar (h-24 = 96px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navHeight - -24 // Added extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setTimeout(() => {
      setIsAutoScrolling(false)
    }, 1000)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo/Name */}
            <Link 
              href="/" 
              className={`text-2xl text-orange-950 hover:text-orange-900 transition-colors ${pacifico.className}`}
            >
              Jack Nelson
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              <a 
                href="#experience" 
                onClick={(e) => handleScroll(e, 'experience')}
                className="px-4 py-2 text-orange-900/80 hover:text-orange-950 hover:bg-orange-100/50 rounded-full transition-all text-sm font-medium"
              >
                Experience
              </a>
              <a 
                href="#projects"
                onClick={(e) => handleScroll(e, 'projects')}
                className="px-4 py-2 text-orange-900/80 hover:text-orange-950 hover:bg-orange-100/50 rounded-full transition-all text-sm font-medium"
              >
                Projects
              </a>
              <a 
                href="#books"
                onClick={(e) => handleScroll(e, 'books')}
                className="px-4 py-2 text-orange-900/80 hover:text-orange-950 hover:bg-orange-100/50 rounded-full transition-all text-sm font-medium"
              >
                Books
              </a>
              <a 
                href="#interests"
                onClick={(e) => handleScroll(e, 'interests')}
                className="px-4 py-2 text-orange-900/80 hover:text-orange-950 hover:bg-orange-100/50 rounded-full transition-all text-sm font-medium"
              >
                Interests
              </a>
              <Link 
                href="/contact" 
                className="ml-2 px-6 py-2 bg-orange-900 text-white hover:bg-orange-800 rounded-full transition-all text-sm font-medium shadow-lg hover:shadow-orange-900/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

