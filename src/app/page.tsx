"use client";

import React, { useState } from 'react';

interface OpenSections {
  experience: boolean;
  about: boolean;
  projects: boolean;
  links: boolean;
}

export default function Home() {
  const [openSections, setOpenSections] = useState<OpenSections>({
    experience: false,
    about: false,
    projects: false,
    links: false,
  });

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      {/* Header */}
      <header className="w-full py-8 px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/* logo placeholder  */}
          <div className="text-8xl font-bold font-stamp-rpsk">
            *
          </div>

          {/* header middle */}
          <div className="flex justify-between items-start md:pl-4">
            {/* */}
            <div>
              <div className="text-lg">Anish Kancherla</div>
              <div className="text-lg">PORTFOLIO</div>
            </div>

            {/* contact right side */}
            <div className="text-right">
              <div className="text-lg">anish.kancherla@gmail.com</div>
              <div className="text-lg">anishkancherla</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main  */}
      <main className="w-full px-8 md:px-12 mt-16">
        {/* Divider */}
        <div className="h-px bg-black w-full mb-0"></div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {/* experience */}
          <div 
            className="py-8 pr-4 border-r border-black flex flex-col items-start justify-start cursor-pointer"
            onClick={() => toggleSection('experience')}
          >
            <h2 className="text-4xl font-normal mb-8">EXPERIENCE</h2>
            {openSections.experience && (
              <div className="w-full">
                {/* AbbVie */}
                <div className="mb-6">
                  <h3 className="font-medium text-xl">AbbVie</h3>
                  <p>Software Engineer Intern</p>
                </div>
                {/* Get Vitals */}
                <div className="mb-6">
                  <h3 className="font-medium text-xl">Get Vitals</h3>
                  <p>Software Engineer Intern</p>
                </div>
                {/* BrainStorm STEM */}
                <div className="mb-6">
                  <h3 className="font-medium text-xl">BrainStorm STEM</h3>
                  <p>Teacher</p>
                </div>
              </div>
            )}
          </div>

          {/* about  */}
          <div 
            className="py-8 pl-4 flex flex-col items-start justify-start cursor-pointer"
            onClick={() => toggleSection('about')}
          >
            <h2 className="text-4xl font-normal mb-8">ABOUT</h2>
            {openSections.about && (
              <div className="w-full">
                <p className="mb-4">CS Student at University of California, Riverside.</p>
                <p>Outside of coding, I enjoy clothing design, home-made cafe drinks, and working out.</p>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-black w-full col-span-1 md:col-span-2"></div>

          {/* proj Section */}
          <div 
            className="py-8 pr-4 border-r border-black flex flex-col items-start justify-start cursor-pointer"
            onClick={() => toggleSection('projects')}
          >
            <h2 className="text-4xl font-normal mb-8">PROJECTS</h2>
            {openSections.projects && (
              <div className="w-full grid grid-cols-2 gap-4">
                {/* Matcha Restock Project */}
                <div className="border border-gray-300 p-4">
                  <h3 className="text-xl font-bold mb-2">Matcha Restock</h3>
                  <p className="mb-4 text-sm">Product availability tracker for premium matcha vendors. Real-time stock monitoring with notification system.</p>
                  <img 
                    src="/images/matcharestockproject.png" 
                    alt="Matcha Restock Project Screenshot" 
                    className="w-full mb-4"
                  />
                  <a 
                    href="https://github.com/anishkancherla/matcha-stock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    View Project →
                  </a>
                </div>
                
                {/* Placeholder  */}
                <div className="border border-gray-300 p-4 flex items-center justify-center">
                  <p className="text-gray-500">project loading...</p>
                </div>
              </div>
            )}
          </div>

          {/* LINKS Section */}
          <div 
            className="py-8 pl-4 flex flex-col items-start justify-start cursor-pointer"
            onClick={() => toggleSection('links')}
          >
            <h2 className="text-4xl font-normal mb-8">LINKS</h2>
            {openSections.links && (
              <div className="w-full">
                <div className="space-y-4">
                  <a 
                    href="https://github.com/anishkancherla" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-lg hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-lg hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
