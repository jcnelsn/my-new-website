'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Book {
  title: string;
  author: string;
  coverImage: string;
  amazonLink: string;
  thoughts: string;
  keyTakeaway: string;
  genre: string;
}

const books: Book[] = [
  {
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    coverImage: "/images/thinking_in_systems.jpg",
    amazonLink: "https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557",
    thoughts: "This book revolutionized how I understand complex problems. It provided a framework for seeing the interconnections between different parts of a system and how small changes can lead to significant outcomes.",
    keyTakeaway: "Understanding feedback loops and system structures is crucial for effective problem-solving and creating lasting change.",
    genre: "Systems Thinking"
  },
  {
    title: "Team of Teams",
    author: "Stanley McChrystal",
    coverImage: "/images/team_of_teams.jpg",
    amazonLink: "https://www.amazon.com/Team-Teams-Rules-Engagement-Complex/dp/1591847486",
    thoughts: "McChrystal's insights on adapting organizational structure to meet modern challenges resonated deeply with my experience in fast-paced tech environments. The book demonstrates how traditional hierarchies can evolve to become more agile and effective.",
    keyTakeaway: "In complex environments, adaptability and shared consciousness are more valuable than efficiency and traditional command structures.",
    genre: "Leadership & Management"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    coverImage: "/images/zero_to_one.jpg",
    amazonLink: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    thoughts: "A paradigm-shifting perspective on innovation that challenged my understanding of true progress. Thiel's distinction between horizontal and vertical progress fundamentally changed how I approach problem-solving.",
    keyTakeaway: "The best entrepreneurs don't just iterate on existing ideas - they create entirely new categories.",
    genre: "Business & Innovation"
  }
];

export default function Books() {
  return (
    <section id="books" className="relative py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light mb-16 text-orange-950 tracking-tight">
          Books That Shaped My Thinking
        </h2>

        {/* Main Book Display */}
        <div className="space-y-24">
          {books.map((book, index) => (
            <div key={index} className="group relative grid md:grid-cols-[300px,1fr] gap-8 md:gap-16">
              {/* Book Cover & Info */}
              <div className="relative">
                <div className="sticky top-32">
                  <Link href={book.amazonLink} target="_blank" rel="noopener noreferrer"
                    className="block transform transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative w-[200px] h-[300px] mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </Link>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-medium text-orange-900">{book.title}</h3>
                    <p className="text-sm text-orange-800/70 mt-1">{book.author}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-orange-50 text-orange-900 rounded-full text-xs border border-orange-600/20">
                      {book.genre}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thoughts Section */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-orange-900">My Thoughts</h4>
                  <p className="text-orange-800 leading-relaxed">{book.thoughts}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-orange-900">Key Takeaway</h4>
                  <blockquote className="border-l-2 border-orange-200 pl-4 italic text-orange-800">
                    {book.keyTakeaway}
                  </blockquote>
                </div>

                <Link href={book.amazonLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-orange-900 hover:text-orange-700 transition-colors">
                  <span>View on Amazon</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 