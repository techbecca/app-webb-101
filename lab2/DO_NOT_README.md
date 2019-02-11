# FACIT LAB 2

## Changes to search.js

```javascript
import { giphySearch } from './giphy';

function performSearch(searchTerm = '') {
    return giphySearch(searchTerm);
}
```


## Changes to giphy.js

```javascript
const giphySearch = (term = '') => {
    const urlEncodedTerm = encodeURIComponent(term);
    const urlToFetchWith = GIPHY_BASE_SEARCH_URL + urlEncodedTerm + '&api_key=' + GIPHY_API_KEY;

    if (term.length <= 2) {
        // Nothing to search for, return emppty array promise
        return new Promise((resolve, reject) => resolve([]));
    }

    console.log("fetching data from giphySearch module", URL_TO_FETCH_WITH);

    return fetch(URL_TO_FETCH_WITH)
      .then(result => result.json())
      .then(data => convertGiphyResultToImageArray(data))
      .catch(error => console.error(`Error from fetching giphy images: ${error}`));
};
```
