"use client";

import Link from "next/link";




export default function ToolsPage() {

  return (
    <div id="toolsPage">
     
        <main>
        <div id="toolList">
            <Link className="tool-page-link"href="/tools/pyLibs">Standard Python Libraries</Link>
            <Link className="tool-page-link"href="/tools/xamlList">XAML List</Link>
            <Link className="tool-page-link"href="/tools/">Tailwind Sheet</Link>
        </div>
        </main>
   
    </div>
  );
}
