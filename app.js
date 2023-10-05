const ctx = document.getElementById("myChart");
const productNames = [];
const productClicks = [];
const productViews = [];
let userClicks = 0;
const maxClicks = 25;

const allProducts = [];

const productContainer = document.querySelector("section");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function Products(name, views, clicks) {
  this.name = name;
  this.src = `./assets/${name}.jpg`;
  this.views = views;
  this.clicks = clicks;

  allProducts.push(this);
}

if (localStorage.getItem("products") === null) {
  new Products("bag", 0, 0);
  new Products("banana", 0, 0);
  new Products("bathroom", 0, 0);
  new Products("boots", 0, 0);
  new Products("breakfast", 0, 0);
  new Products("bubblegum", 0, 0);
  new Products("chair", 0, 0);
  new Products("cthulu", 0, 0);
  new Products("dog-duck", 0, 0);
  new Products("dragon", 0, 0);
  new Products("pen", 0, 0);
  new Products("pet-sweep", 0, 0);
  new Products("scissors", 0, 0);
  new Products("shark", 0, 0);
  new Products("sweep", 0, 0);
  new Products("tauntaun", 0, 0);
  new Products("unicorn", 0, 0);
  new Products("water-can", 0, 0);
  new Products("wine-glass", 0, 0);
} else {
  const productsLS = JSON.parse(localStorage.getItem("products"));
  for (let i = 0; i < productsLS.length; i++) {
    new Products(productsLS[i].name, productsLS[i].views, productsLS[i].clicks);
  }
}

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {
  let product1Index = getRandomIndex();
  let product2Index = getRandomIndex();
  let product3Index = getRandomIndex();

  while (
    product1Index === product2Index ||
    product1Index === product3Index ||
    product2Index === product3Index
  ) {
    product2Index = getRandomIndex();
    product3Index = getRandomIndex();
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
  if (userClicks === maxClicks) {
    alert("You have run out of votes");
    renderChart();
    localStorage.setItem("products", JSON.stringify(allProducts));
    return;
  }

  userClicks++;

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
  renderProducts();
}

image1.addEventListener("Click", handleProductClick);
image2.addEventListener("Click", handleProductClick);
image3.addEventListener("Click", handleProductClick);

function renderChart() {
  const ctx = document.getElementById("myChart");

  const labels = [];
  const views = [];
  const clicks = [];

  for (let i = 0; i < allProducts.length; i++) {
    labels.push(allProducts[i].name);
    views.push(allProducts[i].views);
    clicks.push(allProducts[i].clicks);
  }
  const config = {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of votes",
          // for loop
          data: clicks,
          borderWidth: 3,
          backgroundColor: ["skyblue"],
        },
        {
          type: "bar",
          label: "# of views",
          data: views,
          borderWidth: 3,
          backgroundColor: ["red"],
        },
      ],
    },
  };
  new Chart(ctx, config);
}

productContainer.addEventListener("click", handleProductClick);

renderProducts();

// const viewResults = document.getElementById("view-results");
// viewResults.addEventListener("click", showResults);

const prodStringified = JSON.stringify(allProducts);

localStorage.setItem("products", prodStringified);

const prodFromLocal = localStorage.getItem("products");

const prodParsed = JSON.parse(prodFromLocal);
