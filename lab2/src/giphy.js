/**
 *  Information: This module is not initially in use. Your job is to
 *  complete it and start using it.
 *
 *  Read more about giphy API here: https://github.com/Giphy/GiphyAPI
 *  TLDR: An API-key is a unique identifier that lets the API know who is asking. Some API's require them, some don't.
 */

const GIPHY_API_KEY = 'dc6zaTOxFJmzC';
const GIPHY_BASE_SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q=';

/**
 * Giphy specific search.
 * We pre-built the url for you. Use it.
 * @param term The search term. E.g 'puppy'
 * @returns {Promise}
 */
const giphySearch = (term = '') => {
    const urlEncodedTerm = encodeURIComponent(term);
    const urlToFetchWith = GIPHY_BASE_SEARCH_URL + urlEncodedTerm + '&api_key=' + GIPHY_API_KEY;

    if (term.length <= 2) {
        // Nothing to search for, return emppty array promise
        return new Promise((resolve, reject) => resolve([]));
    }

    console.log("fetching data from giphySearch module", urlToFetchWith);
    // TODO: Use fetch api to search with given urlToFetchWith variable.
    /*
    SAMPLE FETCH
    fetch(myRequestUrl).then(function(response) {
        return response.json().then(function(jsonResponse) {
          // process your JSON further
          // if only there was a function in this file that could help me! :D
        });
    });
    */
    // Read more about the fetch API at https://developer.mozilla.org/en/docs/Web/API/Fetch_API
};


/**
 * This is a mapper function that takes the Giphy result and reformats it
 * to something more akin to what we want. Do not touch, but read. :D
 *
 * @param giphySearchResult
 *  {
 *    data: [
 *      "images": [
 *        "original": {
 *          "url": "some-url.gif"
 *        }
 *      ]
 *    ]
 *  }
 *
 * @returns Array of Strings (the image urls)
 */
function convertGiphyResultToImageArray(giphySearchResult = {}) {
    const {data} = giphySearchResult;
    return data.map(img => img.images.original.url);
}

export {
    giphySearch
}
