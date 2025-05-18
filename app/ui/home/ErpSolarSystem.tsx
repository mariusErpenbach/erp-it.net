"use client";
import React, { useRef, useState } from 'react';
import '../../styles/_ErpSolarSystem.scss';

const PLANETS = [
  { name: 'Finanzen', color: '#7ec7ff' },
  { name: 'Personal', color: '#ffb347' },
  { name: 'Logistik', color: '#baffc9' },
  { name: 'Produktion', color: '#ffd6e0' },
  { name: 'CRM', color: '#f7b7a3' },
  { name: 'DMS', color: '#e0c3fc' },
  { name: 'Controlling', color: '#f9f871' },
  { name: 'Einkauf', color: '#b2a4ff' },
  { name: 'Vertrieb', color: '#ffb4b4' },
  { name: 'Projekte', color: '#bafff0' },
  { name: 'Service', color: '#ffe29a' },
];

const DEFAULT_COLORS = [
  '#7ec7ff', '#ffb347', '#baffc9', '#ffd6e0', '#f7b7a3', '#e0c3fc', '#f9f871', '#b2a4ff', '#ffb4b4', '#bafff0', '#ffe29a', '#caff70', '#ffb3ec', '#b3fff6', '#f7d6b7'
];

// Neues Datenmodell: Jeder Planet hat eine Position (null = noch nicht platziert)
type Planet = {
  name: string;
  color: string;
  position: { row: number; col: number } | null;
};

