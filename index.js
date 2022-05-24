addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const key = url.pathname.slice(1)

  const object = await MY_BUCKET.get(key)

  if (!object) {
    return new Response('Object Not Found', { status: 404 })
  }

  return new Response(object.body, {
    headers: { 'content-type': 'text/plain' },
  })
}
