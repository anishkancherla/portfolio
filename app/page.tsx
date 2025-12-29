"use client";

import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900 font-sans">
      {/* Top bar */}
      <div className="mx-auto mt-8 max-w-5xl px-8 sm:px-12">
        <nav className="border-2 border-[var(--brand-red)]">
          <div className="flex items-stretch justify-between">
            <a 
              href="#"
              className="courier-prime px-8 py-4 text-base uppercase font-medium text-[var(--brand-red)] border-r-2 border-[var(--brand-red)] hover:bg-gray-50 transition-colors"
            >
              anish kancherla
            </a>
            <div className="flex items-stretch">
              <a
                href="#"
                className="courier-prime px-8 py-4 text-base uppercase font-medium bg-[var(--brand-red)] text-white border-l-2 border-[var(--brand-red)] hover:opacity-90 transition-opacity"
              >
                home
              </a>
              <a
                href="#projects"
                className="courier-prime px-8 py-4 text-base uppercase font-medium text-[var(--brand-red)] border-l-2 border-[var(--brand-red)] hover:bg-gray-50 transition-colors"
              >
                projects
              </a>
              <a
                href="#contact"
                className="courier-prime px-8 py-4 text-base uppercase font-medium text-[var(--brand-red)] border-l-2 border-[var(--brand-red)] hover:bg-gray-50 transition-colors"
              >
                contact
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <main className="w-full px-4 pt-12 pb-24 sm:px-0 sm:pt-16 sm:pb-32">
            {/* Intro paragraph */}
            <section className="mb-10 sm:mb-12">
              <p className="eb-garamond text-slate-900 text-[21px] sm:text-[24px] leading-relaxed max-w-[52rem]">
                Hi, I'm Anish!
              </p>
              <p className="eb-garamond text-slate-900 text-[21px] sm:text-[24px] leading-relaxed max-w-[52rem] mt-6">
                I'm currently studying CS at UC Riverside. I love to learn, code, and build things that actually work.
                When I'm not coding, I like exploring fashion and music, trying new restaurants/cafes, and staying active
                in the gym.
              </p>
              <p className="eb-garamond text-slate-900 text-[21px] sm:text-[24px] leading-relaxed max-w-[52rem] mt-6">
                Previously, I built internal tools & a dashboard to automate spec template generation for 50+ DWH analysts at{" "}
                <a
                  href="https://www.abbvie.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 underline decoration-[var(--brand-red)]/40"
                >
                  AbbVie
                </a>{" "}
                (Summer 2024). Built AI-powered features and research automation tool in a nurse wellness app for 500+ nurses at{" "}
                <a
                  href="https://getvitals.care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 underline decoration-[var(--brand-red)]/40"
                >
                  Get Vitals
                </a>{" "}
                (Summer 2025). Built interactive RAG chatbot for personalized patient breast cancer guidance at{" "}
                <a
                  href="https://medschool.ucr.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 underline decoration-[var(--brand-red)]/40"
                >
                  UCR's Medical School
                </a>{" "}
                (Fall 2025)
              </p>
            </section>

            {/* Separator line */}
            <div className="w-full h-[2px] bg-[var(--brand-red)] mb-10 sm:mb-12"></div>

            {/* Projects (leave as-is) */}
            <section id="projects" className="fade-in fade-in-400">
              <h2 className="mb-3 text-slate-900 eb-garamond text-[21px] sm:text-[24px]">
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
                <h3 className="text-slate-900 font-bold eb-garamond text-2xl mb-2">
                  <a 
                    href="https://ucrcourseguide.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    UCR Course Guide
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-[var(--brand-red)] transition-all">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </h3>
                <p className="libre-franklin text-base text-zinc-500">
                  AI-powered course/professor guidance platform for UCR. Leveraging Reddit, Rate My Professors, and other
                  online community discussions to generate comprehensive insights in seconds. Gained 3,000+ users and 12,000+ courses searched.
                </p>
              </div>
              {/* map for project items */}
              {[1, 2, 3].map((idx) =>
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
                    <h3 className="text-slate-900 font-bold eb-garamond text-2xl mb-2">
                      <a 
                        href="https://matcharestock.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        matcharestock
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-[var(--brand-red)] transition-all">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </h3>
                    <p className="libre-franklin text-base text-zinc-500">
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
                    <h3 className="text-slate-900 font-bold eb-garamond text-2xl mb-2">
                      <a 
                        href="https://getvitals.care/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Get Vitals
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-[var(--brand-red)] transition-all">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </h3>
                    <p className="libre-franklin text-base text-zinc-500">
                      Burnout support app for nurses across partner hospitals. Worked on tracking features & a tool to automate relevant research collection that drove new core wellness features.
                    </p>
                  </div>
                ) : (
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
                    <h3 className="text-slate-900 font-bold eb-garamond text-2xl mb-2">
                      <a 
                        href="https://aisc.ucrhighlanders.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        AISC Club Website
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-[var(--brand-red)] transition-all">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </h3>
                    <p className="libre-franklin text-base text-zinc-500">
                      Worked with a team of 11 developers to build an official website for UCR's AI Student Collective Club on campus.
                    </p>
                  </div>
                )
              )}
            </div>
            </section>
          </main>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="w-full px-4 pb-12 sm:px-0 sm:pb-16">
            {/* Contact */}
            <section id="contact">
              <div className="flex justify-between items-center text-xl courier-prime text-slate-900 mb-12">
                <a
                  href="https://github.com/anishkancherla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  LinkedIn ↗
                </a>
                <a 
                  href="mailto:anish.kancherla@gmail.com" 
                  className="hover:opacity-80 transition-opacity"
                >
                  Email ↗
                </a>
              </div>
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
