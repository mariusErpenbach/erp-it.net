import MenuBar from "../ui/MenuBar";
import FooterMain from "../ui/FooterMain";
import Article from "../ui/blog/Article";
export default function Blog() {
  return (
    <div id="blogPage">
        <MenuBar></MenuBar>
        <Article></Article>
        <FooterMain></FooterMain>
    </div>
  );
}
