"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PolygonSlider() {
  const [rotationAngle, setRotationAngle] = useState(0); // Initial angle set to -10 to align the 1 at the correct position
  const [spinCounter, setSpinCounter] = useState(0); // Counter to track the current field in the outer polygon

  const radius = 100; // Radius des Kreises
  const centerX = 150; // X-Koordinate des Kreismittelpunkts
  const centerY = 150; // Y-Koordinate des Kreismittelpunkts
  const sides = 9; // Anzahl der Ecken des Vielecks
  const words = [
    "Prozesse",
    "Stammdaten",
    "Rollen",
    "Integration",
    "Security",
    "Scalability",
    "Analytics",
    "Usability",
    "Support"
  ];
  const formatNumber = (num: number) => parseFloat(num.toFixed(6));

  const points = Array.from({ length: sides }, (_: unknown, i: number) => {
    const angle = (i / sides) * 2 * Math.PI + (rotationAngle * Math.PI) / 180; // Winkel für jede Ecke
    const x = formatNumber(centerX + radius * Math.cos(angle)); // X-Position der Ecke
    const y = formatNumber(centerY + radius * Math.sin(angle)); // Y-Position der Ecke
    return `${x},${y}`;
  }).join(" ");

  const handleFanEffect = () => {
    // Set all background images to opacity 0
    const polygons = document.querySelectorAll("#outerPolygon polygon");
    polygons.forEach((polygon, index) => {
      const htmlPolygon = polygon as HTMLElement; // Cast to HTMLElement to access style property
      htmlPolygon.style.transition = "opacity 0.1s ease";
      htmlPolygon.style.opacity = "0";
    });

    // Sequentially set opacity back to 1 with a delay based on distance from spinCounter
    polygons.forEach((polygon, index) => {
      const distance = (index - spinCounter + sides) % sides; // Calculate distance from spinCounter
      setTimeout(() => {
        const htmlPolygon = polygon as HTMLElement; // Cast to HTMLElement to access style property
        htmlPolygon.style.transition = "opacity 0.7s ease";
        htmlPolygon.style.opacity = "1";
      }, distance * 50); // Delay based on distance, 0.1s per step
    });
  };

  const spinPoly: () => void = () => {
    setRotationAngle((prevAngle) => prevAngle + 20); // Rotate by -20 degrees
    setSpinCounter((prevCounter) => (prevCounter + 1) % sides); // Increment counter and loop back to 0 after reaching the last field
    handleFanEffect(); // Trigger the fan effect
  };

  let isScrolling = false; // Flag to prevent multiple triggers per scroll
  let wheelTimeout: NodeJS.Timeout | null = null; // Timeout for debouncing

  const handleMouseWheelSpin = (e: WheelEvent) => {
    if (wheelTimeout) return; // Prevent triggering if timeout is active

    if (e.deltaY < 0) {
      setRotationAngle((prevAngle) => prevAngle + 20); // Rotate clockwise
      setSpinCounter((prevCounter) => (prevCounter + 1) % sides); // Increment counter
    } else if (e.deltaY > 0) {
      setRotationAngle((prevAngle) => prevAngle - 20); // Rotate counterclockwise
      setSpinCounter((prevCounter) => (prevCounter - 1 + sides) % sides); // Decrement counter
    }

  };

  const unifiedColor = "linear-gradient(90deg, #2a2d4e, #3b3f6b)"; // Modern gradient matching Space Cadet background

  const gradients: string[] = [
    "linear-gradient(90deg, #f7961e, #f9a94e)",
    "linear-gradient(90deg, #4CAF50, #6BCF70)",
    "linear-gradient(90deg, #8e44ad, #a064c5)",
    "linear-gradient(90deg, #3498db, #5ab0f0)",
    "linear-gradient(90deg, #e74c3c, #f06d5c)",
    "linear-gradient(90deg, #2c3e50, #3e5065)",
    "linear-gradient(90deg, #f1c40f, #f4d24f)",
    "linear-gradient(90deg, #d63384, #e05a9c)",
    "linear-gradient(90deg, #7f8c8d, #9fa5a7)"
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleMouseWheelSpin(e); // Call the new function to handle mouse wheel spin
    };

    const handleMouseEnter = () => {
      document.addEventListener('wheel', handleWheel, { passive: false });
    };

    const handleMouseLeave = () => {
      document.removeEventListener('wheel', handleWheel);
    };

    const svgElement = document.getElementById('outerPolygon');
    svgElement?.addEventListener('mouseenter', handleMouseEnter);
    svgElement?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      svgElement?.removeEventListener('mouseenter', handleMouseEnter);
      svgElement?.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div id="polygonSlider">
    <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <div id="polyBox" style={{ flex: 1 }}>
        <svg
          id="outerPolygon"
          width="100vh"
          height="100vh"
          viewBox="0 0 300 300"
          style={{ position: 'absolute', pointerEvents: 'auto', overflow: 'visible' }}
          onClick={spinPoly}>
          <defs>
            <linearGradient id="unifiedGradient" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#202844" />
              <stop offset="100%" stopColor="#3b3f6b" />
            </linearGradient>
            <pattern
              id="polygonBackground"
              patternUnits="userSpaceOnUse"
              width="300"
              height="300"
            >
              <image
                href={`/ps_${words[spinCounter].toLowerCase().replace("integration", "integritaet")}.png`}
                x="0"
                y="0"
                width="300"
                height="300"
                style={{ opacity: 1 }}
              />
            </pattern>
          </defs>
          {Array.from({ length: sides }, (_, i) => {
            const nextIndex = (i + 1) % sides;
            const angle = (i / sides) * 2 * Math.PI;
            const nextAngle = (nextIndex / sides) * 2 * Math.PI;

            const x1 = formatNumber(centerX + (radius + 50) * Math.cos(angle));
            const y1 = formatNumber(centerY + (radius + 50) * Math.sin(angle));
            const x2 = formatNumber(centerX + (radius + 50) * Math.cos(nextAngle));
            const y2 = formatNumber(centerY + (radius + 50) * Math.sin(nextAngle));

            const path = `${centerX},${centerY} ${x1},${y1} ${x2},${y2}`;

            return (
              <motion.polygon
                key={i}
                points={path}
                fill={i === spinCounter ? "url(#polygonBackground)" : "url(#polygonBackground)"}
                stroke="gray"
                animate={{ opacity: i === spinCounter ? 0.2 : 1 }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
          {Array.from({ length: sides }, (_, i) => {
            const angle = ((i + 0.5) / sides) * 2 * Math.PI; // Adjusted angle to position text in the middle of each field
            const x = formatNumber(centerX + (radius + 15) * Math.cos(angle)); // Adjusted radius further inward for text placement
            const y = formatNumber(centerY + (radius + 15) * Math.sin(angle));

            const textWidth = 80; // Approximate width of the text background
            const textHeight = 20; // Approximate height of the text background

            return (
              <g key={i}>
                <motion.rect
                  x={x - textWidth / 2}
                  y={y - textHeight / 2}
                  width={textWidth}
                  height={textHeight}
                  fill="rgba(211, 250, 13, 0.958)"
                  rx="4" // Rounded corners
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === spinCounter ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === spinCounter ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ fontSize: '0.8em' }}
                >
                  {words[i]}
                </motion.text>
              </g>
            );
          })}
        </svg>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
      </div>
    </section>
    </div>
  );
}
