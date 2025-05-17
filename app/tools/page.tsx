"use client";

import Link from "next/link";
import SkillChart from "../ui/home/SkillChart";
const tools = [
	{
		name: "Standard Python Libraries",
		href: "/tools/pyLibs",
		description: "Schnelle Übersicht über Standardmodule von Python.",
	},
	{
		name: "XAML List",
		href: "/tools/xamlList",
		description: "Alle wichtigen XAML-Elemente für UI-Entwicklung.",
	},
	{
		name: "Tailwind Sheet",
		href: "/tools/tailClasses",
		description: "TailwindCSS Cheatsheet für schnelles Nachschlagen.",
	},
	{
		name: "C# Libs",
		href: "/tools/csharpLibs",
		description: "Nützliche C#-Bibliotheken und Beispiele.",
	},
	{
		name: "C++ Libs",
		href: "/tools/cppLibs",
		description: "Wichtige C++ Standardbibliotheken im Überblick.",
	},
];

export default function ToolsPage() {
	return (
		<div id="toolsPage">
			<main>
				<h1 className="tools-title">Tools &amp; Cheatsheets</h1>
				<div className="tools-grid">
					{tools.map((tool) => (
						<div className="tool-card" key={tool.href}>
							<h2>{tool.name}</h2>
							<p>{tool.description}</p>
							<Link href={tool.href} className="tool-link">
								Zum Tool
							</Link>
						</div>
					))}
				</div>
			</main>
      <SkillChart></SkillChart>
		</div>
	);
}
