# Etch-Nodes – Entwicklungsumgebung

Referenz für den technischen Stack und die Konventionen, auf denen die Nodes in diesem Repository aufbauen. Wird als Kontext für die Weiterentwicklung mit Claude genutzt.

## Stack

| Baustein | Zweck | Doku |
| --- | --- | --- |
| WordPress | CMS-Basis | – |
| **Etch** | Visueller "Unified Visual Development Environment" für WordPress. Erzeugt echtes, semantisches HTML/CSS/PHP/JS statt proprietärem Builder-Markup und erstellt automatisch passende Gutenberg-Blöcke. | [docs.etchwp.com](https://docs.etchwp.com/) |
| **Automatic.css v4 (ACSS)** | CSS-Framework/Design-System mit Utility-Klassen, Design-Tokens, automatischen Farbrelationen und fluid-responsivem Spacing. Bindet sich direkt in Etch ein ("True Builder Integration"), keine Zusatz-Plugins nötig. | [docs.automaticcss.com](https://docs.automaticcss.com/) (Version 4) |
| **OhMyEtch** | Komponentenbibliothek mit atomaren, "headless-style" Bausteinen (Accordion, Dialog, Tabs u. a.) – zugängliches Verhalten/Interaktionslogik, aber bewusst wenig visuelle Vorgaben. Dazu Facet-Komponenten für Filter/Suche und WooCommerce-Atome (Warenkorb, Checkout). | [docs.ohmyetch.com](https://docs.ohmyetch.com/) |
| **EtchSliderPro** | Komponentenbasiertes Slider-/Carousel-System für Etch, auf Basis von Splide. Slider werden aus wiederverwendbaren Teilen (Wrapper, Track, Navigation, Fortschrittsanzeige) zusammengesetzt, ohne Code zu schreiben. | [design-with-cracka.gitbook.io/etchsliderpro](https://design-with-cracka.gitbook.io/etchsliderpro/) |
| **EtchMegaMenuPro** | Premium-Navigationssystem für Etch – von einfachen responsiven Menüs bis zu Mega-Menüs mit Animationen, Mobile-Optimierung und flexibler Logo-Positionierung. | [design-with-cracka.gitbook.io/etchmegamenupro](https://design-with-cracka.gitbook.io/etchmegamenupro/) |
| **Meta Box** | Framework zum Erstellen eigener Felder/Meta-Boxen für Beiträge, Benutzerprofile, Einstellungsseiten usw., inkl. API zur Datenverwaltung. | [docs.metabox.io](https://docs.metabox.io/) |

## Konventionen

- **Navigationselemente:** Klassennamen nach **BEM** (`block__element--modifier`), z. B. `main-nav__item--active`.

<!-- Weitere Konventionen (Node-Namensschema, Ordnerstruktur, Naming für ACSS-Variablen usw.) hier ergänzen. -->
