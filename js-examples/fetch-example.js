function getStarWarsCharactersById(id) {
    var API_ENDPOINT = "https://swapi.co/api/people/" + id;
    return fetch(API_ENDPOINT)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.error(error);
      });
}
  