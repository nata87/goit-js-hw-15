const quantity = document.querySelectorAll(".item");
console.log(`Number of categories: ${quantity.length}`);

quantity.forEach((element) => {
  const title = element.firstElementChild.innerHTML;
  const itemLength = element.lastElementChild.children.length;

  console.log(`Category : ${title}`);
  console.log(`Elements : ${itemLength}`);
});
