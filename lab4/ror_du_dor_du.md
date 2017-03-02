## LAB3 notification solution
```javascript
notifyAction(action) {
    /*
        action structure:
        {
            type: GAME_STATE.*,
            data: {} (optional)
        }
    */
    switch (action.type) {
        case GAME_STATE.SOLVED: {
            this.domManager.setNumberOfTilesMatched(++this.state.numberOfTilesMatched);
            break;
        }
        case GAME_STATE.GAME_STARTED: {
                    this.stateGameTimer();
                }
        case GAME_STATE.GAME_OVER: {
            this.domManager.showGameOver(this.state);
            clearInterval(this.gameTimer);
            break;
        }
    }

    this.domManager.setNumberOfTries(++this.state.numberOfTries);
}
```
```javascript
// Tester
describe('getCardState()', () => {
	it('should return the given cardId from the state', () => {
		const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });

		const cardId = 4;
		const result = board.getCardState(cardId);

		expect(result).toEqual(0);
	})
});

describe('turnBackAllCardsFacingUp()', () => {
	it('should turn back all cards facing up', () => {
        const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
        // override board state
        board.state = [0,0,0,1,0,1,0,1];
        const expected = [0,0,0,0,0,0,0,0];
        // when
        board.turnBackAllCardsFacingUp();
        expect(board.state).toEqual(expected);
    });
});
```
