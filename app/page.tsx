
import BannerTop from "./ui/home/BannerTop";
import Quotes from "./ui/home/Quotes";
import ContentSectionHome from "./ui/home/ContentSectionHome";
import PolygonSlider from "./ui/home/PolygonSlider";


export default function Home() {
  return (
    <div id="homePage">
   
     <BannerTop></BannerTop>
     <Quotes></Quotes>
     <ContentSectionHome></ContentSectionHome>
     <PolygonSlider></PolygonSlider>
    </div>
  );
}
