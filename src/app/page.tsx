"use client";

import React, { useState } from 'react';

interface OpenSections {
  experience: boolean;
  about: boolean;
  projects: boolean;
}

interface JobDescriptions {
  abbvie: boolean;
  getVitals: boolean;
}

export default function Home() {
  const [openSections, setOpenSections] = useState<OpenSections>({
    experience: true,
    about: true,
    projects: true,
  });

  const [jobDescriptions, setJobDescriptions] = useState<JobDescriptions>({
    abbvie: false,
    getVitals: false,
  });

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleJobDescription = (job: keyof JobDescriptions) => {
    setJobDescriptions(prev => ({
      ...prev,
      [job]: !prev[job]
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
              <div className="text-lg">Contact</div>
              <div className="text-lg">GITHUB</div>
              <div className="text-lg">LINKEDIN</div>
            </div>

            {/* contact right side */}
            <div className="text-right">
              <div className="text-lg">anish.kancherla@gmail.com</div>
              <a
                href="https://github.com/anishkancherla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline block"
              >
                anishkancherla
              </a>
              <a
                href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline block"
              >
                anish-kancherla
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main  */}
      <main className="w-full px-8 md:px-12 mt-16">
        {/* Divider */}
        <div className="h-px bg-black w-full mb-0"></div>


        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {/* about  */}
          <div className="py-8 pr-4 border-r border-black flex flex-col items-start justify-start">
            <h2
              className="text-4xl font-normal mb-8 gaisyr-font cursor-pointer"
              onClick={() => toggleSection('about')}
            >
              Anish Kancherla
            </h2>
            {openSections.about && (
              <div className="w-full">
                <p>Hello! I'm a CS Student at University of California, Riverside with a focus in Full-Stack Development. When I'm not coding, I enjoy clothing design, home-made cafe drinks, and working out.</p>
              </div>
            )}
          </div>

          {/* experience */}
          <div className="py-8 pl-4 flex flex-col items-start justify-start">
            <h2
              className="text-4xl font-normal mb-8 gaisyr-font cursor-pointer"
              onClick={() => toggleSection('experience')}
            >
              EXPERIENCE
            </h2>
            {openSections.experience && (
              <div className="w-full">
                {/* AbbVie */}
                <div className="mb-6">
                  <h3 className="font-medium text-xl">
                    AbbVie <span className="text-gray-500">Software Engineer Intern</span>
                  </h3>
                  <button
                    onClick={() => toggleJobDescription('abbvie')}
                    className="text-sm underline hover:no-underline cursor-pointer"
                  >
                    info
                  </button>
                  {jobDescriptions.abbvie && (
                    <div className="mt-2 text-sm">
                      <p>
                        Developed a Python-based data management dashboard using Streamlit and PostgreSQL, reducing manual lookups by 30% for over 50 DWA analysts. Containerized with Docker, enhancing processing speed, and built Matplotlib visualizations to accelerate data-driven decisions.
                      </p>
                    </div>
                  )}
                </div>
                {/* Get Vitals */}
                <div className="mb-6">
                  <h3 className="font-medium text-xl">
                    Get Vitals <span className="text-gray-500">Software Engineer Intern</span>
                  </h3>
                  <button
                    onClick={() => toggleJobDescription('getVitals')}
                    className="text-sm underline hover:no-underline cursor-pointer"
                  >
                    info
                  </button>
                  {jobDescriptions.getVitals && (
                    <div className="mt-2 text-sm">
                      <p>
                        Currently extending a nurse-wellness web app for 500+ nurses, using React and TypeScript. Integrated with OpenAPI API to deliver an AI-powered chatbot for nurses.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-black w-full col-span-1 md:col-span-2"></div>

          {/* proj Section */}
          <div className="py-8 flex flex-col items-start justify-start col-span-1 md:col-span-2">
            <h2
              className="text-4xl font-normal mb-8 gaisyr-font cursor-pointer"
              onClick={() => toggleSection('projects')}
            >
              PROJECTS
            </h2>
            {openSections.projects && (
              <div className="w-full grid grid-cols-4 gap-4">
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

                {/* Placeholder 1 */}
                <div className="border border-gray-300 p-4 flex items-center justify-center">
                  <p className="text-gray-500">project loading...</p>
                </div>

                {/* Placeholder 2 */}
                <div className="border border-gray-300 p-4 flex items-center justify-center">
                  <p className="text-gray-500">project loading...</p>
                </div>

                {/* Placeholder 3 */}
                <div className="border border-gray-300 p-4 flex items-center justify-center">
                  <p className="text-gray-500">project loading...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
