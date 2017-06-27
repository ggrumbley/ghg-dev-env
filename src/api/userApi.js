import 'whatwg-fetch';

const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3001/' : '/';

export const getUsers = () => {
  return get('users');
}

export const deleteUser = (id) => {
  return del(`users/${id}`);
}

const get = (url) => {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

const del = (url) => {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

const onSuccess = (res) => {
  return res.json();
}

const onError = (error) => {
  console.log(error); // eslint-disable-line no-console
}
