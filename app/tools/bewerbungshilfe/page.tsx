"use client";
import React, { useState } from 'react';
import ChangeFormular from '@/app/ui/tools/bewerbungshilfe/ChangeFormular';
import { checkBewerbungshelferPasswort } from '@/app/actions/bewerbungshelper';


const BewerbungshilfePage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError("");
        setLoading(true);
        const ok = await checkBewerbungshelferPasswort(passwordInput);
        setLoading(false);
        if (ok) {
            setIsAuthenticated(true);
        } else {
            setPasswordError("Falsches Passwort.");
        }
    };

    if (!isAuthenticated) {
        return (
            <form id="bewerbungslogin"onSubmit={handlePasswordSubmit} style={{ maxWidth: 400, margin: "2em auto" }}>
                <label>
                    Passwort:&nbsp; &nbsp;
                    <input
                        type="password"
                        value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                        autoFocus
                    />
                </label>
                <button type="submit" disabled={loading}> Bestätigen</button>
                {passwordError && <div style={{ color: "crimson", marginTop: 12 }}>{passwordError}</div>}
            </form>
        );
    }

    return (
        <div id="bewerbungshilfe-page">
              <div id="bewerbungshilfe-overview">
            <h1>Bewerbungshilfe</h1>
            <p>Durch dieses Formular erhalten sie eine aktualisierte Version meiner Bewerbungsmappe, mit den von ihnen angegeben Daten.</p>
            <p>          Bitte füllen sie die Felder aus und klicken sie auf "PDF herunterladen".
            </p>
            <p>            Der Download Pop-up erscheint automatisch,wenn die Datei bereit ist. <br/>(ca 10 sekunden)
            </p>
            <p>Wenn es fehlschlägt ruhig nochmal versuchen.</p>
         
            </div>
            <ChangeFormular></ChangeFormular>
      
        </div>
    );
};

export default BewerbungshilfePage;