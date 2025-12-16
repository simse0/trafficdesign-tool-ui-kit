Richte ein neues Laravel-Projekt "[PROJEKTNAME]" mit dem Trafficdesign Tool UI Kit ein.

PROJEKTZIEL:
[Beschreibe hier kurz: Was soll das Projekt machen?]

SETUP:

1. Neues Laravel-Projekt erstellen und Breeze installieren:
   laravel new [PROJEKTNAME]
   cd [PROJEKTNAME]
   composer require laravel/breeze --dev
   php artisan breeze:install blade
   npm install

2. UI Kit Dateien laden:
   curl -o .cursorrules https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/.cursorrules
   curl -o DESIGN-SYSTEM.md https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/DESIGN-SYSTEM.md
   curl -o tailwind.config.js https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/tailwind.config.js
   curl -o resources/css/app.css https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/src/styles/globals.css

3. Alpine.js Store aus main.js zu resources/js/app.js hinzufügen:
   https://raw.githubusercontent.com/simse0/trafficdesign-tool-ui-kit/main/src/main.js

4. Inter Font im Layout einbinden

5. MySQL konfigurieren (.env)

6. Layouts erstellen nach DESIGN-SYSTEM.md:
   - resources/views/layouts/app.blade.php (Sidebar + Topbar + Content + Footer + Toasts)
   - Blade-Komponenten: button, card, badge, alert, input, avatar

7. Dokumentation anlegen:
   - README.md
   - docs/ARCHITECTURE.md
   - docs/features/ (für Feature-Dokumentation)

Lies die DESIGN-SYSTEM.md und nutze ausschließlich die dortigen Komponenten und Farben.

Los geht's!