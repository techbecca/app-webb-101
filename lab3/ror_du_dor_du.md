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
