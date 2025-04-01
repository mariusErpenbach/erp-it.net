import { BlogArticlePreview } from "../types/blog";
import Link from "next/link";
import MenuBar from "../ui/MenuBar";
import FooterMain from "../ui/FooterMain";
import TestDBConnection from "../ui/TestDBConnection";


  export default async function BlogOverview() {
  
  
    return (
      <div id="blog-page">
        <MenuBar />
        <TestDBConnection></TestDBConnection>
        <main id="blog-content">
     
        </main>
  
        <FooterMain />
      </div>
    );
  }