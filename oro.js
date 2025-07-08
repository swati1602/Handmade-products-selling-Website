let cart = [];

    function addToCart(item, price) {
        cart.push({ item, price });
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((c, i) => {
            cartItems.innerHTML += `<p>${c.item} - ₹${c.price}</p>`;
            total += c.price;
        });
        cartTotal.innerText = `Total: ₹${total}`;
    }

    function checkout() {
        alert("You will be contacted shortly to complete your order.");
    }

    function toggleLanguage() {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            const current = el.innerText;
            el.innerText = current === el.dataset.en ? el.dataset.hi : el.dataset.en;
        });
    }