"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // for time updates
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
      const formattedTime = `${timeString} PST`;
      setCurrentTime(formattedTime);
    };

    
    updateTime();

    
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer className="w-full border-t border-black pt-6 pb-6 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-slate-900 text-sm">
        <div className="libre-franklin">
          2025 © Anish Kancherla
        </div>
        <div className="libre-franklin">
          {currentTime}
        </div>
      </div>
    </footer>
  );
}

