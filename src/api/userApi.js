import 'whatwg-fetch';

const getBaseUrl = () => {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/api/';
}

const getQueryStringParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export const getUsers = () => {
  return get('users');
}

export const deleteUser = (id) => {
  return del(`users/${id}`);
}

const get = (url) => {
  return fetch(getBaseUrl() + url).then(onSuccess, onError);
}

const del = (url) => {
  const request = new Request(getBaseUrl() + url, {
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
