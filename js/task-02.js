const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");

const ingredinetsElements = ingredients.map(ingredient => {
  const itemIngredientsEl = document.createElement("li");
  console.log(itemIngredientsEl);

  itemIngredientsEl.textContent = ingredient;
  itemIngredientsEl.classList.add("item");

  return itemIngredientsEl;
});

ingredientsList.append(...ingredinetsElements);
console.log(ingredientsList);