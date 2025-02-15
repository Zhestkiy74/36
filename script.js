// Инициализация карточек при первом запуске
function initializeCards() {
    const defaultCards = [
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },
        {   image: "./image 2.png", 
            title: "СПЕЦПРЕДЛОЖЕНИЕ НА НЕЗАМЕРЗАЙКУ", 
            descr: "Приобретайте несколько канистр в объеме 4 л и получайте скидку:",
            li1: "- 20% при покупке 2-х;",
            li2: "- 30% при покупке 3-х.",
        },


    ];  

    if (!localStorage.getItem('cards')) {
        localStorage.setItem('cards', JSON.stringify(defaultCards));
    }
}

// Функция для отрисовки карточек в конкретном слайдере
function renderCards(sliderId, cards) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        slider.innerHTML = '';
        cards.forEach((card) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <div class="img-box">
                    <img src="${card.image}" alt="${card.image}">
                </div>
                <h1>${card.title}</h1>
                <p>${card.descr}</p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: #7A7680;">
                    <li>${card.li1}</li>
                    <li>${card.li2}</li>
                </ul>
            `;
            slider.appendChild(cardElement);
        });
    }
}

// Функции для слайдера
let currentIndex1 = 0; // Текущий индекс для первого слайдера
let currentIndex2 = 4; // Текущий индекс для второго слайдера

function updateSliderPosition(sliderId, currentIndex) {
    const slider = document.getElementById(sliderId);
    if (slider) {
        const cardWidth = document.querySelector('.card').offsetWidth + 20; // 20px margin
        slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }
}

function nextSlide(sliderId) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    if (cards.length === 0) return; // Если карточек нет, ничего не делаем

    let currentIndex;
    if (sliderId === 'slider1') {
        currentIndex = currentIndex1;
    } else if (sliderId === 'slider2') {
        currentIndex = currentIndex2;
    }

    if (currentIndex < cards.length - 4) {
        currentIndex++;
    } else {
        // Если достигнут конец, переходим на первую карточку
        currentIndex = 0;
    }

    if (sliderId === 'slider1') {
        currentIndex1 = currentIndex;
    } else if (sliderId === 'slider2') {
        currentIndex2 = currentIndex;
    }

    updateSliderPosition(sliderId, currentIndex);
}

function prevSlide(sliderId) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    if (cards.length === 0) return; // Если карточек нет, ничего не делаем

    let currentIndex;
    if (sliderId === 'slider1') {
        currentIndex = currentIndex1;
    } else if (sliderId === 'slider2') {
        currentIndex = currentIndex2;
    }

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Если достигнуто начало, переходим на последнюю карточку
        currentIndex = cards.length - 4;
    }

    if (sliderId === 'slider1') {
        currentIndex1 = currentIndex;
    } else if (sliderId === 'slider2') {
        currentIndex2 = currentIndex;
    }

    updateSliderPosition(sliderId, currentIndex);
}

// Функция для добавления карточки
function addCard() {
    const title = document.getElementById('cardTitle').value.trim();
    const descr = document.getElementById('cardDescription').value.trim();
    const image = document.getElementById('cardImage').value.trim();
    const li1   = document.getElementById('li1').value.trim();
    const li2   = document.getElementById('li2').value.trim();

    if (title && descr && image && li1 && li2) {
        const cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push({ image, title, descr, li1, li2 });
        localStorage.setItem('cards', JSON.stringify(cards));
        alert('Карточка успешно добавлена!');
        document.getElementById('cardTitle').value = '';
        document.getElementById('cardDescription').value = '';
        document.getElementById('cardImage').value = '';
        document.getElementById('li1').value = '';
        document.getElementById('li2').value = '';

        // Обновляем оба слайдера
        renderCards('slider1', cards);
        renderCards('slider2', cards);
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}

// Функция для сброса всех карточек
function resetCards() {
    localStorage.removeItem('cards');

    // Обновляем оба слайдера
    renderCards('slider1', []);
    renderCards('slider2', []);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initializeCards(); // Добавляем 10 карточек, если их нет
    const cards = JSON.parse(localStorage.getItem('cards')) || [];

    // Отрисовываем карточки в обоих слайдерах
    renderCards('slider1', cards);
    renderCards('slider2', cards);
});




resetCards();



















// Функция для отображения товаров на странице
function renderProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = ''; // Очищаем секцию перед добавлением товаров

    // Получаем товары из localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Если товаров нет, добавляем предопределенные товары
    if (products.length === 0) {
        products = [
            {
                name: "Масло моторное LUKOIL GENESIS АВИАРЯТЕСН 5W-40 1 л",
                image: "./image.png",
                price: "1911",
                description: "1911P/1л"
            },
            {
                name: "Масло моторное LUKOIL GENESIS АВИАРЯТЕСН 5W-40 1 л",
                image: "./image.png",
                price: "1911",
                description: "1911P/1л"
            },
            {
                name: "Масло моторное LUKOIL GENESIS АВИАРЯТЕСН 5W-40 1 л",
                image: "./image.png",
                price: "1911",
                description: "1911P/1л"
            },
            {
                name: "Масло моторное LUKOIL GENESIS АВИАРЯТЕСН 5W-40 1 л",
                image: "./image.png",
                price: "1911",
                description: "1911P/1л"
            },

        ];
        localStorage.setItem('products', JSON.stringify(products)); // Сохраняем предопределенные товары
    }

    // Отображаем каждый товар
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <div style="height: 244px; width: 278px;  position: relative; overflow: hidden;">
                <img style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" src="${product.image}" alt="${product.name}">
            </div>
            
            <h3 style="height: 69px;">${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Купить</button>
        `;

        productsSection.appendChild(productElement);
    });
}

