'use strict'

const list = document.querySelector("#categories");
const categories = list.children;

console.log(`Number of categories: ${list.children.length}`);

for (const category of categories) {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("ul li");
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems.length}`);
}