let cart = [];


// Shop Now / Contact
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


// Add to cart
function addToCart(name, price) {

    const existingProduct =
        cart.find(item => item.name === name);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " added to cart! 🛒");
}


// Increase quantity
function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// Decrease quantity
function decreaseQuantity(index) {

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}


// Remove product
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// Update cart
function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;

    cartItems.innerHTML = "";


    cart.forEach(function(item, index) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>
                    <strong>${item.name}</strong>

                    <p>
                        ₹${item.price} × ${item.quantity}
                    </p>
                </div>

                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                    <button onclick="removeFromCart(${index})">
                        ❌
                    </button>

                </div>

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

        `;

    });


    cartTotal.textContent = total;
}


// Checkout
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }function orderOnWhatsApp() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🛒 *Smart General Store Order*%0A%0A";

    let total = 0;

    cart.forEach(function(item) {

        let itemTotal = item.price * item.quantity;

        total += itemTotal;

        message +=
            item.name +
            " × " +
            item.quantity +
            " = ₹" +
            itemTotal +
            "%0A";
    });

    message +=
        "%0A*Total: ₹" +
        total +
        "*";

    /*
       IMPORTANT:
       Yahan apne store ka WhatsApp number
       country code ke saath likhna hai.
       
       Example format:
       91XXXXXXXXXX
    */

    const phoneNumber = "91XXXXXXXXXX";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");
}

    


    alert(
        "Order placed successfully! 🎉\n\n" +
        "Thank you for shopping with us."
    );

    cart = [];

    updateCart();
}
