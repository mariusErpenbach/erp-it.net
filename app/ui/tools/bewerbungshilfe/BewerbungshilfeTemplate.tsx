import React from 'react';

const BewerbungshilfeTemplate = ({ formData }: { formData: Record<string, string> }) => {
    return (
        <div>
            <div id="briefkopf-meine-adresse">
                <p>
                    {formData.name} <br />
                    {formData.straße} <br />
                    {formData.plzOrt} <br />
                    Tel: {formData.telefon} <br />
                    Email: {formData.email}
                </p>
            </div>
            <div id="briefkopf-firma">
                <p>{formData.firma}<br />
                    {formData.ansprechpartner || 'Damen und Herren'} <br />
                    {formData.firmenAdresse}</p>
            </div>
            <div id="Briefdatum">{formData.datum}</div>
            <strong>{formData.titel}</strong>
            <p>Sehr geehrte/r {formData.ansprechpartner || 'Damen und Herren'},</p>
            <p>{formData.anschreiben}</p>
            <p>Mit freundlichen Grüßen<br />
                {formData.name}<br /></p>
        </div>
    );
};

export default BewerbungshilfeTemplate;