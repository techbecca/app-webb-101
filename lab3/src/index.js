import GameManager from "./GameManager";
const elementToAttach = document.getElementById('game');
const gameSettings = { gameElement: elementToAttach, size: 4 };
new GameManager(gameSettings);
