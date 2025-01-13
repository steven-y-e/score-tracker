const staticLife = "life-v1-00"
const assets = [
  "/",
  "/index.html",
  "/css/reset.css",
  "/css/score.css",
  "/js/life.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticLife).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

