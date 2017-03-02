import _ from 'lodash';
import { GAME_STATE } from './gameState';

export const kittens = [
    { id: 0, url: 'http://i.giphy.com/3oriO0OEd9QIDdllqo.gif' },
    { id: 1, url: 'http://i.giphy.com/iNMz8LF8y3g4.gif' },
    { id: 2, url: 'http://i.giphy.com/OmK8lulOMQ9XO.gif' },
    { id: 3, url: 'http://i.giphy.com/11s7Ke7jcNxCHS.gif' },
    { id: 4, url: 'http://i.giphy.com/IcXFEz3QvEmpG.gif' },
    { id: 5, url: 'http://i.giphy.com/yFQ0ywscgobJK.gif' },
    { id: 6, url: 'http://i.giphy.com/c7kqZMtzMLpG8.gif' },
    { id: 7, url: 'http://i.giphy.com/njtPBlbYnHAHK.gif' },
];

const CARD_DICTIONARY = {
  FACE_UP: 1,
  FACE_DOWN: 0,
  SOLVED: 2,
};

/*
 *  The module for the memory board.
 *  You should not have to make any changes to this module in order to complete the lab.
 * */

class MemoryBoard {
  constructor({ size = 4, kittenImages = kittens }, notifyActionCallback = () => {
  }) {
    this.kittenImages = kittenImages;
    this.notifyActionCallback = notifyActionCallback;
    this.state = MemoryBoard.setupState(size);
    this.size = size;
    this.kittenImageId = this.getShuffledTiles(size);
    this.notifyGameStarted = _.once(() => {
      this.notifyActionCallback({ type: GAME_STATE.GAME_STARTED });
    });
  }

  static setupState(size) {
    return _.range(0, size * size)
            .map(() => CARD_DICTIONARY.FACE_DOWN);
  }

  getCardState(cardId) {
    return this.state[cardId];
  }

  handleClicked(cardId) {
    this.notifyGameStarted();
    if (this.state[cardId] !== CARD_DICTIONARY.FACE_DOWN) {
      return;
    }
    const numberOfCardsFacingUp = this.getNumberOfCardsFacingUp();
    if (numberOfCardsFacingUp === 0) {
      this.state[cardId] = CARD_DICTIONARY.FACE_UP;
    } else if (numberOfCardsFacingUp === 1) {
      const currentCardFacingUp = this.getCurrentCardIndexFacingUp();
      this.state[cardId] = CARD_DICTIONARY.FACE_UP;
      const isMatch = this.kittenImageId[cardId] === this.kittenImageId[currentCardFacingUp];

      if (isMatch) {
        this.state[cardId] = CARD_DICTIONARY.SOLVED;
        this.state[currentCardFacingUp] = CARD_DICTIONARY.SOLVED;
        this.notifyActionCallback({
          type: GAME_STATE.SOLVED,
          data: {
            card1: cardId,
            card2: currentCardFacingUp,
          },
        });

        // should finish?
        /*eslint-disable */
        const isGameOver = this.state.filter(item => item === CARD_DICTIONARY.FACE_DOWN).length === 0;
        /*eslint-enable */
        if (isGameOver) {
          this.notifyActionCallback({
            type: GAME_STATE.GAME_OVER,
          });
        }
      }
    } else {
            // user clicks a third card.
      this.notifyActionCallback({
        type: GAME_STATE.NO_MATCH,
      });
      this.turnBackAllCardsFacingUp();
      this.state[cardId] = CARD_DICTIONARY.FACE_UP;
    }
  }

  turnBackAllCardsFacingUp() {
    this.state.map((card, index) => {
      if (card === CARD_DICTIONARY.FACE_UP) {
        this.state[index] = CARD_DICTIONARY.FACE_DOWN;
      }
      return card;
    });
  }

  getCurrentCardIndexFacingUp() {
    return _.findIndex(this.state, card => card === CARD_DICTIONARY.FACE_UP);
  }

  getNumberOfCardsFacingUp() {
    return this.state.filter(item => item === CARD_DICTIONARY.FACE_UP).length;
  }

  getShuffledTiles(size) {
    if (size % 2 !== 0) {
      throw new Error('size cannot be uneven numbers, would make up for some really terrible pairing, l0l');
    }
    if ((size * size) / 2 > this.kittenImages.length) {
      throw new Error('insufficient kittens provided to make more cats');
    }
    const arr = _.range(0, Math.floor((size * size) / 2));
    return _.shuffle([...arr, ...arr]);
  }

  getKittenImage(kittenImageId = 0) {
    return kittens[kittenImageId];
  }

}

export default MemoryBoard;
