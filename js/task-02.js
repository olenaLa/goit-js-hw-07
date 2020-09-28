// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement().

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const IngredientsEl = document.querySelector("#ingredients");
const listIngredients = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  return listEl;
});
console.log(listIngredients);
IngredientsEl.append(...listIngredients);
