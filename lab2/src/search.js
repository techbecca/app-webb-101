import findKey from "lodash/findKey";
import getGiphyImages, { getGiphyKittens } from "./api";

/**
 * Present search results as HTML
 * @param searchResult
 */
const handleSearchSuccess = (searchResult) => {
    if (searchResult.length > 0) {
        const resultNode = document.querySelector("#results");
        resultNode.innerHTML = "";

        searchResult
            .map((result) => `<li><img class='img-thumbnail' src=${result} /></li>`)
            .forEach((result) => (resultNode.innerHTML += result));
    }
};

/**
 * Present search failure as HTML
 * @param searchResult
 */
const handleSearchFailure = (errorMessage) => {
    const resultNode = document.querySelector("#results");
    resultNode.innerHTML = `<div class='error-msg'>${errorMessage}</div>`;
};

/**
 * Event is the event generated by the keyup listener in index.js.
 * It then calls performSearch which in turn performs the actual search operation.
 * OBS: You should not have to change this function.
 * @param event
 */
export const search = (event) => {
    const value = event.target.value;

    if (value.length >= 3) {
        const urlEncodedTerm = encodeURIComponent(value);
        performSearch(urlEncodedTerm)
            .then((searchResult) => {
                handleSearchSuccess(searchResult);
            })
            .catch((err) => {
                handleSearchFailure(err.message);
            });
    }
};

/**
 * This is a private function, not visible outside this module/file.
 * You may need to change this one ;)
 * @param searchTerm
 * @returns {Promise}
 */
const performSearch = (searchTerm = "") => {
    return getGiphyImages(searchTerm);
};
