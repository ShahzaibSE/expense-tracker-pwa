let cache_name = "expense_tracker"
let urlsToCache = [
    '/',
    'finance-art-expense-tracker.jpg',
    'index.html',
    '/logo192.png',
    '/logo512.png',
    '/favicon.ico',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/1.chunk.js'
  ];

console.log("Service Worker started: ",cache_name)

this.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(cache_name).then(cache => {
           console.log("Opened cache.") 
           cache.addAll(urlsToCache)
        }).catch(err => {
            console.log("Error: ", err)
        })
    )
})

this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  })