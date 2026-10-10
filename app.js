const recipes = window.BALAFOOD_RECIPES || [];

const translations = {
  en: {
    heroEyebrow: "MEAL PLANNING, MADE SIMPLE", heroTitle: "The right amount.", heroAccent: "For every child.", heroIntro: "Choose a dish and group size. BalaFood instantly prepares the ingredient quantities your kindergarten needs.", calculator: "CALCULATOR", planMeal: "Plan a meal", dish: "Dish", children: "Number of children", mealsPerChild: "Meals per child", tip: "Amounts come from the official technological recipe cards.", ingredientList: "INGREDIENT LIST", servings: "servings", totalWeight: "Total ingredient weight", print: "Print", downloadPdf: "Save PDF", downloadWord: "Word", downloadExcel: "Excel", exportHint: "Download or print this calculated meal plan.", ingredient: "Ingredient", perServing: "Per child", requiredAmount: "Required amount", mealPlan: "Meal plan", nextEyebrow: "WHAT COMES NEXT", nextTitle: "Built to grow with your kindergarten.", recipeLibrary: "Recipe library", recipeLibraryText: "All available dishes from the preschool nutrition collection.", weeklyMenu: "Weekly menu", weeklyMenuText: "Plan five days and combine everything into one list.", costs: "Costs & nutrition", costsText: "Track the budget and nutrition for each child.", footer: "Made for healthier, simpler kindergarten meals.", perChild: "per child", serving: "serving", servingPlural: "servings", allDishes: "Open all dishes", recipeDatabase: "RECIPE DATABASE", chooseDish: "Choose a dish", searchPlaceholder: "Search dishes or ingredients…", allCategories: "All categories", found: "dishes found", noResults: "No matching dishes found", card: "Card", ingredients: "ingredients",
    categories: { salads: "Salads", porridge: "Porridge", soups: "Soups", meat: "Meat dishes", fish: "Fish dishes", sides: "Side dishes", vegetables: "Vegetable dishes", eggs: "Egg dishes", cottageCheese: "Cottage cheese", flour: "Flour dishes", gastronomy: "Gastronomy", drinks: "Drinks", fruit: "Fruit", sauces: "Sauces", other: "Other" }
  },
  ru: {
    heroEyebrow: "ПЛАНИРОВАНИЕ ПИТАНИЯ БЕЗ СЛОЖНОСТЕЙ", heroTitle: "Точное количество.", heroAccent: "Для каждого ребёнка.", heroIntro: "Выберите блюдо и количество детей. BalaFood мгновенно рассчитает необходимые ингредиенты для детского сада.", calculator: "КАЛЬКУЛЯТОР", planMeal: "Рассчитать питание", dish: "Блюдо", children: "Количество детей", mealsPerChild: "Порций на ребёнка", tip: "Количество взято из официальных технологических карт.", ingredientList: "СПИСОК ИНГРЕДИЕНТОВ", servings: "порций", totalWeight: "Общий вес ингредиентов", print: "Печать", downloadPdf: "Сохранить PDF", downloadWord: "Word", downloadExcel: "Excel", exportHint: "Скачайте или распечатайте рассчитанный план питания.", ingredient: "Ингредиент", perServing: "На ребёнка", requiredAmount: "Необходимое количество", mealPlan: "План питания", nextEyebrow: "СЛЕДУЮЩИЕ ВОЗМОЖНОСТИ", nextTitle: "BalaFood растёт вместе с вашим детским садом.", recipeLibrary: "Библиотека рецептов", recipeLibraryText: "Все доступные блюда из сборника дошкольного питания.", weeklyMenu: "Меню на неделю", weeklyMenuText: "Планируйте пять дней и объединяйте продукты в один список.", costs: "Стоимость и питание", costsText: "Контролируйте бюджет и пищевую ценность для каждого ребёнка.", footer: "Для простого и здорового питания в детском саду.", perChild: "на ребёнка", serving: "порция", servingPlural: "порции", allDishes: "Открыть все блюда", recipeDatabase: "БАЗА РЕЦЕПТОВ", chooseDish: "Выберите блюдо", searchPlaceholder: "Поиск блюд или ингредиентов…", allCategories: "Все категории", found: "блюд найдено", noResults: "Подходящие блюда не найдены", card: "Карта", ingredients: "ингредиентов",
    categories: { salads: "Салаты", porridge: "Каши", soups: "Супы", meat: "Мясные блюда", fish: "Рыбные блюда", sides: "Гарниры", vegetables: "Овощные блюда", eggs: "Блюда из яиц", cottageCheese: "Блюда из творога", flour: "Блюда из муки", gastronomy: "Гастрономия", drinks: "Напитки", fruit: "Фрукты", sauces: "Соусы", other: "Другое" }
  },
  kk: {
    heroEyebrow: "ТАҒАМДЫ ОҢАЙ ЖОСПАРЛАУ", heroTitle: "Дәл мөлшер.", heroAccent: "Әр балаға.", heroIntro: "Тағамды және балалар санын таңдаңыз. BalaFood балабақшаға қажетті азық-түлік мөлшерін бірден есептейді.", calculator: "КАЛЬКУЛЯТОР", planMeal: "Тағамды есептеу", dish: "Тағам", children: "Балалар саны", mealsPerChild: "Бір балаға порция", tip: "Мөлшер ресми технологиялық карталардан алынған.", ingredientList: "АЗЫҚ-ТҮЛІК ТІЗІМІ", servings: "порция", totalWeight: "Азық-түліктің жалпы салмағы", print: "Басып шығару", downloadPdf: "PDF сақтау", downloadWord: "Word", downloadExcel: "Excel", exportHint: "Есептелген тамақ жоспарын жүктеп алыңыз немесе басып шығарыңыз.", ingredient: "Азық-түлік", perServing: "Бір балаға", requiredAmount: "Қажетті мөлшер", mealPlan: "Тамақ жоспары", nextEyebrow: "КЕЛЕСІ МҮМКІНДІКТЕР", nextTitle: "BalaFood балабақшаңызбен бірге дамиды.", recipeLibrary: "Рецепттер жинағы", recipeLibraryText: "Мектепке дейінгі тамақтану жинағындағы барлық тағамдар.", weeklyMenu: "Апталық мәзір", weeklyMenuText: "Бес күнді жоспарлап, азық-түлікті бір тізімге біріктіріңіз.", costs: "Баға және құндылық", costsText: "Әр балаға арналған бюджет пен тағамдық құндылықты бақылаңыз.", footer: "Балабақшадағы пайдалы әрі оңай тамақтану үшін.", perChild: "бір балаға", serving: "порция", servingPlural: "порция", allDishes: "Барлық тағамды ашу", recipeDatabase: "РЕЦЕПТТЕР БАЗАСЫ", chooseDish: "Тағамды таңдаңыз", searchPlaceholder: "Тағам немесе азық-түлік іздеу…", allCategories: "Барлық санат", found: "тағам табылды", noResults: "Сәйкес тағам табылмады", card: "Карта", ingredients: "азық-түлік",
    categories: { salads: "Салаттар", porridge: "Ботқалар", soups: "Сорпалар", meat: "Ет тағамдары", fish: "Балық тағамдары", sides: "Гарнирлер", vegetables: "Көкөніс тағамдары", eggs: "Жұмыртқа тағамдары", cottageCheese: "Сүзбе тағамдары", flour: "Ұн тағамдары", gastronomy: "Гастрономия", drinks: "Сусындар", fruit: "Жемістер", sauces: "Тұздықтар", other: "Басқа" }
  }
};

