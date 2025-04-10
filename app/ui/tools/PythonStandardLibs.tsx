import React from "react";
const standardLibs = [
    {
      category: "🔢 Zahlen & Mathe",
      entries: [
        {
          lib: "math",
          desc: "Mathefunktionen (Wurzeln, Trigonometrie, Pi usw.)",
          methods: [
            "sqrt() – Quadratwurzel berechnen",
            "sin() – Sinus berechnen",
            "cos() – Kosinus berechnen",
            "pi – Mathematische Konstante π",
            "log() – Logarithmus berechnen",
          ],
        },
        {
          lib: "random",
          desc: "Zufallszahlen, Mischen von Listen, Würfeln",
          methods: [
            "random() – Zufallszahl zwischen 0 und 1",
            "randint() – Zufällige Ganzzahl in Range",
            "shuffle() – Liste zufällig durchmischen",
            "choice() – Zufälliges Element wählen",
          ],
        },
        {
          lib: "decimal",
          desc: "Rechnen mit Dezimalzahlen, z. B. für Geld",
          methods: [
            "Decimal() – Erstelle Dezimalobjekt",
            "getcontext() – Aktuellen Kontext abrufen",
            "quantize() – Rundung/Präzision setzen",
          ],
        },
        {
          lib: "fractions",
          desc: "Bruchrechnung (z. B. 3/4 + 2/3)",
          methods: [
            "Fraction() – Bruch erstellen",
            "limit_denominator() – Nenner begrenzen",
          ],
        },
        {
          lib: "statistics",
          desc: "Mittelwert, Median, Varianz usw.",
          methods: [
            "mean() – Durchschnitt berechnen",
            "median() – Medianwert berechnen",
            "stdev() – Standardabweichung",
            "variance() – Varianz berechnen",
          ],
        },
      ],
    },
    {
      category: "🕒 Datum & Zeit",
      entries: [
        {
          lib: "datetime",
          desc: "Arbeiten mit Datum und Uhrzeit",
          methods: [
            "datetime.now() – Aktuelles Datum/Zeit",
            "timedelta() – Zeitspannen berechnen",
            "strftime() – Datum formatieren",
          ],
        },
        {
          lib: "time",
          desc: "Zeit messen, Sleep-Funktion usw.",
          methods: [
            "sleep() – Warten für Sekunden",
            "time() – Aktuelle Zeit (Sekunden seit Epoch)",
            "ctime() – Zeit in lesbarem Format",
          ],
        },
        {
          lib: "calendar",
          desc: "Kalenderfunktionen",
          methods: [
            "month() – Monatskalender anzeigen",
            "calendar() – Jahreskalender generieren",
            "isleap() – Schaltjahr prüfen",
          ],
        },
      ],
    },
    {
      category: "📁 Dateien & Ordner",
      entries: [
        {
          lib: "os",
          desc: "Betriebssystemfunktionen, Pfade, Umgebungsvariablen",
          methods: [
            "getcwd() – Aktuelles Verzeichnis",
            "listdir() – Dateien im Verzeichnis",
            "environ – Umgebungsvariablen",
            "mkdir() – Neues Verzeichnis erstellen",
          ],
        },
        {
          lib: "sys",
          desc: "Infos über das System, Zugriff auf CLI-Argumente",
          methods: [
            "argv – Kommandozeilenargumente",
            "exit() – Skript beenden",
            "platform – Plattform-Info",
          ],
        },
        {
          lib: "pathlib",
          desc: "Moderner Umgang mit Dateipfaden",
          methods: [
            "Path() – Pfadobjekt erstellen",
            "exists() – Existenz prüfen",
            "is_file() – Ist Datei?",
            "glob() – Dateien mit Muster finden",
          ],
        },
        {
          lib: "shutil",
          desc: "Dateien/Ordner kopieren, verschieben, löschen",
          methods: [
            "copy() – Datei kopieren",
            "move() – Datei verschieben",
            "rmtree() – Verzeichnis löschen",
          ],
        },
        {
          lib: "glob",
          desc: "Dateien per Wildcard suchen (z. B. *.txt)",
          methods: [
            "glob() – Liste aller Treffer",
            "iglob() – Iterator über Treffer",
          ],
        },
      ],
    },
    {
      category: "📦 Daten & Formate",
      entries: [
        {
          lib: "json",
          desc: "JSON laden/speichern",
          methods: [
            "load() – JSON aus Datei",
            "dump() – JSON in Datei",
            "loads() – JSON aus String",
            "dumps() – JSON als String",
          ],
        },
        {
          lib: "csv",
          desc: "CSV-Dateien lesen/schreiben",
          methods: [
            "reader() – CSV lesen",
            "writer() – CSV schreiben",
            "DictReader() – CSV als Dictionary lesen",
          ],
        },
        {
          lib: "pickle",
          desc: "Python-Objekte serialisieren",
          methods: [
            "dump() – Objekt in Datei speichern",
            "load() – Objekt aus Datei laden",
            "dumps() – Objekt als Bytes speichern",
          ],
        },
        {
          lib: "sqlite3",
          desc: "Eingebaute SQL-Datenbank",
          methods: [
            "connect() – Verbindung zur DB",
            "cursor() – Cursor erzeugen",
            "execute() – SQL ausführen",
          ],
        },
        {
          lib: "configparser",
          desc: ".ini-Dateien lesen/schreiben",
          methods: [
            "read() – Konfig lesen",
            "get() – Wert abfragen",
            "sections() – Alle Bereiche holen",
            "set() – Wert setzen",
          ],
        },
      ],
    },
    {
      category: "📬 Netzwerk & Web",
      entries: [
        {
          lib: "urllib",
          desc: "Webseiten aufrufen, Daten aus dem Netz ziehen",
          methods: [
            "request.urlopen() – URL öffnen",
            "parse.quote() – URL-Encoding",
            "parse.urlencode() – Parameter kodieren",
          ],
        },
        {
          lib: "http.server",
          desc: "Einfacher Webserver (lokal)",
          methods: [
            "HTTPServer() – Server starten",
            "BaseHTTPRequestHandler – Request-Handler definieren",
          ],
        },
        {
          lib: "socket",
          desc: "Low-Level Netzwerkkommunikation",
          methods: [
            "socket() – Socket erstellen",
            "bind() – Adresse zuweisen",
            "listen() – Auf Verbindungen warten",
            "recv() – Daten empfangen",
          ],
        },
      ],
    },
    {
      category: "📈 Debuggen & Logging",
      entries: [
        {
          lib: "logging",
          desc: "Logs schreiben (anstatt überall print())",
          methods: [
            "debug() – Debug-Log schreiben",
            "info() – Info-Log schreiben",
            "warning() – Warnung loggen",
            "basicConfig() – Logging konfigurieren",
          ],
        },
        {
          lib: "traceback",
          desc: "Stacktraces anzeigen",
          methods: [
            "print_exc() – Ausnahme anzeigen",
            "format_exc() – Ausnahme als String",
          ],
        },
        {
          lib: "pdb",
          desc: "Python-Debugger (Breakpoints etc.)",
          methods: [
            "set_trace() – Breakpoint setzen",
            "run() – Code mit Debugger ausführen",
          ],
        },
      ],
    },
    {
      category: "🧪 Tests",
      entries: [
        {
          lib: "unittest",
          desc: "Test-Framework wie in Java/JUnit",
          methods: [
            "TestCase – Testklasse definieren",
            "assertEqual() – Werte vergleichen",
            "setUp() – Vorbereitungen pro Test",
            "run() – Tests ausführen",
          ],
        },
        {
          lib: "doctest",
          desc: "Tests direkt in Docstrings",
          methods: [
            "testmod() – Tests im Modul ausführen",
            "run_docstring_examples() – Docstring-Beispiele prüfen",
          ],
        },
      ],
    },
    {
      category: "🧰 Sonstiges Nützliches",
      entries: [
        {
          lib: "re",
          desc: "Reguläre Ausdrücke",
          methods: [
            "search() – Nach Muster suchen",
            "findall() – Alle Treffer finden",
            "sub() – Ersetzen",
            "match() – Start des Strings prüfen",
          ],
        },
        {
          lib: "itertools",
          desc: "Fortgeschrittene Iteratoren & Kombis",
          methods: [
            "product() – Kartesisches Produkt",
            "permutations() – Alle Permutationen",
            "cycle() – Endlos wiederholen",
            "chain() – Iteratoren verbinden",
          ],
        },
        {
          lib: "functools",
          desc: "Funktionen manipulieren (z. B. lru_cache)",
          methods: [
            "lru_cache() – Caching aktivieren",
            "partial() – Argumente vorausfüllen",
            "reduce() – Reduktion über Sequenz",
          ],
        },
        {
          lib: "collections",
          desc: "Spezial-Datentypen (z. B. Counter, deque)",
          methods: [
            "Counter() – Zähler für Elemente",
            "deque() – Doppelt verlinkte Liste",
            "defaultdict() – Dict mit Defaultwert",
          ],
        },
        {
          lib: "enum",
          desc: "Aufzählungstypen",
          methods: [
            "Enum() – Enum-Klasse erstellen",
            "auto() – Automatische Werte",
          ],
        },
        {
          lib: "typing",
          desc: "Typanmerkungen (z. B. List[str], Optional[int])",
          methods: [
            "List – Liste mit Typ",
            "Dict – Dictionary mit Typ",
            "Optional – Optionaler Typ",
            "Union – Mehrere Typen erlaubt",
          ],
        },
      ],
    },
  ];
  
  export default function PythonStandardLibs() {
    return (
      <div className="python-libs">
        <h2>🐍 Python Standardbibliothek (integrierte Libraries)</h2>
        {standardLibs.map((group, index) => (
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