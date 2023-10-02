let productContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

function Products(name, src) {
  this.name = name;
  this.src = src;
  this.views = views;
  this.clicks = clicks;
}

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  while (product1Index === product2Index || product3Index) {
    product1Index = getRandomIndex();
  }

  image1.src = allProducts[product1Index].src;
  image2.src = allProducts[product2Index].src;
  image3.src = allProducts[product3Index].src;
  image1.alt = allProducts[product1Index].name;
  image2.alt = allProducts[product2Index].name;
  image3.alt = allProducts[product3Index].name;

  allProducts[product1Index].views++;
  allProducts[product2Index].views++;
  allProducts[product3Index].views++;
}

function handleProductClick(event) {
  let clickedProduct = event.target.alt;

  if (event.target === productContainer) {
    alert("Please choose an image");
  } else {
    renderProducts();
  }

  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].clicks++;
      break;
    }
  }
}
const allProducts = [
  new Products("bag", "./assets/bag.jpg"),
  new Products("banana", "./assets/banana.jpg"),
  new Products("bathroom", "./assets/bathroom.jpg"),
  new Products("boots", "./assets/boots.jpg"),
  new Products("breakfast", "./assets/breakfast.jpg"),
  new Products("bubblegum", "./assets/bubblegum.jpg"),
  new Products("chair", "./assets/chair.jpg"),
  new Products("cthulu", "./assets/cthulu.jpg"),
  new Products("dog-duck", "./assets/dog-duck.jpg"),
  new Products("dragon", "./assets/dragon.jpg"),
  new Products("pen", "./assets/pen.jpg"),
  new Products("pet-sweep", "./assets/pet-sweep.jpg"),
  new Products("scissors", "./assets/scissors.jpg"),
  new Products("shark", "./assets/shark.jpg"),
  new Products("sweep", "./assets/sweep.png"),
  new Products("tauntaun", "./assets/tauntaun.jpg"),
  new Products("unicorn", "./assets/unicorn.jpg"),
  new Products("water-can", "./assets/water-can.jpg"),
  new Products("wine-glass", "./assets/wine-glass.jpg"),
];

productContainer.addEventListener("click", handleProductClick);

renderProducts();
