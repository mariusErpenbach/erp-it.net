"use client"
import React from 'react';
import { useLanguage } from "./LanguageContext";

const Nutzungsbedingungen: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div id="nutzungsbedingungen">
            <h1>{t.termsOfUse.title}</h1>
            <p>{t.termsOfUse.welcome}</p>
            <h2>{t.termsOfUse.acceptance}</h2>
            <p>{t.termsOfUse.acceptanceText}</p>
            <h2>{t.termsOfUse.changes}</h2>
            <p>{t.termsOfUse.changesText}</p>
            <h2>{t.termsOfUse.usage}</h2>
            <p>{t.termsOfUse.usageText}</p>
            <h2>{t.termsOfUse.liability}</h2>
            <p>{t.termsOfUse.liabilityText}</p>
            <h2>{t.termsOfUse.contact}</h2>
            <p>{t.termsOfUse.contactText}</p>
        </div>
    );
};

export default Nutzungsbedingungen;