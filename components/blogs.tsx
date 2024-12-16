import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Blog {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  isExternal?: boolean;
}

const blogs: Blog[] = [
  {
    title: "How AI built my website in 2 days",
    description: "With hardly any Next.js experience, I used AI tools to build a completely new personal website from scratch in just a weekend — and it turned out...",
    date: "March 2024",
    readTime: "4 min read",
    link: "https://medium.com/@jcnelsn/how-ai-built-my-website-in-2-days-8704a85c173b",
    isExternal: true
  },
  // Add more blog posts here as you write them
];

export default function Blogs() {
  return (
    <section id="blogs" className="space-y-6">
      <h2 className="text-lg font-medium text-orange-950">Latest Writing</h2>
      
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          blog.isExternal ? (
            <a 
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-orange-50/30 hover:bg-orange-50/50 
                transition-all duration-300 group"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-800/70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                      <span className="text-[10px] text-orange-800/70 uppercase tracking-wider">Medium Article</span>
                    </div>
                    <h3 className="text-sm font-medium text-orange-900 group-hover:text-orange-800">
                      {blog.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-orange-800/70 group-hover:text-orange-800 
                    transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                
                <p className="text-xs text-orange-800/90 leading-relaxed">
                  {blog.description}
                </p>
                
                <div className="flex items-center gap-3 text-[10px] text-orange-800/70">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </a>
          ) : (
            <Link 
              key={index}
              href={blog.link}
              className="block p-4 rounded-lg bg-orange-50/30 hover:bg-orange-50/50 
                transition-all duration-300 group"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-orange-900 group-hover:text-orange-800">
                  {blog.title}
                </h3>
                
                <p className="text-xs text-orange-800/90 leading-relaxed">
                  {blog.description}
                </p>
                
                <div className="flex items-center gap-3 text-[10px] text-orange-800/70">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </Link>
          )
        ))}
      </div>
    </section>
  );
} 