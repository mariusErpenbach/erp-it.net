import Link from "next/link";
import MenuBar from "../ui/MenuBar";
import ArticlesList from "../ui/blog/ArticlesList";
import FooterMain from "../ui/FooterMain";


  export default async function BlogOverview() {
  
  
    return (
      <div id="blog-page">
        <MenuBar />
     
        <main id="blog-content">
        <ArticlesList></ArticlesList>
        </main>
  
        <FooterMain />
      </div>
    );
  }