import React from 'react';
import Sitemap from '../ui/Sitemap';

export const metadata = {
    title: "Sitemap - Erp-IT",
    description: "Erkunden Sie die Sitemap von Erp-IT, um alle verfügbaren Seiten und Inhalte zu entdecken.",
    keywords: ["Sitemap", "Seitenübersicht", "Erp-IT"],
};

const SitemapPage: React.FC = () => {
    return (
        <>
            <div>
                <Sitemap />
            </div>
        </>
    );
};

export default SitemapPage;