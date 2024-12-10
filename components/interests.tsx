import React from 'react';
import Image from 'next/image';

interface Interest {
  category: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

const interests: Interest[] = [
  {
    category: "Sports & Activities",
    title: "Surfing",
    description: "I started surfing just over a year ago. I've found it to be an amazingly therapeutic activity that continues to challenge me.",
    icon: "🏄‍♂️",
    image: "/images/surf.png"
  },
  {
    category: "Lifestyle",
    title: "Hosting BBQs",
    description: "After moving to a new city, I quickly found community in bringing friends and strangers alike together over good food and conversation. I've met some of my best friends through my BBQs. The one pictured was cowboy/girl themed.",
    icon: "🍖",
    image: "/images/bbq.jpeg"
  },
  {
    category: "Sports & Activities",
    title: "Volleyball",
    description: "I have a volleyball net that I bring to a nearby park every Tuesday. I've grown to love the game and the community we've formed around it.",
    icon: "🏐",
    image: "/images/volleyball.png"
  },
  {
    category: "College Sports",
    title: "Iowa State Athletics",
    description: "Passionate Cyclones fan and alum. You won't be hard pressed to find me watching or attending games at Jack Trice Stadium or Hilton Coliseum.",
    icon: "🏈",
    image: "/images/isu.jpeg"
  },
  {
    category: "Lifestyle",
    title: "Travel",
    description: "I discovered a love for travel in high school during an exchange trip to Germany. Since then, I've been fortunate to travel to over 10 countries and counting. Each place brings freshness and inspiration.",
    icon: "✈️",
    image: "/images/travel.jpeg"
  },
  {
    category: "Literature",
    title: "Dune Series",
    description: "I was NOT a fiction reader before Dune. Now, I'm a bit obsessed. The blend of politics/religion, world-building, and constant psycho-analysis is awe-inspiring. Currently on book 3 - Children of Dune.",
    icon: "📚",
    image: "/images/dune.jpg"
  }
];

export default function Interests() {
  return (
    <section id="interests" className="relative py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light mb-16 text-orange-950 tracking-tight">
          Beyond Technology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-orange-50/30 hover:bg-orange-50/50 transition-all duration-300"
            >
              {interest.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className={`object-cover transform group-hover:scale-105 transition-transform duration-500 
                      ${interest.title === "Volleyball" ? "object-[center_30%]" : ""}
                      ${interest.title === "Hosting BBQs" ? "object-[center_70%]" : ""}
                      ${interest.title === "Travel" ? "object-[center_60%]" : ""}
                      ${interest.title === "Iowa State Athletics" ? "object-[center_60%]" : ""}`}
                  />
                </div>
              )}
              
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{interest.icon}</span>
                  <span className="text-xs text-orange-800/60 uppercase tracking-wider">
                    {interest.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium text-orange-900 mb-2">
                  {interest.title}
                </h3>
                
                <p className="text-sm text-orange-800 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 