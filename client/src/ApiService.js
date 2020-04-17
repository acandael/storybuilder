const BASE_URL = 'http://localhost:3001';

export function getStories() {
  return fetchRequest('/stories');
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

function fetchRequest(path, options) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      console.log(
        `Error fetch [${(options && options.method) || 'GET'}]${path}`
      );
    });
}
