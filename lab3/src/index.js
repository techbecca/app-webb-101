import GameManager from "./GameManager";
const elementToAttach = document.getElementById('game');
const gameSettings = { gameElement: elementToAttach, size: 4 };
const GM = new GameManager(gameSettings);
GM.start();

// import _ from 'lodash';
// import $ from 'jquery';
//

//
// const arr = [0,1,2,3,4,5,6,7];
// // const arrIndexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let kittenImageId = undefined;
// let currentPick = undefined;
// let selectedStore = [];
// let wait = false;
//
// const shuffleTiles = () => _.shuffle([...arr, ...arr]);
// const isMatch = (id) => _.uniq(selectedStore).length === 1;
//
// const onStart = () => {
//     setupEventListeners();
//     populateGridIds();
// };
//
// const clearItem = (id) => {
//
// };
//
// const selectTile = (element) => {
//
//     const tileIndex = element.getAttribute('data-tile-index');
//     const isSelected = element.classList.contains("selected");
//     const isFound = element.classList.contains("found");
//
//     if (isSelected || isFound || wait) {
//         return;
//     }
//
//     element.classList.add("selected");
//
//     if (currentPick !== undefined) {
//         if (kittenImageId[tileIndex] === kittenImageId[currentPick]) {
//             console.log("=== MATCH ===");
//             element.classList.add("found");
//             document.querySelector(`[data-tile-index="${currentPick}"]`).classList.add("found");
//         } else {
//             console.log(" vänd tillbaka! ");
//             wait = true;
//             setTimeout(() => {
//                 element.classList.remove("selected");
//                 document.querySelector(`[data-tile-index="${currentPick}"]`).classList.remove("selected");
//                 currentPick = undefined;
//                 wait = false;
//             }, 2000);
//
//         }
//         //  hämta all querySelector med selected
//
//     } else {
//         currentPick = tileIndex;
//     }
//
//
//     //
//     // if (!isSelected) {
//     //     selectedStore.push(tileId);
//     // }
//     //
//     // console.log(selectedStore);
//     // if (selectedStore.length === 2) {
//     //     if (isMatch(tileId)) {
//     //         console.log("match");
//     //     } else {
//     //         console.log("no match");
//     //         // selectedStore.forEach(item => { clearItem(item) })
//     //         document.querySelector(`[data-tile-image-id="${tileIndex}"]`).classList.remove("selected");
//     //         selectedStore = [];
//     //     }
//     //     selectedStore = [];
//     // }
// };
//
// const getTileImage = (node) => {
//     const idToUse = node.getAttribute('data-tile-image-id');
//     const image = kittens[idToUse];
// }
//
// const populateGridIds = () => {
//     kittenImageId = shuffleTiles();
//     const gridItems = document.querySelectorAll('.card');
//     gridItems.forEach((item, index) => {
//         let id = kittenImageId[index];
//         let imgElement = item.querySelector('.img-container');
//         item.setAttribute("data-tile-image-id", id);
//         item.setAttribute("data-tile-index", index);
//         imgElement.innerHTML = `<img src=${kittens[id].url} />`;
//     });
// }
//
// const setupEventListeners = () => {
//     Array.from(document.querySelectorAll('.card')).map(el => {
//         el.addEventListener('click', function(event) {
//             if (!wait) {
//                 selectTile(this);
//             }
//         })
//     });
// }
//
// onStart();