Object.assign(translations.en, { addToMenu: "Add selected dish to menu", addDish: "Add dish", breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner", dailyMenuEyebrow: "DAILY MENU BUILDER", dailyMenuTitle: "Plan the whole day.", dailyMenuIntro: "Add several dishes to breakfast, lunch, and dinner. BalaFood combines all ingredients automatically.", menuDate: "Menu date", combinedList: "COMBINED LIST", ingredientsForDay: "Ingredients for the day", clearMenu: "Clear menu", printMenu: "Print menu", emptyMeal: "No dishes yet. Select a dish above and add it here." });
Object.assign(translations.ru, { addToMenu: "Добавить выбранное блюдо в меню", addDish: "Добавить", breakfast: "Завтрак", lunch: "Обед", dinner: "Ужин", dailyMenuEyebrow: "МЕНЮ НА ДЕНЬ", dailyMenuTitle: "Спланируйте весь день.", dailyMenuIntro: "Добавьте несколько блюд на завтрак, обед и ужин. BalaFood автоматически объединит все ингредиенты.", menuDate: "Дата меню", combinedList: "ОБЩИЙ СПИСОК", ingredientsForDay: "Ингредиенты на день", clearMenu: "Очистить меню", printMenu: "Печать меню", emptyMeal: "Пока нет блюд. Выберите блюдо выше и добавьте его сюда." });
Object.assign(translations.kk, { addToMenu: "Таңдалған тағамды мәзірге қосу", addDish: "Қосу", breakfast: "Таңғы ас", lunch: "Түскі ас", dinner: "Кешкі ас", dailyMenuEyebrow: "БІР КҮНДІК МӘЗІР", dailyMenuTitle: "Күндік мәзірді жоспарлаңыз.", dailyMenuIntro: "Таңғы, түскі және кешкі асқа бірнеше тағам қосыңыз. BalaFood барлық азық-түлікті автоматты түрде біріктіреді.", menuDate: "Мәзір күні", combinedList: "ЖАЛПЫ ТІЗІМ", ingredientsForDay: "Бір күнге қажетті азық-түлік", clearMenu: "Мәзірді тазарту", printMenu: "Мәзірді басып шығару", emptyMeal: "Әзірше тағам жоқ. Жоғарыдан тағамды таңдап, осы жерге қосыңыз." });
Object.assign(translations.en, { nutritionResults: "NUTRITION RESULTS", vitaminsAndMinerals: "Vitamins and minerals", ageStandard: "Age standard", nutritionSource: "Reference intakes: NIH/NASEM dietary reference intakes. Dish values: technological recipe cards.", viewSource: "View source" });
Object.assign(translations.ru, { nutritionResults: "ПИЩЕВАЯ ЦЕННОСТЬ", vitaminsAndMinerals: "Витамины и минералы", ageStandard: "Норма по возрасту", nutritionSource: "Нормы потребления: рекомендации NIH/NASEM. Показатели блюд: технологические карты.", viewSource: "Источник" });
Object.assign(translations.kk, { nutritionResults: "ТАҒАМДЫҚ ҚҰНДЫЛЫҚ", vitaminsAndMinerals: "Дәрумендер мен минералдар", ageStandard: "Жас бойынша норма", nutritionSource: "Тұтыну нормалары: NIH/NASEM ұсынымдары. Тағам көрсеткіштері: технологиялық карталар.", viewSource: "Дереккөз" });
Object.assign(translations.en, { nutritionIncomplete: "Some selected recipe cards do not contain every micronutrient value, so totals marked as zero may be incomplete." });
Object.assign(translations.ru, { nutritionIncomplete: "В некоторых выбранных технологических картах указаны не все микронутриенты, поэтому нулевые значения могут быть неполными." });
Object.assign(translations.kk, { nutritionIncomplete: "Кейбір таңдалған технологиялық карталарда барлық микронутриент көрсетілмеген, сондықтан нөлдік мәндер толық болмауы мүмкін." });
Object.assign(translations.en, { belowTarget: "Below target · under 75%", nearTarget: "Near target · 75–119%", aboveTarget: "Above target · 120%+" });
Object.assign(translations.ru, { belowTarget: "Ниже нормы · менее 75%", nearTarget: "Близко к норме · 75–119%", aboveTarget: "Выше нормы · 120%+" });
Object.assign(translations.kk, { belowTarget: "Нормадан төмен · 75%-дан аз", nearTarget: "Нормаға жақын · 75–119%", aboveTarget: "Нормадан жоғары · 120%+" });
Object.assign(translations.en, { tip: "Base amounts come from recipe cards. New cards must be approved by the kindergarten medical specialist before use." });
Object.assign(translations.ru, { tip: "Базовые нормы взяты из технологических карт. Новые карты перед применением должен утвердить медицинский работник детского сада." });
Object.assign(translations.kk, { tip: "Негізгі мөлшерлер технологиялық карталардан алынған. Жаңа карталарды қолданар алдында балабақшаның медицина қызметкері бекітуі керек." });
Object.assign(translations.en, { perServingNutrition: "PER-SERVING NUTRITION", basicInfo: "Basic information", micronutrients: "Micronutrients", weight: "Weight", calories: "Calories" });
Object.assign(translations.ru, { perServingNutrition: "НА ОДНУ ПОРЦИЮ", basicInfo: "Базовая информация", micronutrients: "Микронутриенты", weight: "Вес", calories: "Ккал" });
Object.assign(translations.kk, { perServingNutrition: "БІР ПОРЦИЯҒА", basicInfo: "Негізгі ақпарат", micronutrients: "Микронутриенттер", weight: "Салмақ", calories: "Ккал" });

const nutrientMeta = {
  kcal: { unit: "kcal", en: "Calories", ru: "Ккал", kk: "Ккал" }, protein: { unit: "g", en: "Protein", ru: "Белки", kk: "Ақуыз" }, fat: { unit: "g", en: "Fat", ru: "Жиры", kk: "Майлар" }, carbs: { unit: "g", en: "Carbohydrates", ru: "Углеводы", kk: "Көмірсулар" }, water: { unit: "L", en: "Water", ru: "Вода", kk: "Су" }, fiber: { unit: "g", en: "Dietary fiber", ru: "Пищевые волокна", kk: "Тағамдық талшық" },
  vitaminA: { unit: "µg", en: "Vitamin A", ru: "Витамин A", kk: "A дәрумені" }, vitaminD: { unit: "µg", en: "Vitamin D", ru: "Витамин D", kk: "D дәрумені" }, vitaminE: { unit: "mg", en: "Vitamin E", ru: "Витамин E", kk: "E дәрумені" }, vitaminK: { unit: "µg", en: "Vitamin K", ru: "Витамин K", kk: "K дәрумені" }, vitaminC: { unit: "mg", en: "Vitamin C", ru: "Витамин C", kk: "C дәрумені" },
  vitaminB1: { unit: "mg", en: "Vitamin B1", ru: "Витамин B1", kk: "B1 дәрумені" }, vitaminB2: { unit: "mg", en: "Vitamin B2", ru: "Витамин B2", kk: "B2 дәрумені" }, vitaminB3: { unit: "mg", en: "Vitamin B3", ru: "Витамин B3", kk: "B3 дәрумені" }, vitaminB5: { unit: "mg", en: "Vitamin B5", ru: "Витамин B5", kk: "B5 дәрумені" }, vitaminB6: { unit: "mg", en: "Vitamin B6", ru: "Витамин B6", kk: "B6 дәрумені" }, vitaminB7: { unit: "µg", en: "Vitamin B7", ru: "Витамин B7", kk: "B7 дәрумені" }, vitaminB9: { unit: "µg", en: "Vitamin B9", ru: "Витамин B9", kk: "B9 дәрумені" }, vitaminB12: { unit: "µg", en: "Vitamin B12", ru: "Витамин B12", kk: "B12 дәрумені" },
  calcium: { unit: "mg", en: "Calcium", ru: "Кальций", kk: "Кальций" }, phosphorus: { unit: "mg", en: "Phosphorus", ru: "Фосфор", kk: "Фосфор" }, magnesium: { unit: "mg", en: "Magnesium", ru: "Магний", kk: "Магний" }, potassium: { unit: "mg", en: "Potassium", ru: "Калий", kk: "Калий" }, iron: { unit: "mg", en: "Iron", ru: "Железо", kk: "Темір" }, zinc: { unit: "mg", en: "Zinc", ru: "Цинк", kk: "Мырыш" }, copper: { unit: "µg", en: "Copper", ru: "Медь", kk: "Мыс" }, iodine: { unit: "µg", en: "Iodine", ru: "Йод", kk: "Йод" }, sodium: { unit: "g", en: "Sodium", ru: "Натрий", kk: "Натрий" }
};

const nutrientStandards = {
  "1-2": { kcal: 1000, protein: 13, fat: 35, carbs: 130, water: 1.3, fiber: 19, vitaminA: 300, vitaminD: 15, vitaminE: 6, vitaminK: 30, vitaminC: 15, vitaminB1: .5, vitaminB2: .5, vitaminB3: 6, vitaminB5: 2, vitaminB6: .5, vitaminB7: 8, vitaminB9: 150, vitaminB12: .9, calcium: 700, phosphorus: 460, magnesium: 80, potassium: 2000, iron: 7, zinc: 3, copper: 340, iodine: 90, sodium: .8 },
  "3-6": { kcal: 1400, protein: 19, fat: 50, carbs: 130, water: 1.7, fiber: 25, vitaminA: 400, vitaminD: 15, vitaminE: 7, vitaminK: 55, vitaminC: 25, vitaminB1: .6, vitaminB2: .6, vitaminB3: 8, vitaminB5: 3, vitaminB6: .6, vitaminB7: 12, vitaminB9: 200, vitaminB12: 1.2, calcium: 1000, phosphorus: 500, magnesium: 130, potassium: 2300, iron: 10, zinc: 5, copper: 440, iodine: 90, sodium: 1 }
};

const macroKeys = ["kcal", "protein", "fat", "carbs"];
const micronutrientKeys = Object.keys(nutrientMeta).filter(key => !macroKeys.includes(key));

const foodNameRules = {
  en: [
    [/Салат из свежих огурцов с растительным маслом/gi, "Fresh cucumber salad with vegetable oil"], [/Салат из свежей капусты с морковью/gi, "Fresh cabbage and carrot salad"], [/Салат из помидоров и огурцов с растительным маслом/gi, "Tomato and cucumber salad with vegetable oil"], [/Салат из пекинской капусты и помидоров с зеленым луком/gi, "Chinese cabbage and tomato salad with green onion"], [/Салат из квашеной капусты с растительным маслом/gi, "Sauerkraut salad with vegetable oil"], [/Салат из отварной свеклы с яблоком/gi, "Boiled beet and apple salad"],
    [/Суп-пюре из овощей/gi, "Creamy vegetable soup"], [/Суп-пюре из моркови/gi, "Creamy carrot soup"], [/Суп картофельный с мясными фрикадельками/gi, "Potato soup with meatballs"], [/Суп овощной с цветной капустой/gi, "Vegetable soup with cauliflower"], [/Суп рисовый с овощами на костном бульоне/gi, "Rice and vegetable soup with bone broth"], [/Суп лапша по-домашнему/gi, "Homemade noodle soup"],
    [/Картофельно-морковное пюре/gi, "Potato and carrot mash"], [/Картофельное пюре/gi, "Mashed potatoes"], [/Пюре картофельное с тыквой/gi, "Potato and pumpkin mash"], [/Морковное пюре/gi, "Carrot puree"],
    [/Каша овсяная молочная/gi, "Milk oatmeal"], [/Каша рисовая молочная/gi, "Milk rice porridge"], [/Каша пшеничная молочная/gi, "Milk wheat porridge"], [/Каша ячневая молочная/gi, "Milk barley porridge"], [/Каша ячная молочная/gi, "Milk barley porridge"], [/Каша пшенная молочная с тыквой/gi, "Milk millet porridge with pumpkin"], [/Каша геркулесовая с изюмом/gi, "Oat porridge with raisins"], [/Каша «Дружба» с курагой/gi, "Friendship porridge with dried apricots"], [/Кукурузная каша/gi, "Corn porridge"],
    [/Компот из сухофруктов с сахаром/gi, "Dried-fruit compote with sugar"], [/Компот из свежих яблок/gi, "Fresh apple compote"], [/Компот из ягод/gi, "Berry compote"], [/Компот фруктовый/gi, "Fruit compote"],
    [/Бефстроганов из говядины/gi, "Beef stroganoff"], [/Гуляш из говядины/gi, "Beef goulash"], [/Плов из говядины/gi, "Beef pilaf"], [/Плов из индейки/gi, "Turkey pilaf"], [/Филе курицы в сметанном соусе/gi, "Chicken fillet in sour-cream sauce"], [/Куриная грудка с овощами/gi, "Chicken breast with vegetables"], [/Куриные котлеты с кабачком/gi, "Chicken and zucchini patties"], [/Биточки рыбные/gi, "Fish patties"], [/Тефтели рыбные/gi, "Fish meatballs"],
    [/Овощное рагу с индейкой/gi, "Vegetable stew with turkey"], [/Овощное рагу/gi, "Vegetable stew"], [/Овощи рататуй с индейкой/gi, "Ratatouille with turkey"], [/Овощи рататуй тушенные/gi, "Stewed ratatouille"],
    [/Запеканка из творога с яблоком/gi, "Cottage-cheese and apple casserole"], [/Творожно-морковная запеканка/gi, "Cottage-cheese and carrot casserole"], [/Пирог творожно-яблочный/gi, "Cottage-cheese and apple pie"], [/Пирог с яблоками/gi, "Apple pie"], [/Шарлотка с яблоками/gi, "Apple charlotte"],
    [/Напиток Витаминка из шиповника/gi, "Rosehip vitamin drink"], [/Напиток Денсаулык \(лимонно-яблочный\)/gi, "Densaulyk lemon-apple drink"], [/Напиток из свежих яблок/gi, "Fresh apple drink"], [/Напиток из кураги/gi, "Dried-apricot drink"], [/Напиток клюквенный/gi, "Cranberry drink"], [/Напиток лимонный/gi, "Lemon drink"],
    [/Салат/gi, "Salad"], [/Суп/gi, "Soup"], [/Каша/gi, "Porridge"], [/Напиток/gi, "Drink"], [/Соус/gi, "Sauce"], [/Пирог/gi, "Pie"], [/Булочка/gi, "Bun"], [/Запеканка/gi, "Casserole"], [/Омлет/gi, "Omelette"], [/Пюре/gi, "Puree"], [/Панкейки/gi, "Pancakes"], [/Оладьи/gi, "Fritters"], [/Печенье/gi, "Cookies"],
    [/куриный|куриные|куриная|курицей/gi, "chicken"], [/говядины|говядиной/gi, "beef"], [/индейки|индейкой/gi, "turkey"], [/рыбные|рыбного|рыбы/gi, "fish"], [/творога|творожный/gi, "cottage cheese"], [/овощами|овощной|овощное|овощей/gi, "vegetable"], [/яблоками|яблоком|яблочный/gi, "apple"], [/тыквой|тыквенные|тыквы/gi, "pumpkin"], [/морковью|морковная|морковный/gi, "carrot"], [/картофелем|картофельное|картофельный/gi, "potato"], [/свеклы|свекольные|свекольник/gi, "beetroot"], [/огурцами|огурцов/gi, "cucumber"], [/изюмом|изюмный/gi, "raisin"], [/молочный|молочная|молочное/gi, "milk"], [/отварная|отварные|отварной|вареное|вареная/gi, "boiled"], [/запеченная|запеченные|запеченной/gi, "baked"], [/сметаной|сметанный/gi, "sour cream"], [/с сыром|и сыром/gi, "with cheese"], [/с овощами/gi, "with vegetables"], [/с мясом/gi, "with meat"], [/с фасолью/gi, "with beans"], [/с изюмом/gi, "with raisins"], [/из /gi, ""], [/ с /gi, " with "], [/ и /gi, " and "]
  ],
  kk: [
    [/Салат из свежих огурцов с растительным маслом/gi, "Өсімдік майы қосылған балғын қияр салаты"], [/Салат из свежей капусты с морковью/gi, "Балғын қырыққабат пен сәбіз салаты"], [/Салат из помидоров и огурцов с растительным маслом/gi, "Өсімдік майы қосылған қызанақ пен қияр салаты"], [/Салат из квашеной капусты с растительным маслом/gi, "Өсімдік майы қосылған ашытылған қырыққабат салаты"],
    [/Суп-пюре из овощей/gi, "Көкөніс езбесі сорпасы"], [/Суп-пюре из моркови/gi, "Сәбіз езбесі сорпасы"], [/Суп картофельный с мясными фрикадельками/gi, "Ет домалақшалары қосылған картоп сорпасы"], [/Суп лапша по-домашнему/gi, "Үй кеспесі сорпасы"],
    [/Картофельно-морковное пюре/gi, "Картоп-сәбіз езбесі"], [/Картофельное пюре/gi, "Картоп езбесі"], [/Пюре картофельное с тыквой/gi, "Асқабақ қосылған картоп езбесі"], [/Морковное пюре/gi, "Сәбіз езбесі"],
    [/Каша овсяная молочная/gi, "Сүтті сұлы ботқасы"], [/Каша рисовая молочная/gi, "Сүтті күріш ботқасы"], [/Каша пшеничная молочная/gi, "Сүтті бидай ботқасы"], [/Каша ячневая молочная/gi, "Сүтті арпа ботқасы"], [/Каша ячная молочная/gi, "Сүтті арпа ботқасы"], [/Каша пшенная молочная с тыквой/gi, "Асқабақ қосылған сүтті тары ботқасы"], [/Каша геркулесовая с изюмом/gi, "Мейіз қосылған сұлы ботқасы"], [/Кукурузная каша/gi, "Жүгері ботқасы"],
    [/Компот из сухофруктов с сахаром/gi, "Қант қосылған кептірілген жеміс компоты"], [/Компот из свежих яблок/gi, "Балғын алма компоты"], [/Компот из ягод/gi, "Жидек компоты"], [/Компот фруктовый/gi, "Жеміс компоты"],
    [/Бефстроганов из говядины/gi, "Сиыр етінен бефстроганов"], [/Гуляш из говядины/gi, "Сиыр етінен гуляш"], [/Плов из говядины/gi, "Сиыр еті қосылған палау"], [/Плов из индейки/gi, "Күркетауық еті қосылған палау"], [/Куриная грудка с овощами/gi, "Көкөніс қосылған тауық төсі"], [/Куриные котлеты с кабачком/gi, "Кәді қосылған тауық котлеті"], [/Биточки рыбные/gi, "Балық биточкілері"], [/Тефтели рыбные/gi, "Балық тефтелі"],
    [/Овощное рагу с индейкой/gi, "Күркетауық еті қосылған көкөніс бұқтырмасы"], [/Овощное рагу/gi, "Көкөніс бұқтырмасы"], [/Запеканка из творога с яблоком/gi, "Алма қосылған сүзбе пісірмесі"], [/Творожно-морковная запеканка/gi, "Сүзбе-сәбіз пісірмесі"], [/Пирог с яблоками/gi, "Алма бәліші"], [/Шарлотка с яблоками/gi, "Алма шарлоткасы"],
    [/Напиток Витаминка из шиповника/gi, "Итмұрыннан жасалған Витаминка сусыны"], [/Напиток из свежих яблок/gi, "Балғын алма сусыны"], [/Напиток из кураги/gi, "Кептірілген өрік сусыны"], [/Напиток клюквенный/gi, "Мүкжидек сусыны"], [/Напиток лимонный/gi, "Лимон сусыны"],
    [/Салат/gi, "Салат"], [/Суп/gi, "Сорпа"], [/Каша/gi, "Ботқа"], [/Напиток/gi, "Сусын"], [/Соус/gi, "Тұздық"], [/Пирог/gi, "Бәліш"], [/Булочка/gi, "Тоқаш"], [/Запеканка/gi, "Пісірме"], [/Омлет/gi, "Омлет"], [/Пюре/gi, "Езбе"], [/Панкейки/gi, "Құймақ"], [/Оладьи/gi, "Құймақ"], [/Печенье/gi, "Печенье"],
    [/куриный|куриные|куриная|курицей/gi, "тауық"], [/говядины|говядиной/gi, "сиыр еті"], [/индейки|индейкой/gi, "күркетауық"], [/рыбные|рыбного|рыбы/gi, "балық"], [/творога|творожный/gi, "сүзбе"], [/овощами|овощной|овощное|овощей/gi, "көкөніс"], [/яблоками|яблоком|яблочный/gi, "алма"], [/тыквой|тыквенные|тыквы/gi, "асқабақ"], [/морковью|морковная|морковный/gi, "сәбіз"], [/картофелем|картофельное|картофельный/gi, "картоп"], [/свеклы|свекольные|свекольник/gi, "қызылша"], [/огурцами|огурцов/gi, "қияр"], [/изюмом|изюмный/gi, "мейіз"], [/молочный|молочная|молочное/gi, "сүтті"], [/отварная|отварные|отварной|вареное|вареная/gi, "қайнатылған"], [/запеченная|запеченные|запеченной/gi, "пісірілген"], [/сметаной|сметанный/gi, "қаймақ"], [/с сыром|и сыром/gi, "ірімшік қосылған"], [/с овощами/gi, "көкөніс қосылған"], [/с мясом/gi, "ет қосылған"], [/с фасолью/gi, "үрмебұршақ қосылған"], [/с изюмом/gi, "мейіз қосылған"], [/из /gi, ""], [/ с /gi, " қосылған "], [/ и /gi, " және "]
  ]
};

function foodName(recipe) {
  if (currentLanguage === "ru") return recipe.name;
  const exact = window.BALAFOOD_FOOD_NAMES?.[recipe.name]?.[currentLanguage];
  if (exact) return exact;
  return foodNameRules[currentLanguage].reduce((name, [pattern, replacement]) => name.replace(pattern, replacement), recipe.name).replace(/\s+/g, " ").trim();
}

const ingredientNameRules = {
  en: [
    [/^\(?или томатная паста\)?$|^томат(ная)? паста$|^томат-пюре$|^томатное пюре$/i,"Tomato paste"], [/^(или )?томатный сок$|^сок томатный$/i,"Tomato juice"], [/^томат$|^помидоры?( свежие| черри)?$/i,"Tomatoes"],
    [/полутвердый сыр|сыр полутвердый/i,"Semi-hard cheese"], [/творог/i,"Cottage cheese"], [/сметана/i,"Sour cream"], [/йогурт/i,"Yogurt"], [/кефир/i,"Kefir"], [/ряженка/i,"Fermented baked milk"], [/молоко/i,"Milk"],
    [/масло слив/i,"Butter"], [/подсолнеч|масло растит|растительное масло|^растительное$|^масло$/i,"Vegetable oil"], [/оливковое масло/i,"Olive oil"],
    [/говядин|мякоть|филе говядины/i,"Beef"], [/филе индейки|грудка индейки/i,"Turkey fillet"], [/филе кур|курица сырая/i,"Chicken fillet"], [/казы/i,"Kazy"],
    [/судак|минтай/i,"Fish fillet"], [/куриный бульон/i,"Chicken broth"], [/мясной бульон/i,"Meat broth"], [/овощной отвар|^овощной$/i,"Vegetable broth"], [/бульон/i,"Broth"],
    [/капуста квашеная|квашеная капуста/i,"Sauerkraut"], [/пекинская капуста/i,"Chinese cabbage"], [/цветная капуста/i,"Cauliflower"], [/капуста/i,"White cabbage"], [/брокколи/i,"Broccoli"],
    [/кабач|цукини/i,"Zucchini"], [/баклажан/i,"Eggplant"], [/тыква/i,"Pumpkin"], [/морковь/i,"Carrot"], [/свекла/i,"Beetroot"], [/картофель/i,"Potato"], [/огурцы? солен/i,"Pickled cucumber"], [/огур/i,"Fresh cucumber"], [/перец/i,"Sweet pepper"],
    [/лук зелен/i,"Green onion"], [/лук репчат/i,"Onion"], [/чеснок/i,"Garlic"], [/укроп/i,"Dill"], [/петрушк|^зелень$/i,"Fresh herbs"], [/щавель/i,"Sorrel"], [/листья мяты/i,"Mint leaves"],
    [/горош|зеленый горошек/i,"Green peas"], [/фасоль/i,"Beans"], [/чечевиц/i,"Red lentils"], [/нут/i,"Chickpeas or red beans"], [/маш$/i,"Mung beans"], [/горох/i,"Split peas"], [/кукуруза заморож/i,"Frozen corn"],
    [/крупа гречневая|гречневая крупа/i,"Buckwheat groats"], [/крупа манная|манная крупа/i,"Semolina"], [/крупа перловая|перловая крупа/i,"Pearl barley"], [/крупа пшено|^пшено$/i,"Millet"], [/крупа рисовая|^рис$/i,"Rice"], [/кукурузная крупа/i,"Corn grits"], [/ячневая крупа/i,"Barley groats"], [/овсяные хлопья/i,"Oat flakes"], [/талкан/i,"Talkan"],
    [/макароны звездочками/i,"Star-shaped pasta"], [/макарон|спагетти/i,"Pasta"], [/вермишель/i,"Vermicelli"], [/лапша/i,"Noodles"],
    [/мука рисовая/i,"Rice flour"], [/кукурузная мука/i,"Corn flour"], [/мука|пшеничная мука/i,"Wheat flour"], [/крахмал/i,"Starch"], [/панировоч|сухари панировочные/i,"Breadcrumbs"], [/разрыхлитель/i,"Baking powder"], [/пищевая сода/i,"Baking soda"], [/дрожжи/i,"Yeast"],
    [/белый пшеничный хлеб|пшеничный хлеб|хлеб пшеничный/i,"Wheat bread"], [/ржано-пшеничный/i,"Rye-wheat bread"], [/хлебцы|хрустящие хлебцы/i,"Crispbread"], [/сушки/i,"Sushki bread rings"], [/печенье/i,"Cookies"],
    [/яйц/i,"Chicken egg"], [/сахар/i,"Sugar"], [/соль|йодированная/i,"Iodized salt"], [/ваниль/i,"Vanilla sugar"], [/корица/i,"Cinnamon"], [/лавровый лист/i,"Bay leaf"], [/какао/i,"Cocoa powder"], [/каркаде/i,"Hibiscus tea"], [/кунжут/i,"Sesame"], [/орехи/i,"Walnuts"],
    [/курага|сухофрукты – курага/i,"Dried apricots"], [/сухофрукты/i,"Dried fruits"], [/изюм/i,"Raisins"], [/финики/i,"Dates"], [/дыня сушеная/i,"Dried melon"], [/клюква/i,"Cranberries"], [/вишня/i,"Cherries"], [/ягоды/i,"Berries"], [/шиповник/i,"Dried rosehips"],
    [/яблок/i,"Apples"], [/груш/i,"Pears"], [/апельсин/i,"Oranges"], [/мандарин/i,"Mandarins"], [/банан/i,"Bananas"], [/хурма/i,"Persimmon"], [/слива/i,"Plum"], [/лимон/i,"Lemon"],
    [/вода/i,"Water"], [/джем/i,"Jam"], [/курт/i,"Kurt"], [/^40% жирности$/i,"40% fat product"], [/заморож|консервир/i,"Frozen ingredient"]
  ],
  kk: [
    [/^\(?или томатная паста\)?$|^томат(ная)? паста$|^томат-пюре$|^томатное пюре$/i,"Томат пастасы"], [/^(или )?томатный сок$|^сок томатный$/i,"Қызанақ шырыны"], [/^томат$|^помидоры?( свежие| черри)?$/i,"Қызанақ"],
    [/полутвердый сыр|сыр полутвердый/i,"Жартылай қатты ірімшік"], [/творог/i,"Сүзбе"], [/сметана/i,"Қаймақ"], [/йогурт/i,"Йогурт"], [/кефир/i,"Айран"], [/ряженка/i,"Ашытылған піскен сүт"], [/молоко/i,"Сүт"],
    [/масло слив/i,"Сары май"], [/подсолнеч|масло растит|растительное масло|^растительное$|^масло$/i,"Өсімдік майы"], [/оливковое масло/i,"Зәйтүн майы"],
    [/говядин|мякоть|филе говядины/i,"Сиыр еті"], [/филе индейки|грудка индейки/i,"Күркетауық сүбесі"], [/филе кур|курица сырая/i,"Тауық сүбесі"], [/казы/i,"Қазы"],
    [/судак|минтай/i,"Балық сүбесі"], [/куриный бульон/i,"Тауық сорпасы"], [/мясной бульон/i,"Ет сорпасы"], [/овощной отвар|^овощной$/i,"Көкөніс сорпасы"], [/бульон/i,"Сорпа"],
    [/капуста квашеная|квашеная капуста/i,"Ашытылған қырыққабат"], [/пекинская капуста/i,"Қытай қырыққабаты"], [/цветная капуста/i,"Гүлді қырыққабат"], [/капуста/i,"Ақ қырыққабат"], [/брокколи/i,"Брокколи"],
    [/кабач|цукини/i,"Кәді"], [/баклажан/i,"Баялды"], [/тыква/i,"Асқабақ"], [/морковь/i,"Сәбіз"], [/свекла/i,"Қызылша"], [/картофель/i,"Картоп"], [/огурцы? солен/i,"Тұздалған қияр"], [/огур/i,"Балғын қияр"], [/перец/i,"Тәтті бұрыш"],
    [/лук зелен/i,"Көк пияз"], [/лук репчат/i,"Басты пияз"], [/чеснок/i,"Сарымсақ"], [/укроп/i,"Аскөк"], [/петрушк|^зелень$/i,"Балғын көк"], [/щавель/i,"Қымыздық"], [/листья мяты/i,"Жалбыз жапырағы"],
    [/горош|зеленый горошек/i,"Жасыл бұршақ"], [/фасоль/i,"Үрмебұршақ"], [/чечевиц/i,"Қызыл жасымық"], [/нут/i,"Ноқат немесе қызыл үрмебұршақ"], [/маш$/i,"Маш"], [/горох/i,"Асбұршақ"], [/кукуруза заморож/i,"Мұздатылған жүгері"],
    [/крупа гречневая|гречневая крупа/i,"Қарақұмық жармасы"], [/крупа манная|манная крупа/i,"Ұнтақ жарма"], [/крупа перловая|перловая крупа/i,"Арпа жармасы"], [/крупа пшено|^пшено$/i,"Тары"], [/крупа рисовая|^рис$/i,"Күріш"], [/кукурузная крупа/i,"Жүгері жармасы"], [/ячневая крупа/i,"Арпа жармасы"], [/овсяные хлопья/i,"Сұлы үлпектері"], [/талкан/i,"Талқан"],
    [/макароны звездочками/i,"Жұлдызша макарон"], [/макарон|спагетти/i,"Макарон"], [/вермишель/i,"Вермишель"], [/лапша/i,"Кеспе"],
    [/мука рисовая/i,"Күріш ұны"], [/кукурузная мука/i,"Жүгері ұны"], [/мука|пшеничная мука/i,"Бидай ұны"], [/крахмал/i,"Крахмал"], [/панировоч|сухари панировочные/i,"Аунатпа кепкен нан"], [/разрыхлитель/i,"Қопсытқыш"], [/пищевая сода/i,"Ас содасы"], [/дрожжи/i,"Ашытқы"],
    [/белый пшеничный хлеб|пшеничный хлеб|хлеб пшеничный/i,"Бидай наны"], [/ржано-пшеничный/i,"Қарабидай-бидай наны"], [/хлебцы|хрустящие хлебцы/i,"Қытырлақ нан"], [/сушки/i,"Кепкен тоқаш"], [/печенье/i,"Печенье"],
    [/яйц/i,"Тауық жұмыртқасы"], [/сахар/i,"Қант"], [/соль|йодированная/i,"Йодталған тұз"], [/ваниль/i,"Ванильді қант"], [/корица/i,"Даршын"], [/лавровый лист/i,"Лавр жапырағы"], [/какао/i,"Какао ұнтағы"], [/каркаде/i,"Каркаде шайы"], [/кунжут/i,"Күнжіт"], [/орехи/i,"Грек жаңғағы"],
    [/курага|сухофрукты – курага/i,"Кептірілген өрік"], [/сухофрукты/i,"Кептірілген жемістер"], [/изюм/i,"Мейіз"], [/финики/i,"Құрма"], [/дыня сушеная/i,"Кептірілген қауын"], [/клюква/i,"Мүкжидек"], [/вишня/i,"Шие"], [/ягоды/i,"Жидектер"], [/шиповник/i,"Кептірілген итмұрын"],
    [/яблок/i,"Алма"], [/груш/i,"Алмұрт"], [/апельсин/i,"Апельсин"], [/мандарин/i,"Мандарин"], [/банан/i,"Банан"], [/хурма/i,"Құрма"], [/слива/i,"Алхоры"], [/лимон/i,"Лимон"],
    [/вода/i,"Су"], [/джем/i,"Джем"], [/курт/i,"Құрт"], [/^40% жирности$/i,"Майлылығы 40% өнім"], [/заморож|консервир/i,"Мұздатылған өнім"]
  ]
};

function ingredientName(rawName) {
  if (currentLanguage === "ru") return rawName;
  const match = ingredientNameRules[currentLanguage].find(([pattern]) => pattern.test(rawName.trim()));
  return match ? match[1] : rawName;
}

const recipeSelect = document.querySelector("#recipe");
const dishQuickSearch = document.querySelector("#dish-quick-search");
const childrenInput = document.querySelector("#children");
const servingsSelect = document.querySelector("#servings");
const ingredientsEl = document.querySelector("#ingredients");
const catalog = document.querySelector("#catalog");
const searchInput = document.querySelector("#recipe-search");
const categoryFilter = document.querySelector("#category-filter");
let currentLanguage = localStorage.getItem("balafood-language") || "kk";
const mealSlots = ["breakfast", "lunch", "dinner"];
let dailyMenu = (() => {
  try {
    const saved = JSON.parse(localStorage.getItem("balafood-daily-menu"));
    if (saved && mealSlots.every(slot => Array.isArray(saved[slot]))) return saved;
  } catch (_) { /* Start with an empty menu if saved data is invalid. */ }
  return { breakfast: [], lunch: [], dinner: [] };
})();

function formatNumber(value) {
  const locale = currentLanguage === "kk" ? "kk-KZ" : currentLanguage === "ru" ? "ru-RU" : "en-US";
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(value);
}

function niceAmount(amount, unit) {
  if (amount >= 1000 && (unit === "g" || unit === "ml")) return `${formatNumber(amount / 1000)} ${unit === "g" ? "kg" : "L"}`;
  return `${formatNumber(amount)} ${unit}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
}

function currentPlan() {
  const recipe = recipes[Math.max(0, Number(recipeSelect.value) || 0)];
  const children = Math.min(500, Math.max(1, Number(childrenInput.value) || 1));
  const mealCount = Number(servingsSelect.value);
  const servings = children * mealCount;
  return { recipe, children, mealCount, servings, rows: recipe.ingredients.map(item => ({ ...item, total: item.amount * servings })) };
}

function nutritionRow(key, actual, target) {
  const meta = nutrientMeta[key];
  const percent = target ? Math.round(actual / target * 100) : 0;
  const row = document.createElement("div");
  row.className = "nutrient-row";
  row.innerHTML = `<div class="nutrient-label"><span></span><span>${formatNumber(actual)} ${meta.unit} / ${formatNumber(target)} ${meta.unit}</span></div><div class="nutrient-track"><div class="nutrient-fill${percent >= 120 ? " high" : percent >= 75 ? " good" : ""}" style="width:${Math.min(percent, 100)}%"></div></div><strong class="nutrient-percent">${percent}%</strong>`;
  row.querySelector(".nutrient-label span").textContent = meta[currentLanguage];
  return row;
}

function renderFoodNutrition(recipe) {
  const age = document.querySelector("#age-standard")?.value || "3-6";
  const standards = nutrientStandards[age];
  const nutrients = recipe.nutrients || {};
  const basic = document.querySelector("#food-basic-info");
  basic.innerHTML = "";
  const weightRow = document.createElement("div");
  weightRow.className = "basic-stat-row";
  weightRow.innerHTML = `<div><span>${translations[currentLanguage].weight}</span><strong>${formatNumber(recipe.output || 0)} g</strong></div><div class="nutrient-track"><div class="nutrient-fill neutral" style="width:100%"></div></div>`;
  basic.append(weightRow);
  macroKeys.forEach(key => basic.append(nutritionRow(key, nutrients[key] || 0, standards[key])));
  const micros = document.querySelector("#food-micronutrients");
  micros.innerHTML = "";
  micronutrientKeys.forEach(key => micros.append(nutritionRow(key, nutrients[key] || 0, standards[key])));
  const incomplete = micronutrientKeys.some(key => nutrients[key] === undefined);
  const warning = document.querySelector("#food-nutrition-warning");
  warning.hidden = !incomplete;
  warning.textContent = incomplete ? translations[currentLanguage].nutritionIncomplete : "";
}

function downloadBlob(content, mimeType, filename) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = filename; document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportDocument(type) {
  const plan = currentPlan();
  const t = translations[currentLanguage];
  const rows = plan.rows.map(item => `<tr><td>${escapeHtml(ingredientName(item.name))}</td><td>${escapeHtml(niceAmount(item.amount, item.unit))}</td><td>${escapeHtml(niceAmount(item.total, item.unit))}</td></tr>`).join("");
  const translatedName = foodName(plan.recipe);
  const age = document.querySelector("#age-standard").value; const standards = nutrientStandards[age]; const nutrients = plan.recipe.nutrients || {};
  const nutritionRows = Object.entries(nutrientMeta).map(([key, meta]) => { const value = nutrients[key] || 0; const target = standards[key]; return `<tr><td>${escapeHtml(meta[currentLanguage])}</td><td>${escapeHtml(formatNumber(value))} ${meta.unit}</td><td>${escapeHtml(formatNumber(target))} ${meta.unit}</td><td>${target ? Math.round(value / target * 100) : 0}%</td></tr>`; }).join("");
  const documentHtml = `<!doctype html><html><head><meta charset="UTF-8"><title>BalaFood - ${escapeHtml(translatedName)}</title><style>${compactDocumentStyles()}</style></head><body><div class="document-head"><h1>BalaFood — ${escapeHtml(t.mealPlan)}</h1></div><table class="meta"><tr><th>${escapeHtml(t.dish)}</th><td>${escapeHtml(translatedName)}</td><th>${escapeHtml(t.children)}</th><td>${plan.children}</td><th>${escapeHtml(t.servings)}</th><td>${plan.servings}</td></tr></table><h2>${escapeHtml(t.ingredientList)}</h2><table><colgroup><col style="width:52%"><col style="width:24%"><col style="width:24%"></colgroup><thead><tr><th>${escapeHtml(t.ingredient)}</th><th>${escapeHtml(t.perServing)}</th><th>${escapeHtml(t.requiredAmount)}</th></tr></thead><tbody>${rows}</tbody></table><h2>${escapeHtml(t.vitaminsAndMinerals)} (${age})</h2><table class="nutrition-table"><thead><tr><th>${escapeHtml(t.ingredient)}</th><th>${escapeHtml(t.perServing)}</th><th>${escapeHtml(t.ageStandard)}</th><th>%</th></tr></thead><tbody>${nutritionRows}</tbody></table></body></html>`;
  const filename = `BalaFood-card-${plan.recipe.id}`;
  if (type === "word") downloadBlob("\ufeff" + documentHtml, "application/msword;charset=utf-8", `${filename}.doc`);
  if (type === "excel") downloadBlob("\ufeff" + documentHtml, "application/vnd.ms-excel;charset=utf-8", `${filename}.xls`);
}

function compactDocumentStyles() {
  return `@page{size:A4;margin:9mm}*{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif;color:#173c35;font-size:9.5pt;line-height:1.2}h1{margin:0;font-size:17pt}h2{margin:10px 0 4px;color:#c9572d;font-size:11pt}.document-head{padding:0 0 7px;border-bottom:2px solid #173c35}.meta{margin:7px 0 8px}.meta th{width:auto;background:#eef1e7;white-space:nowrap}.meta td{font-weight:700}table{width:100%;border-collapse:collapse;table-layout:fixed;margin:5px 0 9px;page-break-inside:auto}thead{display:table-header-group}tr{page-break-inside:avoid}th,td{border:1px solid #789088;padding:3px 5px;vertical-align:top;text-align:left;overflow-wrap:anywhere}th{background:#f5c64d;font-size:8.5pt}tbody tr:nth-child(even) td{background:#f7f8f3}.meal-table td:nth-child(1){font-weight:700}.meal-table td:nth-child(n+3){text-align:center;white-space:nowrap}.nutrition-table td:nth-child(n+2){text-align:right;white-space:nowrap}.section{margin-top:8px;page-break-inside:avoid}.muted{color:#61726c;font-size:8.5pt}`;
}

function printPlan(asPdf = false) {
  const oldTitle = document.title;
  const plan = currentPlan();
  document.title = `BalaFood-card-${plan.recipe.id}`;
  document.body.classList.add("printing-plan");
  const restore = () => { document.title = oldTitle; document.body.classList.remove("printing-plan"); window.removeEventListener("afterprint", restore); };
  window.addEventListener("afterprint", restore);
  window.print();
  if (!asPdf) setTimeout(restore, 1000);
}

function saveDailyMenu() {
  localStorage.setItem("balafood-daily-menu", JSON.stringify(dailyMenu));
}

function combinedMenuIngredients() {
  const combined = new Map();
  mealSlots.forEach(slot => dailyMenu[slot].forEach(entry => {
    const recipe = recipes[entry.recipeIndex];
    if (!recipe) return;
    const multiplier = entry.children * entry.mealCount;
    recipe.ingredients.forEach(item => {
      const key = `${item.name.toLocaleLowerCase("ru")}|${item.unit}`;
      const existing = combined.get(key) || { name: item.name, unit: item.unit, amount: 0 };
      existing.amount += item.amount * multiplier;
      combined.set(key, existing);
    });
  }));
  return [...combined.values()].sort((a, b) => a.name.localeCompare(b.name, "ru"));
}

function combinedMenuNutrients() {
  const totals = {};
  mealSlots.forEach(slot => dailyMenu[slot].forEach(entry => {
    const nutrients = recipes[entry.recipeIndex]?.nutrients || {};
    Object.entries(nutrients).forEach(([key, value]) => { totals[key] = (totals[key] || 0) + value * entry.mealCount; });
  }));
  return totals;
}

function renderNutrition() {
  const age = document.querySelector("#age-standard").value;
  const standards = nutrientStandards[age];
  const totals = combinedMenuNutrients();
  const container = document.querySelector("#nutrition-summary"); container.innerHTML = "";
  Object.keys(nutrientMeta).forEach(key => container.append(nutritionRow(key, totals[key] || 0, standards[key])));
  const selectedRecipes = mealSlots.flatMap(slot => dailyMenu[slot].map(entry => recipes[entry.recipeIndex])).filter(Boolean);
  const incomplete = selectedRecipes.some(recipe => Object.keys(recipe.nutrients || {}).length < 15);
  const warning = document.querySelector("#nutrition-warning"); warning.hidden = !incomplete; warning.textContent = incomplete ? translations[currentLanguage].nutritionIncomplete : "";
}

function renderDailyMenu() {
  const t = translations[currentLanguage];
  mealSlots.forEach(slot => {
    const container = document.querySelector(`#${slot}-items`);
    container.innerHTML = "";
    if (!dailyMenu[slot].length) {
      const empty = document.createElement("p"); empty.className = "meal-empty"; empty.textContent = t.emptyMeal; container.append(empty); return;
    }
    dailyMenu[slot].forEach((entry, itemIndex) => {
      const recipe = recipes[entry.recipeIndex];
      if (!recipe) return;
      const item = document.createElement("div"); item.className = "menu-item";
      const title = document.createElement("strong"); title.textContent = foodName(recipe);
      const meta = document.createElement("small"); meta.textContent = `${entry.children} ${t.children.toLocaleLowerCase()} · ${entry.children * entry.mealCount} ${t.servings}`;
      const remove = document.createElement("button"); remove.type = "button"; remove.className = "remove-menu-item"; remove.textContent = "×"; remove.setAttribute("aria-label", "Remove");
      remove.addEventListener("click", () => { dailyMenu[slot].splice(itemIndex, 1); saveDailyMenu(); renderDailyMenu(); });
      item.append(title, meta, remove); container.append(item);
    });
  });
  const combined = combinedMenuIngredients();
  const list = document.querySelector("#combined-ingredients"); list.innerHTML = "";
  if (!combined.length) {
    const empty = document.createElement("p"); empty.className = "meal-empty"; empty.textContent = t.emptyMeal; list.append(empty);
  } else {
    combined.forEach(item => {
      const row = document.createElement("div"); row.className = "combined-row";
      const name = document.createElement("span"); name.textContent = ingredientName(item.name);
      const amount = document.createElement("strong"); amount.textContent = niceAmount(item.amount, item.unit);
      row.append(name, amount); list.append(row);
    });
  }
  renderNutrition();
}

function addCurrentDishToMenu() {
  const slot = document.querySelector("#meal-slot").value;
  dailyMenu[slot].push({ recipeIndex: Math.max(0, Number(recipeSelect.value) || 0), children: Math.min(500, Math.max(1, Number(childrenInput.value) || 1)), mealCount: Number(servingsSelect.value) });
  saveDailyMenu(); renderDailyMenu();
  document.querySelector("#daily-menu-title").scrollIntoView({ behavior: "smooth", block: "start" });
}

function dailyMenuDocument() {
  const t = translations[currentLanguage];
  const date = document.querySelector("#menu-date").value;
  const mealRows = mealSlots.flatMap(slot => {
    const entries = dailyMenu[slot];
    if (!entries.length) return [`<tr><td>${escapeHtml(t[slot])}</td><td>—</td><td>—</td><td>—</td></tr>`];
    return entries.map((entry, index) => `<tr><td>${index === 0 ? escapeHtml(t[slot]) : ""}</td><td>${escapeHtml(recipes[entry.recipeIndex] ? foodName(recipes[entry.recipeIndex]) : "")}</td><td>${entry.children}</td><td>${entry.children * entry.mealCount}</td></tr>`);
  }).join("");
  const rows = combinedMenuIngredients().map(item => `<tr><td>${escapeHtml(ingredientName(item.name))}</td><td>${escapeHtml(niceAmount(item.amount, item.unit))}</td></tr>`).join("");
  const age = document.querySelector("#age-standard").value; const totals = combinedMenuNutrients(); const standards = nutrientStandards[age];
  const nutrientRows = Object.entries(nutrientMeta).map(([key, meta]) => `<tr><td>${escapeHtml(meta[currentLanguage])}</td><td>${escapeHtml(formatNumber(totals[key] || 0))} ${meta.unit}</td><td>${escapeHtml(formatNumber(standards[key]))} ${meta.unit}</td><td>${Math.round((totals[key] || 0) / standards[key] * 100)}%</td></tr>`).join("");
  return `<!doctype html><html><head><meta charset="UTF-8"><title>BalaFood — ${escapeHtml(t.dailyMenuTitle)}</title><style>${compactDocumentStyles()}</style></head><body><div class="document-head"><h1>BalaFood — ${escapeHtml(t.dailyMenuTitle)}</h1><div class="muted">${escapeHtml(t.menuDate)}: ${escapeHtml(date)}</div></div><section class="section"><h2>${escapeHtml(t.dailyMenuTitle)}</h2><table class="meal-table"><colgroup><col style="width:18%"><col style="width:52%"><col style="width:15%"><col style="width:15%"></colgroup><thead><tr><th>${escapeHtml(t.mealPlan)}</th><th>${escapeHtml(t.dish)}</th><th>${escapeHtml(t.children)}</th><th>${escapeHtml(t.servings)}</th></tr></thead><tbody>${mealRows}</tbody></table></section><section class="section"><h2>${escapeHtml(t.ingredientsForDay)}</h2><table><colgroup><col style="width:72%"><col style="width:28%"></colgroup><thead><tr><th>${escapeHtml(t.ingredient)}</th><th>${escapeHtml(t.requiredAmount)}</th></tr></thead><tbody>${rows}</tbody></table></section><section class="section"><h2>${escapeHtml(t.vitaminsAndMinerals)} (${age})</h2><table class="nutrition-table"><colgroup><col style="width:40%"><col style="width:22%"><col style="width:22%"><col style="width:16%"></colgroup><thead><tr><th>${escapeHtml(t.ingredient)}</th><th>${escapeHtml(t.requiredAmount)}</th><th>${escapeHtml(t.ageStandard)}</th><th>%</th></tr></thead><tbody>${nutrientRows}</tbody></table></section></body></html>`;
}

function exportDailyMenu(type) {
  const date = document.querySelector("#menu-date").value || "daily-menu";
  const html = dailyMenuDocument();
  if (type === "word") downloadBlob("\ufeff" + html, "application/msword;charset=utf-8", `BalaFood-menu-${date}.doc`);
  if (type === "excel") downloadBlob("\ufeff" + html, "application/vnd.ms-excel;charset=utf-8", `BalaFood-menu-${date}.xls`);
}

function printDailyMenu() {
  const oldTitle = document.title;
  const date = document.querySelector("#menu-date").value || "daily-menu";
  document.title = `BalaFood-menu-${date}`; document.body.classList.add("printing-menu");
  const restore = () => { document.title = oldTitle; document.body.classList.remove("printing-menu"); window.removeEventListener("afterprint", restore); };
  window.addEventListener("afterprint", restore); window.print();
}

function fillRecipes(filter = "") {
  const selected = recipeSelect.value || "0";
  recipeSelect.innerHTML = "";
  const groups = new Map();
  const term = filter.trim().toLocaleLowerCase("ru");
  const matches = recipes.map((recipe, index) => ({ recipe, index })).filter(({ recipe }) => {
    const names = [recipe.name, foodName(recipe), window.BALAFOOD_FOOD_NAMES?.[recipe.name]?.kk, window.BALAFOOD_FOOD_NAMES?.[recipe.name]?.en].filter(Boolean).join(" ");
    const haystack = `${names} ${recipe.ingredients.map(item => `${item.name} ${ingredientName(item.name)}`).join(" ")}`.toLocaleLowerCase("ru");
    return !term || haystack.includes(term);
  });
  matches.forEach(({ recipe, index }) => {
    if (!groups.has(recipe.category)) {
      const group = document.createElement("optgroup");
      group.label = translations[currentLanguage].categories[recipe.category] || translations[currentLanguage].categories.other;
      groups.set(recipe.category, group);
      recipeSelect.append(group);
    }
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${foodName(recipe)} · ${recipe.output || "?"} g`;
    groups.get(recipe.category).append(option);
  });
  if (matches.some(({ index }) => String(index) === selected)) recipeSelect.value = selected;
  else if (matches.length) recipeSelect.value = String(matches[0].index);
  document.querySelector("#recipe-count").textContent = recipes.length;
  recipeSelect.disabled = !matches.length;
}

function fillCategories() {
  const previous = categoryFilter.value;
  categoryFilter.innerHTML = `<option value="">${translations[currentLanguage].allCategories}</option>`;
  [...new Set(recipes.map(recipe => recipe.category))].forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = translations[currentLanguage].categories[category] || translations[currentLanguage].categories.other;
    categoryFilter.append(option);
  });
  categoryFilter.value = previous;
}

function calculate() {
  if (!recipes.length) return;
  const index = Math.max(0, Number(recipeSelect.value) || 0);
  const recipe = recipes[index];
  const children = Math.min(500, Math.max(1, Number(childrenInput.value) || 1));
  const mealCount = Number(servingsSelect.value);
  const multiplier = children * mealCount;
  childrenInput.value = children;
  document.querySelector("#result-title").textContent = foodName(recipe);
  document.querySelector("#total-servings").textContent = multiplier;
  ingredientsEl.innerHTML = "";
  let totalGrams = 0;
  recipe.ingredients.forEach(item => {
    const total = item.amount * multiplier;
    if (item.unit === "g" || item.unit === "ml") totalGrams += total;
    const row = document.createElement("div");
    row.className = "ingredient";
    row.innerHTML = `<span class="ingredient-icon">${item.icon}</span><span><span class="ingredient-name"></span><span class="ingredient-base">${formatNumber(item.amount)} ${item.unit} ${translations[currentLanguage].perChild}</span></span><strong class="ingredient-amount">${niceAmount(total, item.unit)}</strong>`;
    row.querySelector(".ingredient-name").textContent = ingredientName(item.name);
    ingredientsEl.append(row);
  });
  document.querySelector("#total-weight").textContent = niceAmount(totalGrams, "g");
  renderFoodNutrition(recipe);
  document.querySelectorAll(".recipe-card").forEach(card => card.classList.toggle("selected", Number(card.dataset.index) === index));
}

function renderCatalog() {
  const term = searchInput.value.trim().toLocaleLowerCase("ru");
  const category = categoryFilter.value;
  const matches = recipes.map((recipe, index) => ({ recipe, index })).filter(({ recipe }) => {
    const searchable = `${recipe.name} ${foodName(recipe)} ${recipe.ingredients.map(item => `${item.name} ${ingredientName(item.name)}`).join(" ")}`.toLocaleLowerCase("ru");
    return (!category || recipe.category === category) && (!term || searchable.includes(term));
  });
  document.querySelector("#catalog-summary").textContent = `${matches.length} ${translations[currentLanguage].found}`;
  const grid = document.querySelector("#recipe-grid");
  grid.innerHTML = "";
  if (!matches.length) {
    grid.innerHTML = `<p class="recipe-empty">${translations[currentLanguage].noResults}</p>`;
    return;
  }
  matches.forEach(({ recipe, index }) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "recipe-card";
    card.dataset.index = index;
    card.innerHTML = `<small><span>${translations[currentLanguage].card} № ${recipe.id}</span><span>${recipe.ingredients.length} ${translations[currentLanguage].ingredients}</span></small><strong></strong>`;
    card.querySelector("strong").textContent = foodName(recipe);
    card.addEventListener("click", () => {
      recipeSelect.value = index;
      calculate();
      closeCatalog();
      document.querySelector("#calculator-title").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    grid.append(card);
  });
  calculate();
}

function openCatalog() {
  catalog.classList.add("open");
  catalog.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  renderCatalog();
  setTimeout(() => searchInput.focus(), 50);
}

function closeCatalog() {
  catalog.classList.remove("open");
  catalog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("balafood-language", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = translations[lang][element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = translations[lang][element.dataset.i18nPlaceholder]; });
  document.querySelectorAll("[data-serving]").forEach(option => {
    const n = Number(option.dataset.serving);
    option.textContent = `${n} ${n === 1 ? translations[lang].serving : translations[lang].servingPlural}`;
  });
  document.querySelectorAll("[data-lang]").forEach(button => button.classList.toggle("active", button.dataset.lang === lang));
  fillRecipes(dishQuickSearch.value);
  fillCategories();
  calculate();
  renderDailyMenu();
  if (catalog.classList.contains("open")) renderCatalog();
}

document.querySelector("#minus").addEventListener("click", () => { childrenInput.value = Math.max(1, Number(childrenInput.value) - 1); calculate(); });
document.querySelector("#plus").addEventListener("click", () => { childrenInput.value = Math.min(500, Number(childrenInput.value) + 1); calculate(); });
[recipeSelect, childrenInput, servingsSelect].forEach(control => control.addEventListener("input", calculate));
dishQuickSearch.addEventListener("input", () => { fillRecipes(dishQuickSearch.value); if (!recipeSelect.disabled) calculate(); });
document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.querySelector("#open-catalog").addEventListener("click", openCatalog);
document.querySelector("#close-catalog").addEventListener("click", closeCatalog);
document.querySelector(".catalog-backdrop").addEventListener("click", closeCatalog);
document.querySelector("#print-plan").addEventListener("click", () => printPlan(false));
document.querySelector("#pdf-plan").addEventListener("click", () => printPlan(true));
document.querySelector("#word-plan").addEventListener("click", () => exportDocument("word"));
document.querySelector("#excel-plan").addEventListener("click", () => exportDocument("excel"));
document.querySelector("#add-to-menu").addEventListener("click", addCurrentDishToMenu);
document.querySelector("#clear-menu").addEventListener("click", () => { dailyMenu = { breakfast: [], lunch: [], dinner: [] }; saveDailyMenu(); renderDailyMenu(); });
document.querySelector("#print-menu").addEventListener("click", printDailyMenu);
document.querySelector("#pdf-menu").addEventListener("click", printDailyMenu);
document.querySelector("#word-menu").addEventListener("click", () => exportDailyMenu("word"));
document.querySelector("#excel-menu").addEventListener("click", () => exportDailyMenu("excel"));
const menuDateInput = document.querySelector("#menu-date");
menuDateInput.value = localStorage.getItem("balafood-menu-date") || new Date().toISOString().slice(0, 10);
menuDateInput.addEventListener("change", () => localStorage.setItem("balafood-menu-date", menuDateInput.value));
const ageStandardInput = document.querySelector("#age-standard");
ageStandardInput.value = nutrientStandards[localStorage.getItem("balafood-age-standard")] ? localStorage.getItem("balafood-age-standard") : "3-6";
ageStandardInput.addEventListener("change", () => { localStorage.setItem("balafood-age-standard", ageStandardInput.value); renderNutrition(); calculate(); });
searchInput.addEventListener("input", renderCatalog);
categoryFilter.addEventListener("change", renderCatalog);
document.addEventListener("keydown", event => { if (event.key === "Escape") closeCatalog(); });
setLanguage(currentLanguage);
