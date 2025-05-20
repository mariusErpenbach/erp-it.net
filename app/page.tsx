export const metadata = {
  title: "Home - Erp-IT",
  description: "Willkommen auf der Startseite von Erp-IT. Entdecken Sie Zitate, ein Sonnensystem und interaktive Elemente.",
  keywords: ["Erp-IT", "Startseite", "Zitate", "Sonnensystem", "Polygon-Slider"],
};

import PolygonSlider from "./ui/home/PolygonSlider";
import Quotes from "./ui/home/Quotes";
import ErpSolarSystem from "./ui/home/ErpSolarSystem";
export default function Home() {
  return (
    <div id="main-landing">
      <Quotes></Quotes>
      <ErpSolarSystem></ErpSolarSystem>
      <PolygonSlider></PolygonSlider>
    </div>
  );
}
