import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#1a1a1a] font-sans">
      <div className="relative w-full max-w-4xl">
        <main className="w-full px-0 pt-24 pb-24 sm:px-0 sm:pt-28 sm:pb-32">
          <section className="mb-6 sm:mb-8">
            <h1 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl">
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
            <p className="mt-8 text-zinc-400 text-base leading-relaxed max-w-[45rem]">
              Hi! I'm currently studying CS at the University of California, Riverside. I have a passion for learning and building with purpose, with a particular interest in AI automation and agentic systems.
              In my free time, I like to explore fashion and music, try new restaraunts, and stay active in the gym.
            </p>
          </section>

          <section className="fade-in fade-in-100 mb-6 sm:mb-8">
            <p className="diatype text-base text-zinc-400 max-w-[45rem]">
              <span className="text-zinc-400">Previously,</span> I've built Python automation pipelines for clinical data processing at{" "}
              <a href="https://www.abbvie.com/" target="_blank" rel="noopener noreferrer" className="text-[#ede8d0] underline underline-offset-4 lora">
                AbbVie
              </a>
              {" "}and built LLM-powered features for a nurse wellness app at {" "}
              <a href="https://getvitals.care/" target="_blank" rel="noopener noreferrer" className="text-[#ede8d0] underline underline-offset-4 lora">
                Get Vitals
              </a>
              . Currently, I'm building an AI RAG chatbot to deliver breast cancer guidance for patients at{" "}
              <a href="https://medschool.ucr.edu/" target="_blank" rel="noopener noreferrer" className="text-[#ede8d0] underline underline-offset-4 lora">
                UCR's Medical School
              </a>
              .
            </p>
          </section>

          <section className="fade-in fade-in-200">
            <p className="diatype text-base text-zinc-400 mb-6">
              <span className="text-white font-bold font-sans">Projects I've built:</span>
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="w-full sm:col-span-2">
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
                <h3 className="text-white font-bold font-sans text-lg mb-2">UCR Course Guide</h3>
                <p className="diatype text-base text-zinc-400">
                  AI-powered course/professor guidance platform for UCR. Leveraging Reddit, Rate My Professors, and other
                  online community discussions to generate comprehensive insights in under 40 seconds. Gained 3,000+ users and 12,000+ courses searched.
                </p>
              </div>
              {[1, 2, 3].map((idx) =>
                idx === 1 ? (
                  <div key={idx} className="w-full">
                    <div className="aspect-[4/3] w-full rounded-lg border border-zinc-800 bg-white shadow-sm overflow-hidden flex items-center justify-center mb-3">
                      <Image
                        src="/logos/restock.png"
                        alt="Restock project screenshot"
                        width={450}
                        height={320}
                        className="max-h-[75%] max-w-[75%] object-contain"
                      />
                    </div>
                    <h3 className="text-white font-bold font-sans text-lg mb-2">matcharestock</h3>
                    <p className="diatype text-base text-zinc-400">
                      Restock tracking tool for premium matcha brands. Sends email/discord alerts within seconds of a restock, beating competitive 2 minute sell-outs.
                      Gained 150+ subscribers.
                    </p>
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="aspect-[4/3] w-full rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm"
                  />
                )
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
