const fs = require("node:fs");
const vm = require("node:vm");

const context = { window: {} };
vm.createContext(context);

for (const filename of ["recipes-data.js", "extra-recipes.js", "food-translations.js"]) {
  const source = fs.readFileSync(filename, "utf8");
  vm.runInContext(source, context, { filename });
}

const recipes = context.window.BALAFOOD_RECIPES;
const names = context.window.BALAFOOD_FOOD_NAMES;
const errors = [];

if (!Array.isArray(recipes)) errors.push("Recipe data did not load.");
if (recipes.length !== 381) errors.push(`Expected 381 recipes; found ${recipes.length}.`);
if (new Set(recipes.map(recipe => recipe.id)).size !== recipes.length) errors.push("Recipe IDs are not unique.");

const categories = new Set(recipes.map(recipe => recipe.category));
if (categories.size !== 14) errors.push(`Expected 14 categories; found ${categories.size}.`);

for (const recipe of recipes) {
  if (!Number.isInteger(recipe.id) || recipe.id < 1) errors.push(`Invalid recipe ID: ${recipe.id}`);
  if (!recipe.name || !recipe.category) errors.push(`Recipe ${recipe.id} is missing a name or category.`);
  if (!Number.isFinite(recipe.output) || recipe.output <= 0) errors.push(`Recipe ${recipe.id} has invalid output.`);
  if (!Array.isArray(recipe.ingredients) || !recipe.ingredients.length) errors.push(`Recipe ${recipe.id} has no ingredients.`);
  if (!names[recipe.name]?.kk || !names[recipe.name]?.en) errors.push(`Recipe ${recipe.id} is missing a dish translation.`);

  for (const ingredient of recipe.ingredients || []) {
    if (!ingredient.name || !ingredient.unit || !Number.isFinite(ingredient.amount) || ingredient.amount < 0) {
      errors.push(`Recipe ${recipe.id} has an invalid ingredient.`);
    }
  }

  const ingredientTotal = (recipe.ingredients || []).reduce((sum, ingredient) => sum + ingredient.amount, 0);
  if (ingredientTotal > recipe.output * 5) errors.push(`Recipe ${recipe.id} has an implausible ingredient-to-output ratio.`);

  for (const [key, value] of Object.entries(recipe.nutrients || {})) {
    if (!Number.isFinite(value) || value < 0) errors.push(`Recipe ${recipe.id} has an invalid ${key} value.`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${recipes.length} recipes, ${categories.size} categories, unique IDs, ingredient data, nutrition values, and translations.`);
