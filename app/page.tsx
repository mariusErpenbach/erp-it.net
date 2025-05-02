
import BannerTop from "./ui/home/BannerTop";
import Quotes from "./ui/home/Quotes";
import ContentSectionHome from "./ui/home/ContentSectionHome";
import SafeRiddle from "./ui/home/SafeRiddle";


export default function Home() {
  return (
    <div id="homePage">
   
     <BannerTop></BannerTop>
     <Quotes></Quotes>
     <ContentSectionHome></ContentSectionHome>
     <SafeRiddle></SafeRiddle>
    </div>
  );
}