const ErpSolarSystem: React.FC = () => {
  // Zentrales Datenmodell: Jeder Planet hat eine Position (null = in Box, {row, col} = im Grid)
  const [allPlanets, setAllPlanets] = useState(
    PLANETS.map(p => ({ ...p, position: null as null | { row: number, col: number } }))
  );
  const [newPlanetName, setNewPlanetName] = useState("");
  const [newPlanetColor, setNewPlanetColor] = useState(DEFAULT_COLORS[Math.floor(Math.random()*DEFAULT_COLORS.length)]);
  const [draggedPlanet, setDraggedPlanet] = useState<string | null>(null);
  const [customCursor, setCustomCursor] = useState<string | null>(null);
  const solarRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Grid-Konstanten
  const GRID_COLS = 32;
  const GRID_ROWS = 18; // vorher 14, jetzt 18 für mehr Kästchen
  // SVG-Größe und quadratische Zellen
  const SVG_WIDTH = 1000;
  const SVG_HEIGHT = Math.round((SVG_WIDTH / GRID_COLS) * GRID_ROWS);
  const CELL_SIZE = SVG_WIDTH / GRID_COLS;
  const SUN_RADIUS = 28; //
  const SUN_COL = Math.floor(GRID_COLS / 2);
  const SUN_ROW = Math.floor(GRID_ROWS / 2) - 2; // vorher -4, jetzt -2 für mittige Sonne

  // Für Hover-Effekt auf Grid-Zelle
  const [hoverCell, setHoverCell] = useState<{row: number, col: number} | null>(null);


  // Hilfsfunktion: SVG-Data-URL für einen Planeten als Cursor
  function getPlanetCursorDataUrl(planet: {name: string, color: string}) {
    const svgCursor = `
      <svg xmlns='http://www.w3.org/2000/svg' width='${PLANET_RADIUS*2+8}' height='${PLANET_RADIUS*2+8}' style='background:none;'>
        <filter id='glow' x='-40%' y='-40%' width='180%' height='180%'>
          <feGaussianBlur stdDeviation='7' result='glow'/>
          <feMerge>
            <feMergeNode in='glow'/>
            <feMergeNode in='SourceGraphic'/>
          </feMerge>
        </filter>
        <circle cx='${PLANET_RADIUS+4}' cy='${PLANET_RADIUS+4}' r='${PLANET_RADIUS}' fill='${planet.color}' stroke='%23232b3e' stroke-width='2' filter='url(%23glow)'/>
        <text x='${PLANET_RADIUS+4}' y='${PLANET_RADIUS+4}' text-anchor='middle' dominant-baseline='middle' font-size='${PLANET_LABEL_FONT_SIZE}' font-family="Inter,Roboto,'Segoe UI',Arial,sans-serif" font-weight='500' fill='%23232b3e'>${planet.name}</text>
      </svg>
    `;
    return `url('data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgCursor)))}') ${PLANET_RADIUS+4} ${PLANET_RADIUS+4}, pointer`;
  }


  // Handler für Drop auf Grid
  function handleGridDrop(e: React.DragEvent, row: number, col: number) {
    e.preventDefault();
    let name = e.dataTransfer.getData('application/erp-planet');
    if (!name) name = e.dataTransfer.getData('text/plain');
    const idx = allPlanets.findIndex(p => p.name === name);
    if (idx === -1) return;
    // Prüfen ob schon platziert
    if (allPlanets[idx].position !== null) return;
    // Neue Position setzen
    const updated = [...allPlanets];
    updated[idx] = { ...updated[idx], position: { row, col } };
    setAllPlanets(updated);
    setDraggedPlanet(null);
    setHoverCell(null);
  }

  // Handler für Hover-Effekt
  function handleGridDragOver(e: React.DragEvent, row: number, col: number) {
    e.preventDefault();
    setHoverCell({ row, col });
  }
  function handleGridDragLeave() {
    setHoverCell(null);
  }

  // Die Planeten in der rechten Box haben minHeight: 2.2em und fontSize: 0.95em
  // Wir nehmen für SVG die gleiche optische Größe an:
  // Radius und Font-Size aus CSS-Variablen lesen, Fallback auf Default
  function getCssVarPx(varName: string, fallback: number) {
    if (typeof window === 'undefined') return fallback;
    const el = document.getElementById('ErpSolarSystem');
    if (!el) return fallback;
    const val = getComputedStyle(el).getPropertyValue(varName);
    return val ? parseFloat(val) : fallback;
  }
  const PLANET_RADIUS = (typeof window !== 'undefined') ? getCssVarPx('--planet-radius', 24) : 24;
  const PLANET_LABEL_FONT_SIZE = (typeof window !== 'undefined') ? getCssVarPx('--planet-label-font-size', 7) : 7;

  // State für Hover-Effekt auf Planeten
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  // State für verschiebbaren Planeten (Name des Planeten, der gerade verschoben wird)
  const [movingPlanet, setMovingPlanet] = useState<string | null>(null);
  // State für Planeten, der aus der rechten Box gezogen wird
  const [placingPlanet, setPlacingPlanet] = useState<string | null>(null);
  // State für Hover-Effekt auf rechte Box beim Platzieren
  const [isControlsHovered, setIsControlsHovered] = useState(false);
  // State für Grid-Linien anzeigen/ausblenden
  const [showGridLines, setShowGridLines] = useState(true);

  // Anzeige: Planeten in der Box (position === null)
  const planetsInBox = allPlanets.filter(p => p.position === null);
  // Anzeige: Planeten im Grid (position !== null)
  const planetsInGrid = allPlanets.filter(p => p.position !== null);

  // Helper: Berechne Grid-Position aus Mauskoordinaten (ohne SVG-Referenz, direkt aus Event)
  function getGridCellFromMouseEvent(e: React.MouseEvent | MouseEvent) {
    const svg = svgRef.current;
    if (!svg) return null;
    // Use SVGSVGElement.createSVGPoint if available
    let point: DOMPoint | null = null;
    if (typeof (svg as SVGSVGElement).createSVGPoint === 'function') {
      point = (svg as SVGSVGElement).createSVGPoint();
    }
    if (!point) {
      // Fallback: boundingClientRect
      const rect = svg.getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left;
      const y = (e as MouseEvent).clientY - rect.top;
      const col = Math.floor(x / CELL_SIZE);
      const row = Math.floor(y / CELL_SIZE);
      if (col >= 0 && col < GRID_COLS && row >= 0 && row < GRID_ROWS) {
        return { row, col, fieldNumber: row * GRID_COLS + col + 1 };
      }
      return null;
    }
    point.x = (e as MouseEvent).clientX;
    point.y = (e as MouseEvent).clientY;
    const ctm = (svg as SVGSVGElement).getScreenCTM?.();
    if (!ctm || typeof ctm.inverse !== 'function') return null;
    const svgP = point.matrixTransform(ctm.inverse());
    const col = Math.floor(svgP.x / CELL_SIZE);
    const row = Math.floor(svgP.y / CELL_SIZE);
    if (col >= 0 && col < GRID_COLS && row >= 0 && row < GRID_ROWS) {
      return { row, col, fieldNumber: row * GRID_COLS + col + 1 };
    }
    return null;
  }

  // MouseDown/Up für Planeten in der rechten Box
  function handleBoxPlanetMouseDown(planet: Planet) {
    // Verhindere, dass Selektion/Markierung bestehen bleibt
    if (window.getSelection) {
      const sel = window.getSelection();
      if (sel) sel.removeAllRanges();
    } else if ((document as unknown as { selection?: { empty: () => void } }).selection) {
      (document as unknown as { selection: { empty: () => void } }).selection.empty();
    }
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setPlacingPlanet(planet.name);
    const cursorUrl = getPlanetCursorDataUrl(planet);
    setCustomCursor(cursorUrl);
    document.body.style.cursor = cursorUrl;

    // Setze auch den Cursor explizit auf das SVG-Grid
    if (svgRef.current) {
      (svgRef.current.style as React.CSSProperties).cursor = cursorUrl;
    }

    // MouseUp global registrieren
    const handleMouseUp = (e: MouseEvent) => {
      setCustomCursor(null);
      document.body.style.cursor = '';
      if (svgRef.current) {
        (svgRef.current.style as React.CSSProperties).cursor = '';
      }
      setPlacingPlanet(null);
      setIsControlsHovered(false); // Unfocus/Highlight-Reset
      // Feld berechnen und Planet platzieren
      const cell = getGridCellFromMouseEvent(e);
      if (cell) {
        // Prüfe, ob das Feld frei ist
        const occupied = allPlanets.some(p => p.position && p.position.row === cell.row && p.position.col === cell.col);
        if (!occupied) {
          setAllPlanets(pls => pls.map(p =>
            p.name === planet.name ? { ...p, position: { row: cell.row, col: cell.col } } : p
          ));
        }
      }
      window.removeEventListener('mouseup', handleMouseUp);
    };
    window.addEventListener('mouseup', handleMouseUp);
  }

  // MouseDown/Up für Planeten im Grid (entfernen durch MouseUp in der rechten Box)
  function handleGridPlanetMouseDown(planet: Planet) {
    // Verhindere, dass Selektion/Markierung bestehen bleibt
    if (window.getSelection) {
      const sel = window.getSelection();
      if (sel) sel.removeAllRanges();
    } else if ((document as unknown as { selection?: { empty: () => void } }).selection) {
      (document as unknown as { selection: { empty: () => void } }).selection.empty();
    }
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setMovingPlanet(planet.name);
    const cursorUrl = getPlanetCursorDataUrl(planet);
    setCustomCursor(cursorUrl);
    document.body.style.cursor = cursorUrl;
    // MouseUp global registrieren
    const handleMouseUp = (e: MouseEvent) => {
      setCustomCursor(null);
      document.body.style.cursor = '';
      setMovingPlanet(null);
      setIsControlsHovered(false); // Unfocus/Highlight-Reset
      // Prüfen, ob MouseUp in der rechten Box war
      const controls = document.querySelector('.solar-system-controls');
      if (controls && e.target instanceof Node && controls.contains(e.target)) {
        // Planet aus dem Grid entfernen (zurück in die Box)
        setAllPlanets(pls => pls.map(p =>
          p.name === planet.name ? { ...p, position: null } : p
        ));
      } else {
        // MouseUp im Grid: Position ggf. ändern (wird bereits im SVG onMouseUp behandelt)
      }
      window.removeEventListener('mouseup', handleMouseUp);
    };
    window.addEventListener('mouseup', handleMouseUp);
  }


  return (
    <div id="ErpSolarSystem" ref={solarRef} >
      {/* Control-Menü über dem Grid */}
      <div className="solar-system-controls-bar">
        <h4 className="solar-system-instruction">
Ziehen Sie die Planeten in das Solar-System, um Ihre ERP-Module anzuzeigen.
        </h4>
        <button
          className="solar-system-toggle-grid-btn"
          onClick={() => setShowGridLines(v => !v)}
        >
          {showGridLines ? 'Linien ausblenden' : 'Linien einblenden'}
        </button>
        <button
          className="solar-system-reset-btn"
          onClick={() => {
            setAllPlanets(pls => pls.map(p => ({ ...p, position: null })));
          }}
        >
          Zurücksetzen
        </button>
        <button
          className="solar-system-export-btn"
          disabled
        >
          Export (bald)
        </button>
      </div>
        <div className="solar-system-wrapper">
          {/* Linker Bereich: Solar-System (SVG, Drop-Target) */}
          <div className="solar-system-dropzone">
            <svg
              ref={svgRef}
              className="solar-system-svg"
              viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
              preserveAspectRatio="xMidYMid meet"
              onMouseUp={e => {
                const cell = getGridCellFromMouseEvent(e);
                if (cell && movingPlanet) {
                  // Prüfe, ob das Feld frei ist (kein anderer Planet dort)
                  const occupied = allPlanets.some(p => p.position && p.position.row === cell.row && p.position.col === cell.col);
                  if (!occupied) {
                    setAllPlanets(pls => pls.map(p =>
                      p.name === movingPlanet ? { ...p, position: { row: cell.row, col: cell.col } } : p
                    ));
                  }
                  setMovingPlanet(null);
                  setCustomCursor(null);
                  document.body.style.cursor = '';
                } else if (!cell) {
                  setMovingPlanet(null);
                  setCustomCursor(null);
                  document.body.style.cursor = '';
                }
              }}
            >

              {/* Grid */}
              {[...Array(GRID_ROWS)].map((_, row) =>
                [...Array(GRID_COLS)].map((_, col) => (
                  <g key={`cell-${row}-${col}`}>
                    <rect
                      x={col * CELL_SIZE}
                      y={row * CELL_SIZE}
                      width={CELL_SIZE}
                      height={CELL_SIZE}
                      fill={((placingPlanet || movingPlanet) && hoverCell && hoverCell.row === row && hoverCell.col === col) ? '#7ec7ff33' : 'transparent'}
                      stroke={showGridLines ? '#7ec7ff' : 'transparent'}
                      strokeWidth={0.7}
                      onDragOver={e => handleGridDragOver(e, row, col)}
                      onDragLeave={handleGridDragLeave}
                      onDrop={e => handleGridDrop(e, row, col)}
                      onMouseEnter={() => {
                        if (placingPlanet || movingPlanet) setHoverCell({ row, col });
                      }}
                      onMouseLeave={handleGridDragLeave}
                      style={{ pointerEvents: 'all', transition: 'fill 0.1s, stroke 0.2s' }}
                    />
                    {/* <text
                    x={col * CELL_SIZE + CELL_SIZE / 2}
                    y={row * CELL_SIZE + CELL_SIZE / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="0.7em"
                    fill="#7ec7ff"
                    opacity="0.7"
                    pointerEvents="none"
                    style={{ userSelect: 'none' }}
                  >
                    {row * GRID_COLS + col + 1}
                  </text> */}
                  </g>
                ))
              )}
              {/* Sonne in der Mitte */}
              <circle
                cx={SUN_COL * CELL_SIZE + CELL_SIZE / 2}
                cy={SUN_ROW * CELL_SIZE + CELL_SIZE / 2}
                r={SUN_RADIUS}
                fill="rgba(211, 250, 13, 0.958)"
                filter="url(#sun-glow)"
              />
              <text
                x={SUN_COL * CELL_SIZE + CELL_SIZE / 2}
                y={SUN_ROW * CELL_SIZE + CELL_SIZE / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="svg-sun-label"
              >
                ERP
              </text>
              {/* Verbindungslinien von jedem platzierten Planeten zur Sonne */}
              {planetsInGrid.map((planet) => {
                if (!planet.position) return null;
                const planetX = planet.position.col * CELL_SIZE + CELL_SIZE / 2;
                const planetY = planet.position.row * CELL_SIZE + CELL_SIZE / 2;
                const sunX = SUN_COL * CELL_SIZE + CELL_SIZE / 2;
                const sunY = SUN_ROW * CELL_SIZE + CELL_SIZE / 2;
                return (
                  <line
                    key={planet.name + '-line'}
                    x1={sunX}
                    y1={sunY}
                    x2={planetX}
                    y2={planetY}
                    stroke="#7ec7ff"
                    strokeWidth={2.2}
                    opacity={0.45}
                    strokeDasharray="6 6"
                    style={{ pointerEvents: 'none' }}
                  />
                );
              })}
              {/* Platzierte Planeten (NACH den Linien, damit sie davor liegen) */}
              {planetsInGrid.map((planet) => {
                // Verstecke den Planeten, wenn er gerade verschoben wird (movingPlanet aktiv)
                if (movingPlanet === planet.name) return null;
                return (
                  <g key={planet.name}
                    style={{ cursor: customCursor ? customCursor : (draggedPlanet ? 'none' : 'grab') }}
                    onMouseEnter={() => setHoveredPlanet(planet.name)}
                    onMouseLeave={() => setHoveredPlanet(null)}
                    onMouseDown={() => handleGridPlanetMouseDown(planet)}
                  >
                    {hoveredPlanet === planet.name && (
                      <circle
                        cx={(planet.position!.col * CELL_SIZE) + CELL_SIZE / 2}
                        cy={(planet.position!.row * CELL_SIZE) + CELL_SIZE / 2}
                        r={PLANET_RADIUS - 2}
                        fill={planet.color}
                        filter="url(#planet-glow)"
                      />
                    )}
                    <circle
                      cx={(planet.position!.col * CELL_SIZE) + CELL_SIZE / 2}
                      cy={(planet.position!.row * CELL_SIZE) + CELL_SIZE / 2}
                      r={PLANET_RADIUS}
                      fill={planet.color}
                      stroke="#232b3e"
                      strokeWidth="2"
                    />
                    <text
                      x={(planet.position!.col * CELL_SIZE) + CELL_SIZE / 2}
                      y={(planet.position!.row * CELL_SIZE) + CELL_SIZE / 2}
                      textAnchor="middle"
                      className="svg-planet-label"
                    >
                      {planet.name}
                    </text>
                  </g>
                );
              })}
            </svg>

          </div>
          {/* Rechter Bereich: Planeten-Liste und Steuerung */}
          <div
            className="solar-system-controls custom-scrollbar"
            id="rightSideBox"
            onMouseEnter={() => {
              if (placingPlanet || movingPlanet) setIsControlsHovered(true);
            }}
            onMouseLeave={() => setIsControlsHovered(false)}
          >
            {/* Planeten-Liste */}
            <div className="planet-list" style={{ cursor: placingPlanet && customCursor ? customCursor : undefined }}>
              {planetsInBox.map(planet => (
                <div
                  key={planet.name}
                  className="planet-item"
                  style={{ cursor: placingPlanet && customCursor ? customCursor : customCursor ? customCursor : 'grab' }}
                  onMouseDown={() => handleBoxPlanetMouseDown(planet)}
                  onMouseEnter={placingPlanet && customCursor ? () => { document.body.style.cursor = customCursor; } : undefined}
                  onMouseLeave={placingPlanet && customCursor ? () => { document.body.style.cursor = ''; } : undefined}
                >
                  <div className="planet-color" style={{ background: planet.color }}></div>
                  <div className="planet-name">{planet.name}</div>
                </div>
              ))}
            </div>
            {/* Neue Planet hinzufügen (Desktop) */}
            <div className="planet-create-form">
              <input
                type="text"
                value={newPlanetName}
                onChange={e => setNewPlanetName(e.target.value)}
                placeholder="Name des Moduls"
                className="planet-input"
              />
              <input
                type="color"
                value={newPlanetColor}
                onChange={e => setNewPlanetColor(e.target.value)}
                className="planet-color-picker"
              />
              <button
                className="planet-add-btn"
                onClick={() => {
                  if (!newPlanetName.trim()) return;
                  const name = newPlanetName.trim();
                  if (allPlanets.some(p => p.name.toLowerCase() === name.toLowerCase())) {
                    alert('Modul Bereits vorhanden');
                    return;
                  }
                  const color = newPlanetColor;
                  setAllPlanets(pls => [...pls, { name, color, position: null }]);
                  setNewPlanetName("");
                  setNewPlanetColor(DEFAULT_COLORS[Math.floor(Math.random()*DEFAULT_COLORS.length)]);
                }}
              >
                Hinzufügen
              </button>
            </div>
           
         
          </div>
        </div>
      </div>
  
  );
};

export default ErpSolarSystem;
