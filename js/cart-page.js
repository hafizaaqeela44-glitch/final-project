/* ============================================
   THE BEAD MARKET - Cart & Checkout Page Script
   ============================================ */

(function () {
    'use strict';

    /* ---------- Helper to get product by ID ---------- */
    function getProductById(productId) {
        if (typeof window.productsData !== 'undefined') {
            return window.productsData.find(p => p.id === productId);
        }
        return null;
    }

    /* ---------- Cart Storage Helpers (duplicated from main.js to keep independence) ---------- */
    function getCart() {
        try {
            const cart = localStorage.getItem('beadMarketCart');
            return cart ? JSON.parse(cart) : [];
        } catch (e) {
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem('beadMarketCart', JSON.stringify(cart));
    }

    /* ---------- Render Cart Page ---------- */
    function renderCartPage() {
        const emptyEl = document.getElementById('cartEmpty');
        const contentEl = document.getElementById('cartContent');
        if (!emptyEl || !contentEl) return;

        const cart = getCart();

        if (cart.length === 0) {
            emptyEl.style.display = 'block';
            contentEl.style.display = 'none';
            return;
        }

        emptyEl.style.display = 'none';
        contentEl.style.display = 'block';

        let cartItemsHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const product = getProductById(item.productId);
            if (!product) return;

            const quantity = item.quantity || 1;
            const lineTotal = product.price * quantity;
            subtotal += lineTotal;

            const fallbackSrc = 'https://via.placeholder.com/300x300/8B5E3C?text=The+Bead+Market';
            const imageSrc = product.images && product.images.length > 0
                ? product.images[0].replace('500x500', '150x150')
                : fallbackSrc;

            cartItemsHTML += (
                '<div class="cart-item" data-product-id="' + product.id + '">' +
                    '<div class="cart-item-image">' +
                        '<img src="' + imageSrc + '" alt="' + product.name + '" ' +
                        'onerror="this.onerror=null; this.src=\'' + fallbackSrc.replace('500x500', '150x150') + '\';">' +
                    '</div>' +
                    '<div class="cart-item-details">' +
                        '<h3 class="cart-item-name">' + product.name + '</h3>' +
                        '<span class="cart-item-category">' + product.category + '</span>' +
                        '<span class="cart-item-price">' + window.formatPrice(product.price) + ' each</span>' +
                    '</div>' +
                    '<div class="cart-item-quantity">' +
                        '<button class="qty-btn" onclick="updateCartQuantity(\'' + product.id + '\', -1)"><i class="fas fa-minus"></i></button>' +
                        '<input type="number" class="qty-input" value="' + quantity + '" min="1" max="99" ' +
                        'onchange="setCartQuantity(\'' + product.id + '\', this.value)">' +
                        '<button class="qty-btn" onclick="updateCartQuantity(\'' + product.id + '\', 1)"><i class="fas fa-plus"></i></button>' +
                    '</div>' +
                    '<div class="cart-item-line-total">' + window.formatPrice(lineTotal) + '</div>' +
                    '<button class="cart-item-remove" onclick="removeCartItem(\'' + product.id + '\')" title="Remove item">' +
                        '<i class="fas fa-trash-alt"></i>' +
                    '</button>' +
                '</div>'
            );
        });

        const shipping = subtotal >= 50 ? 0 : 5.99;
        const total = subtotal + shipping;

        contentEl.innerHTML = (
            '<div class="cart-layout">' +
                '<div class="cart-items-list">' +
                    '<h2>Items (' + cart.length + ')</h2>' +
                    cartItemsHTML +
                '</div>' +
                '<div class="cart-summary">' +
                    '<h3>Order Summary</h3>' +
                    '<div class="summary-row"><span>Subtotal</span><span>' + window.formatPrice(subtotal) + '</span></div>' +
                    '<div class="summary-row"><span>Shipping</span><span>' + (shipping === 0 ? 'FREE' : window.formatPrice(shipping)) + '</span></div>' +
                    '<div class="summary-divider"></div>' +
                    '<div class="summary-row total"><span>Total</span><span>' + window.formatPrice(total) + '</span></div>' +
                    '<a href="checkout.html" class="btn btn-primary checkout-btn">Proceed to Checkout</a>' +
                    '<a href="shop.html" class="btn btn-secondary continue-btn">Continue Shopping</a>' +
                '</div>' +
            '</div>'
        );
    }

    /* ---------- Render Checkout Page ---------- */
    function renderCheckoutPage() {
        const emptyEl = document.getElementById('checkoutEmpty');
        const contentEl = document.getElementById('checkoutContent');
        if (!emptyEl || !contentEl) return;

        const cart = getCart();

        if (cart.length === 0) {
            emptyEl.style.display = 'block';
            contentEl.style.display = 'none';
            return;
        }

        emptyEl.style.display = 'none';
        contentEl.style.display = 'block';

        let subtotal = 0;
        let orderItemsHTML = '';

        cart.forEach(item => {
            const product = getProductById(item.productId);
            if (!product) return;
            const quantity = item.quantity || 1;
            const lineTotal = product.price * quantity;
            subtotal += lineTotal;

            orderItemsHTML += (
                '<div class="order-summary-item">' +
                    '<span>' + product.name + ' × ' + quantity + '</span>' +
                    '<span>' + window.formatPrice(lineTotal) + '</span>' +
                '</div>'
            );
        });

        const shipping = subtotal >= 50 ? 0 : 5.99;
        const total = subtotal + shipping;

        contentEl.innerHTML = (
            '<div class="checkout-layout">' +
                '<div class="checkout-form-section">' +
                    '<h2>Shipping Information</h2>' +
                    '<form id="checkoutForm">' +
                        '<div class="form-row">' +
                            '<div class="form-group">' +
                                '<label for="firstName">First Name *</label>' +
                                '<input type="text" id="firstName" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<label for="lastName">Last Name *</label>' +
                                '<input type="text" id="lastName" required>' +
                            '</div>' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<label for="email">Email Address *</label>' +
                            '<input type="email" id="email" required>' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<label for="address">Street Address *</label>' +
                            '<input type="text" id="address" required>' +
                        '</div>' +
                        '<div class="form-row">' +
                            '<div class="form-group">' +
                                '<label for="city">City *</label>' +
                                '<input type="text" id="city" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<label for="zip">ZIP Code *</label>' +
                                '<input type="text" id="zip" required>' +
                            '</div>' +
                        '</div>' +
                        '<div class="form-group">' +
                            '<label for="country">Country *</label>' +
                            '<select id="country" required>' +
                                '<option value="">Select Country</option>' +
                                '<option value="PK">Pakistan</option>' +
                                '<option value="US">United States</option>' +
                                '<option value="CA">Canada</option>' +
                                '<option value="UK">United Kingdom</option>' +
                                '<option value="AU">Australia</option>' +
                                '<option value="DE">Germany</option>' +
                                '<option value="FR">France</option>' +
                            '</select>' +
                        '</div>' +
                        '<h2 style="margin-top:20px;">Payment Information</h2>' +
                        '<div class="form-group">' +
                            '<label for="cardNumber">Card Number *</label>' +
                            '<input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required>' +
                        '</div>' +
                        '<div class="form-row">' +
                            '<div class="form-group">' +
                                '<label for="expiry">Expiry Date *</label>' +
                                '<input type="text" id="expiry" placeholder="MM/YY" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                                '<label for="cvv">CVV *</label>' +
                                '<input type="text" id="cvv" placeholder="123" required>' +
                            '</div>' +
                        '</div>' +
                        '<button type="submit" class="btn btn-primary" style="width:100%; margin-top:15px;">Place Order</button>' +
                    '</form>' +
                '</div>' +
                '<div class="checkout-summary">' +
                    '<h3>Order Summary</h3>' +
                    orderItemsHTML +
                    '<div class="summary-divider"></div>' +
                    '<div class="summary-row"><span>Subtotal</span><span>' + window.formatPrice(subtotal) + '</span></div>' +
                    '<div class="summary-row"><span>Shipping</span><span>' + (shipping === 0 ? 'FREE' : window.formatPrice(shipping)) + '</span></div>' +
                    '<div class="summary-divider"></div>' +
                    '<div class="summary-row total"><span>Total</span><span>' + window.formatPrice(total) + '</span></div>' +
                '</div>' +
            '</div>'
        );

        // Attach form submit handler
        const form = document.getElementById('checkoutForm');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const required = form.querySelectorAll('[required]');
                let valid = true;
                required.forEach(input => {
                    if (!input.value.trim()) valid = false;
                });
                if (!valid) {
                    alert('Please fill in all required fields.');
                    return;
                }
                alert('Thank you for your order! (Demo only – no real payment processed)');
                saveCart([]);
                if (typeof window.updateCartCountDisplay === 'function') {
                    window.updateCartCountDisplay();
                }
                window.location.href = 'index.html';
            });
        }
    }

    /* ---------- Global Functions (exposed for inline onclick) ---------- */
    window.updateCartQuantity = function (productId, delta) {
        const cart = getCart();
        const item = cart.find(i => i.productId === productId);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity < 1) item.quantity = 1;
        if (item.quantity > 99) item.quantity = 99;
        saveCart(cart);
        renderCartPage();
        if (typeof window.updateCartCountDisplay === 'function') {
            window.updateCartCountDisplay();
        }
    };

    window.setCartQuantity = function (productId, value) {
        const quantity = parseInt(value, 10);
        if (isNaN(quantity) || quantity < 1) {
            const cart = getCart();
            const item = cart.find(i => i.productId === productId);
            if (item) {
                const input = document.querySelector('.qty-input[data-product-id="' + productId + '"]');
                if (input) input.value = item.quantity;
            }
            return;
        }
        const finalQty = Math.min(quantity, 99);
        const cart = getCart();
        const item = cart.find(i => i.productId === productId);
        if (item) {
            item.quantity = finalQty;
            saveCart(cart);
            renderCartPage();
            if (typeof window.updateCartCountDisplay === 'function') {
                window.updateCartCountDisplay();
            }
        }
    };

    window.removeCartItem = function (productId) {
        let cart = getCart();
        cart = cart.filter(item => item.productId !== productId);
        saveCart(cart);
        renderCartPage();
        if (typeof window.updateCartCountDisplay === 'function') {
            window.updateCartCountDisplay();
        }
    };

    /* ---------- Init on DOM ready ---------- */
    function init() {
        const path = window.location.pathname;
        if (path.includes('cart.html')) {
            renderCartPage();
        } else if (path.includes('checkout.html')) {
            renderCheckoutPage();
        }
        if (typeof window.updateCartCountDisplay === 'function') {
            window.updateCartCountDisplay();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();