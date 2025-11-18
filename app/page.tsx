import Image from "next/image";

export default function Home() {
  const experience = [
    {
      company: "AbbVie",
      role: "Software Engineer Intern",
      type: "Software",
      url: "https://www.abbvie.com/",
      logo: "/logos/abbvie.png",
    },
    {
      company: "UC Riverside School of Medicine",
      role: "Research Agentic AI Intern",
      type: "Research",
      url: "https://medschool.ucr.edu/",
      logo: "/logos/ucrschoolofmedicine.png",
    },
    {
      company: "Get Vitals",
      role: "Software Engineer Intern",
      type: "Software",
      url: "https://getvitals.care/",
      logo: "/logos/getvitals.png",
    },
  ];

  return (
    <div className="flex min-h-screen justify-center bg-white font-sans">
      <div className="relative w-full max-w-5xl">
        <main className="w-full px-6 pt-16 pb-24 sm:px-10 sm:pt-20 sm:pb-32">
          <section className="mb-6 sm:mb-8">
            <h1 className="gaisyr text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Anish Kancherla
            </h1>
            <div className="mt-4 text-black">
              <a href="#" className="underline underline-offset-4">LinkedIn</a>
              {" / "}
              <a href="#" className="underline underline-offset-4">GitHub</a>
              {" / "}
              <a href="mailto:anish.kancherla@gmail.com" className="underline underline-offset-4">Contact</a>
            </div>
            <p className="mt-6 text-base text-black max-w-2xl">
              soon
            </p>
          </section>

          <section className="fade-in fade-in-100 mb-6 sm:mb-8">
            <h2 className="diatype mb-3 text-xs font-medium tracking-widest text-black">
              WORK
            </h2>
            <ul className="divide-y divide-zinc-200">
              {experience.map((item) => (
                <li
                  key={`${item.company}-${item.role}`}
                  className="grid grid-cols-1 items-center gap-2 py-2"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-black">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex min-w-0 items-center gap-3 truncate"
                      >
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={32}
                          height={32}
                          className={`shrink-0 rounded-sm object-contain ${
                            item.company === "AbbVie" 
                              ? "h-9 w-9" 
                              : item.company === "Get Vitals" 
                              ? "h-7 w-7" 
                              : "h-8 w-8"
                          }`}
                        />
                        <span className="truncate text-sm font-medium group-hover:underline">
                          {item.company}
                        </span>
                      </a>
                      <span className="ml-2 text-sm text-zinc-600">{item.role}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="fade-in fade-in-200">
            <h2 className="diatype mb-3 text-xs font-medium tracking-widest text-black">
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="aspect-[4/3] w-full rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm"
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
