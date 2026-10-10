(function () {
  const recipes = window.BALAFOOD_RECIPES || (window.BALAFOOD_RECIPES = []);
  const ingredient = (name, amount, unit = "g") => ({ name, amount, unit, icon: "•" });
  let id = Math.max(0, ...recipes.map(recipe => Number(recipe.id) || 0)) + 1;
  const add = (name, category, output, ingredients, nutrients = {}) => recipes.push({ id: id++, name, category, output, ingredients, nutrients });

  add("Каша манная молочная", "porridge", 180, [ingredient("Молоко", 140, "ml"), ingredient("Крупа манная", 22), ingredient("Сахар", 5), ingredient("Масло сливочное", 3)], { protein: 5.2, fat: 5.4, carbs: 28.6, kcal: 184 });
  add("Каша гречневая молочная", "porridge", 180, [ingredient("Молоко", 120, "ml"), ingredient("Крупа гречневая", 35), ingredient("Сахар", 4), ingredient("Масло сливочное", 3)], { protein: 6.3, fat: 5.2, carbs: 31.2, kcal: 196 });
  add("Каша пшенная с яблоком", "porridge", 180, [ingredient("Пшено", 38), ingredient("Молоко", 105, "ml"), ingredient("Яблоко", 25), ingredient("Сахар", 4), ingredient("Масло сливочное", 3)], { protein: 5.1, fat: 5.0, carbs: 34.8, kcal: 205 });
  add("Каша рисовая с яблоком", "porridge", 180, [ingredient("Рис", 36), ingredient("Молоко", 110, "ml"), ingredient("Яблоко", 25), ingredient("Сахар", 4), ingredient("Масло сливочное", 3)], { protein: 4.6, fat: 4.8, carbs: 39.1, kcal: 218 });
  add("Суп молочный с вермишелью", "soups", 180, [ingredient("Молоко", 145, "ml"), ingredient("Вермишель", 24), ingredient("Сахар", 3), ingredient("Масло сливочное", 3)], { protein: 6.1, fat: 5.4, carbs: 26.2, kcal: 179 });
  add("Суп молочный с рисом", "soups", 180, [ingredient("Молоко", 145, "ml"), ingredient("Рис", 25), ingredient("Сахар", 3), ingredient("Масло сливочное", 3)], { protein: 5.4, fat: 5.2, carbs: 28.9, kcal: 184 });
  add("Суп гречневый с курицей", "soups", 200, [ingredient("Филе курицы", 28), ingredient("Крупа гречневая", 18), ingredient("Картофель", 45), ingredient("Морковь", 12), ingredient("Лук репчатый", 7), ingredient("Вода", 150, "ml"), ingredient("Масло растительное", 2)], { protein: 9.4, fat: 3.6, carbs: 18.3, kcal: 143 });
  add("Суп картофельный с курицей", "soups", 200, [ingredient("Филе курицы", 30), ingredient("Картофель", 65), ingredient("Морковь", 12), ingredient("Лук репчатый", 7), ingredient("Вода", 145, "ml"), ingredient("Масло растительное", 2)], { protein: 9.3, fat: 3.4, carbs: 14.6, kcal: 126 });
  add("Уха из судака", "soups", 200, [ingredient("Филе судака", 35), ingredient("Картофель", 55), ingredient("Морковь", 12), ingredient("Лук репчатый", 7), ingredient("Вода", 150, "ml"), ingredient("Масло растительное", 2)], { protein: 8.7, fat: 2.8, carbs: 12.3, kcal: 109 });
  add("Кеспе көже с курицей", "soups", 200, [ingredient("Филе курицы", 30), ingredient("Лапша", 22), ingredient("Морковь", 12), ingredient("Лук репчатый", 7), ingredient("Вода", 155, "ml"), ingredient("Масло растительное", 2)], { protein: 10.1, fat: 3.5, carbs: 17.1, kcal: 141 });
  add("Маш көже", "soups", 200, [ingredient("Маш", 25), ingredient("Рис", 12), ingredient("Картофель", 35), ingredient("Морковь", 12), ingredient("Лук репчатый", 7), ingredient("Вода", 160, "ml"), ingredient("Масло растительное", 2)], { protein: 6.8, fat: 2.5, carbs: 31.4, kcal: 174 });
  add("Сорпа с говядиной", "soups", 200, [ingredient("Говядина", 35), ingredient("Картофель", 55), ingredient("Морковь", 14), ingredient("Лук репчатый", 8), ingredient("Вода", 150, "ml")], { protein: 10.2, fat: 5.5, carbs: 12.3, kcal: 139 });
  add("Котлета из индейки на пару", "meat", 80, [ingredient("Филе индейки", 68), ingredient("Хлеб пшеничный", 9), ingredient("Молоко", 12, "ml"), ingredient("Лук репчатый", 5), ingredient("Масло сливочное", 2)], { protein: 15.2, fat: 5.1, carbs: 5.2, kcal: 128 });
  add("Котлета куриная на пару", "meat", 80, [ingredient("Филе курицы", 68), ingredient("Хлеб пшеничный", 9), ingredient("Молоко", 12, "ml"), ingredient("Лук репчатый", 5), ingredient("Масло сливочное", 2)], { protein: 15.7, fat: 5.6, carbs: 5.1, kcal: 134 });
  add("Суфле из курицы", "meat", 90, [ingredient("Филе курицы", 67), ingredient("Молоко", 24, "ml"), ingredient("Яйцо", 12), ingredient("Мука пшеничная", 5), ingredient("Масло сливочное", 3)], { protein: 17.1, fat: 7.1, carbs: 4.4, kcal: 150 });
  add("Суфле из говядины", "meat", 90, [ingredient("Говядина", 68), ingredient("Молоко", 24, "ml"), ingredient("Яйцо", 12), ingredient("Мука пшеничная", 5), ingredient("Масло сливочное", 3)], { protein: 16.4, fat: 8.2, carbs: 4.4, kcal: 160 });
  add("Тушеная говядина с овощами", "meat", 120, [ingredient("Говядина", 55), ingredient("Картофель", 45), ingredient("Морковь", 18), ingredient("Кабачок", 20), ingredient("Лук репчатый", 7), ingredient("Масло растительное", 3)], { protein: 13.1, fat: 7.0, carbs: 12.8, kcal: 166 });
  add("Фрикадельки из индейки", "meat", 85, [ingredient("Филе индейки", 70), ingredient("Рис", 9), ingredient("Лук репчатый", 6), ingredient("Масло растительное", 2)], { protein: 15.4, fat: 4.2, carbs: 7.5, kcal: 130 });
  add("Рыба на пару", "fish", 80, [ingredient("Филе судака", 85), ingredient("Масло сливочное", 2), ingredient("Соль йодированная", 0.2)], { protein: 16.4, fat: 2.7, carbs: 0, kcal: 90 });
  add("Рыбное суфле", "fish", 90, [ingredient("Филе судака", 68), ingredient("Молоко", 22, "ml"), ingredient("Яйцо", 12), ingredient("Мука пшеничная", 5), ingredient("Масло сливочное", 3)], { protein: 15.8, fat: 5.3, carbs: 4.2, kcal: 130 });
  add("Картофель запеченный", "sides", 120, [ingredient("Картофель", 132), ingredient("Масло растительное", 4), ingredient("Соль йодированная", 0.2)], { protein: 2.4, fat: 4.1, carbs: 22.8, kcal: 137 });
  add("Рис рассыпчатый", "sides", 120, [ingredient("Рис", 43), ingredient("Вода", 90, "ml"), ingredient("Масло сливочное", 4)], { protein: 3.0, fat: 3.8, carbs: 34.4, kcal: 184 });
  add("Перловая каша рассыпчатая", "sides", 120, [ingredient("Крупа перловая", 45), ingredient("Вода", 105, "ml"), ingredient("Масло сливочное", 4)], { protein: 4.2, fat: 4.1, carbs: 31.8, kcal: 178 });
  add("Капуста тушеная", "vegetables", 120, [ingredient("Капуста белокочанная", 135), ingredient("Морковь", 15), ingredient("Лук репчатый", 8), ingredient("Томатная паста", 4), ingredient("Масло растительное", 4)], { protein: 2.1, fat: 4.2, carbs: 9.4, kcal: 82 });
  add("Овощное пюре", "vegetables", 120, [ingredient("Картофель", 55), ingredient("Морковь", 30), ingredient("Кабачок", 35), ingredient("Молоко", 18, "ml"), ingredient("Масло сливочное", 3)], { protein: 2.4, fat: 3.3, carbs: 15.7, kcal: 102 });
  add("Омлет с сыром", "eggs", 100, [ingredient("Яйцо", 55), ingredient("Молоко", 38, "ml"), ingredient("Сыр полутвердый", 10), ingredient("Масло сливочное", 3)], { protein: 10.2, fat: 11.3, carbs: 2.4, kcal: 153 });
  add("Омлет с брокколи", "eggs", 110, [ingredient("Яйцо", 55), ingredient("Молоко", 38, "ml"), ingredient("Брокколи", 25), ingredient("Масло сливочное", 3)], { protein: 8.4, fat: 8.7, carbs: 4.0, kcal: 128 });
  add("Пудинг творожный", "cottageCheese", 100, [ingredient("Творог", 75), ingredient("Яйцо", 12), ingredient("Крупа манная", 8), ingredient("Сахар", 6), ingredient("Масло сливочное", 3)], { protein: 13.2, fat: 8.1, carbs: 14.5, kcal: 184 });
  add("Рисовая запеканка с творогом", "cottageCheese", 110, [ingredient("Творог", 48), ingredient("Рис", 28), ingredient("Молоко", 22, "ml"), ingredient("Яйцо", 12), ingredient("Сахар", 6), ingredient("Масло сливочное", 3)], { protein: 10.1, fat: 6.2, carbs: 29.5, kcal: 215 });
  add("Запеканка творожная с тыквой", "cottageCheese", 110, [ingredient("Творог", 65), ingredient("Тыква", 35), ingredient("Яйцо", 12), ingredient("Крупа манная", 7), ingredient("Сахар", 6), ingredient("Масло сливочное", 3)], { protein: 12.0, fat: 7.2, carbs: 17.0, kcal: 181 });
  add("Бауырсак печеный", "flour", 55, [ingredient("Мука пшеничная", 42), ingredient("Кефир", 18, "ml"), ingredient("Яйцо", 5), ingredient("Сахар", 3), ingredient("Масло растительное", 2)], { protein: 5.1, fat: 3.2, carbs: 34.6, kcal: 188 });
  add("Лепешка домашняя", "flour", 55, [ingredient("Мука пшеничная", 43), ingredient("Молоко", 12, "ml"), ingredient("Вода", 12, "ml"), ingredient("Масло растительное", 2), ingredient("Дрожжи", 0.6)], { protein: 5.0, fat: 2.6, carbs: 34.1, kcal: 180 });
  add("Кисель ягодный", "drinks", 180, [ingredient("Ягоды", 28), ingredient("Сахар", 10), ingredient("Крахмал", 6), ingredient("Вода", 160, "ml")], { protein: 0.2, fat: 0.1, carbs: 18.5, kcal: 76 });
  add("Компот из яблок и кураги", "drinks", 180, [ingredient("Яблоко", 28), ingredient("Курага", 10), ingredient("Сахар", 7), ingredient("Вода", 165, "ml")], { protein: 0.6, fat: 0.1, carbs: 15.8, kcal: 65 });
  add("Салат из моркови и яблока", "salads", 45, [ingredient("Морковь", 28), ingredient("Яблоко", 18), ingredient("Масло растительное", 2)], { protein: 0.4, fat: 2.1, carbs: 4.7, kcal: 38 });
  add("Салат из капусты и яблока", "salads", 45, [ingredient("Капуста белокочанная", 30), ingredient("Яблоко", 15), ingredient("Масло растительное", 2)], { protein: 0.5, fat: 2.1, carbs: 4.1, kcal: 36 });

  window.BALAFOOD_EXTRA_TRANSLATIONS = {
    "Каша манная молочная": { kk: "Сүтті ұнтақ жарма ботқасы", en: "Milk semolina porridge" },
    "Каша гречневая молочная": { kk: "Сүтті қарақұмық ботқасы", en: "Milk buckwheat porridge" },
    "Каша пшенная с яблоком": { kk: "Алма қосылған тары ботқасы", en: "Millet porridge with apple" },
    "Каша рисовая с яблоком": { kk: "Алма қосылған күріш ботқасы", en: "Rice porridge with apple" },
    "Суп молочный с вермишелью": { kk: "Вермишель қосылған сүтті сорпа", en: "Milk soup with vermicelli" },
    "Суп молочный с рисом": { kk: "Күріш қосылған сүтті сорпа", en: "Milk soup with rice" },
    "Суп гречневый с курицей": { kk: "Тауық еті қосылған қарақұмық сорпасы", en: "Buckwheat soup with chicken" },
    "Суп картофельный с курицей": { kk: "Тауық еті қосылған картоп сорпасы", en: "Potato soup with chicken" },
    "Уха из судака": { kk: "Көксерке балық сорпасы", en: "Pike-perch fish soup" },
    "Кеспе көже с курицей": { kk: "Тауық еті қосылған кеспе көже", en: "Kespe noodle soup with chicken" },
    "Маш көже": { kk: "Маш көже", en: "Mung bean soup" },
    "Сорпа с говядиной": { kk: "Сиыр еті қосылған сорпа", en: "Beef sorpa" },
    "Котлета из индейки на пару": { kk: "Буға піскен күркетауық котлеті", en: "Steamed turkey patty" },
    "Котлета куриная на пару": { kk: "Буға піскен тауық котлеті", en: "Steamed chicken patty" },
    "Суфле из курицы": { kk: "Тауық суфлесі", en: "Chicken soufflé" },
    "Суфле из говядины": { kk: "Сиыр еті суфлесі", en: "Beef soufflé" },
    "Тушеная говядина с овощами": { kk: "Көкөніспен бұқтырылған сиыр еті", en: "Stewed beef with vegetables" },
    "Фрикадельки из индейки": { kk: "Күркетауық етінен домалақшалар", en: "Turkey meatballs" },
    "Рыба на пару": { kk: "Буға піскен балық", en: "Steamed fish" },
    "Рыбное суфле": { kk: "Балық суфлесі", en: "Fish soufflé" },
    "Картофель запеченный": { kk: "Пісірілген картоп", en: "Baked potatoes" },
    "Рис рассыпчатый": { kk: "Үгілмелі күріш", en: "Fluffy rice" },
    "Перловая каша рассыпчатая": { kk: "Үгілмелі арпа ботқасы", en: "Fluffy pearl-barley porridge" },
    "Капуста тушеная": { kk: "Бұқтырылған қырыққабат", en: "Stewed cabbage" },
    "Овощное пюре": { kk: "Көкөніс езбесі", en: "Vegetable puree" },
    "Омлет с сыром": { kk: "Ірімшік қосылған омлет", en: "Cheese omelette" },
    "Омлет с брокколи": { kk: "Брокколи қосылған омлет", en: "Broccoli omelette" },
    "Пудинг творожный": { kk: "Сүзбе пудингі", en: "Cottage-cheese pudding" },
    "Рисовая запеканка с творогом": { kk: "Сүзбе қосылған күріш пісірмесі", en: "Rice and cottage-cheese casserole" },
    "Запеканка творожная с тыквой": { kk: "Асқабақ қосылған сүзбе пісірмесі", en: "Cottage-cheese and pumpkin casserole" },
    "Бауырсак печеный": { kk: "Пісірілген бауырсақ", en: "Baked baursak" },
    "Лепешка домашняя": { kk: "Үй шелпегі", en: "Homemade flatbread" },
    "Кисель ягодный": { kk: "Жидек киселі", en: "Berry kissel" },
    "Компот из яблок и кураги": { kk: "Алма мен кептірілген өрік компоты", en: "Apple and dried-apricot compote" },
    "Салат из моркови и яблока": { kk: "Сәбіз бен алма салаты", en: "Carrot and apple salad" },
    "Салат из капусты и яблока": { kk: "Қырыққабат пен алма салаты", en: "Cabbage and apple salad" }
  };
})();
