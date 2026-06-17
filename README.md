# La Saveur Colombienne Redesign

This is a static, modern restaurant website concept for La Saveur Colombienne in Sainte-Rose, Laval.

## What Changed

- Replaced the sparse landing page with a food-first one-page site.
- Reused the current logo, hero banner, ordering background, and food photos from the existing website.
- Added real restaurant details: address, phone, opening hours, delivery order paths, and the full scraped menu from the current ordering flow.
- Made the site trilingual: French Canada default, English, and Colombian Spanish.
- Added practical guest actions: online ordering, table requests, catering requests, phone CTA, directions, Google profile/gallery link, and embedded map.
- Added delivery buttons for DoorDash, SkipTheDishes, and Uber Eats with local logo assets.
- Added basic SEO with restaurant structured data.

## Suggested Functionality

- Connect the request form to an inbox, SMS workflow, Google Calendar, Resy, or OpenTable.
- Replace the DoorDash search URL with the exact restaurant store URL if DoorDash publishes a stable listing.
- Add catering packages with per-person pricing, lead-time rules, and a file/photo upload for event references.
- Connect the language files to professionally reviewed translations before launch.
- Move the JSON content files into a small CMS if staff should edit menu/prices from an admin screen.

## Files

- `index.html` - page markup and restaurant SEO data
- `styles.css` - responsive visual design
- `script.js` - JSON loader, translation renderer, menu filters, open status, and request form behavior
- `locales/` - editable page copy for French Canada, English, and Colombian Spanish
- `data/menu.json` - editable menu categories, items, prices, and translated descriptions
- `data/site.json` - editable locale list, hours, and delivery platform links/logos
- `assets/images/` - media reused from the current website

## Preview

Run a local static server:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

The site fetches JSON files for content and localization, so preview it through HTTP rather than opening `index.html` directly.

## Editing Localization

- Page copy lives in `locales/fr-CA.json`, `locales/en.json`, and `locales/es-CO.json`.
- Menu content lives in `data/menu.json`.
- Languages, hours, and delivery platforms live in `data/site.json`.
- To add a language, add a locale entry in `data/site.json`, create a matching `locales/{code}.json`, and add translated menu descriptions in `data/menu.json`.

Language QA shortcuts:

- `http://localhost:4173/` - French Canada default
- `http://localhost:4173/?lang=en` - English
- `http://localhost:4173/?lang=es-CO` - Colombian Spanish
