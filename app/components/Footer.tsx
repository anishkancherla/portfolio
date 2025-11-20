"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = now.toLocaleTimeString("en-US", options);
      setCurrentTime(`${timeString} PST`);
    };

    
    updateTime();


    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-zinc-800 mt-12 pt-6 pb-6 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-zinc-400 text-sm">
        <div className="diatype">
          2025 © Anish Kancherla
        </div>
        <div className="diatype">
          {currentTime}
        </div>
      </div>
    </footer>
  );
}

