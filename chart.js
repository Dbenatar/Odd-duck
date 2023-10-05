const allProducts = [];

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

renderChart();
