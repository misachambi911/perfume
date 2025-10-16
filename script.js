// Datos de productos (ficticios, ahora con imágenes)
const products = {
    hombre: [
        { name: 'Hombre 1', price: 50, image: 'hombre/71EpQXeheuL._UF1000,1000_QL80_.jpg' },
        { name: 'Hombre 2', price: 55, image: 'hombre/500Wx500H-Yanbal-OriginalFormat-20012902-01.jpg' },
        { name: 'Hombre 3', price: 60, image: 'hombre/18084_1-HUGO_BOSS_BOTTLED_ETV_100ML_1_1_png.webp' },
        { name: 'Hombre 4', price: 45, image: 'hombre/3348901368247_100ML_1_57fc2f7a-02b9-49d4-a562-42e2b3eb4c52.webp' },
        { name: 'Hombre 5', price: 70, image: 'hombre/images (1).jfif' },
        { name: 'Hombre 6', price: 80, image: 'hombre/images.jfif' },
        { name: 'Hombre 7', price: 65, image: 'hombre/Boton1-Cat3112-PerfumesHombre.jpg' },
        { name: 'Hombre 8', price: 75, image: 'hombre/jean-paul-gaultier-021205jg_01.webp' },
        { name: 'Hombre 9', price: 90, image: 'hombre/jean-paul-gaultier-le-beau-paradise-garden-eau-de-parfum-75-ml-1-1708017057.jpg' },
        { name: 'Hombre 10', price: 100, image: 'hombre/TOFMEDP2021-150ml_30213750000_RGB_52x30_300dpicopia2.webp' }
    ],
    mujer: [
        { name: 'Mujer 1', price: 60, image: 'imagenes/1676715126-537.jpg' },
        { name: 'Mujer 2', price: 65, image: 'imagenes/1676715701-d0f481db4b0e8e802791d229a56ea6f2093527c452fb743297279baf86efae3abbfb4276dc2fce6a96ce49f91c7d326bfffb5dbe32a81fef4c5c636091c2130c.jpg' },
        { name: 'Mujer 3', price: 70, image: 'imagenes/16736231718971.jpg' },
        { name: 'Mujer 4', price: 55, image: 'imagenes/16736231778718.jpg' },
        { name: 'Mujer 5', price: 80, image: 'imagenes/17121674538719.jpg' },
        { name: 'Mujer 6', price: 90, image: 'imagenes/17121674574532.jpg' },
        { name: 'Mujer 7', price: 75, image: 'imagenes/images (1).jfif' },
        { name: 'Mujer 8', price: 85, image: 'imagenes/images (2).jfif' },
        { name: 'Mujer 9', price: 95, image: 'imagenes/perfume-para-mujer-flower-bomb-de-viktor-and-rolf.webp' },
        { name: 'Mujer 10', price: 110, image: 'imagenes/perfumes-mas-vendidos-1-dior-krHB--624x624@MujerHoy.webp' }
    ],
    promociones: [
        { name: 'Promo 1', price: 40, image: 'promociones/1-2356883540c281d8f617326584673566-1024-1024.png' },
        { name: 'Promo 2', price: 45, image: 'promociones/Eih1pbXX0AA_8Hw.jpg_large' },
        { name: 'Promo 3', price: 50, image: 'promociones/images (1).jfif' },
        { name: 'Promo 4', price: 35, image: 'promociones/images (1).jfif' },
        { name: 'Promo 5', price: 60, image: 'promociones/images (2)e.jfif' },
        { name: 'Promo 6', price: 70, image: 'promociones/images (2).jfif' },
        { name: 'Promo 7', price: 55, image: 'promociones/images (8).jfif' },
        { name: 'Promo 8', price: 65, image: 'promociones/images (7).jfif' },
        { name: 'Promo 9', price: 80, image: 'promociones/images (6).jfif' },
        { name: 'Promo 10', price: 90, image: 'promociones/images.jfif' }
    ],
    recomendables: [
        { name: 'Recomendable 1', price: 75, image: 'recomendables/48490f73f99b4b95caaa43ee2de60948.jpg' },
        { name: 'Recomendable 2', price: 80, image: 'recomendables/bf78513fc316f1271aff3e604e74954d.jpg' },
        { name: 'Recomendable 3', price: 85, image: 'recomendables/Pour-Homme-EDT-para-hombre-100-ml-Aromatica-CR-236967992.webp' },
        { name: 'Recomendable 4', price: 70, image: 'recomendables/IMG_9648.jpg' },
        { name: 'Recomendable 5', price: 95, image: 'recomendables/images (2).jfif' },
        { name: 'Recomendable 6', price: 100, image: 'recomendables/images (1).jfif' },
        { name: 'Recomendable 7', price: 90, image: 'recomendables/D_NQ_NP_661059-MLA83771666463_042025-O.webp' },
        { name: 'Recomendable 8', price: 105, image: 'recomendables/images.jfif' },
        { name: 'Recomendable 9', price: 110, image: 'recomendables/IMG_9648.jpg' },
        { name: 'Recomendable 10', price: 120, image: 'recomendables/Pour-Homme-EDT-para-hombre-100-ml-Aromatica-CR-236967992.webp' }
    ]
};

// Fondo cambiante
const backgroundImages = ['url(img1.jpg)', 'url(img2.jpg)', 'url(img3.jpg)']; // Reemplaza con rutas reales de imágenes
let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = backgroundImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

setInterval(changeBackground, 5000); // Cambia cada 5 segundos

// Renderizar productos
function renderProducts(category) {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Agregar al Carrito</button>
            <button onclick="openWhatsApp('${product.name}')">Comprar por WhatsApp</button>
        `;
        productsList.appendChild(productDiv);
    });
}

// Renderizar productos filtrados (corregido y completo)
function renderFilteredProducts(filteredProducts) {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Agregar al Carrito</button>
            <button onclick="openWhatsApp('${product.name}')">Comprar por WhatsApp</button>
        `;
        productsList.appendChild(productDiv);
    });
}

// Carrito
let cart = [];
let cartTotal = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    cartTotal += price;
    document.getElementById('cartCount').textContent = cart.length;
    updateCartModal();
}

function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cartTotal').textContent = cartTotal;
}

document.querySelector('.cart-icon').addEventListener('click', () => {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
});

// WhatsApp
function openWhatsApp(productName) {
    window.open(`https://wa.me/+59169403340text=Hola,%20quiero%20información%20sobre%20${productName}`, '_blank');
}

// Eventos para categorías
document.getElementById('hombreBtn').addEventListener('click', () => renderProducts('hombre'));
document.getElementById('mujerBtn').addEventListener('click', () => renderProducts('mujer'));
document.getElementById('promocionesBtn').addEventListener('click', () => renderProducts('promociones'));
document.getElementById('recomendablesBtn').addEventListener('click', () => renderProducts('recomendables'));

// Barra de búsqueda (búsqueda global en todas las categorías)
document.getElementById('searchButton').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let allProducts = [].concat(...Object.values(products));  // Combina todos los productos de todas las categorías
    const filtered = allProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderFilteredProducts(filtered);
});

// Inicializar
renderProducts('hombre');  // Carga por defecto la primera categoría