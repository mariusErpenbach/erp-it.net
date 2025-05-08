
import BannerTop from "./ui/home/BannerTop";
import Quotes from "./ui/home/Quotes";
import ContentSectionHome from "./ui/home/ContentSectionHome";
import PolygonSlider from "./ui/home/PolygonSlider";
import SkillChart from "./ui/home/SkillChart";

export default function Home() {
  return (
    <div id="homePage">
     <BannerTop></BannerTop>
     <Quotes></Quotes>
     <ContentSectionHome></ContentSectionHome>
     <PolygonSlider></PolygonSlider>
     <SkillChart></SkillChart>
    </div>
  );
}
