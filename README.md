# Proyecto: Tienda de Perfumes - Página Web Elegante
![Descripción de la imagen](./images/hombre/dfa1c199-55c1-49b4-9467-76944b49b461.jfif)
autor brayan chambi
## Descripción
Esta es una página web simple y elegante para una tienda de perfumes, desarrollada con HTML, CSS y JavaScript. Incluye características como:
- Un encabezado con título, barra de búsqueda y iconos de redes sociales (TikTok, WhatsApp, Facebook).
- Cuatro categorías de productos (Perfume de Hombre, Perfumes de Mujeres, Promociones, Recomendables), cada una con al menos 10 productos ficticios.
- Cada producto muestra su nombre, precio, imagen, y botones para agregar al carrito o comprar por WhatsApp.
- Un carrito de compras dinámico que se actualiza en tiempo real.
- Un formulario de contacto en el footer que muestra un mensaje al enviarse.
- Fondos que cambian automáticamente entre imágenes, con un esquema de colores elegante en tonos de vino y negro.
- Efectos visuales como transiciones, animaciones y glow para un aspecto moderno.

La página es fully responsive, lo que significa que se adapta a dispositivos móviles y de escritorio. Fue diseñada para ser funcional, sin errores, y fácil de personalizar.

## Requisitos para Ejecutar
- Navegador web moderno (como Chrome, Firefox o Edge).
- No se requieren servidores o dependencias externas, ya que es un proyecto estático.
- Asegúrate de tener las imágenes necesarias en la carpeta correcta (por ejemplo, 'hombre1.jpg' en la misma carpeta que index.html).

## Instrucciones de Instalación y Uso
1. **Descarga los archivos**: Copia todos los archivos del proyecto (index.html, styles.css, script.js) en una carpeta en tu computadora.
2. **Agrega imágenes**: Coloca las imágenes (como 'hombre1.jpg') en la misma carpeta o en una subcarpeta (por ejemplo, una carpeta llamada 'images/'). Si usas una subcarpeta, actualiza las rutas en script.js (ver sección de modificación a continuación).
3. **Abre la página**: Haz doble clic en index.html o abrelo en un navegador escribiendo `file:///ruta/a/tu/carpeta/index.html`.
4. **Interacción**:
   - Usa la barra de búsqueda para buscar productos en todas las categorías.
   - Haz clic en los botones de categorías para ver los productos.
   - Agrega productos al carrito y ve el total.
   - Envía el formulario de contacto para ver el mensaje "Hecho".
   
## Archivos del Proyecto
- **index.html**: Estructura principal de la página, incluyendo header, main, footer y enlaces a CSS/JS.
- **styles.css**: Estilos CSS para la apariencia, incluyendo colores (esquema de vino/negro), tamaños y efectos de animación.
- **script.js**: Lógica JavaScript para funcionalidades como el cambio de fondo, renderizado de productos, carrito y manejo del formulario.
- **README.md**: Este archivo, que proporciona información general y guías de modificación.

## Cómo Agregar Más Imágenes
Para hacer que la página sea más dinámica, puedes agregar más imágenes en varias partes. Aquí hay instrucciones paso a paso:

1. **En los productos**:
   - En **script.js**, el array `products` contiene objetos con una propiedad `image`. Por ejemplo:
     ```
     const products = {
         hombre: [
             { name: 'Hombre 1', price: 50, image: 'hombre1.jpg' },
             // ...
         ],
         // ...
     };
     ```
   - Para agregar más imágenes o productos:
     - Agrega un nuevo objeto al array correspondiente, como: `{ name: 'Nuevo Producto', price: 75, image: 'nuevo.jpg' }`.
     - Asegúrate de que la imagen ('nuevo.jpg') exista en la carpeta del proyecto.
     - Ejemplo: Si quieres agregar un producto a 'hombre', simplemente añade una línea más al array.

2. **En el fondo cambiante**:
   - En **script.js**, el array `backgroundImages` controla las imágenes de fondo:
     ```
     const backgroundImages = ['url(img1.jpg)', 'url(img2.jpg)', 'url(img3.jpg)'];
     ```
   - Para agregar más imágenes:
     - Agrega la URL de la nueva imagen al array, por ejemplo: `['url(img1.jpg)', 'url(img2.jpg)', 'url(img3.jpg)', 'url(img4.jpg)']`.
     - Sube las imágenes nuevas a la carpeta y actualiza las rutas si es necesario (e.g., 'images/img4.jpg').

3. **Consejos generales para imágenes**:
   - Usa imágenes de alta calidad pero optimizadas para web (menores a 1MB para velocidad).
   - Si quieres más categorías o productos, puedes expandir el array `products` en script.js y usar la función `renderProducts` para mostrarlos.
   - Recuerda actualizar las rutas de imágenes si mueves archivos. Por ejemplo, si las imágenes están en una subcarpeta 'images/', cambia 'hombre1.jpg' a 'images/hombre1.jpg'.

## Notas Adicionales
- **Personalización**: Puedes editar los colores en styles.css (por ejemplo, cambia #4C221A si quieres un tono de vino diferente). Los efectos de luces se logran con CSS animations y transitions.
- **Posibles mejoras**: Si quieres hacer la página más avanzada, considera agregar un backend para el formulario (e.g., con PHP o un servicio como Formspree) o integrar una base de datos para los productos.
- **Créditos**: Este proyecto fue creado con código personalizado. Si usas bibliotecas (como Font Awesome), asegúrate de mantener los enlaces en index.html.
- **Licencia**: Este código es de uso gratuito, pero si lo usas para un proyecto comercial, considera agregar atribuciones.

Gracias por usar este proyecto. Si necesitas más ayuda o modificaciones, ¡házmelo saber! 😊