# BalaFood

BalaFood is a trilingual kindergarten meal calculator. It contains 345 technological recipe cards and calculates the required ingredient quantities for any number of children.

## Languages

- Kazakh
- Russian
- English

## Features

- Searchable catalogue of 345 dishes
- 14 food categories
- Search by dish or ingredient
- Automatic ingredient scaling
- Gram-to-kilogram conversion
- Printable ingredient lists
- Meal-plan export to Word and Excel
- Print dialogue with Save as PDF support
- Daily menu builder for breakfast, lunch, and dinner
- Multiple dishes in each meal category
- Combined daily ingredient list
- Browser storage that keeps the menu after refresh
- Vitamin and mineral totals for the daily menu
- Age-based nutrient progress for ages 1–2 and 3–6
- Responsive design for computers and phones

## Open the project in Visual Studio Code

1. Extract `BalaFood.zip`.
2. Open Visual Studio Code.
3. Select **File → Open Folder**.
4. Choose the extracted `BalaFood` folder.
5. Install the **Live Server** extension if you do not already have it.
6. Open `index.html`.
7. Click **Go Live** in the bottom-right corner of Visual Studio Code.

You can also double-click `index.html`, but Live Server is recommended while developing.

## Project files

- `index.html` — page structure
- `styles.css` — design and responsive layout
- `app.js` — calculator, search, filters, and translations
- `recipes-data.js` — dishes and ingredient quantities

## Upload to GitHub

Open the Visual Studio Code terminal and run:

```bash
git init
git add .
git commit -m "Initial BalaFood website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/balafood.git
git push -u origin main
```

Create an empty repository called `balafood` on GitHub before running the last two commands. Replace `YOUR_USERNAME` with your GitHub username.

## Data source

The recipe catalogue was extracted from the 2025–2026 collection of technological cards for a standard preschool menu by the Kazakh Academy of Nutrition, National Center for Healthy Nutrition, and UNICEF.
