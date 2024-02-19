export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE'),
};

function request(method) {
  return (url, body) => {
    const requestOptions = {
      method,
      headers: { 'Content-Type': 'application/json' },
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    return fetch(url, requestOptions).then(handleResponse);
  }
}