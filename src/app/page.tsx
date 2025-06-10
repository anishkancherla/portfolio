"use client";

import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

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
        <ShaderGradientCanvas
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <ShaderGradient
            control='query'
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.7&cAzimuthAngle=180&cDistance=4&cPolarAngle=90&cameraZoom=9.4&color1=%23171717&color2=%23c8cac4&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=50&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.1&uStrength=1.5&uTime=0&wireframe=false'
          />
        </ShaderGradientCanvas>
      </div>
      
      <div className="h-screen bg-transparent text-white relative flex flex-col">
        {/* Header */}
        <header className="grid grid-cols-2 p-6">
          <div>
            <div className="text-lg font-bold">ANISH KANCHERLA</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold cursor-pointer hover:underline"
                 onClick={() => document.getElementById('links-section')?.scrollIntoView({ behavior: 'smooth' })}>
              CONTACT
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow flex items-center justify-center px-8">
          <div className="text-left max-w-4xl">
            <div className="text-2xl md:text-3xl leading-relaxed mb-6">
              Hello! I'm Anish, a Computer Science
              student at UCR. I mainly use typescript/next.js. 
            </div>
            <div className="text-2xl md:text-3xl leading-relaxed">
              Outside of coding, I'm interested in clothing design, working out,
              and home-made cafe drinks.
            </div>
          </div>
        </main>

        {/* Bottom navigation */}
        <footer className="grid grid-cols-3">
          {/* Experience */}
          <div className="p-8 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors text-center flex flex-col justify-center"
               onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="text-4xl font-bold mb-4 gaisyr-font">1</div>
            <div className="text-xl uppercase tracking-wide">EXPERIENCE</div>
          </div>
          
          {/* Projects */}
          <div className="p-8 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors text-center flex flex-col justify-center"
               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="text-4xl font-bold mb-4 gaisyr-font">2</div>
            <div className="text-xl uppercase tracking-wide">PROJECTS</div>
          </div>
          
          {/* Links */}
          <div className="p-8 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors text-center flex flex-col justify-center"
               onClick={() => document.getElementById('links-section')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="text-4xl font-bold mb-4 gaisyr-font">3</div>
            <div className="text-xl uppercase tracking-wide">LINKS</div>
          </div>
        </footer>
      </div>

      {/* Experience */}
      <section id="experience" className="min-h-screen flex flex-col px-8 py-16">
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
          <div className="border-t border-white opacity-60"></div>

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
          <div className="border-t border-white opacity-60"></div>

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

      <section id="projects" className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl text-center space-y-8">
          <h2 className="text-4xl font-medium">Projects</h2>
          <div className="space-y-6">
            <p>Project showcase coming soon...</p>
          </div>
        </div>
        </section>

      <section id="links-section" className="min-h-screen flex items-center justify-center px-8">
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
    </>
  );
}
