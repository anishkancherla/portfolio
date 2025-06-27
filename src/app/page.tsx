"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Home() {
  const [lastUpdated, setLastUpdated] = useState("")


  useEffect(() => {
    const now = new Date()
    const date = now
      .toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
      .replace(/\//g, ".")
    const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false })
    setLastUpdated(`${date} ${time}`)
  }, [])



  return (
    <div 
      className="min-h-screen bg-black text-white relative"
      style={{ transform: 'scale(1.1)', transformOrigin: 'top left', width: '91%', height: '91%' }}
    >
      {/* Header */}
      <header className="w-full py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-start">
            {/* Contact labels - left aligned */}
            <div>
              <div className="text-lg">Contact</div>
              <div className="text-lg">GITHUB</div>
              <div className="text-lg">LINKEDIN</div>
            </div>

            {/* contact right side */}
            <div className="text-right">
              <div className="text-lg">anish.kancherla@gmail.com</div>
              <div className="text-lg">
                → <a
                  href="https://github.com/anishkancherla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  anishkancherla
                </a>
              </div>
              <div className="text-lg">
                → <a
                  href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  anish-kancherla
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>



      {/* Main Content */}
      <main className="w-full py-16 px-4 flex items-center justify-center">
        <Receipt lastUpdated={lastUpdated} />
      </main>
    </div>
  )
}

const Receipt = ({ lastUpdated }: { lastUpdated: string }) => {
  return (
    <>
      <div className="bg-[#cad1c9] text-black max-w-md w-full shadow-2xl transform rotate-1 rounded-md astherma-font">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center text-xl">
            <span className="font-bold">ANISH KANCHERLA</span>
            <span>V1.0.0</span>
          </div>
          <div className="flex justify-between items-center text-lg mt-1">
            <span>LAST UPDATED</span>
            <span>{lastUpdated}</span>
          </div>

          {/* ASCII Art */}
          <div className="my-6 text-center overflow-hidden">
            <pre className="text-[8px] leading-tight font-mono select-none">
              {"IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"}
            </pre>
          </div>

          {/* Dotted Separator */}
          <div className="border-t border-dashed border-black my-4"></div>

          {/* About Section */}
          <div className="flex justify-between text-lg">
            <p className="max-w-[70%]">CURRENTLY A CS STUDENT AT UC RIVERSIDE.</p>
            <span className="font-bold">ABOUT</span>
          </div>

          {/* Dotted Separator */}
          <div className="border-t border-dashed border-black my-4"></div>

          {/* Experience Section */}
          <div className="text-lg space-y-3">
            <div>
              <p>
                CURRENTLY A <span className="font-bold">SOFTWARE ENGINEER INTERN</span>
              </p>
              <p>
                @{" "}
                <a
                  href="https://getvitals.care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  GET VITALS
                </a>
              </p>
            </div>
            <div>
              <p>
                PREVIOUSLY A <span className="font-bold">SOFTWARE ENGINEER INTERN</span>
              </p>
              <p>
                @{" "}
                <a
                  href="https://abbvie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  ABBVIE
                </a>
              </p>
            </div>
            <div>
              <p>
                AND A <span className="font-bold">WEB DEVELOPER</span> @ UCR
              </p>
            </div>
          </div>

          {/* Dotted Separator */}
          <div className="border-t border-dashed border-black my-4"></div>

          {/* Projects Section */}
          <div className="text-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold">PROJECTS</span>
            </div>
            <div>
              <p className="font-bold">MATCHA_RESTOCK</p>
              <p className="text-base my-2 leading-relaxed">
                PRODUCT AVAILABILITY TRACKER FOR PREMIUM MATCHA VENDORS. REAL-TIME STOCK MONITORING WITH NOTIFICATION
                SYSTEM.
              </p>

              <a
                href="https://github.com/anishkancherla/matcha-stock"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                OPEN_PROJECT.EXE →
              </a>
            </div>
          </div>

          {/* Dotted Separator */}
          <div className="border-t border-dashed border-black my-4"></div>

          {/* Location Section */}
          <div className="flex justify-between text-lg">
            <div>
              <p>BASED IN CALIFORNIA</p>
              <p className="mt-1">
                TIMEZONE <span className="ml-2">PACIFIC STANDARD TIME</span>
              </p>
            </div>
            <span className="font-bold">USA</span>
          </div>

          {/* Table Section */}
          <div className="border-t-2 border-b-2 border-black my-4 py-2 text-lg">
            <div className="pt-2 text-center">EMAIL FOR INQUIRIES</div>
          </div>

          {/* Links Section */}
          <div className="flex justify-between text-lg">
            <div className="flex space-x-4">
              <a
                href="https://github.com/anishkancherla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/anish-kancherla-3b6aa6263/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          {/* Dotted Separator */}
          <div className="border-t border-dashed border-black my-4"></div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-lg">THANK YOU</p>
          </div>

          {/* Barcode */}
          <div className="flex items-end justify-center h-16 space-x-px mt-4">
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-4/5 bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-4/5 bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-4/5 bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-4/5 bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-4/5 bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-4/5 bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-0.5 h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
          </div>
          <div className="text-right text-xs mt-1">
            <span>© 2024</span>
          </div>
        </div>


      </div>
    </>
  )
}
