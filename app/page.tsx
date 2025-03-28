import MenuBar from "./ui/MenuBar";
import BannerTop from "./ui/home/BannerTop";
import Quotes from "./ui/home/Quotes";
import ContentSectionHome from "./ui/home/ContentSectionHome";
export default function Home() {
  return (
    <div id="homePage">
     <MenuBar></MenuBar>
     <BannerTop></BannerTop>
     <Quotes></Quotes>
     <ContentSectionHome></ContentSectionHome>
    </div>
  );
}
