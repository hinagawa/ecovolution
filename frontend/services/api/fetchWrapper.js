import baseURL from '../../const/index'

function fetchWrapper({
  method,
  endpoint,
  header,
  bodyData,
}) {
  const headers = new Headers()
  headers.append('Content-Type', 'application/x-www-urlencoded')
  headers.append(header)
  if (method === 'GET' || method === 'DELETE') {
    return fetch(`${baseURL}${endpoint}`, {
      method,
      headers,
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
  post(data, endpoint, headers) {
    return fetchWrapper('POST', endpoint, headers, data)
  },
  get(endpoint, headers) { return fetchWrapper('GET', endpoint, headers) },
  delete(endpoint, headers) { return fetchWrapper('DELETE', endpoint, headers) },
  patch(data, endpoint, headers) { return fetchWrapper('PATCH', endpoint, headers, data) },
}

export default api
