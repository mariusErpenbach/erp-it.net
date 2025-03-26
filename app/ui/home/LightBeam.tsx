import { motion } from "framer-motion";

interface LightBeamProps {
  delay: number;
}

export default async function LightBeam({ delay }: LightBeamProps) {
  return (
    <motion.div
    className="absolute left-full h-[6px] w-[200px] bg-[#8faadc] opacity-80"
    initial={{ x: "100vw" }}  // Start außerhalb des Screens
    animate={{ x: "-100vw" }} // Läuft von rechts nach links
    transition={{
      repeat: Infinity,
      duration: 4, // Geschwindigkeit anpassen
      delay: delay,
      ease: "linear",
    }}
    style={{ top: `${Math.random() * 100}%` }} // Randomisierte Höhe
  />
  );
}
