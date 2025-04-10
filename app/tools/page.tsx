"use client";
import MenuBar from "../ui/MenuBar";
import FooterMain from "../ui/FooterMain";
import Link from "next/link";




export default function ToolsPage() {

  return (
    <div id="toolsPage">
        <MenuBar></MenuBar>
        <main>
        <div id="toolList">
            <Link className="tool-page-link"href="/tools/pyLibs">Standard Python Libraries</Link>
        </div>
        </main>
        <FooterMain></FooterMain>
    </div>
  );
}
