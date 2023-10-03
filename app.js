let userClicks = 0;
let maxClicks = 25;

let productContainer = document.querySelector("section");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function Products(name) {
  this.name = name;
  this.src = `./assets/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
}

const allProducts = [
  new Products("bag"),
  new Products("banana"),
  new Products("bathroom"),
  new Products("boots"),
  new Products("breakfast"),
  new Products("bubblegum"),
  new Products("chair"),
  new Products("cthulu"),
  new Products("dog-duck"),
  new Products("dragon"),
  new Products("pen"),
  new Products("pet-sweep"),
  new Products("scissors"),
  new Products("shark"),
  new Products("sweep"),
  new Products("tauntaun"),
  new Products("unicorn"),
  new Products("water-can"),
  new Products("wine-glass"),
];

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
    return;
  }

  userClicks++;

  let clickedProduct = event.target.alt;

  // if (event.target === productContainer) {
  //   alert("Please choose an image");
  // } else {
  //   renderProducts();
  // }

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

function showResults() {
  const results = document.getElementById("results");

  for (let i = 0; i < allProducts.length; i++) {
    const li = document.createElement("li");
    const products = allProducts[i];
    li.textContent = `${products.name} was viewed ${products.views} times, and clicked ${products.clicks} times`;
    results.appendChild(li);
  }
}
productContainer.addEventListener("click", handleProductClick);

const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

const ctx = document.getElementById("myChart");
const config = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "bag",
      "banana",
      "bathroom",
      "boots",
      "breakfast",
      "bubblegum",
      "chair",
      "cthulu",
      "dog-duck",
      "dragon",
      "pen",
      "pet-sweep",
      "scissors",
      "shark",
      "sweep",
      "tauntaun",
      "unicorn",
      "water-can",
      "wine-glass",
    ],
    datasets: [
      {
        label: "# of votes",
        data: [5, 10, 3, 9, 8.9],
        borderWidth: 6,
        backgroundColor: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        type: "line",
        label: "# of views",
        data: [30, 31, 11, 50, 90],
        borderWidth: 6,
        backgroundColor: [
          "red",
          "#cdaa7f",
          "skyblue",
          "green",
          "orange",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
});

renderProducts();
