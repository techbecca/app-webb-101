import lodash from 'lodash';
// import { giphySearch } from './giphy';
const dataBlob = {
    kitten: [
        "http://i.giphy.com/3oriO0OEd9QIDdllqo.gif",
        "http://i.giphy.com/iNMz8LF8y3g4.gif"
    ],
    puppy: [
        "http://i.giphy.com/dp7QYhsdgN2Yo.gif",
        "http://i.giphy.com/iNMz8LF8y3g4.gif"
    ],
    bunny: ["http://i.giphy.com/10xUg8DdgQSs9i.gif"]
};

// search accepts an event from the input field
function search(event) {
    const value = event.target.value;
    performSearch(value).then(searchResult => {
        if (searchResult.length > 0) {
            const listHTML = searchResult.map(result => `<li class='img-thumbnail'><img src=${result} /></li>`);
            document.querySelector('#results').innerHTML = listHTML;
        }
    });
}

// take search term and return array of gif links.
// private function, not visible outside this module/file
function performSearch(searchTerm = '') {
    // return giphySearch(searchTerm);
    const findKeyFromDataBlob = _.findKey(dataBlob, (item, index) => index === searchTerm);
    // since our final application uses fetch api and promises
    // we use promises here to keep the same interface for all the helper functions
    return new Promise((resolve, reject) => {
        if (findKeyFromDataBlob) {
            resolve(dataBlob[findKeyFromDataBlob]);
        }
        resolve([]);
    })

}

// our api from this module
export {
    search
};
