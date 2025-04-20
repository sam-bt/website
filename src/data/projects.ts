// src/data/projects.ts

export interface Project {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    imageAlt: string;
    githubUrl?: string;
    appStoreUrl?: string;
    seeMoreUrl?: string;
    tags: string[];
    screenshots: { url: string; alt: string; caption: string }[];
    challenges: string[];
    solutions: string[];
    learnings: string[];
  }
  
  export const projects: Record<string, Project> = {
    'global-idv': {
      title: "Global Identity Verification iOS App",
      description: "An iOS companion application that allows users to scan or upload data to the Raytio web client. I developed this app from scratch during my summer internship at Raytio and it is now available on the app store for anyone to use.",
      fullDescription: `…`,
      image: "/passport-scan.jpeg",
      imageAlt: "Screenshot of…",
      appStoreUrl: "https://yourdemo.com",
      tags: ["React", "Node.js", "MongoDB", /* … */],
      screenshots: [ /* … */ ],
      challenges: [ /* … */ ],
      solutions: [ /* … */ ],
      learnings: [ /* … */ ],
    },
    // other projects…
  };
  