import Pusher from 'pusher-js';

const pusher = new Pusher('1f7b9035e7a3a6efd9e6', {
  cluster: 'eu',
  maxReconnectionAttempts: 10,
  reconnectionDelay: 2000,
});
pusher.connection.bind('connected', function() {
console.log('Conectado a Pusher!');
});

pusher.connection.bind('disconnected', function() {
console.log('Desconectado de Pusher!');
pusher.connect();
});
const channel = pusher.subscribe('my-channel');
channel.bind('new-order', function(data) {
    showNotification(data);
    console.log(data);
});
async function showNotification(data) {
    const permission = await Notification.requestPermission();

    if ("Notification" in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                let notification = new Notification(data.message, {
                    body: "Se esta procesando un nuevo pedido",
                    icon: "https://cdn-icons-png.flaticon.com/512/2424/2424748.png",
                });
            }
        }
        );
    }

};
