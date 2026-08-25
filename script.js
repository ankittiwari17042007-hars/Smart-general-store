let cartCount = 0;
let cartTotal = 0;

// Shop Now / Contact button
function showMessage() {
    alert("Welcome to Smart General Store! 🛒");
}


// Search products
function searchProducts() {

    const searchText =
        document.getElementById("searchInput").value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


// Category filter
function filterProducts(category) {

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}


// Add product to cart
function addToCart(productName, price) {

    cartCount++;
    cartTotal += price;

    document.getElementById("cartCount").textContent = cartCount;

    document.getElementById("cartTotal").textContent = cartTotal;

    alert(productName + " added to cart! 🛒");
}
