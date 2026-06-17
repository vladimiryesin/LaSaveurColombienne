# La Saveur Colombienne Redesign

This is a static, modern restaurant website concept for La Saveur Colombienne in Sainte-Rose, Laval.

## What Changed

- Replaced the sparse landing page with a food-first one-page site.
- Reused the current logo, hero banner, ordering background, and food photos from the existing website.
- Added real restaurant details: address, phone, opening hours, pickup/delivery order path, and the full scraped menu from the current ordering flow.
- Made the site trilingual: French Canada default, English, and Colombian Spanish.
- Added practical guest actions: online ordering, table requests, catering requests, phone CTA, directions, Google profile/gallery link, and embedded map.
- Added delivery buttons for DoorDash, SkipTheDishes, and Uber Eats with local logo assets.
- Added basic SEO with restaurant structured data.

## Suggested Functionality

- Connect the request form to an inbox, SMS workflow, Google Calendar, Resy, or OpenTable.
- Replace the DoorDash search URL with the exact restaurant store URL if DoorDash publishes a stable listing.
- Add catering packages with per-person pricing, lead-time rules, and a file/photo upload for event references.
- Connect the language switcher to professionally reviewed translations before launch.
- Move the menu data into a small CMS or JSON endpoint so staff can update prices without editing JavaScript.

## Files

- `index.html` - page markup and restaurant SEO data
- `styles.css` - responsive visual design
- `script.js` - translations, full menu data, menu filters, open status, and request form behavior
- `assets/images/` - media reused from the current website

## Preview

Open `index.html` directly, or run a local static server:

```sh
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

Language QA shortcuts:

- `http://localhost:4173/` - French Canada default
- `http://localhost:4173/?lang=en` - English
- `http://localhost:4173/?lang=es-CO` - Colombian Spanish
