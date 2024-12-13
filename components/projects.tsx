import React from 'react';
import Image from 'next/image';
import { thirdPlaces, sprintSage, swift1, swift2 } from '../app/images';

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
    image: thirdPlaces,
    technologies: ["Figma", "UI/UX Design", "User Research", "Marketing", "IOS"],
    link: "/projects/traffic-management",
    featured: true
  },
  {
    title: "Sprint Sage (Berkeley AI-Hackathon)",
    description: "In the largest AI-focused hackathon ever held, my team and I built a platform to assist product managers by leveraging AI to generate sprint plans based on contextual data like historical data, user feedback, and project requirements.",
    image: sprintSage,
    technologies: ["Python", "Sales Pitching", "AI/LLMs", "Data Extraction"],
    link: "/projects/smart-city-dashboard"
  },
  {
    title: "Swift TA",
    description: "Swift TA is a web application that allows students to collaboratively create study flashcards and a chat-based study assistant based on class materials like lecture notes, assignments, and study guides. Achieved over 1 million likes on TikTok.",
    images: [
      { src: swift1, alt: "Swift Project View 1" },
      { src: swift2, alt: "Swift Project View 2" }
    ],
    technologies: ["Python", "Vector Embeddings", "LLMs", "Social Media Marketing"],
    link: "/projects/swift-project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-lg font-medium text-orange-950">Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            {/* Project Header */}
            <div className="space-y-1.5">
              <h3 className="text-sm font-medium text-orange-900">
                {project.title}
                {project.featured && (
                  <span className="ml-2 text-xs text-orange-800/70 font-normal">Featured</span>
                )}
              </h3>
              <p className="text-xs text-orange-800/90 leading-relaxed">{project.description}</p>
            </div>

            {/* Project Image */}
            <div className="relative h-[200px] rounded-lg overflow-hidden bg-orange-50">
              {project.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : project.images ? (
                <div className="grid grid-cols-2 gap-2 h-full p-2">
                  {project.images.slice(0, 2).map((img, imgIndex) => (
                    <div key={imgIndex} className="relative rounded-lg overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-1.5 py-0.5 bg-orange-50 text-orange-900 rounded-full text-[10px] border border-orange-600/10
                    hover:bg-orange-100 hover:border-orange-600/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 