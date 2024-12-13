'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Link from 'next/link'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50/90 to-white flex flex-col">
      <Nav />
      
      <main className="flex-grow container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-xl mx-auto">
          <div className="space-y-3 mb-8">
            <h1 className="text-2xl font-medium text-orange-950">Let&apos;s Connect!</h1>
            <p className="text-sm text-orange-800/90 leading-relaxed">
              I&apos;m always excited to discuss new opportunities, answer questions, or chat about product development and AI. 
              I personally read and respond to every message.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-orange-900">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-orange-200 focus:border-orange-500 
                  focus:ring-2 focus:ring-orange-200 outline-none transition-all text-orange-950
                  bg-white"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-orange-900">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-md border border-orange-200 focus:border-orange-500 
                  focus:ring-2 focus:ring-orange-200 outline-none transition-all text-orange-950
                  bg-white"
                placeholder="What would you like to discuss?"
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-orange-900 text-white rounded-md hover:bg-orange-800 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm text-center">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="mt-12 text-center space-y-2">
            <h3 className="text-xs font-medium uppercase tracking-wider text-orange-900/60">Or find me here</h3>
            <div className="flex justify-center">
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
      </main>

      <Footer />
    </div>
  )
} 