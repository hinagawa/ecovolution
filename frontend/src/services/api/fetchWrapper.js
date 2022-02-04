import baseURL from '../../const/index'

function fetchWrapper({
  method,
  endpoint,
  bodyData,
  headers,
}) {
  const newHeader = {
    ...headers,
    'Content- Type': 'application/x-www-urlencoded',
  }
  console.log(endpoint)

  if (method === 'GET' || method === 'DELETE') {
    return fetch(`${baseURL}${endpoint}`, {
      method,
      newHeader,
    }).then((res) => res.json()).catch((e) => e)
  }
  return fetch(`${baseURL}${endpoint}`, {
    method,
    body: bodyData != null ? JSON.stringify(bodyData) : undefined,
    headers,
  }).then((response) => (
    response.ok
      ? response.json()
      : response.status
  ))
}
const api = {
  post(endpoint, data, headers) {
    return fetchWrapper('POST', endpoint, data, headers)
  },
  get(endpoint, headers) { return fetchWrapper('GET', endpoint, headers) },
  delete(endpoint, headers) { return fetchWrapper('DELETE', endpoint, headers) },
  patch(endpoint, data, headers) { return fetchWrapper('PATCH', endpoint, data, headers) },
}

export default api
