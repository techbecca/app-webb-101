# Steps required to complete this assignment 

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
    
    console.log("fetching data from giphySearch module", urlToFetchWith);

    return fetch(urlToFetchWith)
      .then(result => result.json())
      .then(convertGiphyResultToImageArray);
};
```
