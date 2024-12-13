'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { thinkingInSystems, teamOfTeams, zeroToOne } from '@/app/images'

interface Book {
  title: string;
  author: string;
  coverImage: string;
  amazonLink: string;
  thoughts: string;
  keyTakeaway: string;
}

const books: Book[] = [
  {
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    coverImage: thinkingInSystems,
    amazonLink: "https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557",
    thoughts: "This book revolutionized how I understand complex problems. It provided a framework for seeing the interconnections between different parts of a system and how small changes can lead to significant outcomes.",
    keyTakeaway: "Understanding feedback loops and system structures is crucial for effective problem-solving and creating lasting change."
  },
  {
    title: "Team of Teams",
    author: "Stanley McChrystal",
    coverImage: teamOfTeams,
    amazonLink: "https://www.amazon.com/Team-Teams-Rules-Engagement-Complex/dp/1591847486",
    thoughts: "McChrystal's insights on adapting organizational structure to meet modern challenges resonated deeply with my experience in fast-paced tech environments. The book demonstrates how traditional hierarchies can evolve to become more agile and effective.",
    keyTakeaway: "In complex environments, adaptability and shared consciousness are more valuable than efficiency and traditional command structures."
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    coverImage: zeroToOne,
    amazonLink: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    thoughts: "A paradigm-shifting perspective on innovation that challenged my understanding of true progress. Thiel's distinction between horizontal and vertical progress fundamentally changed how I approach problem-solving.",
    keyTakeaway: "The best entrepreneurs don't just iterate on existing ideas - they create entirely new categories."
  }
];

export default function Books() {
  return (
    <section id="books" className="space-y-6">
      <h2 className="text-lg font-medium text-orange-950">Books That Shaped My Thinking</h2>

      <div className="space-y-12">
        {books.map((book, index) => (
          <div key={index} className="flex gap-6">
            {/* Book Cover */}
            <div className="shrink-0">
              <Link 
                href={book.amazonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transform transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative w-[85px] h-[128px] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover rounded-md"
                    sizes="85px"
                  />
                </div>
              </Link>
            </div>

            {/* Book Details */}
            <div className="min-w-0 space-y-2">
              <div className="space-y-0.5">
                <h3 className="text-sm font-medium text-orange-900">{book.title}</h3>
                <p className="text-xs text-orange-800/70">{book.author}</p>
              </div>
              
              <p className="text-xs text-orange-800/90 leading-relaxed line-clamp-3">
                {book.thoughts}
              </p>
              
              <div className="pt-1">
                <p className="text-xs text-orange-800/90 italic">
                  &ldquo;{book.keyTakeaway}&rdquo;
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 