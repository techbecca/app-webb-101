const getStarWarsCharactersById = (id) => {
    const API_ENDPOINT = `https://swapi.co/api/people/${id}`;
    return fetch(API_ENDPOINT)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
};
  