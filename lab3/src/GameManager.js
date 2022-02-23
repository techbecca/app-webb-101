import MemoryBoard from './MemoryBoard';
import DomManager from './DomManager';
import { GAME_STATE } from './gameState';

class GameManager {
	constructor({ gameElement, size }) {
		this.memoryBoard = new MemoryBoard(size, this.notifyAction.bind(this));
		this.domManager = new DomManager({ node: gameElement, memoryBoard: this.memoryBoard });
		this.state = {
			timeElapsed: 0,
			numberOfTilesMatched: 0,
			numberOfTries: 0,
		};
		this.gameTimer = null;
		this.domManager.setNumberOfTilesMatched();
	}

	startGameTimer() {
		const second = 1000;
		this.gameTimer = setInterval(() => {
			this.state.timeElapsed += second;
		}, second);
	}

	stopGameTimer() {
		clearInterval(this.gameTimer);
	}

	notifyAction(action) {
		/*
		 action structure:
		 {
		 type: 'GAME_STATE.*',
		 data: {} (optional)
		 }
		 */
		console.log(action.type, action);
		// TODO: your implementation of step 8 & 9 COULD go here. ;)
		switch(action.type) {
			case GAME_STATE.SOLVED:
				this.state.numberOfTilesMatched += 1;
				this.domManager.setNumberOfTilesMatched(this.state.numberOfTilesMatched);
				break;
		}

		this.domManager.setNumberOfTries(++this.state.numberOfTries);

		if (this.state.numberOfTries >= 12) {
			this.domManager.showGameOver();
		}

	}

}

export default GameManager;
