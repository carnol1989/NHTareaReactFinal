const BASE_URL = 'http://localhost:3027';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  heroes: {
    listHeroes() {
      return callApi('/heroes');
      //return [];
      //throw new Error('501: Error interno.');
    },
    createHeroe(heroe) {
      //throw new Error('501: Error interno, intente en unos minutos.');
      return callApi(`/heroes`, {
        method: 'POST',
        body: JSON.stringify(heroe),
      });
    },
    getHeroe(heroeId) {
      return callApi(`/heroes/${heroeId}`);
    },
    updateHeroe(heroeId, updates) {
      return callApi(`/heroes/${heroeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    removeHeroe(heroeId) {
      return callApi(`/heroes/${heroeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
