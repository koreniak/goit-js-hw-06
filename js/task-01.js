const categoriesList = document.querySelector('ul#categories');
console.log(`Number of categories: ${categoriesList.children.length}`)

const itemsCategoriesList = document.querySelectorAll('li.item');
console.log(itemsCategoriesList.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
}));