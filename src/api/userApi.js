import 'whatwg-fetch';

export const getUsers = () => {
  return get('/api/users');
}

const get = (url) => {
  return fetch(url).then(onSuccess, onError);
}
const onSuccess = (res) => {
  return res.json();
}

const onError = (error) => {
  console.log(error); // eslint-disable-line no-console
}
