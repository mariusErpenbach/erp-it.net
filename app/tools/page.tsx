"use client";

import Link from "next/link";




export default function ToolsPage() {

  return (
    <div id="toolsPage">
     
        <main>
        <div id="toolList">
            <Link className="tool-page-link"href="/tools/pyLibs">Standard Python Libraries</Link>
        </div>
        </main>
   
    </div>
  );
}
