import MemoryBoard from './MemoryBoard';
import DomManager from './DomManager';

class GameManager {
	constructor({ gameElement, size }) {
		this.memoryBoard = new MemoryBoard(size, this.notifyAction.bind(this));
		this.domManager = new DomManager({ node: gameElement, memoryBoard: this.memoryBoard });
		this.state = {
			numberOfTilesMatched: 0,
			numberOfTries: 0,
		};
		this.domManager.setNumberOfTilesMatched();
	}

	notifyAction(action) {
		/*
		 action structure:
		 {
		 type: 'ACTION_TYPE',
		 data: {} (optional)
		 */
		console.log(action.type, action);
		switch (action.type) {
			case 'SOLVED': {
				this.domManager.setNumberOfTilesMatched(++this.state.numberOfTilesMatched);
				break;
			}
			case 'GAME_OVER': {
				this.domManager.showGameOver(this.state);
				break;
			}
		}
		this.domManager.setNumberOfTries(++this.state.numberOfTries);
	}

}

export default GameManager;
