import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#1a1a1a] font-sans">
      <div className="relative w-full max-w-4xl">
        <main className="w-full px-0 pt-24 pb-24 sm:px-0 sm:pt-28 sm:pb-32">
          <section className="mb-6 sm:mb-8">
            <h1 className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Anish Kancherla
            </h1>
            <div className="mt-2 text-base text-[#ede8d0] lora">
              <a href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {" / "}
              <a href="https://github.com/anishkancherla" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {" / "}
              <a href="mailto:anish.kancherla@gmail.com">
                Email
              </a>
            </div>
            <p className="mt-8 text-zinc-400 text-base leading-relaxed fade-in fade-in-100">
              Hi! I'm currently studying CS at the University of California, Riverside. I have a passion for learning and building with purpose, with a particular interest in AI automation and agentic systems.{" "}
              In my free time, I like exploring fashion and music, trying new restaurants and cafes, and staying active in the gym. I still have lots more to learn, and I'm always open to exploring any new opportunities!
            </p>
          </section>

          <section className="fade-in fade-in-100 mb-6 sm:mb-8">
            <p className="diatype text-base text-zinc-400">
              <span className="text-zinc-400">Previously,</span> I've built Python automation pipelines for clinical data processing at{" "}
              <a href="https://www.abbvie.com/" target="_blank" rel="noopener noreferrer" className="text-[#ede8d0] underline underline-offset-4 lora">
                AbbVie
              </a>
              {" "}and built LLM-powered features for a nurse wellness app at {" "}
              <a href="https://getvitals.care/" target="_blank" rel="noopener noreferrer" className="text-[#ede8d0] underline underline-offset-4 lora">
                Get Vitals
              </a>
              . Currently, I'm building an AI RAG chatbot to deliver breast cancer guidance for Prof. Masoumeh Ghaffari's patients at{" "}
              <a href="https://medschool.ucr.edu/" target="_blank" rel="noopener noreferrer" className="text-[#ede8d0] underline underline-offset-4 lora">
                UCR's Medical School
              </a>
              .
            </p>
          </section>

          <section className="fade-in fade-in-300">
            <p className="diatype text-base text-zinc-400 mb-6">
              <span className="text-white font-bold font-mono text-2xl">Projects</span>
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="w-full sm:col-span-2 group">
                <a 
                  href="https://ucrcourseguide.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm overflow-hidden mb-3">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto object-contain"
                    >
                      <source
                        src="https://anish-my-portfolio-media.s3.us-east-2.amazonaws.com/videos/4kstudio.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </a>
                <h3 className="text-white font-bold font-mono text-lg mb-2 group-hover:text-[#ede8d0] transition-colors">
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
                <p className="diatype text-base text-zinc-400">
                  AI-powered course/professor guidance platform for UCR. Leveraging Reddit, Rate My Professors, and other
                  online community discussions to generate comprehensive insights in under 40 seconds. Gained 3,000+ users and 12,000+ courses searched.
                </p>
              </div>
              {[1, 2, 3, 4].map((idx) =>
                idx === 1 ? (
                  <div key={idx} className="w-full group">
                    <a 
                      href="https://matcharestock.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      <div className="aspect-[4/3] w-full rounded-lg border border-zinc-800 shadow-sm overflow-hidden mb-3 relative">
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
                    <h3 className="text-white font-bold font-mono text-lg mb-2 group-hover:text-[#ede8d0] transition-colors">
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
                    <p className="diatype text-base text-zinc-400">
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
                      <div className="aspect-[4/3] w-full rounded-lg border border-zinc-800 shadow-sm overflow-hidden mb-3 relative">
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
                    <h3 className="text-white font-bold font-mono text-lg mb-2 group-hover:text-[#ede8d0] transition-colors">
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
                    <p className="diatype text-base text-zinc-400">
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
                      <div className="aspect-[4/3] w-full rounded-lg border border-zinc-800 bg-white shadow-sm overflow-hidden mb-3 relative flex items-end justify-start">
                        <Image
                          src="/logos/aisc.png"
                          alt="AI Student Collective website"
                          width={400}
                          height={300}
                          className="h-auto max-h-full w-auto object-contain -ml-3"
                        />
                      </div>
                    </a>
                    <h3 className="text-white font-bold font-mono text-lg mb-2 group-hover:text-[#ede8d0] transition-colors">
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
                    <p className="diatype text-base text-zinc-400">
                      Worked with a team of 11 developers to build an official website for UCR's AI Student Collective Club on campus.
                    </p>
                  </div>
                ) : (
                  <div key={idx} className="w-full group">
                    <div className="aspect-[4/3] w-full rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm overflow-hidden mb-3 relative flex items-center justify-center">
                      <p className="diatype text-base text-zinc-400">
                        
                      </p>
                    </div>
                    <h3 className="text-white font-bold font-mono text-lg mb-2">
                      <span className="inline-block">
                        Work in Progress
                      </span>
                    </h3>
                    <p className="diatype text-base text-zinc-400">
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
