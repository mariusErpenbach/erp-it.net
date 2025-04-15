import React from "react";
import csharpLibs from './csharpLibs.json';
  export default function CSharpLibs() {
    return (
      <div className="csharp-libs">
        <h2>🐍 Csharp Standardbibliothek (integrierte Libraries)</h2>
        {csharpLibs.map((group, index) => (
          <div key={index} className="category-group">
            <h3>{group.category}</h3>
            <table>
              <thead>
                <tr>
                  <th>Library</th>
                  <th>Beschreibung</th>
                  <th>Beispiele</th>
                </tr>
              </thead>
              <tbody>
                {group.entries.map((entry, i) => (
                  <tr key={i}>
                    <td className="lib-name">{entry.lib}</td>
                    <td>{entry.desc}</td>
                    <td className="examples">
                      {entry.methods.map((m, idx) => (
                        <div key={idx}>{m}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }