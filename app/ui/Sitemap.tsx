import React from 'react';

const Sitemap: React.FC = () => {
    return (
        <div id="sitemap">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/tools">Tools</a>
                    <ul>
                        <li><a href="/tools/csharpLibs">C# Libraries</a></li>
                        <li><a href="/tools/pyLibs">Python Libraries</a></li>
                        <li><a href="/tools/tailClasses">Tailwind Classes</a></li>
                        <li><a href="/tools/xamlList">XAML List</a></li>
                    </ul>
                </li>
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
            </ul>
        </div>
    );
};

export default Sitemap;