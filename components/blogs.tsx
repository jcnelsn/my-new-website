import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Blog {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const blogs: Blog[] = [
  {
    title: "How AI built my website in 2 days",
    description: "A deep dive into how I leveraged AI tools like Claude to accelerate the development of my personal website, from design decisions to deployment challenges.",
    date: "March 2024",
    readTime: "8 min read",
    link: "/blog/ai-website-build"
  },
  // Add more blog posts here as you write them
];

export default function Blogs() {
  return (
    <section id="blogs" className="space-y-6">
      <h2 className="text-lg font-medium text-orange-950">Latest Writing</h2>
      
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <Link 
            key={index}
            href={blog.link}
            className="block p-4 rounded-lg bg-orange-50/30 hover:bg-orange-50/50 
              transition-all duration-300 group"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium text-orange-900 group-hover:text-orange-800">
                  {blog.title}
                </h3>
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
          </Link>
        ))}
      </div>
    </section>
  );
} 