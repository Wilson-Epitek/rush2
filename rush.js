document.addEventListener("DOMContentLoaded", function () {
  let searchInput = document.getElementById("search");
  let products = document.querySelectorAll(".product");
  let priceRange = document.getElementById("priceRange");
  let priceValue = document.getElementById("priceValue");

  priceRange.addEventListener("input", function () {
    priceValue.textContent = `$${priceRange.value}`;
    filterProducts();
  });

searchInput.addEventListener("input", filterProducts);

  function filterProducts() {
    let filter = searchInput.value.toLowerCase().trim();
    let maxPrice = parseInt(priceRange.value);
    products.forEach(function (product) {
      let productName = product
        .querySelector("h4")
        .textContent.toLowerCase()
        .trim();
      let productPrice = parseInt(
        product.querySelector("h4 + h5 + h4").textContent.replace("$", "")
      );

      if (productName.includes(filter) && productPrice <= maxPrice) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  }
});

window.onload = function () {
  let sidenav = document.getElementById("mySidenav");
  let openBtn = document.getElementById("openBtn");
  let closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = function (event) {
    event.preventDefault();
    sidenav.classList.add("active");
  };

  closeBtn.onclick = function (event) {
    event.preventDefault();
    sidenav.classList.remove("active");
  };
};

document.addEventListener("DOMContentLoaded", () => {
  let searchInput = document.getElementById("search");
  let products = document.querySelectorAll(".product");

  searchInput.addEventListener("input", () => {
    let filter = searchInput.value.toLowerCase();
    products.forEach((product) => {
      let productName = product.querySelector("h4").textContent.toLowerCase();
      product.style.display = productName.includes(filter) ? "" : "none";
    });
  });
});
