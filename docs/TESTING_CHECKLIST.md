# BalaFood Release Checklist

## Automated checks

- Run `node tests/validate-data.js`.
- Run `node --check app.js`.
- Run `node --check recipes-data.js`.
- Run `node --check extra-recipes.js`.
- Run `node --check food-translations.js`.

## Language and catalogue

- Switch between Kazakh, Russian, and English.
- Search for dishes and ingredients in each language.
- Open all 14 categories and confirm that 381 cards are reported.
- Confirm that duplicate dish names are distinguishable by card number and serving output.

## Calculations

- Test 1, 25, and 500 children.
- Test one, two, and three servings per child.
- Confirm conversion from grams to kilograms and millilitres to litres.
- Confirm that recipe card 351 uses 90 g of plums for a 100 g output.

## Daily menu

- Add multiple dishes to breakfast, lunch, and dinner.
- Remove individual dishes and clear the full menu.
- Refresh the page and confirm that the saved menu returns.
- Check the combined ingredient and nutrition totals.

## Exports

- Print one recipe and save it as PDF.
- Export one recipe as Word-compatible `.doc` and Excel-compatible `.xls`.
- Repeat all exports for a complete daily menu.
- Confirm that exported text follows the selected language.

## Responsive layout

- Test desktop, tablet, and phone widths.
- Confirm that no page has horizontal scrolling.
- Confirm that the recipe catalogue, controls, and export buttons remain usable by keyboard.
