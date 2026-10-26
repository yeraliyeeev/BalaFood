# BalaFood

**Developed by Assylkhan Yeraliyev**

BalaFood is a trilingual kindergarten meal-planning calculator that scales ingredient quantities for any group size. It combines a searchable catalogue of technological recipe cards with daily menu planning, nutrition summaries, and printable or downloadable ingredient lists.

## Project impact

BalaFood began in 2024 as a 30-page Excel system created to simplify kindergarten menu calculations. The spreadsheet version was purchased by more than 35 kindergartens and generated approximately ₸700,000 in revenue. The project later evolved into this browser-based application.

## Live application

- **Website:** [yeraliyeeev.github.io/BalaFood](https://yeraliyeeev.github.io/BalaFood/)
- **Source code:** [github.com/yeraliyeeev/BalaFood](https://github.com/yeraliyeeev/BalaFood)

The application runs entirely in the browser. It does not require an account and does not send menu data to a server.

## Languages

- Kazakh
- Russian
- English

## Features

- Searchable catalogue of 381 recipe cards across 14 categories
- Search by dish or ingredient in three languages
- Automatic ingredient scaling for 1–500 children
- Gram-to-kilogram and millilitre-to-litre conversion
- Breakfast, lunch, and dinner menu builder
- Multiple dishes within each meal category
- Combined daily ingredient list
- Per-serving macro- and micronutrient summaries
- Age-based nutrition comparison for ages 1–2 and 3–6
- Local browser storage for language and menu preferences
- Printable meal plans with Save as PDF support
- Word-compatible `.doc` and Excel-compatible `.xls` exports
- Responsive desktop and mobile layout

## Technology

- Semantic HTML5
- Responsive CSS
- Vanilla JavaScript
- Browser Local Storage
- GitHub Pages

No framework, backend, account, tracking script, or external analytics service is required.

## Run locally

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Start `index.html` with the **Live Server** extension.

The site can also be opened directly from `index.html`, although a local server is recommended for development.

## Validate the recipe data

Run the built-in validator with Node.js:

```bash
node tests/validate-data.js
```

It checks recipe counts, unique IDs, categories, ingredient quantities, nutrition values, and translation coverage.

## Project structure

```text
index.html            Page structure and accessible controls
styles.css            Visual design, responsive layout, and print styles
app.js                Calculator, menus, exports, nutrition, and translations
recipes-data.js       Core recipe-card dataset
extra-recipes.js      Additional recipe cards and translations
food-translations.js  Kazakh and English dish-name translations
tests/                 Automated data-integrity checks
```

## Data and health notice

Base quantities and dish values are derived from technological recipe cards used for preschool meal planning. Nutrition reference values link to NIH/NASEM dietary reference information. BalaFood is a planning aid, not medical advice; kindergartens should verify menus, allergens, serving standards, and newly added cards with their responsible medical or nutrition specialist.

## Privacy

Menu selections are stored only in the user's browser through Local Storage. BalaFood does not collect names, email addresses, analytics, or personal information.

## Portfolio summary

BalaFood demonstrates product design, multilingual interface development, structured food-data processing, proportional calculations, browser-based document export, responsive design, and the conversion of a working spreadsheet product into a public web application.

## Copyright

Copyright © 2026 Assylkhan Yeraliyev. All rights reserved.
