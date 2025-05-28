# valoriza-ai-navigation

Descripción del Proyecto:

Valoriza App es una aplicación web móvil diseñada para ayudar a los usuarios a reciclar correctamente mediante un sistema de guía visual y geolocalización en tiempo real. El proyecto combina tecnologías modernas para ofrecer una experiencia intuitiva y educativa sobre la correcta disposición de residuos.

Características principales:

    Mapa interactivo en tiempo real:
    Utiliza Leaflet con OpenStreetMap para mostrar la ubicación de diferentes contenedores y su estado de ocupación, codificado por colores (verde, amarillo, rojo) según niveles estrictos de capacidad:

        Disponible: ocupación hasta 70%

        Casi lleno: entre 71% y 97%

        Lleno: del 98% al 100%

    Sistema de escaneo visual (simulado):
    Mediante una interfaz sencilla, el usuario activa un escaneo (simulado con animación GIF y popups) que, tras un proceso de carga, muestra información específica sobre dónde depositar correctamente el objeto escaneado (ejemplo: gafas de sol → contenedor gris).

    Popups informativos:
    Despliegan mensajes dinámicos para guiar al usuario, incluyendo fases como "Completando escaneo..." y "Escaneo completado", antes de mostrar recomendaciones detalladas sobre el reciclaje del objeto.

    Navegación mediante hash URLs:
    Cambios en la URL permiten la carga y gestión del mapa solo cuando el usuario accede a la pestaña correspondiente, optimizando recursos y experiencia.

    Diseño responsive y adaptado a móviles:
    El diseño y los tamaños están pensados para una visualización óptima en dispositivos con pantallas pequeñas (ejemplo: 372 x 693 px).

    Interactividad adicional:
    Incluye botones funcionales (ejemplo: "Ruta más cercana") para futuras funcionalidades de navegación y rutas, integrados en el layout con posicionamiento cuidado.

Tecnologías usadas:

    JavaScript (ES6+), con funciones autoejecutables para modularidad.

    Leaflet.js para mapas interactivos y geolocalización.

    HTML5 y CSS3 para estructura y estilos adaptativos.

    OpenStreetMap como fuente de mapas libres y gratuitos.
