import React from 'react';
import Link from 'next/link';

interface ExperienceItem {
  company: string;
  companyLink?: string;
  positions: {
    title: string;
    dateRange: string;
    description: string;
    skills: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Etalyc",
    companyLink: "http://etalyc.com/",
    positions: [
      {
        title: "Product Manager",
        dateRange: "Since 2023",
        description: "Currently leading the development of AI-driven traffic solutions like Hypersafe and Hyperflow, utilizing deep learning and computer vision to enhance traffic operations in over 20 U.S. cities.",
        skills: ["Product Strategy", "Leadership", "User Research", "Agile", "UI/UX Design", "B2B"]
      },
      {
        title: "Data Science Intern",
        dateRange: "2022 - 2023",
        description: "Leveraged machine learning techniques to automate complex city onboarding processes using geospatial data, resulting in a 98% time reduction. Evaluated data quality for key business operations.",
        skills: ["Data Analytics", "Python", "AI/ML", "AWS", "Google Cloud Platform"]
      }
    ]
  },
  {
    company: "Nebullam (now Clayton Farms)",
    companyLink: "https://claytonfarms.com/",
    positions: [
      {
        title: "Marketing Lead (Internship)",
        dateRange: "2021 - 2022",
        description: "Successfully executed 40+ marketing campaigns across multiple platforms through both paid and organic channels, resulting in a 100% increase in total customer growth and 2x increase in MMR.",
        skills: ["Marketing", "Product Messaging", "Go-to-Market", "Growth"]
      },
      {
        title: "Customer Success Lead (Internship)",
        dateRange: "2021",
        description: "Conducted 100+ customer interviews to improve business processes, product offerings, and customer experiences, leading to significant cost savings. Promoted after 5 months.",
        skills: ["Customer Success", "Product Research", "User Interviews", "Stakeholder Management"]
      },
      {
        title: "Delivery Lead (Internship)",
        dateRange: "2021",
        description: "Joined YC-backed indoor farm-to-door delivery startup as first dedicated delivery lead to gain experience scaling in an early-stage environment. Promoted after 3 months due to strong ability to understand and connect with customers.",
        skills: ["Operations", "Sales", "B2C"]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light mb-8 text-orange-950 tracking-tight">
          Explore My Professional Journey
        </h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="space-y-3">
                <h3 className="text-lg font-light text-orange-900">
                  {exp.companyLink ? (
                    <Link 
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-orange-700 transition-colors hover:underline underline-offset-4"
                    >
                      {exp.company}
                    </Link>
                  ) : (
                    exp.company
                  )}
                </h3>
                
                <div className="space-y-3 pl-3 border-l border-orange-900/10">
                  {exp.positions.map((position, posIndex) => (
                    <div key={posIndex} className="grid md:grid-cols-[1fr,1.5fr] gap-4 md:gap-8">
                      <div className="space-y-1">
                        <p className="font-medium text-orange-900 text-sm">{position.title}</p>
                        <p className="text-xs text-orange-800/70">{position.dateRange}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <p className="text-sm text-orange-800 leading-relaxed">{position.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {position.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2.5 py-0.5 bg-orange-50 text-orange-900 rounded-full text-xs border border-orange-600/20 
                                hover:bg-orange-100 hover:border-orange-600/40 hover:text-orange-950 transition-all
                                hover:shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < experiences.length - 1 && (
                <div className="border-t border-orange-900/10 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 