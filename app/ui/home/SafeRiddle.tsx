"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BannerTop() {
  const [rotationAngle, setRotationAngle] = useState(-10); // Initial angle set to -10 to align the 1 at the correct position

  const radius = 100; // Radius des Kreises
  const centerX = 150; // X-Koordinate des Kreismittelpunkts
  const centerY = 150; // Y-Koordinate des Kreismittelpunkts
  const sides = 9; // Anzahl der Ecken des Vielecks

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = (i / sides) * 2 * Math.PI + (rotationAngle * Math.PI) / 180; // Winkel für jede Ecke
    const x = centerX + radius * Math.cos(angle); // X-Position der Ecke
    const y = centerY + radius * Math.sin(angle); // Y-Position der Ecke
    return `${x},${y}`;
  }).join(" ");

  const spinPoly = () => {
    setRotationAngle((prevAngle) => prevAngle - 20); // Rotate by -20 degrees
  };

  return (
    <div id="safeRiddle" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <motion.svg
        width="300"
        height="300"
        initial={{ rotate: rotationAngle }}
        animate={{ rotate: rotationAngle }}
      >
        {Array.from({ length: sides }, (_, i) => {
          const nextIndex = (i + 1) % sides;
          const angle = (i / sides) * 2 * Math.PI + (rotationAngle * Math.PI) / 180;
          const nextAngle = (nextIndex / sides) * 2 * Math.PI + (rotationAngle * Math.PI) / 180;

          const x1 = centerX + radius * Math.cos(angle);
          const y1 = centerY + radius * Math.sin(angle);
          const x2 = centerX + radius * Math.cos(nextAngle);
          const y2 = centerY + radius * Math.sin(nextAngle);

          const path = `${centerX},${centerY} ${x1},${y1} ${x2},${y2}`;

          return (
            <polygon
              key={i}
              points={path}
              fill={i === 0 ? "white" : "black"}
              stroke="black"
            />
          );
        })}
        {Array.from({ length: sides }, (_, i) => {
          const angle = (i / sides) * 2 * Math.PI + (rotationAngle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="black"
            />
          );
        })}
        {Array.from({ length: sides }, (_, i) => {
          const angle = (i / sides) * 2 * Math.PI + (rotationAngle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="black"
            >
              {i + 1}
            </text>
          );
        })}
      </motion.svg>
      <button onClick={spinPoly} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Spin Polygon
      </button>
    </div>
  );
}
