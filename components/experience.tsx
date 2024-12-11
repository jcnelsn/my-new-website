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
    <section id="experience" className="space-y-6">
      <h2 className="text-lg font-medium text-orange-950">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-sm font-medium text-orange-900">
              {exp.companyLink ? (
                <Link 
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-700 transition-colors"
                >
                  {exp.company}
                </Link>
              ) : (
                exp.company
              )}
            </h3>
            
            <div className="relative space-y-6 pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-orange-200">
              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="relative space-y-1.5">
                  <div className="absolute -left-[19px] top-[7px] w-3 h-3 rounded-full border-2 border-orange-200 bg-white" />
                  
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-xs font-medium text-orange-900">{position.title}</h4>
                    <span className="text-xs text-orange-800/70">{position.dateRange}</span>
                  </div>
                  
                  <p className="text-xs text-orange-800/90 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {position.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-1.5 py-0.5 bg-orange-50 text-orange-900 rounded-full text-[10px] border border-orange-600/10
                          hover:bg-orange-100 hover:border-orange-600/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 