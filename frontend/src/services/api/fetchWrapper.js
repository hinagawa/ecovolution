import baseURL from '../../const/index'

function fetchWrapper(
  method,
  endpoint,
  bodyData,
  headers,
) {
  const newHeader = {
    ...headers,
    'Content-Type': 'application/json',
  }
  if (method === 'GET' || method === 'DELETE') {
    return fetch(`${baseURL}${endpoint}`, {
      method,
      headers: newHeader,
    }).then((res) => res.json()).catch((e) => e)
  }
  return fetch(`${baseURL}${endpoint}`, {
    method,
    mode: 'cors',
    body: JSON.stringify(bodyData),
    headers: newHeader,
  }).then((res) => res).catch((e) => e)
}
const api = {
  post(endpoint, data, headers) {
    return fetchWrapper('POST', endpoint, data, headers).catch((e) => e)
  },
  get(endpoint, headers) { return fetchWrapper('GET', endpoint, headers) },
  delete(endpoint, headers) { return fetchWrapper('DELETE', endpoint, headers) },
  patch(endpoint, data, headers) { return fetchWrapper('PATCH', endpoint, data, headers) },
}

export default api
