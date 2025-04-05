"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


export default function BannerTop() {
  const [beams, setBeams] = useState<number[]>([]);

  useEffect(() => {
    const randomHeights = Array.from({ length: 5 }, () => Math.random() * 100);
    setBeams(randomHeights);
  }, []);

  return (
    <div className="banner-top">
      {/* UFO */}
      <div className="ufo">
        <Image src="https://uploads.erp-it.net/images/ufo1.png" alt="UFO" width={250} height={250} />
      </div>

      {/* Light Beams */}
      <div className="light-beam-container">
        {beams.map((top, index) => (
          <div key={index} className="light-beam" style={{ top: `${top}%`, animationDelay: `${index * 0.5}s` }}></div>
        ))}
      </div>
  
    </div>
  );
}
