/*
 *  The module for the dom manager.
 *  You should not have to make any changes to this module in order to complete the lab.
 * */
class DomManager {
    constructor({ node, memoryBoard }) {
        this.node = node;
        this.memoryBoard = memoryBoard;
        this.clearNode();
        this.setupBoard();
    }

    newGame(newBoard) {
        this.memoryBoard = newBoard;
    }

    // remove everything connected to gameBoard
    // to make room for new, improveness stuffz
    clearNode() {
        this.clearListeners();
        this.node.textContent = '';
    }

    clearListeners() {
        this.node.querySelectorAll('.card').forEach(card => {
            card.removeEventListener('click', () => {});
        });
    }

    onCardClicked(tileId) {
        this.memoryBoard.handleClicked(tileId);
        this.node.querySelectorAll('.card').forEach((cardElement, index) => {
            let cardState = this.memoryBoard.getCardState(index);
            this.handleCardState(cardElement, cardState);
        });
    }

    handleCardState(cardElement, cardState) {
        switch (cardState) {
            case 0: // face down
                cardElement.className = 'card';
                break;
            case 1: // face up
                cardElement.className = 'card selected';
                break;
            case 2: // solved
                cardElement.className = 'card found';
                break;
        }
    }

    setNumberOfTilesMatched(score = 0) {
        const scoreEl = document.getElementById('current-number-of-tiles-matched');
        scoreEl.textContent = score;
    }

    setNumberOfTries(tries) {
        const triesEl = document.getElementById('number-of-tries');
        triesEl.textContent = tries;
    }

    createCardNode(imgSrc, tileId) {
        const rootCardElement = document.createElement('div');
        rootCardElement.className = 'col-xs-3 grid-item';

        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';
        cardContainer.addEventListener('click', (e) => {
            e.preventDefault();
            this.onCardClicked(tileId);
        });

        const backElement = document.createElement('div');
        backElement.className = 'back';

        const imageElement = document.createElement('div');
        imageElement.className = 'img-container';
        const image = document.createElement('img');
        image.setAttribute('src', imgSrc);
        imageElement.appendChild(image);

        rootCardElement.appendChild(cardContainer);
        cardContainer.appendChild(backElement);
        cardContainer.appendChild(imageElement);
        return rootCardElement;
    }

    setupBoard() {
        const theGrid = document.createElement('div');
        let currentRow;
        this.memoryBoard.kittenImageId.forEach((tileId, index) => {
            if (index % this.memoryBoard.size === 0) {
                if (index > 0) {
                    theGrid.appendChild(document.createElement('br'));
                }
                currentRow = document.createElement('div');
                currentRow.className = 'row';
                theGrid.appendChild(currentRow);
            }
            const kittenImage = this.memoryBoard.getKittenImage(tileId);
            const cardNode = this.createCardNode(kittenImage.url, index);
            currentRow.appendChild(cardNode);
        });
        this.node.appendChild(theGrid);
    }

	showGameOver(gameState) {
        const gameOverEl = document.getElementById('game-over-panel');
        gameOverEl.style.display = 'block';
	}
}

export default DomManager;
