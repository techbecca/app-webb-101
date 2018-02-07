## FACIT LAB 3

## GameManager.js
```javascript
import { GAME_STATE } from './gameState';

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
              this.startGameTimer();
              break;
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

## index.html
```html
<div class="row" id="game-over-panel">
      <div class="col-sm-12">
          <div class="panel panel-info">
              <div class="panel-heading">
                  <h3 class="panel-title"><span class="glyphicon glyphicon-road"></span>&nbsp; GAME OVER!</h3>
              </div>

              <div class="panel-body">
                  <div class="row">
                      <div id="game-time"></div>
                      <div id="no-of-tries"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
```

## DomManager.js
```javascript
showGameOver(gameState) {
        console.log("GAME OVER!", gameState);

        const {numberOfTries, timeElapsed} = gameState;

        const gameOverEl = document.getElementById('game-over-panel');
        const gameTimeEl = document.getElementById('game-time');
        const noOfTriesEl = document.getElementById('no-of-tries');

        gameTimeEl.textContent = `Time elapced: ${timeElapsed/1000} seconds`;
        noOfTriesEl.textContent = `Number of tries: ${numberOfTries}`;

        gameOverEl.style.display = 'block';
	}
```
