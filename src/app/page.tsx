"use client";

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [activeProjectTab, setActiveProjectTab] = useState('current');

  return (
    <div className="min-h-screen bg-gray-100 text-black">
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

      {/* Divider */}
      <div className="h-px bg-black w-full"></div>

      {/* Mac OS Style Main Content */}
      <main className="w-full py-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Mac OS Window Frame */}
          <div className="bg-gray-200 border-4 border-gray-400 shadow-lg" style={{
            borderTopColor: '#ffffff',
            borderLeftColor: '#ffffff',
            borderRightColor: '#808080',
            borderBottomColor: '#808080'
          }}>
            {/* Title Bar */}
            <div className="bg-gray-300 border-b-2 border-gray-400 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white border border-black flex items-center justify-center text-xs">□</div>
                <span className="font-mono text-sm font-bold">Anish Kancherla - Portfolio</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-white border border-black"></div>
                <div className="w-4 h-4 bg-white border border-black flex items-center justify-center text-xs">×</div>
              </div>
            </div>

            {/* Menu Bar */}
            <div className="bg-gray-200 border-b border-gray-400 px-4 py-1">
              <div className="flex space-x-4 text-sm font-mono">
                <span className="hover:bg-gray-300 px-2 py-1 cursor-pointer">File</span>
                <span className="hover:bg-gray-300 px-2 py-1 cursor-pointer">Edit</span>
                <span className="hover:bg-gray-300 px-2 py-1 cursor-pointer">View</span>
                <span className="hover:bg-gray-300 px-2 py-1 cursor-pointer">Special</span>
              </div>
            </div>

            {/* File Folder Tabs */}
            <div className="bg-gray-100 px-4 pt-4">
              <div className="flex space-x-1 mb-0">
                {/* About Tab */}
                <div 
                  className={`relative cursor-pointer ${activeTab === 'about' ? 'z-20' : 'z-10'}`}
                  onClick={() => setActiveTab('about')}
                >
                  <div className={`px-6 py-2 border-2 border-black bg-yellow-100 transform -skew-x-12 ${
                    activeTab === 'about' ? 'border-b-yellow-100' : 'border-b-black'
                  }`}>
                    <span className="font-mono text-sm font-bold transform skew-x-12 block">📁 ABOUT.DIR</span>
                  </div>
                </div>

                {/* Experience Tab */}
                <div 
                  className={`relative cursor-pointer ${activeTab === 'experience' ? 'z-20' : 'z-10'}`}
                  onClick={() => setActiveTab('experience')}
                >
                  <div className={`px-6 py-2 border-2 border-black bg-yellow-100 transform -skew-x-12 ${
                    activeTab === 'experience' ? 'border-b-yellow-100' : 'border-b-black'
                  }`}>
                    <span className="font-mono text-sm font-bold transform skew-x-12 block">💼 WORK.EXP</span>
                  </div>
                </div>

                {/* Projects Tab */}
                <div 
                  className={`relative cursor-pointer ${activeTab === 'projects' ? 'z-20' : 'z-10'}`}
                  onClick={() => setActiveTab('projects')}
                >
                  <div className={`px-6 py-2 border-2 border-black bg-yellow-100 transform -skew-x-12 ${
                    activeTab === 'projects' ? 'border-b-yellow-100' : 'border-b-black'
                  }`}>
                    <span className="font-mono text-sm font-bold transform skew-x-12 block">🗂️ PROJECTS</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area - Manila Folder */}
              <div className="bg-yellow-100 border-2 border-black p-6 min-h-96">
                
                {/* About Section */}
                {activeTab === 'about' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-4 h-4 bg-black text-white text-xs flex items-center justify-center">i</div>
                      <h2 className="font-mono text-lg font-bold">PERSONAL_INFO.TXT</h2>
                    </div>
                    <div className="bg-white border-2 border-black p-4 font-mono text-sm">
                      <div className="mb-2">
                        <span className="font-bold">NAME:</span> Hello, I'm Anish
                      </div>
                      <div className="mb-2">
                        <span className="font-bold">STATUS:</span> Currently a CS Student at UC Riverside.
                      </div>
                    </div>
                  </div>
                )}

                {/* Experience Section */}
                {activeTab === 'experience' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-4 h-4 bg-black text-white text-xs flex items-center justify-center">W</div>
                      <h2 className="font-mono text-lg font-bold">EMPLOYMENT_HISTORY.DOC</h2>
                    </div>
                    <div className="bg-white border-2 border-black p-4 font-mono text-sm space-y-3">
                      <div className="border-b border-gray-300 pb-2">
                        <div className="font-bold">Previously a <span className="bg-purple-200">Software Engineer Intern</span> @ <a href="https://abbvie.com" target="_blank" rel="noopener noreferrer" className="underline hover:bg-gray-200">AbbVie</a></div>
                      </div>
                      <div className="border-b border-gray-300 pb-2">
                        <div className="font-bold">a <span className="bg-purple-200">Web Developer</span> @ UCR</div>
                      </div>
                      <div>
                        <div className="font-bold">and currently working as a <span className="bg-purple-200">Software Engineer Intern</span> @ <a href="https://getvitals.care" target="_blank" rel="noopener noreferrer" className="underline hover:bg-gray-200">Get Vitals</a></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Projects Section */}
                {activeTab === 'projects' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-4 h-4 bg-black text-white text-xs flex items-center justify-center">P</div>
                      <h2 className="font-mono text-lg font-bold">PROJECT_PORTFOLIO.DIR</h2>
                    </div>

                    {/* Sub-tabs for Projects */}
                    <div className="flex space-x-1 mb-4">
                      <div 
                        className={`cursor-pointer px-4 py-1 border border-black font-mono text-xs ${
                          activeProjectTab === 'current' ? 'bg-white' : 'bg-gray-200'
                        }`}
                        onClick={() => setActiveProjectTab('current')}
                      >
                        CURRENT.PRJ
                      </div>
                      <div 
                        className={`cursor-pointer px-4 py-1 border border-black font-mono text-xs ${
                          activeProjectTab === 'archive' ? 'bg-white' : 'bg-gray-200'
                        }`}
                        onClick={() => setActiveProjectTab('archive')}
                      >
                        ARCHIVE.PRJ
                      </div>
                    </div>

                    {/* Project Content */}
                    {activeProjectTab === 'current' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Matcha Restock Project */}
                        <div className="bg-white border-2 border-black p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-3 h-3 bg-black text-white text-xs flex items-center justify-center">📄</div>
                            <h3 className="font-mono text-sm font-bold">MATCHA_RESTOCK.APP</h3>
                          </div>
                          <p className="font-mono text-xs mb-3 leading-relaxed">Product availability tracker for premium matcha vendors. Real-time stock monitoring with notification system.</p>
                          <div className="bg-gray-100 border border-black p-2 mb-3">
                            <img
                              src="/images/matcharestockproject.png"
                              alt="Matcha Restock Project Screenshot"
                              className="w-full border border-gray-400"
                            />
                          </div>
                          <div className="bg-gray-200 border border-black px-3 py-1 inline-block">
                            <a
                              href="https://github.com/anishkancherla/matcha-stock"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs hover:underline"
                            >
                              OPEN_PROJECT.EXE →
                            </a>
                          </div>
                        </div>

                        {/* Placeholder Projects */}
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white border-2 border-black p-4 flex flex-col items-center justify-center min-h-48">
                            <div className="w-8 h-8 bg-gray-300 border border-black mb-2 flex items-center justify-center">
                              <span className="text-xs">📁</span>
                            </div>
                            <p className="font-mono text-xs text-center">PROJECT_{i}.DIR<br/>UNDER_CONSTRUCTION</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeProjectTab === 'archive' && (
                      <div className="bg-white border-2 border-black p-8 text-center">
                        <div className="w-12 h-12 bg-gray-300 border border-black mx-auto mb-4 flex items-center justify-center">
                          <span className="text-lg">📦</span>
                        </div>
                        <p className="font-mono text-sm">ARCHIVE.DIR - EMPTY</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Status Bar */}
            <div className="bg-gray-200 border-t border-gray-400 px-4 py-1 flex justify-between items-center">
              <span className="font-mono text-xs">Ready</span>
              <span className="font-mono text-xs">{activeTab.toUpperCase()} | System 7.1</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
