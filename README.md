# 💰 Wer wird Millionär? - Battle Royale Edition

Ein Multiplayer-Quiz-Spiel im "Battle Royale" Stil, bei dem 10 Spieler gegeneinander antreten und der langsamste Spieler jede Runde eliminiert wird.

## 📋 Projektstruktur

```
wwm-battle-royale/
├── index.html          # Lobby & Spieler-Beitritt (NEU!)
├── game.html           # Hauptspiel
├── js/
│   ├── game.js        # Spiellogik (Gamemaster-System)
│   └── questions.js   # Fragendatenbank
└── README.md          # Diese Datei
```

## 🚀 Setup in VS Code

### 1. Projekt erstellen

```bash
# Ordner erstellen
mkdir wwm-battle-royale
cd wwm-battle-royale

# Git initialisieren (optional)
git init
```

### 2. Dateien anlegen

Erstelle die folgenden Dateien in VS Code:

#### **`index.html`** - Lobby & Spieler-Beitritt
👉 Verwende die Datei `lobby.html` aus dem Download
- Umbenennen in `index.html`
- Erste Seite die Spieler öffnen
- Host-Erkennung (erster Spieler = Host)
- Live-Spielerliste

#### **`game.html`** - Hauptspiel
👉 Verwende die Datei `game-bw.html` aus dem Download
- Umbenennen in `game.html` (falls nötig)
- Das eigentliche Quiz-Spiel
- Warteraum, Fragen, Eliminierung

#### **`js/game.js`** - Spiellogik
👉 Verwende die Datei `game-gamemaster.js` aus dem Download
- Ordner `js/` erstellen
- Umbenennen in `game.js`
- Gamemaster-System implementiert

#### **`js/questions.js`** - Fragen
👉 Verwende die Datei `questions.js` aus dem Download
- 40 Multiple-Choice Fragen
- Automatisches Shuffle

---

## 🎮 Gamemaster-System

### Wie es funktioniert:

```
┌─────────────────────────────────────────┐
│  ERSTER SPIELER = GAMEMASTER (HOST)    │
├─────────────────────────────────────────┤
│                                         │
│  ✅ Verteilt Fragen an alle            │
│  ✅ Sammelt Antworten                  │
│  ✅ Eliminiert langsamsten Spieler     │
│  ✅ Startet nächste Runde              │
│                                         │
└─────────────────────────────────────────┘
         ↓              ↓              ↓
    Spieler 1      Spieler 2      Spieler 3
     (wartet)      (wartet)       (wartet)
```

### Ablauf:

1. **Spieler 1 öffnet Link** → Wird automatisch zum Host 👑
2. **Weitere Spieler joinen** → Sehen Host in der Lobby
3. **Host wählt Spieleranzahl** (2-10)
4. **Host wartet bis alle da sind** → Button wird aktiv
5. **Host klickt "Spiel starten"** → Alle werden weitergeleitet
6. **Host verteilt Fragen** → Alle antworten
7. **Host eliminiert Langsamsten** → Nächste Runde

---

## 🌐 GitHub Pages Deployment

### Option A: Über GitHub Web Interface

1. **Repository erstellen:**
   - Gehe zu https://github.com/new
   - Name: `wwm-battle-royale`
   - Public
   - Create repository

2. **Dateien hochladen:**
   - Klicke "uploading an existing file"
   - Ziehe alle Dateien rein:
     - `index.html`
     - `game.html`
     - `js/game.js`
     - `js/questions.js`
   - Commit

3. **GitHub Pages aktivieren:**
   - Settings → Pages
   - Source: `main` branch
   - Save

4. **URL öffnen:**
   ```
   https://DEIN-USERNAME.github.io/wwm-battle-royale/
   ```

### Option B: Via Git CLI

```bash
# Im Projekt-Ordner
git add .
git commit -m "Initial commit - Gamemaster system"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/wwm-battle-royale.git
git push -u origin main

# GitHub Pages aktivieren (siehe Option A Schritt 3)
```

---

## 🧪 Testen

### Lokal testen (mit Live Server):

1. **VS Code Extension installieren:**
   - "Live Server" von Ritwick Dey

2. **Server starten:**
   - Rechtsklick auf `index.html`
   - "Open with Live Server"

3. **Mehrere Tabs öffnen:**
   - Tab 1: `http://localhost:5500/index.html` (wird Host)
   - Tab 2: `http://localhost:5500/index.html` (Spieler)
   - Tab 3: `http://localhost:5500/index.html` (Spieler)

### Online testen:

