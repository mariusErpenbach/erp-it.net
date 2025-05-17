import React from "react";
import cppLibs from '../../ui/tools/cppLibs.json';

type CppLibEntry = {
  lib: string;
  desc: string;
  methods: string[];
};
type CppLibGroup = {
  category: string;
  entries: CppLibEntry[];
};

export default function CppLibs() {
  const groups = cppLibs as CppLibGroup[];
  return (
    <div className="cpp-libs">
      <h2>C++ Standardbibliotheken Übersicht</h2>
      {groups.map((group, index) => (
        <div key={index} className="category-group">
          <h3>{group.category}</h3>
          <table>
            <thead>
              <tr>
                <th>Library</th>
                <th>Beschreibung</th>
                <th>Kern-Funktionen</th>
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
