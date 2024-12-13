'use client'

import React from 'react';
import Image from 'next/image';
import Nav from './nav';
import Link from 'next/link';
import Footer from './footer';
import { headshot } from '../app/images'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    
    if (element) {
      const offset = 96 // Height of the nav bar plus some padding
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50/90 to-white flex flex-col">
      <Nav />
      
      <div className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8 lg:gap-12">
          {/* Left Sidebar - Fixed on Desktop */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm" />
                <div className="relative w-full h-full">
                  <Image
                    src={headshot}
                    alt="Jack Nelson"
                    fill
                    className="rounded-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 128px"
                  />
                </div>
              </div>
              
              {/* Bio */}
              <div className="space-y-2">
                <div className="space-y-1">
                  <h1 className="text-2xl font-medium text-orange-950">Jack Nelson</h1>
                  <h2 className="text-base font-medium text-orange-900">Product Manager</h2>
                </div>
                <p className="text-sm text-orange-800/90 leading-relaxed">
                  Specialized in UI/UX Design, Product Strategy, and AI Solutions.
                  Currently leading development of AI-driven traffic solutions at Etalyc.
                </p>
              </div>
              
              {/* Navigation */}
              <div className="space-y-2">
                <h3 className="text-xs font-medium uppercase tracking-wider text-orange-900/60">Navigation</h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-sm text-orange-800/80 hover:text-orange-900 transition-colors">Experience</a>
                  <span className="text-orange-300 translate-y-px">•</span>
                  <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-sm text-orange-800/80 hover:text-orange-900 transition-colors">Projects</a>
                  <span className="text-orange-300 translate-y-px">•</span>
                  <a href="#books" onClick={(e) => handleScroll(e, 'books')} className="text-sm text-orange-800/80 hover:text-orange-900 transition-colors">Books</a>
                  <span className="text-orange-300 translate-y-px">•</span>
                  <a href="#interests" onClick={(e) => handleScroll(e, 'interests')} className="text-sm text-orange-800/80 hover:text-orange-900 transition-colors">Interests</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <h3 className="text-xs font-medium uppercase tracking-wider text-orange-900/60">Find me here</h3>
                <div className="flex items-center gap-2">
                  <Link 
                    href="https://www.linkedin.com/in/jackcnelson/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-orange-800/80 hover:text-orange-900 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="min-h-screen pb-16">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
} 