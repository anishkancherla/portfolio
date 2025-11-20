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

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-zinc-800 mt-12 pt-6 pb-6">
      <div className="flex justify-between items-center text-zinc-400 text-sm">
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

