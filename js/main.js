/* ============================================
   THE BEAD MARKET - Main JavaScript
   ============================================ */

(function () {
    'use strict';

    /* ============================================
       CURRENCY CONFIG
       ============================================ */
    window.CURRENCY_SYMBOL = 'Rs ';
    window.formatPrice = function (amount) {
        return window.CURRENCY_SYMBOL + Number(amount).toFixed(2);
    };

    /* ============================================
       CART MANAGEMENT
       ============================================ */
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

    function getCartCount() {
        const cart = getCart();
        return cart.reduce((total, item) => total + (item.quantity || 1), 0);
    }

    function updateCartCountDisplay() {
        const countEls = document.querySelectorAll('#cartCount');
        const count = getCartCount();
        countEls.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function addToCart(productId, quantity) {
        const cart = getCart();
        const existingItem = cart.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ productId: productId, quantity: quantity });
        }
        saveCart(cart);
        updateCartCountDisplay();
        showToast('Item added to cart!');
    }

    /* ============================================
       TOAST NOTIFICATION
       ============================================ */
    function showToast(message) {
        let toast = document.querySelector('.toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast-notification';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    /* ============================================
       STAR RATING HTML
       ============================================ */
    function getStarRatingHTML(rating) {
        let html = '';
        const fullStars = Math.floor(rating);
        const hasHalf = rating - fullStars >= 0.5;
        for (let i = 0; i < fullStars; i++) {
            html += '<i class="fas fa-star"></i>';
        }
        if (hasHalf) {
            html += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            html += '<i class="far fa-star"></i>';
        }
        return html;
    }

    /* ============================================
       PRODUCT CARD HTML
       ============================================ */
    function getProductCardHTML(product) {
        const badgeHTML = product.oldPrice
            ? '<span class="product-badge">Sale</span>'
            : '';
        const oldPriceHTML = product.oldPrice
            ? '<span class="old-price">' + window.formatPrice(product.oldPrice) + '</span>'
            : '';
        const fallbackSrc = 'https://via.placeholder.com/300x300/8B5E3C?text=The+Bead+Market';
        const imageSrc = product.images && product.images.length > 0 ? product.images[0].replace('500x500', '300x300') : fallbackSrc;

        return (
            '<div class="product-card">' +
                '<div class="product-image-wrap">' +
                    '<img src="' + imageSrc + '" alt="' + product.name + '" ' +
                        'onerror="this.onerror=null; this.src=\'' + fallbackSrc + '\';">' +
                    badgeHTML +
                '</div>' +
                '<div class="product-info">' +
                    '<span class="product-category">' + product.category + '</span>' +
                    '<h3 class="product-name">' + product.name + '</h3>' +
                    '<div class="product-rating">' +
                        getStarRatingHTML(product.rating) +
                        '<span>(' + product.reviewCount + ')</span>' +
                    '</div>' +
                    '<div class="product-price">' +
                        '<span class="current-price">' + window.formatPrice(product.price) + '</span>' +
                        oldPriceHTML +
                    '</div>' +
                    '<a href="product.html?product=' + product.id + '" class="btn btn-view">View Details</a>' +
                '</div>' +
            '</div>'
        );
    }

    /* ============================================
       MOBILE MENU TOGGLE
       ============================================ */
    function initMobileMenu() {
        const toggleBtn = document.getElementById('mobileMenuToggle');
        const nav = document.getElementById('mainNav');
        if (toggleBtn && nav) {
            toggleBtn.addEventListener('click', function () {
                nav.classList.toggle('open');
                const isOpen = nav.classList.contains('open');
                toggleBtn.innerHTML = isOpen
                    ? '<i class="fas fa-times"></i>'
                    : '<i class="fas fa-bars"></i>';
            });
        }
    }

    /* ============================================
       NEWSLETTER FORMS
       ============================================ */
    function initNewsletterForms() {
        const forms = document.querySelectorAll('.newsletter-form, .footer-newsletter');
        forms.forEach(form => {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const emailInput = form.querySelector('input[type="email"]');
                if (emailInput && emailInput.value.trim()) {
                    showToast('Thanks for subscribing!');
                    emailInput.value = '';
                }
            });
        });
    }

    /* ============================================
       SHOP PAGE - RENDER PRODUCTS
       ============================================ */
    function initShopPage() {
        const grid = document.getElementById('shopProductGrid');
        const filterSelect = document.getElementById('categoryFilter');
        const sortSelect = document.getElementById('sortSelect');
        const noResults = document.getElementById('noResults');

        if (!grid || !filterSelect || !sortSelect) return;

        let currentCategory = 'all';
        let currentSort = 'default';

        function renderProducts() {
            let filteredProducts = [];

            if (typeof window.productsData !== 'undefined' && Array.isArray(window.productsData)) {
                filteredProducts = window.productsData.filter(product => {
                    if (currentCategory === 'all') return true;
                    return product.category === currentCategory;
                });

                // Sort
                switch (currentSort) {
                    case 'price-low':
                        filteredProducts.sort((a, b) => a.price - b.price);
                        break;
                    case 'price-high':
                        filteredProducts.sort((a, b) => b.price - a.price);
                        break;
                    case 'name':
                        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                        break;
                    default:
                        break;
                }
            }

            if (filteredProducts.length === 0) {
                grid.innerHTML = '';
                if (noResults) noResults.style.display = 'block';
            } else {
                if (noResults) noResults.style.display = 'none';
                grid.innerHTML = filteredProducts.map(product => getProductCardHTML(product)).join('');
            }
        }

        filterSelect.addEventListener('change', function () {
            currentCategory = this.value;
            renderProducts();
        });

        sortSelect.addEventListener('change', function () {
            currentSort = this.value;
            renderProducts();
        });

        renderProducts();
    }

    /* ============================================
       PRODUCT TEMPLATE - RENDER DETAILS
       ============================================ */
    function initProductTemplate() {
        const detailContent = document.getElementById('productDetailContent');
        const notFound = document.getElementById('productNotFound');
        const relatedGrid = document.getElementById('relatedProductsGrid');
        const relatedSection = document.getElementById('relatedSection');

        if (!detailContent) return;

        // Get product ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('product');

        if (!productId || typeof window.productsData === 'undefined') {
            if (detailContent) detailContent.style.display = 'none';
            if (notFound) notFound.style.display = 'block';
            if (relatedSection) relatedSection.style.display = 'none';
            return;
        }

        const product = window.productsData.find(p => p.id === productId);

        if (!product) {
            if (detailContent) detailContent.style.display = 'none';
            if (notFound) notFound.style.display = 'block';
            if (relatedSection) relatedSection.style.display = 'none';
            return;
        }

        // Update page title
        document.title = product.name + ' - The Bead Market';

        // Build images
        const mainImage = product.images && product.images.length > 0
            ? product.images[0]
            : 'https://via.placeholder.com/500x500/8B5E3C?text=The+Bead+Market';

        const fallbackSrc = 'https://via.placeholder.com/500x500/8B5E3C?text=The+Bead+Market';

        let thumbnailsHTML = '';
        if (product.images && product.images.length > 0) {
            product.images.forEach((img, index) => {
                thumbnailsHTML += (
                    '<div class="thumbnail' + (index === 0 ? ' active' : '') + '" data-image="' + img + '" ' +
                    'onclick="switchProductImage(this, \'' + img + '\')">' +
                    '<img src="' + img.replace('500x500', '100x100') + '" alt="' + product.name + ' thumbnail ' + (index + 1) + '" ' +
                    'onerror="this.onerror=null; this.src=\'' + fallbackSrc.replace('500x500', '100x100') + '\';">' +
                    '</div>'
                );
            });
        }

        // Build tags
        let tagsHTML = '';
        if (product.tags && product.tags.length > 0) {
            product.tags.forEach(tag => {
                tagsHTML += '<span class="tag">' + tag + '</span>';
            });
        }

        // Build additional info table
        let additionalInfoHTML = '';
        if (product.additionalInfo) {
            additionalInfoHTML = '<table><tbody>';
            Object.keys(product.additionalInfo).forEach(key => {
                additionalInfoHTML += (
                    '<tr><th>' + key + '</th><td>' + product.additionalInfo[key] + '</td></tr>'
                );
            });
            additionalInfoHTML += '</tbody></table>';
        }

        // Build detail HTML
        const oldPriceHTML = product.oldPrice
            ? '<span class="product-detail-old-price">' + window.formatPrice(product.oldPrice) + '</span>'
            : '';

        detailContent.innerHTML = (
            '<div class="product-detail-grid">' +
                '<div class="product-images">' +
                    '<div class="main-product-image">' +
                        '<img src="' + mainImage + '" alt="' + product.name + '" id="mainProductImage" ' +
                        'onerror="this.onerror=null; this.src=\'' + fallbackSrc + '\';">' +
                    '</div>' +
                    '<div class="thumbnail-row">' +
                        thumbnailsHTML +
                    '</div>' +
                '</div>' +
                '<div class="product-detail-info">' +
                    '<span class="product-detail-category">' + product.category + '</span>' +
                    '<h1>' + product.name + '</h1>' +
                    '<div class="product-detail-rating">' +
                        getStarRatingHTML(product.rating) +
                        '<span>' + product.rating + ' (' + product.reviewCount + ' reviews)</span>' +
                    '</div>' +
                    '<div class="product-detail-price">' +
                        window.formatPrice(product.price) +
                        oldPriceHTML +
                    '</div>' +
                    '<p class="product-short-desc">' + product.shortDescription + '</p>' +
                    '<div class="quantity-selector">' +
                        '<button class="quantity-btn" onclick="changeQuantity(-1)" aria-label="Decrease quantity"><i class="fas fa-minus"></i></button>' +
                        '<input type="number" class="quantity-input" id="quantityInput" value="1" min="1" max="99">' +
                        '<button class="quantity-btn" onclick="changeQuantity(1)" aria-label="Increase quantity"><i class="fas fa-plus"></i></button>' +
                    '</div>' +
                    '<button class="add-to-cart-btn" onclick="addProductToCart(\'' + product.id + '\')">' +
                        '<i class="fas fa-shopping-bag"></i> Add to Cart' +
                    '</button>' +
                    '<div class="product-meta">' +
                        '<p class="product-sku"><strong>SKU:</strong> ' + product.sku + '</p>' +
                        '<div class="product-tags">' +
                            '<strong>Tags:</strong>' +
                            tagsHTML +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="product-tabs">' +
                '<div class="tab-header">' +
                    '<button class="tab-btn active" data-tab="description">Description</button>' +
                    '<button class="tab-btn" data-tab="additional">Additional Information</button>' +
                    '<button class="tab-btn" data-tab="reviews">Reviews</button>' +
                '</div>' +
                '<div class="tab-content">' +
                    '<div class="tab-panel active" id="tab-description">' +
                        '<p>' + product.description + '</p>' +
                    '</div>' +
                    '<div class="tab-panel" id="tab-additional">' +
                        '<h3>Product Details</h3>' +
                        additionalInfoHTML +
                    '</div>' +
                    '<div class="tab-panel" id="tab-reviews">' +
                        '<h3>Customer Reviews</h3>' +
                        '<p><strong>' + product.rating + ' out of 5 stars</strong> based on ' + product.reviewCount + ' reviews.</p>' +
                        '<p style="margin-top:15px;">Customers love the quality and beauty of this product. Here\'s what some of them had to say:</p>' +
                        '<p style="margin-top:10px;"><i class="fas fa-quote-left" style="color:var(--brown);"></i> Beautiful quality! Exceeded my expectations. Will definitely order again.</p>' +
                        '<p><i class="fas fa-quote-left" style="color:var(--brown);"></i> Exactly as described. Fast shipping and well packaged.</p>' +
                        '<p><i class="fas fa-quote-left" style="color:var(--brown);"></i> Perfect for my jewelry making projects. Highly recommend!</p>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );

        // Init tabs
        const tabBtns = detailContent.querySelectorAll('.tab-btn');
        const tabPanels = detailContent.querySelectorAll('.tab-panel');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const tabName = this.getAttribute('data-tab');
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanels.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                const panel = detailContent.querySelector('#tab-' + tabName);
                if (panel) panel.classList.add('active');
            });
        });

        // Init quantity selector
        const quantityInput = document.getElementById('quantityInput');
        if (quantityInput) {
            quantityInput.addEventListener('change', function () {
                let value = parseInt(this.value, 10);
                if (isNaN(value) || value < 1) this.value = 1;
                if (value > 99) this.value = 99;
            });
        }

        // Render related products
        if (relatedGrid && product.relatedIds && product.relatedIds.length > 0) {
            const relatedProducts = product.relatedIds
                .map(id => window.productsData.find(p => p.id === id))
                .filter(p => p !== undefined);

            if (relatedProducts.length > 0) {
                relatedGrid.innerHTML = relatedProducts.map(p => getProductCardHTML(p)).join('');
            } else {
                if (relatedSection) relatedSection.style.display = 'none';
            }
        } else {
            if (relatedSection) relatedSection.style.display = 'none';
        }
    }

    /* ============================================
       GLOBAL FUNCTIONS (exposed to window for onclick)
       ============================================ */
    window.changeQuantity = function (delta) {
        const input = document.getElementById('quantityInput');
        if (!input) return;
        let value = parseInt(input.value, 10);
        if (isNaN(value)) value = 1;
        value += delta;
        if (value < 1) value = 1;
        if (value > 99) value = 99;
        input.value = value;
    };

    window.addProductToCart = function (productId) {
        const input = document.getElementById('quantityInput');
        const quantity = input ? parseInt(input.value, 10) || 1 : 1;
        addToCart(productId, quantity);
    };

    window.switchProductImage = function (thumbnailEl, imageSrc) {
        const mainImage = document.getElementById('mainProductImage');
        if (mainImage) {
            mainImage.src = imageSrc;
        }
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(t => t.classList.remove('active'));
        if (thumbnailEl) {
            thumbnailEl.classList.add('active');
        }
    };

    /* ============================================
       INITIALIZATION
       ============================================ */
    function init() {
        updateCartCountDisplay();
        initMobileMenu();
        initNewsletterForms();

        // Page-specific initialization
        const currentPage = window.location.pathname.split('/').pop();

        if (currentPage === 'shop.html' || currentPage === '') {
            initShopPage();
        }

        if (currentPage === 'product.html' || currentPage === 'product') {
            initProductTemplate();
        }

        // Handle cart link click – navigate to cart page
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = 'cart.html';
            });
        }
    }

    // Run initialization on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();