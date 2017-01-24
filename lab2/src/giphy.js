/* Read more about giphy API here:

 https://github.com/Giphy/GiphyAPI

 */
const GIPHY_API_KEY = 'dc6zaTOxFJmzC';
const GIPHY_BASE_SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q=';

const giphySearch = (term = '') => {
    const urlEncodedTerm = encodeURIComponent(term);
    const urlToFetchWith = GIPHY_BASE_SEARCH_URL + urlEncodedTerm + '&api_key=' + GIPHY_API_KEY;
    // TODO: Use fetch api to search with given urlToFetchWith variable.
    if (term.length <= 2) return new Promise((resolve, reject) => resolve([]);
    // console.log("fetching data from giphySearch module", urlToFetchWith);
    // return fetch(urlToFetchWith)
    //   .then(result => result.json())
    //   .then(convertGiphyResultToImageArray);
};

// converts to a format that our application understand, no need to modify. ignore for now.
function convertGiphyResultToImageArray(giphySearchResult = {}) {
    /*
     giphySearchResult = {
        data: [
            "images": [
                "original": {
                    "url": "some-url.gif"
                }
            ]
        ]
     }
     */
    const {data} = giphySearchResult;
    return data.map(img => img.images.original.url);
}

export {
    giphySearch
}
