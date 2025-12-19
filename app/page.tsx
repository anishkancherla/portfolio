"use client";

import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center text-slate-900 font-sans">
      <div className="relative w-full max-w-4xl">
        <main className="w-full px-4 pt-20 pb-24 sm:px-0 sm:pt-24 sm:pb-32">
          <section className="mb-10 sm:mb-12">
            <h1 className="font-normal leading-tight text-[42px] sm:text-6xl tracking-tight relative">
              <span className="text-[#0b0b0b] font-bold text-[36px] sm:text-5xl nanum-myeongjo">anish</span>{" "}
              <span className="text-[#201a7a] font-bold text-[36px] sm:text-5xl nanum-myeongjo">
                / yuva
              </span>
            </h1>
            <p className="mt-1 text-slate-700 text-[14px] sm:text-[16px] leading-relaxed fade-in fade-in-100 max-w-3xl">
              Currently studying CS at UC Riverside. I love to learn, code, and build user-centric products.{" "}
              In my free time, I like exploring fashion and music, trying new restaurants and cafes, and staying active in the gym. I still have lots more to learn, and I'm always open to exploring any new opportunities.
            </p>
            {/* socials */}
            <div className="mt-2 flex flex-wrap items-center gap-3 text-base font-mono text-slate-600 fade-in fade-in-100">
              <a href="https://github.com/anishkancherla" target="_blank" rel="noopener noreferrer" className="underline-animate">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263" target="_blank" rel="noopener noreferrer" className="underline-animate">
                LinkedIn ↗
              </a>
              <a href="mailto:anish.kancherla@gmail.com" className="underline-animate">
                Email ↗
              </a>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="mb-3 text-slate-900 text-xl font-bold fade-in fade-in-200 nanum-myeongjo">
              Work
            </h2>
            <ul className="space-y-6 fade-in fade-in-300">
              <li>
                <div className="text-slate-900 text-sm leading-relaxed">
                  Built internal tool & dashboard to automate spec template generation for 50+ DWH analysts at{" "}
                  <a 
                    href="https://www.abbvie.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-900 underline"
                  >
                    AbbVie
                  </a>
                </div>
                <div className="text-zinc-500 font-mono text-sm mt-1">Summer 2024</div>
              </li>
              
              <li>
                <div className="text-slate-900 text-sm leading-relaxed">
                  Built AI-powered features and research automation tool in a nurse wellness app for 500+ nurses at{" "}
                  <a 
                    href="https://getvitals.care/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-900 underline"
                  >
                    Get Vitals
                  </a>
                </div>
                <div className="text-zinc-500 font-mono text-sm mt-1">Summer 2025</div>
              </li>
              
              <li>
                <div className="text-slate-900 text-sm leading-relaxed">
                  Built interactive RAG chatbot for personalized patient breast cancer guidance at{" "}
                  <a 
                    href="https://medschool.ucr.edu/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-900 underline"
                  >
                    UCR's Medical School
                  </a>
                </div>
                <div className="text-zinc-500 font-mono text-sm mt-1">Current</div>
              </li>
            </ul>
          </section>

          <section className="fade-in fade-in-400">
            <h2 className="mb-3 text-slate-900 text-xl font-bold nanum-myeongjo">
              Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="w-full sm:col-span-2 group">
                <a
                  href="https://ucrcourseguide.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="rounded-lg border border-zinc-200 bg-white shadow-sm overflow-hidden mb-3">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-contain"
                    >
                      <source
                        src="/videos/ucrcourseguidedemo.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </a>
                <h3 className="text-slate-900 font-bold font-mono text-xl mb-2 group-hover:text-slate-700 transition-colors">
                  <a 
                    href="https://ucrcourseguide.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    UCR Course Guide
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </h3>
                <p className="diatype text-base text-zinc-500">
                  AI-powered course/professor guidance platform for UCR. Leveraging Reddit, Rate My Professors, and other
                  online community discussions to generate comprehensive insights in seconds. Gained 3,000+ users and 12,000+ courses searched.
                </p>
              </div>
              {/* map for project items */}
              {[1, 2, 3, 4].map((idx) =>
                idx === 1 ? (
                  <div key={idx} className="w-full group">
                    <a
                      href="https://matcharestock.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      <div className="aspect-[4/3] w-full rounded-lg border border-zinc-200 shadow-sm overflow-hidden mb-3 relative">
                        <Image
                          src="/logos/seq.jpg"
                          alt="Matcharestock background"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/logos/restock.png"
                            alt="Restock project screenshot"
                            width={450}
                            height={320}
                            className="max-h-[75%] max-w-[75%] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
                          />
                        </div>
                      </div>
                    </a>
                    <h3 className="text-slate-900 font-bold font-mono text-xl mb-2 group-hover:text-slate-700 transition-colors">
                      <a 
                        href="https://matcharestock.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        matcharestock
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </h3>
                    <p className="diatype text-base text-zinc-500">
                      Restock tracking tool for premium matcha brands. Sends email/discord alerts within seconds of a restock, beating competitive 2 minute sell-outs.
                      Gained 150+ subscribers.
                    </p>
                  </div>
                ) : idx === 2 ? (
                  <div key={idx} className="w-full group">
                    <a
                      href="https://getvitals.care/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      <div className="aspect-[4/3] w-full rounded-lg border border-zinc-200 shadow-sm overflow-hidden mb-3 relative">
                        <Image
                          src="/logos/ioswal.jpg"
                          alt="Get Vitals background"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-end justify-center -mb-2">
                          <Image
                            src="/logos/getv3.png"
                            alt="Get Vitals screenshot 3"
                            width={200}
                            height={200}
                            className="h-auto max-h-[60%] w-auto object-contain -mr-8"
                          />
                          <Image
                            src="/logos/burnout.png"
                            alt="Get Vitals burnout screenshot"
                            width={200}
                            height={200}
                            className="h-auto max-h-[70%] w-auto object-contain relative z-10"
                          />
                          <Image
                            src="/logos/getv4.png"
                            alt="Get Vitals screenshot 4"
                            width={200}
                            height={200}
                            className="h-auto max-h-[60%] w-auto object-contain -ml-8"
                          />
                        </div>
                      </div>
                    </a>
                    <h3 className="text-slate-900 font-bold font-mono text-xl mb-2 group-hover:text-slate-700 transition-colors">
                      <a 
                        href="https://getvitals.care/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Get Vitals
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </h3>
                    <p className="diatype text-base text-zinc-500">
                      Burnout support app for nurses across partner hospitals. Worked on tracking features & a tool to automate relevant research collection that drove new core wellness features.
                    </p>
                  </div>
                ) : idx === 3 ? (
                  <div key={idx} className="w-full group">
                    <a
                      href="https://aisc.ucrhighlanders.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      <div className="aspect-[4/3] w-full rounded-lg border border-zinc-200 bg-white shadow-sm overflow-hidden mb-3 relative flex items-end justify-start">
                        <Image
                          src="/logos/aisc.png"
                          alt="AI Student Collective website"
                          width={400}
                          height={300}
                          className="h-auto max-h-full w-auto object-contain -ml-3"
                        />
                      </div>
                    </a>
                    <h3 className="text-slate-900 font-bold font-mono text-xl mb-2 group-hover:text-slate-700 transition-colors">
                      <a 
                        href="https://aisc.ucrhighlanders.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        AISC Club Website
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </h3>
                    <p className="diatype text-base text-zinc-500">
                      Worked with a team of 11 developers to build an official website for UCR's AI Student Collective Club on campus.
                    </p>
                  </div>
                ) : (
                  <div key={idx} className="w-full group">
                    <div className="aspect-[4/3] w-full rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm overflow-hidden mb-3 relative flex items-center justify-center">
                      <p className="diatype text-base text-zinc-500">
                        
                      </p>
                    </div>
                    <h3 className="text-slate-900 font-bold font-mono text-xl mb-2">
                      <span className="inline-block">
                        Work in Progress
                      </span>
                    </h3>
                    <p className="diatype text-base text-zinc-500">
                      Project coming soon...
                    </p>
                  </div>
                )
              )}
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}
