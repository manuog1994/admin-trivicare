if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/custom-sw.js').then(
        (registration) => {
          console.log('Service Worker registrado con éxito:', registration);
        },
        (err) => {
          console.log('El registro del Service Worker falló:', err);
        }
      );
    });
  }
  