1. Öffne deine GitHub Pages URL
2. Kopiere den Link
3. Öffne in mehreren Tabs/Geräten
4. Erster = Host, Rest = Spieler

---

## 📱 QR-Code für Events

### QR-Code erstellen:

1. Gehe zu: https://www.qr-code-generator.com/
2. Gib deine URL ein:
   ```
   https://DEIN-USERNAME.github.io/wwm-battle-royale/
   ```
3. Download QR-Code
4. Drucken/Anzeigen bei Event

### Verwendung:

- Alle scannen den gleichen QR-Code
- Erster Scanner = Host
- Rest = Spieler
- Host startet wenn alle da sind

---

## 🎯 Features

### ✅ Gamemaster-System
- Erster Spieler wird automatisch Host
- Host kontrolliert komplettes Spiel
- Keine Desynchronisation mehr

### ✅ Live-Lobby
- Echtzeit Spielerliste
- Alle sehen wer beigetreten ist
- Countdown bis Spielstart

### ✅ Faire Eliminierung
- Host sammelt ALLE Antworten
- Wartet bis ALLE geantwortet haben
- Eliminiert dann den Langsamsten

### ✅ Responsive Design
- Funktioniert auf Desktop & Mobile
- Touch-optimiert
- Elegantes Schwarz-Weiß Design

### ✅ 40 Quiz-Fragen
- Nur Multiple-Choice
- Automatisch gemischt
- Verschiedene Schwierigkeiten

---

## 🔧 Anpassungen

### Spieleranzahl ändern:

In `index.html` (Lobby):
- Standard ist 2-10 wählbar
- Code ist bereits fertig ✅

### Fragen ändern:

In `js/questions.js`:
```javascript
const QUESTIONS_POOL = [
    {
        type: 'multiple',
        question: 'Deine Frage?',
        answers: ['A', 'B', 'C', 'D'],
        correct: 0  // Index der richtigen Antwort (0-3)
    },
    // Mehr Fragen...
];
```

### Design anpassen:

In `game.html` und `index.html`:
- Farben im `<style>` Bereich
- Aktuell: Elegantes Schwarz-Weiß
- Schriftarten: Inter + JetBrains Mono

---

## 🐛 Troubleshooting

### "Alle werden zu Hosts"
❌ **Problem:** Alte Dateien im Browser-Cache
✅ **Lösung:** Hard Refresh (Strg+Shift+R) oder Inkognito-Modus

### "Spieler sehen sich nicht"
❌ **Problem:** WebSocket verbindet nicht
✅ **Lösung:** 
- Console öffnen (F12)
- Prüfe auf Fehler
- WebSocket URL prüfen: `wss://nosch.uber.space/web-rooms/`

### "Spiel startet nicht"
❌ **Problem:** Host klickt zu früh
✅ **Lösung:** Warte bis Spieleranzahl erreicht ist (Button wird dann aktiv)

### "Host disconnected"
❌ **Problem:** Host hat Seite geschlossen
✅ **Lösung:** Spiel neu starten (by design - Host = Spielleiter)

---

## 📊 Broadcast-Nachrichten

### Lobby:
- `player-joined` - Jemand ist beigetreten
- `host-announcement` - Host teilt mit wer er ist
- `host-start-game` - Host startet das Spiel

### Game:
- `host-question` - Host verteilt Frage
- `player-answer` - Spieler sendet Antwort (nur an Host)
- `host-elimination` - Host eliminiert Spieler
- `host-winner` - Host erklärt Gewinner

---

## 🎓 Technologie-Stack

- **Frontend:** Vanilla JavaScript (kein Framework)
- **Styling:** Pure CSS (Glassmorphism-Design)
- **WebSocket:** `wss://nosch.uber.space/web-rooms/`
- **Hosting:** GitHub Pages (kostenlos)

---

## 📝 Changelog

### v2.0 - Gamemaster System (14.01.2026)
- ✅ Separate Lobby implementiert
- ✅ Gamemaster-Architektur (Host kontrolliert alles)
- ✅ Live-Spielerliste in Lobby
- ✅ Faire Eliminierung (Host wartet auf alle)
- ✅ 40 Multiple-Choice Fragen
- ✅ Responsive Design

### v1.0 - Initial Release
- ⚠️ Alte Version (nicht mehr verwenden)

---

## 🙏 Credits

Entwickelt für Events und Partys.
WebSocket-Server: nosch.uber.space

---

## 📧 Support

Bei Problemen:
1. Console öffnen (F12)
2. Fehler kopieren
3. GitHub Issues erstellen

---

**Viel Spaß beim Spielen! 🎮🏆**