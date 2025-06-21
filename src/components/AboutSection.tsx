// src/components/AboutSection.tsx
import React from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "LinkedIn",
    time: "2024 - Present",
    description:
      "Building a PB-scale performant, distributed caching solution for ML training workflows from the ground up in C++",
  },
  {
    title: "Software Engineer Intern",
    company: "LinkedIn",
    time: "Summer 2023",
    description:
      "Building systems to make sure LinkedIn runs as fast as possible.",
  },
  {
    title: "Software Engineer Intern",
    company: "Heroku",
    time: "Summer 2022",
    description: "Worked on supporting various languages in Heroku.",
  },
  {
    title: "Software Engineer Intern",
    company: "Amazon Web Services",
    time: "Summer 2021 and Winter 2022",
    description:
      "Built tooling that runs on every newly manufactured AWS server to ensure production quality.",
  },
];

const AboutSection: React.FC = () => (
  <div className="space-y-12">
    <div>
      <h1 className="text-3xl font-light text-gray-900 mb-4">Prateek Sane</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Software engineer working on random stuff. Currently building
        distributed systems at LinkedIn. Using this website as a portfolio to
        document some of the stuff I work on.
      </p>
      <div className="flex space-x-4 text-sm">
        <a
          href="https://x.com/prateek_sane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/prateek-sane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-700 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/prateek_sane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition-colors"
        >
          Instagram
        </a>
      </div>
    </div>

    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="border-b border-gray-100 pb-6 last:border-b-0"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
            </div>
            <span className="text-sm text-gray-500">{exp.time}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutSection;
