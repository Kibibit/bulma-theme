importScripts('localforage.min.js');

self.onmessage = function(msg) {
  if (!msg.data.theme) {
    return;
  }

  localforage.setItem('theme', msg.data.theme);
}

this.addEventListener('install', function(event) {
  console.log('[SW]: installing....');
});

this.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  if (event.request.url.contains('/bulmaswatch/')) {
    return localforage.getItem('theme')
      .then(function(theme) {
        if (theme === 'kb-dark-theme') {

          let darkThemeRequest = new Request(request.url.replace('bulmaswatch/default/', 'bulmaswatch/superhero/'), {
            method: request.method,
            headers: request.headers,
            mode: 'same-origin',
            credentials: request.credentials,
            redirect: 'manual'
          });

          return fetch(darkThemeRequest);
        }

        return fetch(event.request);
      })
  }
});

// An event listener for the 'activate' functionality that
// goes along with Service Worker registration.

this.addEventListener('activate', function activator(event) {
  console.log('[SW]: activate!');
});
