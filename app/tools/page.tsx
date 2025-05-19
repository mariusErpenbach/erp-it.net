"use client";

import Link from "next/link";
import SkillChart from "../ui/home/SkillChart";
import { useLanguage } from "../ui/LanguageContext";

export default function ToolsPage() {
	const { t } = useLanguage();

	const tools = [
		{
			name: t.tools.standardPythonLibraries,
			href: "/tools/pyLibs",
			description: t.tools.standardPythonLibrariesDescription,
		},
		{
			name: t.tools.xamlList,
			href: "/tools/xamlList",
			description: t.tools.xamlListDescription,
		},
		{
			name: t.tools.tailwindSheet,
			href: "/tools/tailClasses",
			description: t.tools.tailwindSheetDescription,
		},
		{
			name: t.tools.csharpLibs,
			href: "/tools/csharpLibs",
			description: t.tools.csharpLibsDescription,
		},
		{
			name: t.tools.cppLibs,
			href: "/tools/cppLibs",
			description: t.tools.cppLibsDescription,
		},
	];

	return (
		<div id="toolsPage">
			<main>
				<h1 className="tools-title">{t.tools.title}</h1>
				<div className="tools-grid">
					{tools.map((tool) => (
						<div className="tool-card" key={tool.href}>
							<h2>{tool.name}</h2>
							<p>{tool.description}</p>
							<Link href={tool.href} className="tool-link">
								{t.tools.linkText}
							</Link>
						</div>
					))}
				</div>
			</main>
			<SkillChart></SkillChart>
		</div>
	);
}
