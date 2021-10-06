import GameManager from './GameManager';
import '../style.css';

const elementToAttach = document.getElementById('game');
const gameSettings = { gameElement: elementToAttach, size: 4 };

new GameManager(gameSettings);
