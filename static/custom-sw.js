self.addEventListener('push', (event) => {
    const title = 'Tienes una nueva notificación';
    const options = {
      body: event.data.text(),
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  