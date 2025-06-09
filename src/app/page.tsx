"use client";

import React from 'react';

export default function Home() {
  React.useEffect(() => {
    console.log('Component mounting...');
  }, []);

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          color: '#1c0f26 ',
          fontSize: '40vw',
          lineHeight: 1,
          fontFamily: 'ABC Diatype Italic',
          fontWeight: 400,
          position: 'fixed',
          fontStyle: 'italic',
          transform: 'translateX(-45%) translateY(20%)',
        }}>
          *
        </div>
      </div>
      
      <div className="min-h-screen bg-transparent text-black relative grid grid-rows-[auto_1fr_auto] border border-black">
        {}
        <div className="grid grid-cols-2 border-b border-black">
          <div className="p-6 border-r border-black">
            <div className="text-4xl font-bold">Anish Kancherla →</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold cursor-pointer hover:underline"
                 onClick={() => document.getElementById('links-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact
            </div>
          </div>
        </div>

        {}
        <div className="grid grid-cols-12 min-h-0">
          {/* HELLO, about info */}
          <div className="col-span-6 flex justify-start p-8 border-r border-black text-left relative overflow-hidden">
            <div className="flex-1 relative overflow-hidden">
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
                HELLO
              </div>
              <div className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none absolute bottom-0 transform translate-y-1/3">
                HELLO
              </div>
            </div>
            <div className="flex-1 flex items-center pl-8">
              <div className="text-sm leading-relaxed">
                I'm Anish, a junior at UCR majoring in Computer Science. I primarily work in Typescript / Next.js. Other than coding, I enjoy clothing design, working out, and home-made cafe drinks. Please contact me if interested in my resume.
              </div>
            </div>
          </div>
          
          {/* Nav sections */}
          <div className="col-span-6 grid grid-rows-3">
            {/* Experience */}
            <div className="p-6 border-b border-black flex items-center justify-start cursor-pointer hover:bg-black hover:bg-opacity-10 transition-colors"
                 onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="text-6xl font-bold gaisyr-font">1</div>
              <div className="text-6xl ml-12">EXPERIENCE</div>
            </div>
            
            {/* Projects */}
            <div className="p-6 border-b border-black flex items-center justify-start cursor-pointer hover:bg-black hover:bg-opacity-10 transition-colors"
                 onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="text-6xl font-bold gaisyr-font">2</div>
              <div className="text-6xl ml-12">PROJECTS</div>
            </div>
            
            {/* Links */}
            <div className="p-6 flex items-center justify-start cursor-pointer hover:bg-black hover:bg-opacity-10 transition-colors"
                 onClick={() => document.getElementById('links-section')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="text-6xl font-bold gaisyr-font">3</div>
              <div className="text-6xl ml-12 underline" style={{color: '#551A8B'}}>LINKS</div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section id="experience" className="min-h-screen flex flex-col px-8 py-16 border-t border-black">
          <h2 className="text-4xl font-medium mb-12 text-left">Experience</h2>
          <div className="space-y-12">
            
            {/*  */}
            <div className="grid grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold">Software Engineer Intern</h3>
                <p className="text-lg italic">AbbVie</p>
              </div>
              <div className="pt-1">
                <ul className="space-y-2 text-sm">
                  <li>• Built a <strong>Python + Streamlit</strong> data-management dashboard adopted by <strong>50</strong> Data Warehouse analysts; enabled self-serve study insights and reduced manual lookup time by 30%.</li>
                  <li>• Integrated <strong>PostgreSQL</strong> to manage metadata, providing an interactive visual interface for better data insights.</li>
                  <li>• Containerized the legacy Oracle workflow with <strong>Docker</strong>, enabling a seamless switchover that reduced processing time by <strong>30%</strong>.</li>
                  <li>• Built custom <strong>Excel report generation</strong> tools for comparison of source tables and fields with automated backup features, resulting in <strong>increased precision</strong> for clinical data management.</li>
                  <li>• Utilized <strong>Pandas and Excel integration</strong> to optimize data processing to provide <strong>scalability for future development</strong>.</li>
                  <li>• Created interactive <strong>Grafana</strong> dashboards that visualized key metrics, accelerating data-driven decisions by <strong>25%</strong>.</li>
                </ul>
              </div>
            </div>

            {/* black div */}
            <div className="border-t border-black opacity-60"></div>

            {/*  */}
            <div className="grid grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold">Software Engineer Intern</h3>
                <p className="text-lg italic">Get Vitals (getvitals.care)</p>
              </div>
              <div className="pt-1">
                <ul className="space-y-2 text-sm">
                  <li>• Using <strong>React + TypeScript</strong> to extend an infinite-scroll nurse-wellness web app, set to target rollout to <strong>500+</strong> nurses at two partner hospitals.</li>
                  <li>• Building <strong>PostgreSQL</strong> schemas to stream anonymized mood data to live hospital dashboards.</li>
                  <li>• Leveraging secure authentication through <strong>Supabase</strong> to streamline user onboarding, enhancing user adoption and experience.</li>
                </ul>
              </div>
            </div>

            {/* black div */}
            <div className="border-t border-black opacity-60"></div>

            {/* */}
            <div className="grid grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-bold">Coding Instructor</h3>
                <p className="text-lg italic">BrainStorm STEM Edu.</p>
              </div>
              <div className="pt-1">
                <ul className="space-y-2 text-sm">
                  <li>• Led <strong>Python</strong> workshops for 30 students; emphasized debugging strategies and computational thinking.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center px-8 border-t border-black">
          <div className="max-w-2xl text-center space-y-8">
            <h2 className="text-4xl font-medium">Projects</h2>
            <div className="space-y-6">
              <p>Project showcase coming soon...</p>
            </div>
          </div>
          </section>

        <section id="links-section" className="min-h-screen flex items-center justify-center px-8 border-t border-black">
          <div className="max-w-2xl text-center space-y-8">
            <h2 className="text-4xl font-medium">Links</h2>
            <div className="space-y-6 text-lg">
              <a 
                href="https://github.com/anishkancherla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                LinkedIn
              </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
