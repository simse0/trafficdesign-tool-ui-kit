# 🎨 trafficdesign Tool UI Kit

> Enterprise SaaS Design System für Laravel Breeze + Tailwind CSS + Alpine.js  
> Optimiert für hohe Informationsdichte und professionelle Dashboard-Anwendungen

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-38B2AC?logo=tailwind-css)
![Alpine.js](https://img.shields.io/badge/Alpine.js-3.14+-8BC0D0?logo=alpine.js)

---

## 📋 Übersicht

Das **trafficdesign Tool UI Kit** ist ein vollständiges Design System für moderne Enterprise-Dashboards. Es kombiniert eine durchdachte Corporate Identity mit über 50 vorgefertigten CSS-Komponenten und bietet eine konsistente, professionelle Benutzeroberfläche für datenintensive Anwendungen.

### ✨ Highlights

- **🎨 Corporate Identity Integration** - trafficdesign Brand Colors (`#00AFCE`, `#1d1d1d`, `#E5F2F3`)
- **📦 50+ CSS-Komponenten** - Buttons, Cards, Forms, Tables, Badges, Modals, uvm.
- **⚡ Alpine.js Integration** - Interaktive Komponenten ohne Livewire
- **📱 Responsive Design** - Desktop-first mit Mobile-Support
- **♿ Accessibility** - ARIA-Labels, Keyboard-Navigation, Focus-States
- **🚀 Laravel Breeze Ready** - Perfekt für Laravel Blade Stack
- **📚 Umfassende Dokumentation** - `DESIGN-SYSTEM.md` mit allen Details
- **🤖 AI-Ready** - `.cursorrules` für Cursor IDE integriert

---

## 🎯 Für wen ist dieses Kit?

✅ **Perfekt für:**
- Enterprise SaaS Dashboards
- Datenintensive Admin-Panels
- B2B-Anwendungen mit hoher Informationsdichte
- Laravel-Projekte mit Blade + Alpine.js Stack
- Teams, die konsistentes UI-Design brauchen

❌ **Nicht geeignet für:**
- Marketing-Websites (zu kompakt)
- E-Commerce Frontends (andere UX-Patterns)
- Mobile-First Apps (Desktop-optimiert)

---

## 🔄 Alternative: Pure HTML/CSS Variante

Falls du **kein Laravel** und **kein Alpine.js** benötigst, gibt es eine **Pure HTML/CSS Variante** mit dem gleichen Layout und Design:

👉 **[trafficdesign-tool-ui-kit-pure](https://github.com/simse0/trafficdesign-tool-ui-kit-pure)**

Diese Variante bietet:
- ✅ Gleiches Design & Layout
- ✅ Alle CSS-Komponenten
- ✅ Keine JavaScript-Dependencies (außer optional für Charts)
- ✅ Framework-unabhängig
- ✅ Perfekt für statische Websites oder andere Frameworks

---

## 🚀 Quick Start - Installation

### 1. Option: Direkt mit Cursor IDE verwenden (empfohlen ⭐)

#### Schritt 1: Cursor Rules aktivieren

```bash
# In deinem Laravel-Projekt
cd /pfad/zu/deinem/laravel-projekt

# .cursorrules Datei laden
curl -o .cursorrules https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/.cursorrules
```

#### Schritt 2: Design System Dokumentation bereitstellen

```bash
# DESIGN-SYSTEM.md ins Projekt-Root kopieren
curl -o DESIGN-SYSTEM.md https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/DESIGN-SYSTEM.md
```

**✅ Fertig!** Die `.cursorrules` Datei aus Schritt 1 referenziert automatisch die `DESIGN-SYSTEM.md`. Keine manuellen Anpassungen nötig.

#### Schritt 3: AI-Befehle verwenden

Jetzt kannst du in Cursor direkt mit dem Design System arbeiten. Cursor liest automatisch die `DESIGN-SYSTEM.md` und kennt alle 50+ Komponenten!

**Beispiel-Befehle:**

```
💬 "Erstelle ein User-Dashboard mit dem trafficdesign Tool UI Kit"
💬 "Füge eine sortierbare Tabelle im trafficdesign-Style hinzu"
💬 "Baue ein Modal zum Bearbeiten von Benutzern"
💬 "Implementiere eine KPI-Card mit Trend-Indikator"
💬 "Welche Button-Varianten gibt es im Design System?"
💬 "Zeige mir alle verfügbaren Badge-Klassen"
```

**Was Cursor automatisch aus DESIGN-SYSTEM.md lernt:**
- ✅ Alle 50+ CSS-Klassen (`.btn-primary`, `.card-tool`, `.input-field`, etc.)
- ✅ Brand Colors (`brand-primary` #00AFCE, `brand-dark` #333333)
- ✅ Semantic Colors (`ui-success`, `ui-warning`, `ui-error`, `ui-info`)
- ✅ Typografie-System (14px Basis, 24px H1)
- ✅ Alpine.js Patterns (Modals, Dropdowns, Tabs)
- ✅ Grid-Layouts und Spacing-Rules
- ✅ Blade-Komponenten-Vorlagen

**Cursor nutzt NIEMALS:**
- ❌ Standard-Farbpalette von Tailwind (`blue-500`, `green-600`)
- ❌ Inline-Styles (`style="..."`)
- ❌ Livewire (nur Alpine.js)

#### Schritt 4: Global für alle Projekte aktivieren (optional)

1. **Cursor Settings öffnen:** `Cmd/Ctrl + ,`
2. **Rules for AI** suchen
3. Inhalt von `.cursorrules` dort einfügen
4. Gilt dann für **alle** Laravel-Projekte automatisch

---

### 2. Option: Toolkit in ein bestehendes Laravel-Projekt integrieren

#### Option A: Dateien manuell kopieren (empfohlen für Produktion)

```bash
# Laravel Breeze mit Blade Stack installieren (falls noch nicht vorhanden)
composer require laravel/breeze --dev
php artisan breeze:install blade
npm install

# UI Kit Repository klonen (temporär)
git clone https://github.com/simse0/trafficdesign-tool-ui-kit.git /tmp/trafficdesign-tool-ui-kit

# 1. Tailwind Config kopieren und anpassen
cp /tmp/trafficdesign-tool-ui-kit/tailwind.config.js ./tailwind.config.js

# 2. CSS ersetzen
cp /tmp/trafficdesign-tool-ui-kit/src/styles/globals.css ./resources/css/app.css

# 3. Alpine.js Store hinzufügen
cat /tmp/trafficdesign-tool-ui-kit/src/main.js >> ./resources/js/app.js

# 4. Cursor Rules + Dokumentation kopieren (empfohlen für AI-Support)
cp /tmp/trafficdesign-tool-ui-kit/.cursorrules ./.cursorrules
cp /tmp/trafficdesign-tool-ui-kit/DESIGN-SYSTEM.md ./DESIGN-SYSTEM.md

# 5. Temp-Ordner löschen
rm -rf /tmp/trafficdesign-tool-ui-kit

# Build starten
npm run dev
```

#### Option B: Als Git-Submodule (für laufende Updates)

```bash
# UI Kit als Submodule hinzufügen
git submodule add https://github.com/simse0/trafficdesign-tool-ui-kit.git vendor/trafficdesign-tool-ui-kit
git submodule update --init --recursive

# Symlinks oder Kopier-Script erstellen
ln -s vendor/trafficdesign-tool-ui-kit/tailwind.config.js ./tailwind.config.js
ln -s vendor/trafficdesign-tool-ui-kit/src/styles/globals.css ./resources/css/app.css

# Updates holen
git submodule update --remote vendor/trafficdesign-tool-ui-kit
```

#### Option C: Einzelne Dateien direkt von GitHub laden

```bash
# Die 4 wichtigsten Dateien herunterladen
curl -o tailwind.config.js https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/tailwind.config.js

curl -o resources/css/app.css https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/src/styles/globals.css

curl -o .cursorrules https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/.cursorrules

curl -o DESIGN-SYSTEM.md https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/DESIGN-SYSTEM.md

# Alpine.js Store manuell in resources/js/app.js einfügen
curl https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/src/main.js
```

---

### 3. Option: Schnellstart mit Cursor Composer (All-in-One)

```bash
# Neues Laravel-Projekt mit UI Kit erstellen
laravel new mein-projekt
cd mein-projekt

# Breeze installieren
composer require laravel/breeze --dev
php artisan breeze:install blade

# UI Kit Dateien laden
curl -o .cursorrules https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/.cursorrules
curl -o DESIGN-SYSTEM.md https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/DESIGN-SYSTEM.md
curl -o tailwind.config.js https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/tailwind.config.js
curl -o resources/css/app.css https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/src/styles/globals.css

# In Cursor Chat eingeben:
# "Lies die DESIGN-SYSTEM.md und richte das Trafficdesign Tool UI Kit ein.
#  Füge Alpine.js Store aus https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/src/main.js
#  zu resources/js/app.js hinzu und erstelle Layouts (Sidebar, Topbar, Footer) nach den Vorgaben."
```

**Dann kannst du direkt loslegen:**

```
💬 "Erstelle ein Dashboard mit KPI-Cards und einer Tabelle basierend auf DESIGN-SYSTEM.md"
💬 "Baue ein User-Management mit allen Komponenten aus dem Design System"
```

---

### Updates erhalten

#### Bei manueller Installation:

```bash
# Neue Version der Dateien laden
curl -o tailwind.config.js https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/tailwind.config.js
curl -o resources/css/app.css https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/src/styles/globals.css
curl -o .cursorrules https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/.cursorrules
curl -o DESIGN-SYSTEM.md https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/DESIGN-SYSTEM.md

# Build neu starten
npm run dev
```

#### Bei Git-Submodule:

```bash
# Submodule aktualisieren
git submodule update --remote vendor/trafficdesign-tool-ui-kit
git add vendor/trafficdesign-tool-ui-kit
git commit -m "Update Trafficdesign UI Kit"
```

#### Version-Pinning (empfohlen für Produktion):

```bash
# Spezifische Version laden (statt 'main' → 'v1.0.0')
curl -o tailwind.config.js https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/v1.0.0/tailwind.config.js
```

---

### 5. Demo lokal starten

```bash
# Repository klonen
git clone https://github.com/simse0/trafficdesign-tool-ui-kit.git
cd trafficdesign-tool-ui-kit

# Dependencies installieren
npm install

# Dev-Server starten
npm run dev
```

**Demo öffnen:** [http://localhost:3000](http://localhost:3000)

---

### 📋 Zusammenfassung der Optionen

| Methode | Vorteile | Nachteile | Ideal für |
|---------|----------|-----------|-----------|
| **Manuelles Kopieren** | ✅ Volle Kontrolle<br>✅ Keine Git-Abhängigkeit | ❌ Manuelle Updates | Produktion, Customization |
| **Git-Submodule** | ✅ Automatische Updates<br>✅ Version-Control | ❌ Git-Komplexität | Entwicklung, Teams |
| **Curl von GitHub** | ✅ Schnell<br>✅ Keine Git-Befehle | ❌ Keine History | Prototyping, Tests |
| **Cursor Global Rules** | ✅ Für alle Projekte<br>✅ Kein Setup pro Projekt | ❌ Weniger flexibel | Standardisierte Workflows |

**Empfehlung:**
- 🚀 **Schneller Start:** Option C (Curl von GitHub) + Cursor Rules + DESIGN-SYSTEM.md
- 🏢 **Produktion:** Option A (Manuelles Kopieren) mit Version-Pinning
- 👥 **Team-Entwicklung:** Option B (Git-Submodule)

**💡 Wichtig:** Lade immer die `DESIGN-SYSTEM.md` mit herunter! Sie enthält alle 50+ Komponenten, die Cursor dann automatisch nutzen kann.

---

## 📚 Dokumentation

| Dokument | Beschreibung |
|----------|--------------|
| **[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)** | Vollständige Referenz: Farben, Typografie, alle Komponenten |
| **[docs/USAGE.md](docs/USAGE.md)** | Verwendungsanleitung für Entwickler |
| **[.cursorrules](.cursorrules)** | AI-Assistent Regeln für Cursor IDE |

---

## 🎨 Design-Prinzipien

### Farbpalette

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| **Primary** | `#00AFCE` | Primäre Aktionen, Links, Focus |
| **Dark** | `#1d1d1d` | Text, Icons, Borders |
| **Light** | `#E5F2F3` | Sidebar-BG, Table-Hover |
| **Success** | `#22C55E` | Erfolg, Aktiv, Online |
| **Warning** | `#F59E0B` | Warnung, Ausstehend |
| **Error** | `#EF4444` | Fehler, Löschen |
| **Info** | `#3B82F6` | Information, Hinweise |

### Typografie

- **Font:** Inter (Google Fonts)
- **Basis:** 14px (kompakt für Dashboards)
- **H1:** 24px (`text-3xl`)
- **H2:** 20px (`text-2xl`)
- **Body:** 14px (`text-sm`)

### Spacing

- **Card Padding:** 16px (`p-4`)
- **Grid Gap:** 16px (`gap-4`)
- **Section Margin:** 24px (`mb-6`)

---

## 🧩 Komponenten-Übersicht

<table>
<tr>
<td width="50%">

### UI-Komponenten
- ✅ Buttons (6 Varianten + 3 Größen)
- ✅ Cards & Panels
- ✅ Forms (Inputs, Selects, Checkboxes, Toggles)
- ✅ Tables (Standard, Compact, Striped)
- ✅ Badges & Tags
- ✅ Alerts & Toasts
- ✅ Modals & Dropdowns
- ✅ Tooltips

</td>
<td width="50%">

### Erweiterte Elemente
- ✅ Avatars (5 Größen + Status)
- ✅ Navigation (Sidebar, Topbar, Breadcrumbs)
- ✅ Tabs & Accordion
- ✅ Stepper & Workflows
- ✅ Timeline
- ✅ KPI-Cards & Stats
- ✅ Loading States (Spinner, Skeleton, Progress)
- ✅ Empty States

</td>
</tr>
</table>

---

## 📸 Demo-Seiten

Das Projekt enthält **15 Demo-Seiten** mit allen Komponenten:

| Seite | Inhalt | URL |
|-------|--------|-----|
| **Dashboard** | Übersicht, Stats, Quick Actions | `/index.html` |
| **Elemente** | Buttons, Modals, Dropdowns, Tooltips | `/pages/elements.html` |
| **Tabellen** | Standard, Sortierbar, Kompakt, Striped | `/pages/tables.html` |
| **Formulare** | Inputs, Selects, Checkboxes, Filter | `/pages/forms.html` |
| **Benachrichtigungen** | Alerts, Toasts, Badges, Progress | `/pages/notifications.html` |
| **Panels** | Grid-Layouts, Cards, Tabs | `/pages/panels.html` |
| **Navigation** | Header, Sidebar, Footer, Breadcrumbs | `/pages/navigation.html` |
| **Daten-Viz** | KPI Cards, Stats | `/pages/data-viz.html` |
| **Charts & Graphen** | 🆕 Line, Bar, Area, Donut, Mixed, Radar (ApexCharts) | `/pages/charts.html` |
| **Loading** | Skeleton Loaders, Spinners | `/pages/loading-states.html` |
| **User-Elemente** | Avatars, Profile Cards | `/pages/user-elements.html` |
| **Erweiterte Inputs** | File Upload, Date Picker | `/pages/advanced-inputs.html` |
| **Workflows** | Stepper, Wizard, Progress | `/pages/workflows.html` |
| **Listen & Feeds** | Timeline, Comments, Logs | `/pages/lists-feeds.html` |
| **Context-Aktionen** | Context Menu, Bulk Actions | `/pages/context-actions.html` |

---

## 💻 Code-Beispiele

### Button

```html
<button class="btn-primary">Speichern</button>
<button class="btn-secondary">Abbrechen</button>
<button class="btn-danger btn-sm">Löschen</button>
```

### Card

```html
<div class="card-tool">
  <div class="card-tool-header">
    <h2 class="font-semibold">Kundenliste</h2>
    <button class="btn-secondary btn-sm">Exportieren</button>
  </div>
  <div class="card-tool-body">
    <p>Content hier...</p>
  </div>
  <div class="card-tool-footer">
    <button class="btn-primary">Speichern</button>
  </div>
</div>
```

### Form Input

```html
<div>
  <label class="label label-required">E-Mail</label>
  <input type="email" class="input-field" placeholder="name@example.com">
  <p class="help-text">Wir geben Ihre E-Mail nicht weiter.</p>
</div>
```

### Alpine.js Modal

```html
<div x-data="{ open: false }">
  <button @click="open = true" class="btn-primary">Modal öffnen</button>
  
  <div x-show="open" 
       @keydown.escape.window="open = false" 
       class="modal-backdrop">
    <div class="modal-panel">
      <h2 class="text-xl font-semibold mb-4">Titel</h2>
      <p>Content...</p>
      <div class="flex gap-3 mt-6">
        <button @click="open = false" class="btn-primary">OK</button>
        <button @click="open = false" class="btn-secondary">Abbrechen</button>
      </div>
    </div>
  </div>
</div>
```

### Notification (Toast)

```javascript
// Globaler Helper (bereits integriert)
notify('Erfolgreich gespeichert!', 'success');
notify('Ein Fehler ist aufgetreten', 'error');
notify('Bitte beachten Sie...', 'warning', 3000);
```

---

## 🛠️ Technologie-Stack

| Technologie | Version | Verwendung |
|-------------|---------|------------|
| **Tailwind CSS** | 3.4+ | Styling-Framework |
| **Alpine.js** | 3.14+ | Interaktivität |
| **ApexCharts** | 3.45+ | Charts & Datenvisualisierung |
| **Vite** | 5.2+ | Build-Tool |
| **PostCSS** | 8.4+ | CSS-Processing |
| **Inter Font** | - | UI-Schriftart |

### Laravel Integration

- **Laravel Breeze** - Authentication Scaffolding
- **Blade Templates** - View Layer
- **Vite** - Asset Bundling

---

## 📁 Projekt-Struktur

```
trafficdesign-tool-ui-kit/
├── src/
│   ├── main.js              # Alpine.js Setup + Stores
│   ├── charts.js            # ApexCharts Theme
│   └── styles/
│       └── globals.css      # 50+ CSS-Komponenten
├── pages/                   # 14 Demo-Seiten
│   ├── tables.html
│   ├── forms.html
│   ├── elements.html
│   ├── charts.html          # 🆕 Charts & Graphen
│   └── ...
├── partials/
│   └── sidebar.html         # Wiederverwendbare Partials
├── docs/
│   └── USAGE.md            # Verwendungs-Anleitung
├── index.html              # Dashboard-Startseite
├── tailwind.config.js      # Tailwind-Theme
├── vite.config.js          # Vite-Konfiguration
├── DESIGN-SYSTEM.md        # Vollständige Referenz
├── .cursorrules            # AI-Assistent Regeln
└── README.md               # Diese Datei
```

---

## 🤖 Cursor IDE Integration

Dieses Projekt enthält eine `.cursorrules`-Datei für optimale AI-Unterstützung.

### Quick Commands

```
"Erstelle ein User-Dashboard mit dem trafficdesign UI Kit"
"Füge eine sortierbare Tabelle im trafficdesign-Style hinzu"
"Baue ein Modal zum Bearbeiten von Benutzern"
"Implementiere eine KPI-Card mit Trend-Indikator"
```

Der AI-Assistent verwendet automatisch:
- ✅ Richtige CSS-Klassen (`.btn-primary`, `.card-tool`, etc.)
- ✅ Brand Colors (`brand-primary`, `ui-success`, etc.)
- ✅ Alpine.js für Interaktivität
- ✅ 14px Basis-Schriftgröße
- ❌ KEINE Standard-Farbpalette von Tailwind (`blue-500`, etc.)

---

## 📦 NPM Scripts

```bash
# Dev-Server starten (Hot Reload)
npm run dev

# Production Build
npm run build

# Build-Vorschau
npm run preview
```

---

## 🎓 Best Practices

### ✅ DO's

- Verwende `.btn-primary`, `.card-tool`, `.input-field` etc.
- Nutze `brand-*` und `ui-*` Farben
- Alpine.js für Interaktivität
- Semantic HTML (`<button>`, `<nav>`, `<header>`)
- ARIA-Labels für Accessibility
- Responsive mit `lg:`, `md:` Breakpoints

### ❌ DON'Ts

- Keine Standard-Farbpalette von Tailwind (`blue-500`, `green-600`) - nur Custom Colors
- Keine Inline-Styles (`style="..."`)
- Kein Livewire (nutze Alpine.js)
- Keine Custom CSS außerhalb von `globals.css`
- Keine Schriftgrößen > 14px für Standard-UI

---

## 🌐 Browser-Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

---

## 📄 Lizenz

**MIT License**

```
Copyright (c) 2025 trafficdesign

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🤝 Beitragen

Contributions sind willkommen! Bitte:

1. Forke das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushe zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

### Entwicklungs-Guidelines

- Folge den Design-Prinzipien in `DESIGN-SYSTEM.md`
- Teste auf allen Demo-Seiten
- Dokumentiere neue Komponenten
- Halte die `.cursorrules` aktuell

---

## 📞 Support & Kontakt

- 📧 **E-Mail:** support@trafficdesign.com
- 🐛 **Issues:** [GitHub Issues](https://github.com/simse0/trafficdesign-tool-ui-kit/issues)
- 📖 **Docs:** [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)

---

## 🙏 Credits

- **Tailwind CSS:** [https://tailwindcss.com](https://tailwindcss.com)
- **Alpine.js:** [https://alpinejs.dev](https://alpinejs.dev)
- **ApexCharts:** [https://apexcharts.com](https://apexcharts.com)
- **Inter Font:** [Google Fonts](https://fonts.google.com/specimen/Inter)
- **Icons:** [Heroicons](https://heroicons.com)

---

## 🗺️ Roadmap

### Version 1.1 (Q1 2025)
- [ ] Livewire-Komponenten
- [ ] Dark Mode Support
- [ ] Weitere Chart-Komponenten
- [ ] Storybook Integration

### Version 1.2 (Q2 2025)
- [ ] Vue.js Variante
- [ ] React Variante
- [ ] Figma Design Kit
- [ ] VS Code Extension

---

<div align="center">

**Made with ❤️ for Enterprise Dashboards**

⭐ **Star this repo** if you find it helpful!

[Documentation](DESIGN-SYSTEM.md) • [Demo](http://localhost:3000) • [Issues](https://github.com/simse0/trafficdesign-tool-ui-kit/issues)

</div>

