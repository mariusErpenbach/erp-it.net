import MenuBar from "./ui/MenuBar";
import BannerTop from "./ui/home/BannerTop";
import Quotes from "./ui/Quotes";
export default function Home() {
  return (
    <div id="homePage">
     <MenuBar></MenuBar>
     <BannerTop></BannerTop>
     <Quotes></Quotes>
    </div>
  );
}
