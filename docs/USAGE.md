# Trafficdesign UI Kit - Dokumentation

Ein modulares UI Kit für Enterprise SaaS und interne Tools, basierend auf Tailwind CSS und Alpine.js.

## Inhaltsverzeichnis

1. [Installation](#installation)
2. [Projektstruktur](#projektstruktur)
3. [Brand Colors](#brand-colors)
4. [Komponenten](#komponenten)
5. [Best Practices](#best-practices)
6. [Migration zu Laravel Breeze](#migration-zu-laravel-breeze)

---

## Installation

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Setup

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev

# 3. Für Produktion bauen
npm run build
```

Der Dev-Server läuft auf `http://localhost:3000`

---

## Projektstruktur

```
tailwind-example/
├── index.html                 # Dashboard-Hauptseite
├── pages/                     # Demo-Unterseiten
│   ├── tables.html
│   ├── forms.html
│   ├── notifications.html
│   └── ...
├── src/
│   ├── main.js               # Alpine.js Initialisierung
│   └── styles/
│       └── globals.css       # Tailwind + Custom Components
├── tailwind.config.js        # Tailwind-Konfiguration
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Brand Colors

### Primäre Markenfarben

| Name | Hex | CSS-Variable | Verwendung |
|------|-----|--------------|------------|
| Primary | `#00B3C7` | `brand-primary` | Aktionen, Focus, Highlights |
| Primary Hover | `#009AA8` | `brand-primary-hover` | Hover-States |
| Primary Active | `#008494` | `brand-primary-active` | Active/Click-States |
| Dark | `#333333` | `brand-dark` | Text, Borders |
| Light | `#E5F2F3` | `brand-light` | Backgrounds, Hover |

### Semantische Farben

| Name | Hex | CSS-Variable | Verwendung |
|------|-----|--------------|------------|
| Success | `#22C55E` | `ui-success` | Erfolg, Bestätigung |
| Warning | `#F59E0B` | `ui-warning` | Warnungen |
| Error | `#EF4444` | `ui-error` | Fehler, Gefahr |
| Info | `#3B82F6` | `ui-info` | Informationen |

### Verwendung im CSS

```html
<!-- Hintergrund -->
<div class="bg-brand-primary">...</div>
<div class="bg-brand-light">...</div>

<!-- Text -->
<span class="text-brand-primary">Akzent-Text</span>
<span class="text-ui-error">Fehlertext</span>

<!-- Border -->
<div class="border border-brand-primary">...</div>
```

---

## Komponenten

### Buttons

```html
<!-- Varianten -->
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-ghost">Ghost</button>
<button class="btn-danger">Danger</button>
<button class="btn-success">Success</button>

<!-- Größen -->
<button class="btn-primary btn-xs">Extra Small</button>
<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary">Default</button>
<button class="btn-primary btn-lg">Large</button>

<!-- Mit Icon -->
<button class="btn-primary">
  <svg class="w-4 h-4">...</svg>
  Mit Icon
</button>

<!-- Icon-only Button -->
<button class="btn-icon">
  <svg class="w-5 h-5">...</svg>
</button>
```

### Cards

```html
<div class="card-tool">
  <div class="card-tool-header">
    <h2 class="font-semibold">Titel</h2>
    <button class="btn-secondary btn-sm">Aktion</button>
  </div>
  <div class="card-tool-body">
    <p>Inhalt der Card...</p>
  </div>
  <div class="card-tool-footer">
    Footer-Bereich
  </div>
</div>
```

### Form Inputs

```html
<!-- Standard Input -->
<label class="label">Feldname</label>
<input type="text" class="input-field" placeholder="Eingabe...">

<!-- Pflichtfeld -->
<label class="label label-required">Pflichtfeld</label>
<input type="text" class="input-field">

<!-- Mit Icon -->
<div class="input-group">
  <svg class="input-group-icon w-4 h-4">...</svg>
  <input type="search" class="input-field" placeholder="Suchen...">
</div>

<!-- Error State -->
<input type="text" class="input-field-error">
<p class="error-text">Fehlermeldung</p>

<!-- Select -->
<select class="select-field">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Checkbox -->
<label class="flex items-center gap-2">
  <input type="checkbox" class="checkbox-field">
  <span>Option aktivieren</span>
</label>
```

### Tabellen

```html
<table class="table-tool">
  <thead>
    <tr>
      <th>Spalte 1</th>
      <th>Spalte 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wert 1</td>
      <td>Wert 2</td>
    </tr>
  </tbody>
</table>

<!-- Varianten -->
<table class="table-tool table-tool-compact">...</table>
<table class="table-tool table-tool-striped">...</table>
```

### Badges

```html
<span class="badge-success">Aktiv</span>
<span class="badge-warning">Ausstehend</span>
<span class="badge-error">Fehler</span>
<span class="badge-info">Neu</span>
<span class="badge-primary">Featured</span>
<span class="badge-neutral">Archiviert</span>
```

### Alerts

```html
<div class="alert-success">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <div class="alert-title">Erfolg!</div>
    <div>Nachricht hier...</div>
  </div>
</div>

<!-- Varianten: alert-info, alert-warning, alert-error -->
```

### Toasts (mit Alpine.js)

```javascript
// Toast anzeigen
notify('Nachricht', 'success');  // success, info, warning, error
notify('Mit Timeout', 'info', 3000);  // 3 Sekunden
```

### Avatars

```html
<!-- Größen -->
<div class="avatar-xs"><span>XS</span></div>
<div class="avatar-sm"><span>SM</span></div>
<div class="avatar-md"><span>MD</span></div>
<div class="avatar-lg"><span>LG</span></div>
<div class="avatar-xl"><span>XL</span></div>

<!-- Mit Bild -->
<div class="avatar-md">
  <img src="avatar.jpg" alt="Avatar">
</div>

<!-- Mit Status -->
<div class="avatar-md">
  <span>MK</span>
  <span class="avatar-status-online"></span>
</div>
<!-- Status: avatar-status-online, -offline, -busy, -away -->
```

### Loading States

```html
<!-- Spinners -->
<span class="spinner-sm text-brand-primary"></span>
<span class="spinner-md text-brand-primary"></span>
<span class="spinner-lg text-brand-primary"></span>

<!-- Skeleton -->
<div class="skeleton-text"></div>
<div class="skeleton-title"></div>
<div class="skeleton-avatar w-10 h-10"></div>
<div class="skeleton-button"></div>

<!-- Progress Bar -->
<div class="progress-bar">
  <div class="progress-bar-fill" style="width: 75%"></div>
</div>
```

### Modal (mit Alpine.js)

```html
<div x-data="{ open: false }">
  <button @click="open = true" class="btn-primary">Modal öffnen</button>
  
  <template x-teleport="body">
    <div x-show="open" class="relative z-50">
      <div class="modal-backdrop" @click="open = false"></div>
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">Titel</h3>
          <button @click="open = false" class="btn-icon">×</button>
        </div>
        <div class="modal-body">
          Inhalt...
        </div>
        <div class="modal-footer">
          <button @click="open = false" class="btn-secondary">Abbrechen</button>
          <button class="btn-primary">Bestätigen</button>
        </div>
      </div>
    </div>
  </template>
</div>
```

---

## Best Practices

### 1. Kompakte UI

Das Kit ist für hohe Informationsdichte optimiert:

- Basis-Schriftgröße: 14px (`text-sm`)
- Kompakte Button-Padding: `py-1.5 px-3`
- Reduzierte Abstände in Tabellen und Listen

### 2. Konsistente Abstände

```html
<!-- Verwende die Tailwind-Spacing-Klassen -->
<div class="p-4">...</div>      <!-- Standard Card Padding -->
<div class="gap-4">...</div>    <!-- Standard Grid Gap -->
<div class="space-y-4">...</div> <!-- Vertikale Abstände -->
```

### 3. Responsive Design

```html
<!-- Grid mit Responsive Breakpoints -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  ...
</div>
```

### 4. Accessibility

- Alle interaktiven Elemente haben Focus-States
- Verwende semantische HTML-Elemente
- Füge `aria-labels` hinzu wo nötig

---

## Migration zu Laravel Breeze

### 1. Dateien kopieren

```bash
# Tailwind Config
cp tailwind.config.js your-laravel-project/

# Styles
cp src/styles/globals.css your-laravel-project/resources/css/app.css
```

### 2. Blade-Templates erstellen

Die HTML-Strukturen können 1:1 in Blade-Templates übernommen werden:

```blade
{{-- resources/views/components/button.blade.php --}}
@props(['variant' => 'primary', 'size' => ''])

@php
$classes = match($variant) {
    'primary' => 'btn-primary',
    'secondary' => 'btn-secondary',
    'ghost' => 'btn-ghost',
    'danger' => 'btn-danger',
    default => 'btn-primary'
};

$sizeClass = match($size) {
    'xs' => 'btn-xs',
    'sm' => 'btn-sm',
    'lg' => 'btn-lg',
    default => ''
};
@endphp

<button {{ $attributes->merge(['class' => "$classes $sizeClass"]) }}>
    {{ $slot }}
</button>
```

### 3. Alpine.js Integration

Laravel Breeze kommt bereits mit Alpine.js. Die Stores und Komponenten können direkt übernommen werden.

```javascript
// resources/js/app.js
import Alpine from 'alpinejs'

Alpine.store('notifications', {
    items: [],
    add(notification) {
        const id = Date.now()
        this.items.push({ id, ...notification })
        setTimeout(() => this.remove(id), notification.duration || 5000)
    },
    remove(id) {
        this.items = this.items.filter(item => item.id !== id)
    }
})

window.Alpine = Alpine
Alpine.start()
```

---

## Lizenz

MIT License - Frei verwendbar für kommerzielle und private Projekte.

---

## Support

Bei Fragen oder Problemen:
- Erstelle ein Issue im Repository
- Kontaktiere das Entwicklungsteam

---

*Erstellt mit dem Trafficdesign UI Kit v1.0.0*