// Функция для добавления товара в корзину
function addToCart(productName, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Получаем текущую корзину из localStorage
    cart.push({ name: productName, price: price, image: image}); // Добавляем новый товар
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем обновленную корзину в localStorage
    alert(`${productName} добавлен в корзину!`);
}


// Функция для добавления товара в корзину
function addToCart(productName, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Получаем текущую корзину из localStorage

    // Проверяем, есть ли товар уже в корзине
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1; // Увеличиваем количество
    } else {
        cart.push({ name: productName, price: price, quantity: 1 , image}); // Добавляем новый товар
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем обновленную корзину в localStorage
    alert(`${productName} добавлен в корзину!`);
}



// Инициализация страницы
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});












// Функция для отображения товаров в корзине
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Получаем корзину из localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Очищаем текущее содержимое корзины
    cartItems.innerHTML = '';

    // Добавляем каждый товар в корзину
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';

        itemElement.innerHTML = `
        <div class="card-item">
            <img src="${item.image}">
            <h2>${item.name}</h2>
            <div class="quantity-controls">
                <div>
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity || 1}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <p style="color:#7A7680;  margin: 0 0 0 0; text-align:center;">${item.quantity || 1} шт. = ${item.price * (item.quantity || 1)} ₽</p>
            </div>
            <p style="margin: 0 0 0 100px; color:#7A7680; font-size:18px; font-weight:500;">${item.price} ₽</p>
            <button onclick="removeFromCart(${index})" class="delit-button">&#215;</button>
        </div>`;

        cartItems.appendChild(itemElement);
        totalPrice += item.price * (item.quantity || 1);
    });

    // Обновляем итоговую стоимость
    totalPriceElement.textContent = totalPrice;
}

// Функция для изменения количества товара
function changeQuantity(index, delta) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + delta;
        if (cart[index].quantity < 1) {
            cart[index].quantity = 1; // Минимальное количество — 1
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); // Обновляем отображение корзины
    }
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Удаляем товар по индексу
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Обновляем отображение корзины
}

// Функция для оформления заказа
function checkout() {
    localStorage.removeItem('cart'); // Очищаем корзину
    alert("Оплата произведена! Корзина очищена.");
    renderCart(); // Обновляем отображение корзины
}

// Инициализация страницы корзины
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});