# Trafficdesign Tool UI Kit - Design System Reference

> Enterprise SaaS UI Kit für Laravel Breeze + Tailwind CSS + Alpine.js  
> Optimiert für hohe Informationsdichte und professionelle Dashboard-Anwendungen

**Version:** 1.0.0  
**Letzte Aktualisierung:** Dezember 2024  
**Demo:** [http://localhost:3000](http://localhost:3000)

---

## 📦 Quick Start

### Benötigte Dateien

Kopiere diese 3 Dateien in dein Laravel-Projekt:

| Datei | Quelle | Ziel (Laravel) | Beschreibung |
|-------|--------|----------------|--------------|
| **tailwind.config.js** | [Download](tailwind.config.js) | `./tailwind.config.js` | Tailwind-Theme mit Brand Colors |
| **globals.css** | [Download](src/styles/globals.css) | `resources/css/app.css` | 50+ Component Classes |
| **main.js** | [Download](src/main.js) | In `resources/js/app.js` einfügen | Alpine.js Stores |

### Installation (Laravel Breeze)

```bash
# 1. Laravel Breeze mit Blade + Alpine Stack
composer require laravel/breeze --dev
php artisan breeze:install blade
npm install

# 2. Tailwind Config ersetzen
# Kopiere tailwind.config.js ins Projekt-Root

# 3. CSS ersetzen
# Kopiere globals.css nach resources/css/app.css

# 4. Alpine.js Store hinzufügen
# Füge Inhalt von main.js zu resources/js/app.js hinzu

# 5. Build starten
npm run dev
```

---

## 🎨 Farbpalette

### Brand Colors (Corporate Identity)

| Name | Hex | Tailwind-Klasse | Verwendung |
|------|-----|-----------------|------------|
| **Primary** | `#00B3C7` | `brand-primary` | Primäre Aktionen, Links, Focus |
| Primary Hover | `#009AA8` | `brand-primary-hover` | Button-Hover |
| Primary Active | `#008494` | `brand-primary-active` | Button-Click |
| Primary Light | `#E5F8FA` | `brand-primary-light` | Badges, Highlights |
| **Dark** | `#333333` | `brand-dark` | Text, Überschriften, Borders |
| Dark Hover | `#1A1A1A` | `brand-dark-hover` | Hover-States |
| **Light** | `#E5F2F3` | `brand-light` | Sidebar-BG, Table-Hover |
| Light Hover | `#D5E8E9` | `brand-light-hover` | Hover-Effekte |

### Semantic Colors (UI-States)

| Typ | Base | Light | Dark | Verwendung |
|-----|------|-------|------|------------|
| **Success** | `#22C55E` | `#DCFCE7` | `#16A34A` | Erfolg, Bestätigung, Online |
| **Warning** | `#F59E0B` | `#FEF3C7` | `#D97706` | Warnung, Ausstehend |
| **Error** | `#EF4444` | `#FEE2E2` | `#DC2626` | Fehler, Löschen, Offline |
| **Info** | `#3B82F6` | `#DBEAFE` | `#2563EB` | Information, Hinweise |

**Klassen:** `ui-success`, `ui-warning`, `ui-error`, `ui-info` (+ `-light`, `-dark`)

### Surface Colors (Graustufen für UI)

| Shade | Hex | Verwendung |
|-------|-----|------------|
| `surface-50` | `#FAFAFA` | Page Background |
| `surface-100` | `#F5F5F5` | Card Background, Hover |
| `surface-200` | `#E5E5E5` | Borders, Dividers |
| `surface-300` | `#D4D4D4` | Borders (aktiv) |
| `surface-400` | `#A3A3A3` | Placeholder Text |
| `surface-500` | `#737373` | Secondary Text |
| `surface-600` | `#525252` | Primary Text (dunkel) |

---

## 📐 Typografie

### Font-Stack

```css
font-family: 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 
             'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif';
```

**Font laden:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Schriftgrößen (kompakt für Dashboards)

| Klasse | Pixel | Verwendung |
|--------|-------|------------|
| `text-xs` | 12px | Captions, Help Text, Timestamps |
| `text-sm` | **14px** | **UI-Standard** (Buttons, Inputs, Body) |
| `text-base` | 14px | Fließtext |
| `text-lg` | 16px | Subheadings |
| `text-xl` | 18px | - |
| `text-2xl` | 20px | Section Headers (H2) |
| `text-3xl` | **24px** | **Page Titles (H1)** |
| `text-4xl` | 30px | Große Headlines |

**Standard:** HTML hat `font-size: 14px` als Basis!

---

## 🧩 Alle Komponenten-Klassen

### Buttons

| Klasse | Beschreibung |
|--------|--------------|
| `.btn` | Basis-Button (nicht direkt verwenden) |
| `.btn-primary` | Primäre Aktion (Brand Teal) |
| `.btn-secondary` | Sekundäre Aktion (White/Border) |
| `.btn-ghost` | Transparenter Button |
| `.btn-danger` | Destruktive Aktion (Rot) |
| `.btn-success` | Bestätigung (Grün) |
| `.btn-xs` | Extra Small Größe |
| `.btn-sm` | Small Größe |
| `.btn-lg` | Large Größe |
| `.btn-icon` | Icon-only Button (quadratisch) |
| `.btn-icon-primary` | Icon-only mit Brand-Farbe |

**HTML:**
```html
<button class="btn-primary">Speichern</button>
<button class="btn-secondary btn-sm">Abbrechen</button>
<button class="btn-icon">
  <svg class="w-5 h-5">...</svg>
</button>
```

### Cards & Containers

| Klasse | Beschreibung |
|--------|--------------|
| `.card-tool` | Standard Card-Container |
| `.card-tool-header` | Card-Header mit Padding |
| `.card-tool-body` | Card-Body |
| `.card-tool-footer` | Card-Footer (mit BG) |
| `.panel` | Einfaches Panel |
| `.panel-compact` | Panel mit kleinem Padding |
| `.panel-padded` | Panel mit großem Padding |

**HTML:**
```html
<div class="card-tool">
  <div class="card-tool-header">
    <h2 class="font-semibold">Titel</h2>
    <button class="btn-secondary btn-sm">Aktion</button>
  </div>
  <div class="card-tool-body">
    Content...
  </div>
  <div class="card-tool-footer">
    <button class="btn-primary">Speichern</button>
  </div>
</div>
```

### Form Inputs

| Klasse | Beschreibung |
|--------|--------------|
| `.input-field` | Standard Text-Input |
| `.input-field-error` | Input mit Error-State |
| `.input-field-success` | Input mit Success-State |
| `.input-group` | Container für Input + Icon |
| `.input-group-icon` | Icon innerhalb Input |
| `.select-field` | Native Select mit Custom Arrow |
| `.checkbox-field` | Styled Checkbox |
| `.radio-field` | Styled Radio Button |
| `.toggle` | Toggle Switch Container |
| `.toggle-knob` | Toggle Switch Knob |
| `.label` | Form Label |
| `.label-required` | Label mit Pflichtfeld-Stern (*) |
| `.help-text` | Hilfetext unter Input |
| `.error-text` | Fehlertext unter Input |

**HTML:**
```html
<!-- Standard Input -->
<div>
  <label class="label label-required">Name</label>
  <input type="text" class="input-field" placeholder="Eingabe...">
  <p class="help-text">Hilfetext hier</p>
</div>

<!-- Input mit Icon -->
<div class="input-group">
  <svg class="input-group-icon w-4 h-4">...</svg>
  <input type="search" class="input-field" placeholder="Suchen...">
</div>

<!-- Toggle Switch -->
<div x-data="{ enabled: false }">
  <button 
    @click="enabled = !enabled"
    :data-checked="enabled"
    class="toggle"
  >
    <span class="toggle-knob"></span>
  </button>
</div>
```

### Tables

| Klasse | Beschreibung |
|--------|--------------|
| `.table-tool` | Basis-Tabelle |
| `.table-tool-compact` | Kompaktere Zeilen |
| `.table-tool-striped` | Gestreifte Zeilen |

**HTML:**
```html
<div class="card-tool">
  <div class="overflow-x-auto">
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
  </div>
</div>
```

### Badges & Tags

| Klasse | Beschreibung |
|--------|--------------|
| `.badge` | Basis-Badge |
| `.badge-primary` | Brand-Farbe |
| `.badge-success` | Grün (Aktiv, Erfolg) |
| `.badge-warning` | Orange (Ausstehend) |
| `.badge-error` | Rot (Fehler, Inaktiv) |
| `.badge-info` | Blau (Neu, Info) |
| `.badge-neutral` | Grau (Archiviert) |
| `.tag` | Tag mit Close-Button |
| `.tag-close` | Close-Icon für Tag |

**HTML:**
```html
<span class="badge-success">Aktiv</span>
<span class="badge-warning">Ausstehend</span>

<span class="tag">
  JavaScript
  <button class="tag-close">×</button>
</span>
```

### Alerts & Toasts

| Klasse | Beschreibung |
|--------|--------------|
| `.alert` | Basis-Alert |
| `.alert-success` | Erfolgs-Alert (Grün) |
| `.alert-warning` | Warn-Alert (Orange) |
| `.alert-error` | Fehler-Alert (Rot) |
| `.alert-info` | Info-Alert (Blau) |
| `.alert-icon` | Icon im Alert |
| `.alert-content` | Content-Container |
| `.alert-title` | Alert-Titel |
| `.toast` | Basis-Toast |
| `.toast-success` / `.toast-warning` / `.toast-error` / `.toast-info` | Toast-Varianten |

**HTML:**
```html
<div class="alert-success">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <div class="alert-title">Erfolg!</div>
    <div>Ihre Änderungen wurden gespeichert.</div>
  </div>
</div>
```

**JavaScript (Toast):**
```javascript
notify('Erfolgreich gespeichert!', 'success');
notify('Ein Fehler ist aufgetreten', 'error', 3000);
```

### Avatars

| Klasse | Beschreibung |
|--------|--------------|
| `.avatar` | Basis-Avatar |
| `.avatar-xs` | 24px (6x6) |
| `.avatar-sm` | 32px (8x8) |
| `.avatar-md` | 40px (10x10) |
| `.avatar-lg` | 48px (12x12) |
| `.avatar-xl` | 64px (16x16) |
| `.avatar-status` | Status-Indikator (Basis) |
| `.avatar-status-online` | Grün (Online) |
| `.avatar-status-offline` | Grau (Offline) |
| `.avatar-status-busy` | Rot (Beschäftigt) |
| `.avatar-status-away` | Orange (Abwesend) |

**HTML:**
```html
<div class="avatar-md">
  <img src="avatar.jpg" alt="Avatar">
  <span class="avatar-status-online"></span>
</div>

<div class="avatar-sm">
  <span>MK</span>
</div>
```

### Navigation

| Klasse | Beschreibung |
|--------|--------------|
| `.sidebar` | Sidebar-Container |
| `.sidebar-brand` | Logo/Brand-Bereich |
| `.sidebar-nav` | Navigation-Container |
| `.sidebar-section` | Section innerhalb Nav |
| `.sidebar-section-title` | Section-Titel |
| `.sidebar-link` | Navigation-Link |
| `.sidebar-link-active` | Aktiver Link |
| `.sidebar-link-icon` | Icon im Link |
| `.topbar` | Top-Header |
| `.topbar-left` / `.topbar-right` | Header-Bereiche |
| `.breadcrumbs` | Breadcrumb-Navigation |
| `.breadcrumbs-item` | Breadcrumb-Link |
| `.breadcrumbs-separator` | Trennzeichen |
| `.breadcrumbs-current` | Aktueller Breadcrumb |

### Tabs & Accordion

| Klasse | Beschreibung |
|--------|--------------|
| `.tabs` | Tab-Container |
| `.tab` | Einzelner Tab |
| `.tab-active` | Aktiver Tab |

**HTML (Tabs mit Alpine.js):**
```html
<div x-data="{ activeTab: 'tab1' }">
  <div class="tabs">
    <button @click="activeTab = 'tab1'" 
            :class="activeTab === 'tab1' ? 'tab-active' : 'tab'">
      Tab 1
    </button>
    <button @click="activeTab = 'tab2'" 
            :class="activeTab === 'tab2' ? 'tab-active' : 'tab'">
      Tab 2
    </button>
  </div>
  <div class="p-4">
    <div x-show="activeTab === 'tab1'">Inhalt 1</div>
    <div x-show="activeTab === 'tab2'">Inhalt 2</div>
  </div>
</div>
```

### Stepper & Workflows

| Klasse | Beschreibung |
|--------|--------------|
| `.stepper` | Stepper-Container |
| `.stepper-step` | Einzelner Step |
| `.stepper-step-pending` | Ausstehender Step |
| `.stepper-step-active` | Aktiver Step |
| `.stepper-step-completed` | Abgeschlossener Step |
| `.stepper-indicator` | Kreis mit Nummer/Icon |
| `.stepper-label` | Step-Label |
| `.stepper-connector` | Verbindungslinie |

### Timeline

| Klasse | Beschreibung |
|--------|--------------|
| `.timeline` | Timeline-Container |
| `.timeline-item` | Einzelner Timeline-Eintrag |
| `.timeline-marker` | Zeitpunkt-Marker |
| `.timeline-marker-primary` | Marker in Brand-Farbe |
| `.timeline-marker-success` | Marker in Grün |
| `.timeline-content` | Inhalt des Eintrags |
| `.timeline-title` | Titel |
| `.timeline-time` | Zeitstempel |
| `.timeline-description` | Beschreibung |

### Loading States

| Klasse | Beschreibung |
|--------|--------------|
| `.spinner` | Basis-Spinner |
| `.spinner-sm` | Klein (16px) |
| `.spinner-md` | Mittel (24px) |
| `.spinner-lg` | Groß (32px) |
| `.skeleton` | Skeleton-Basis |
| `.skeleton-text` | Text-Zeile |
| `.skeleton-title` | Titel-Zeile |
| `.skeleton-avatar` | Avatar-Kreis |
| `.skeleton-button` | Button-Placeholder |
| `.progress-bar` | Progress-Container |
| `.progress-bar-fill` | Fortschritts-Balken |
| `.progress-bar-success` / `-warning` / `-error` | Farbvarianten |

**HTML:**
```html
<!-- Spinner -->
<span class="spinner-md text-brand-primary"></span>

<!-- Progress Bar -->
<div class="progress-bar">
  <div class="progress-bar-fill" style="width: 75%"></div>
</div>

<!-- Skeleton -->
<div class="skeleton-text"></div>
<div class="skeleton-avatar w-10 h-10"></div>
```

### Modal & Dropdown

| Klasse | Beschreibung |
|--------|--------------|
| `.modal-backdrop` | Dunkler Hintergrund |
| `.modal` | Modal-Container |
| `.modal-header` | Header mit Titel + Close |
| `.modal-title` | Modal-Titel |
| `.modal-body` | Content-Bereich |
| `.modal-footer` | Footer mit Buttons |
| `.dropdown` | Dropdown-Container |
| `.dropdown-menu` | Dropdown-Menü |
| `.dropdown-item` | Menü-Eintrag |
| `.dropdown-item-danger` | Destruktiver Eintrag (rot) |
| `.dropdown-divider` | Trennlinie |
| `.dropdown-header` | Section-Header |

### Stats & KPI

| Klasse | Beschreibung |
|--------|--------------|
| `.stat-card` | KPI-Card |
| `.stat-label` | Label (klein, uppercase) |
| `.stat-value` | Großer Wert |
| `.stat-trend` | Trend-Container |
| `.stat-trend-up` | Grün mit Pfeil nach oben |
| `.stat-trend-down` | Rot mit Pfeil nach unten |
| `.stat-trend-neutral` | Grau (keine Änderung) |

**HTML:**
```html
<div class="stat-card">
  <div class="stat-label">Umsatz</div>
  <div class="stat-value">€124.520</div>
  <div class="stat-trend-up">
    <svg class="w-4 h-4">...</svg>
    <span>+12.5%</span>
  </div>
</div>
```

### Empty States

| Klasse | Beschreibung |
|--------|--------------|
| `.empty-state` | Container |
| `.empty-state-icon` | Icon (groß) |
| `.empty-state-title` | Titel |
| `.empty-state-description` | Beschreibung |

### File Upload

| Klasse | Beschreibung |
|--------|--------------|
| `.file-upload` | Upload-Zone (Drag & Drop) |
| `.file-upload-active` | Aktiver Drag-State |
| `.file-upload-icon` | Upload-Icon |
| `.file-upload-text` | Haupttext |
| `.file-upload-hint` | Hinweistext |

### Pagination

| Klasse | Beschreibung |
|--------|--------------|
| `.pagination` | Container |
| `.pagination-item` | Page-Button |
| `.pagination-item-active` | Aktive Page |
| `.pagination-item-disabled` | Deaktiviert |

### Context Menu & Bulk Actions

| Klasse | Beschreibung |
|--------|--------------|
| `.context-menu` | Context-Menu Container |
| `.context-menu-item` | Menü-Eintrag |
| `.context-menu-item-danger` | Destruktiver Eintrag |
| `.bulk-action-bar` | Bulk-Action Toolbar |
| `.bulk-action-count` | Anzahl-Anzeige |
| `.bulk-action-buttons` | Button-Container |

---

## 🎯 Verwendung in Laravel Blade

### Blade-Komponenten erstellen

#### Button-Komponente

**Datei:** `resources/views/components/button.blade.php`

```blade
@props(['variant' => 'primary', 'size' => '', 'type' => 'button'])

@php
$classes = match($variant) {
    'primary' => 'btn-primary',
    'secondary' => 'btn-secondary',
    'ghost' => 'btn-ghost',
    'danger' => 'btn-danger',
    'success' => 'btn-success',
    default => 'btn-primary'
};

$sizeClass = match($size) {
    'xs' => 'btn-xs',
    'sm' => 'btn-sm',
    'lg' => 'btn-lg',
    default => ''
};
@endphp

<button {{ $attributes->merge(['type' => $type, 'class' => "$classes $sizeClass"]) }}>
    {{ $slot }}
</button>
```

**Verwendung:**
```blade
<x-button variant="primary">Speichern</x-button>
<x-button variant="danger" size="sm">Löschen</x-button>
<x-button variant="secondary" wire:click="cancel">Abbrechen</x-button>
```

#### Card-Komponente

**Datei:** `resources/views/components/card.blade.php`

```blade
@props(['title' => null, 'footer' => false])

<div {{ $attributes->merge(['class' => 'card-tool']) }}>
    @if($title)
    <div class="card-tool-header">
        <h2 class="font-semibold">{{ $title }}</h2>
        {{ $header ?? '' }}
    </div>
    @endif
    
    <div class="card-tool-body">
        {{ $slot }}
    </div>
    
    @if($footer)
    <div class="card-tool-footer">
        {{ $footer }}
    </div>
    @endif
</div>
```

**Verwendung:**
```blade
<x-card title="Kundenliste">
    <p>Content hier...</p>
    
    <x-slot:footer>
        <x-button variant="primary">Speichern</x-button>
    </x-slot:footer>
</x-card>
```

#### Badge-Komponente

**Datei:** `resources/views/components/badge.blade.php`

```blade
@props(['type' => 'neutral'])

@php
$classes = match($type) {
    'success' => 'badge-success',
    'warning' => 'badge-warning',
    'error' => 'badge-error',
    'info' => 'badge-info',
    'primary' => 'badge-primary',
    default => 'badge-neutral'
};
@endphp

<span {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</span>
```

**Verwendung:**
```blade
<x-badge type="success">Aktiv</x-badge>
<x-badge type="warning">Ausstehend</x-badge>
```

---

## 🏗️ Standard-Layout für Laravel

### Layout-Template

**Datei:** `resources/views/layouts/app.blade.php`

```blade
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-surface-50" x-data="{ sidebarOpen: true }">
    <div class="flex min-h-screen">
        
        <!-- Sidebar -->
        @include('layouts.sidebar')
        
        <!-- Main Content -->
        <div class="flex-1 flex flex-col min-w-0">
            
            <!-- Topbar -->
            @include('layouts.topbar')
            
            <!-- Page Content -->
            <main class="flex-1 p-6 overflow-auto">
                {{ $slot }}
            </main>
            
            <!-- Footer -->
            @include('layouts.footer')
        </div>
    </div>
    
    <!-- Toast Container -->
    @include('layouts.toasts')
</body>
</html>
```

---

## 📚 Alpine.js Patterns

### Notifications Store

```javascript
// Bereits in resources/js/app.js integriert
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

// Global helper
window.notify = (message, type = 'info', duration = 5000) => {
    Alpine.store('notifications').add({ message, type, duration })
}
```

### Häufige Patterns

```html
<!-- Dropdown -->
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open" @click.away="open = false">Menu</div>
</div>

<!-- Modal -->
<div x-data="{ open: false }">
  <button @click="open = true">Öffnen</button>
  <div x-show="open" @keydown.escape.window="open = false">Modal</div>
</div>

<!-- Tabs -->
<div x-data="{ tab: 'tab1' }">
  <button @click="tab = 'tab1'">Tab 1</button>
  <div x-show="tab === 'tab1'">Content 1</div>
</div>
```

---

## 🎯 Grid-System

### Standard-Layouts

```html
<!-- 100% -->
<div class="grid grid-cols-1 gap-4">...</div>

<!-- 50/50 -->
<div class="grid grid-cols-2 gap-4">...</div>

<!-- 33/33/33 -->
<div class="grid grid-cols-3 gap-4">...</div>

<!-- 25/25/25/25 -->
<div class="grid grid-cols-4 gap-4">...</div>

<!-- 66/33 -->
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">...</div>
  <div>...</div>
</div>

<!-- Responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">...</div>
```

---

## ✅ Checkliste für neue Laravel-Projekte

### Setup

- [ ] Laravel Breeze mit Blade Stack installiert
- [ ] `tailwind.config.js` kopiert und angepasst
- [ ] `globals.css` nach `resources/css/app.css` kopiert
- [ ] Alpine.js Store in `resources/js/app.js` eingefügt
- [ ] Inter Font in Layout eingebunden
- [ ] `npm run dev` erfolgreich

### Layout

- [ ] `layouts/app.blade.php` mit Sidebar/Topbar erstellt
- [ ] `layouts/sidebar.blade.php` für Navigation
- [ ] `layouts/topbar.blade.php` für Header
- [ ] `layouts/toasts.blade.php` für Notifications

### Komponenten

- [ ] `components/button.blade.php`
- [ ] `components/card.blade.php`
- [ ] `components/badge.blade.php`
- [ ] `components/alert.blade.php`
- [ ] `components/input.blade.php`

---

## 🔗 Ressourcen & Links

### Demo-Seiten

| Seite | URL | Inhalt |
|-------|-----|--------|
| Dashboard | `/index.html` | Übersicht, Stats, Quick Actions |
| Elemente | `/pages/elements.html` | Buttons, Modals, Dropdowns, Tooltips |
| Tabellen | `/pages/tables.html` | Standard, Sortierbar, Kompakt, Striped |
| Formulare | `/pages/forms.html` | Inputs, Selects, Checkboxes, Filter, Searchable Select |
| Benachrichtigungen | `/pages/notifications.html` | Alerts, Toasts, Badges, Progress Bars |
| Panels | `/pages/panels.html` | Grid-Layouts, Cards, Tabs, Accordion |
| Navigation | `/pages/navigation.html` | Header, Sidebar, Footer, Breadcrumbs |
| Daten-Viz | `/pages/data-viz.html` | KPI Cards, Stats, Chart-Container |
| Loading | `/pages/loading-states.html` | Skeleton Loaders, Spinners, Empty States |
| User-Elemente | `/pages/user-elements.html` | Avatars, Profile Cards, Status |
| Erweiterte Inputs | `/pages/advanced-inputs.html` | File Upload, Date Picker, Slider, Color Picker |
| Workflows | `/pages/workflows.html` | Stepper, Wizard, Progress Tracking |
| Listen & Feeds | `/pages/lists-feeds.html` | Activity Timeline, Comments, Logs |
| Context-Aktionen | `/pages/context-actions.html` | Context Menu, Bulk Actions, Inline Edit |

### Datei-Referenzen

**Projekt-Verzeichnis:** `/Users/smarqua/cursor-projects/tailwind-example`

| Datei | Pfad | Beschreibung |
|-------|------|--------------|
| Tailwind Config | `tailwind.config.js` | Theme, Colors, Fonts |
| CSS Components | `src/styles/globals.css` | 50+ Component Classes |
| Alpine.js Setup | `src/main.js` | Stores, Initialisierung |
| Package Config | `package.json` | Dependencies |
| Vite Config | `vite.config.js` | Build-Setup |
| Dokumentation | `docs/USAGE.md` | Verwendungsanleitung |

---

## 🎓 Best Practices

### 1. Konsistente Abstände

```html
<!-- Card/Panel Padding -->
<div class="p-4">Standard Padding</div>

<!-- Grids -->
<div class="grid gap-4">Standard Gap</div>

<!-- Vertikale Abstände -->
<div class="space-y-4">Standard Spacing</div>
```

### 2. Button-Hierarchie

- **Primary:** Hauptaktion (1x pro Bereich)
- **Secondary:** Alternative Aktion
- **Ghost:** Tertiäre Aktion
- **Danger:** Destruktive Aktion (Löschen, etc.)

### 3. Farbverwendung

- **brand-primary:** Links, Aktionen, Focus-States
- **brand-dark:** Text, Icons (neutral)
- **brand-light:** Backgrounds, Subtle Highlights
- **ui-success/warning/error/info:** Nur für semantische States

### 4. Responsive Breakpoints

```html
<!-- Tailwind Breakpoints -->
sm: 640px   (Mobile Landscape)
md: 768px   (Tablet)
lg: 1024px  (Desktop) ← Primary Target
xl: 1280px  (Large Desktop)
```

**Fokus:** Desktop-first (min. 1024px), dann nach unten optimieren

### 5. Accessibility

```html
<!-- Focus States sind eingebaut -->
<button class="btn-primary">
  <!-- Automatisch: focus:ring-2 focus:ring-brand-primary -->
</button>

<!-- Keyboard Navigation -->
<div @keydown.escape.window="close()">...</div>
<input @keydown.enter="submit()">

<!-- ARIA Labels -->
<button aria-label="Schließen">×</button>
```

---

## 🔄 Updates & Maintenance

### Neue Komponente hinzufügen

1. CSS-Klasse in `globals.css` unter `@layer components` hinzufügen
2. Demo-Beispiel auf passender Unterseite ergänzen
3. Dokumentation hier aktualisieren

### Farben ändern

1. `tailwind.config.js` → `theme.extend.colors` anpassen
2. Rebuild: `npm run build`
3. Testen auf allen Demo-Seiten

### Versioning

- **Major:** Breaking Changes (z.B. Klassen umbenannt)
- **Minor:** Neue Komponenten
- **Patch:** Bug-Fixes, kleine Verbesserungen

---

## 💡 Tipps für AI-Assistenten (Cursor)

### Cursor Rules Integration

Füge zu `.cursorrules` hinzu:

```
# Trafficdesign UI Kit
Verwende das Design System aus DESIGN-SYSTEM.md
- Brand Colors: #00B3C7 (primary), #333333 (dark), #E5F2F3 (light)
- CSS-Klassen aus globals.css (btn-*, card-*, input-*, etc.)
- Alpine.js für Interaktivität
- Basis-Schriftgröße: 14px (text-sm)
- Referenz: /Users/smarqua/cursor-projects/tailwind-example
```

### Quick Commands

Beim Erstellen neuer Features:

```
"Erstelle ein User-Dashboard mit dem Trafficdesign UI Kit"
"Füge eine Tabelle im Trafficdesign-Style hinzu"
"Erstelle ein Modal mit brand-primary Buttons"
```

Der AI-Assistent wird dann automatisch die richtigen Klassen und Patterns verwenden.

---

## 📞 Support

**Fragen? Problem?**
1. Schaue in die Demo-Seiten: `http://localhost:3000`
2. Prüfe `docs/USAGE.md` für Details
3. Inspiziere `src/styles/globals.css` für Klassen-Definitionen

---

**Version 1.0.0** | © 2024 Trafficdesign | MIT License

