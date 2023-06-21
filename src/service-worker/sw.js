import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

// Register precache routes (static cache)
precacheAndRoute(self.__WB_MANIFEST || []);

// Receive push notifications
self.addEventListener('push', function (e) {
  if (!(
    self.Notification &&
    self.Notification.permission === 'granted'
  )) {
    //notifications aren't supported or permission not granted!
    console.log('nononono')
    return;
  }

  if (e.data) {
    let message = e.data.text();
    e.waitUntil(self.registration.showNotification('', {
      body: message,
    }));
  }
});