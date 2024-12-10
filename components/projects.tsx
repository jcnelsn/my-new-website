import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectImage {
  src: string;
  alt: string;
  span?: boolean;
}

interface Project {
  title: string;
  description: string;
  image?: string;
  images?: ProjectImage[];
  technologies: string[];
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "3rd Places (IOS Mobile App)",
    description: "Leading development of the 3rd Places mobile app. 3rd Places is a social platform that allows users to discover and share unique gatherings in their community.",
    image: "/images/3P_Overview_SC.png",
    technologies: ["Figma", "UI/UX Design", "User Research", "Marketing", "IOS"],
    link: "/projects/traffic-management",
    featured: true
  },
  {
    title: "Sprint Sage (Berkeley AI-Hackathon)",
    description: "In the largest AI-focused hackathon ever held, my team and I built a platform to assist product managers by leveraging AI to generate sprint plans based on contextual data like historical data, user feedback, and project requirements.",
    image: "/images/sprint-sage.png",
    technologies: ["Python", "Sales Pitching", "AI/LLMs", "Data Extraction"],
    link: "/projects/smart-city-dashboard"
  },
  {
    title: "Swift TA",
    description: "Swift TA is a web application that allows students to collaboratively create study flashcards and a chat-based study assistant based on class materials like lecture notes, assignments, and study guides. Achieved over 1 million likes on TikTok.",
    images: [
      { src: "/images/swift1.png", alt: "Swift Project View 1" },
      { src: "/images/swift2.png", alt: "Swift Project View 2" },
      { src: "/images/swift3.png", alt: "Swift Project View 3" }
    ],
    technologies: ["Python", "Vector Embeddings", "LLMs", "Social Media Marketing"],
    link: "/projects/swift-project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light -mb-4 text-orange-950 tracking-tight">
          Selected Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              {project.featured && (
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-100/50 via-orange-50/25 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              )}
              <div className={`relative grid lg:grid-cols-[1.4fr,1fr] gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-[1fr,1.4fr]' : ''
              }`}>
                {/* Image Section - Always first on mobile */}
                <div className={`relative ${
                  project.title === "Sprint Sage (Berkeley AI-Hackathon)" 
                    ? "h-[350px]" 
                    : "h-[450px]"
                } rounded-3xl overflow-hidden order-1 ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                } group`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-contain transition-all duration-500 ${
                        project.title === "Sprint Sage (Berkeley AI-Hackathon)" 
                          ? "scale-90" 
                          : ""
                      } group-hover:scale-[1.02]`}
                    />
                  ) : project.images ? (
                    <div className="relative h-full p-4">
                      <div className="grid grid-cols-2 gap-4 h-full">
                        {project.images.slice(0, 2).map((img, imgIndex) => (
                          <div 
                            key={imgIndex}
                            className="relative rounded-2xl overflow-hidden group"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-contain transition-all duration-500 group-hover:scale-[1.02]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Content Section - Always second on mobile */}
                <div className={`space-y-4 order-2 ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div>
                    {project.featured && (
                      <span className="text-sm text-orange-800/60 font-medium tracking-wider uppercase mb-2 block">
                        Featured
                      </span>
                    )}
                    <h3 className="text-2xl font-light text-orange-900 mb-3">{project.title}</h3>
                    <p className="text-base text-orange-800/90 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-orange-50/80 text-orange-900 rounded-full text-sm border border-orange-600/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 