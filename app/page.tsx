import MenuBar from "./ui/MenuBar";
import BannerTop from "./ui/home/BannerTop";
import Quotes from "./ui/home/Quotes";
import ContentSectionHome from "./ui/home/ContentSectionHome";
import FooterMain from "./ui/FooterMain";
export default function Home() {
  return (
    <div id="homePage">
     <MenuBar></MenuBar>
     <BannerTop></BannerTop>
     <Quotes></Quotes>
     <ContentSectionHome></ContentSectionHome>
     <FooterMain></FooterMain> 
    </div>
  );
}
