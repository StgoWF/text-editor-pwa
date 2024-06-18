const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';

  butInstall.addEventListener('click', async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt = null;
    butInstall.style.display = 'none';
  });
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed', event);
  deferredPrompt = null;
});
