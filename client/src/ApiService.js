const BASE_URL = 'http://localhost:3001';

export function getStories() {
  return fetchRequest('/stories');
}

export function getStory(id) {
  return fetchRequest(`/stories/${id}`);
}

export function postStory(body) {
  return fetchRequest('/stories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function register(body) {
  return fetchRequest('/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function login(body) {
  return fetchRequest('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

function fetchRequest(path, options) {
  const token = localStorage.getItem('token');

  const newOptions = {
    ...options,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      ...options?.headers,
    },
  };

  return fetch(BASE_URL + path, newOptions)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      console.log(
        `Error fetch [${(options && options.method) || 'GET'}]${path}`
      );
    });
}
