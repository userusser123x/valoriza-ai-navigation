(() => {
  let map = null;
  let mapInitialized = false;

  const BOUNDS = {
    minLat: 41.215,
    maxLat: 41.235,
    minLng: 1.715,
    maxLng: 1.745
  };

  const STATUS_INFO = {
    green: { color: 'green', label: 'DISPONIBLE' },
    yellow: { color: 'yellow', label: 'CASI LLENO' },
    red: { color: 'red', label: 'LLENO' }
  };

  const NEARBY_CONNECTIONS = [
    "Calle Mayor 12",
    "Av. Mediterráneo 8",
    "Plaza Central",
    "Rambla Principal",
    "Calle del Mar"
  ];

  function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
function initMap() {
  map = L.map('map').setView([41.2240, 1.7289], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const forcedStatuses = [
    { statusKey: 'green', occupation: 60 },   // DISPONIBLE
    { statusKey: 'yellow', occupation: 85 },  // CASI LLENO
    { statusKey: 'red', occupation: 99 }      // LLENO
  ];

  // Primero: forzar 1 marcador por estado
  forcedStatuses.forEach(({ statusKey, occupation }) => {
    const lat = getRandomBetween(BOUNDS.minLat, BOUNDS.maxLat);
    const lng = getRandomBetween(BOUNDS.minLng, BOUNDS.maxLng);
    const connection = NEARBY_CONNECTIONS[Math.floor(Math.random() * NEARBY_CONNECTIONS.length)];
    const { color, label } = STATUS_INFO[statusKey];

    const marker = L.circleMarker([lat, lng], {
      color,
      radius: 10,
      fillOpacity: 0.8,
      weight: 2,
      fillColor: color,
      riseOnHover: true
    }).addTo(map);

    marker.bindPopup(`
      <b>Estado:</b> <strong style="color: ${color};">${label.toUpperCase()}</strong><br>
      <b>Ocupación:</b> ${occupation}%<br>
      <b>Conexión más cercana:</b><br>${connection}
    `);
  });

  // Luego: generar los demás aleatoriamente
  for (let i = 0; i < 17; i++) {
    const lat = getRandomBetween(BOUNDS.minLat, BOUNDS.maxLat);
    const lng = getRandomBetween(BOUNDS.minLng, BOUNDS.maxLng);
    const occupation = Math.floor(Math.random() * 100);
    const connection = NEARBY_CONNECTIONS[Math.floor(Math.random() * NEARBY_CONNECTIONS.length)];

    let statusKey;
    if (occupation <= 70) {
      statusKey = 'green';
    } else if (occupation >= 98) {
      statusKey = 'red';
    } else {
      statusKey = 'yellow';
    }

    const { color, label } = STATUS_INFO[statusKey];

    const marker = L.circleMarker([lat, lng], {
      color,
      radius: 10,
      fillOpacity: 0.8,
      weight: 2,
      fillColor: color,
      riseOnHover: true
    }).addTo(map);

    marker.bindPopup(`
      <b>Estado:</b> <strong style="color: ${color};">${label.toUpperCase()}</strong><br>
      <b>Ocupación:</b> ${occupation}%<br>
      <b>Conexión más cercana:</b><br>${connection}
    `);
  }
}


  const rectangulo = document.getElementById('rectangulo-negro');
  const gif = document.getElementById('gif-contenedor');
  const popup = document.getElementById('popup-contenedor');

  rectangulo.addEventListener('click', () => {
    rectangulo.style.display = 'none';
    gif.style.display = 'block';

    setTimeout(() => {
      popup.style.display = 'flex';
    }, 4000);
  });

  popup.addEventListener('click', () => {
    // Recargar la sección de la página para reiniciar el proceso
    location.reload(); // O cambiar solo el hash si prefieres
  });

  function onHashChange() {
    if (location.hash === '#mapa' && !mapInitialized) {
      initMap();
      mapInitialized = true;
    }
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      const introScreen = document.getElementById('intro-screen');
      if (introScreen) {
        introScreen.style.display = 'none';
      }

      if (location.hash === '#mapa') {
        onHashChange();
      }
    }, 3000);
  });

  let debounceTimer;
  window.addEventListener('hashchange', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(onHashChange, 150);
  });
})();
