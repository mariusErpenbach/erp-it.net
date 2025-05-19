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
