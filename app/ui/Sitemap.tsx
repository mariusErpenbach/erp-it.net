import React from 'react';
import Link from 'next/link';

const Sitemap: React.FC = () => {
    return (
        <div id="sitemap">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/tools">Tools</Link>
                    <ul>
                        <li><Link href="/tools/csharpLibs">C# Libraries</Link></li>
                        <li><Link href="/tools/pyLibs">Python Libraries</Link></li>
                        <li><Link href="/tools/tailClasses">Tailwind Classes</Link></li>
                        <li><Link href="/tools/xamlList">XAML List</Link></li>
                    </ul>
                </li>
                <li><Link href="/impressum">Impressum</Link></li>
                <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
        </div>
    );
};

export default Sitemap;