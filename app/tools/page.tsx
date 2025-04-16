"use client";

import Link from "next/link";

export default function ToolsPage() {
  return (
    <div id="toolsPage">
      <main>
        <div id="toolList">
          <table className="tool-table">
            <thead>
              <tr>
                <th>Tool</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard Python Libraries</td>
                <td>
                  <Link href="/tools/pyLibs">/tools/pyLibs</Link>
                </td>
              </tr>
              <tr>
                <td>XAML List</td>
                <td>
                  <Link href="/tools/xamlList">/tools/xamlList</Link>
                </td>
              </tr>
              <tr>
                <td>Tailwind Sheet</td>
                <td>
                  <Link href="/tools/tailClasses">/tools/tailClasses</Link>
                </td>
              </tr>
              <tr>
                <td>C# Libs</td>
                <td>
                  <Link href="/tools/csharpLibs">/tools/csharpLibs</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
