import _ from "lodash";
export const kittens = [
    { id: 0, url: "http://i.giphy.com/3oriO0OEd9QIDdllqo.gif" },
    { id: 1, url: "http://i.giphy.com/iNMz8LF8y3g4.gif" },
    { id: 2, url: "http://i.giphy.com/OmK8lulOMQ9XO.gif" },
    { id: 3, url: "http://i.giphy.com/11s7Ke7jcNxCHS.gif" },
    { id: 4, url: "http://i.giphy.com/IcXFEz3QvEmpG.gif" },
    { id: 5, url: "http://i.giphy.com/yFQ0ywscgobJK.gif" },
    { id: 6, url: "http://i.giphy.com/c7kqZMtzMLpG8.gif" },
    { id: 7, url: "http://i.giphy.com/njtPBlbYnHAHK.gif" },
];

const CARD_DICTIONARY = {
    FACE_UP: 1,
    FACE_DOWN: 0,
    SOLVED: 2,
};

class MemoryBoard {
    constructor({ size = 4, kittenImages = kittens }) {
        this.kittenImages = kittenImages;
        this.state = this.setupState(size);
        this.size = size;
        this.kittenImageId = this.getShuffledTiles(size);
    }

    setupState(size) {
        return _.range(0, size * size)
            .map(() => CARD_DICTIONARY.FACE_DOWN);
    }

    getCardState(cardId) {
        return this.state[cardId];
    }

    handleClicked(cardId) {
        if (this.state[cardId] !== CARD_DICTIONARY.FACE_DOWN) {
            return;
        }
        const numberOfCardsFacingUp = this.getNumberOfCardsFacingUp();
        if (numberOfCardsFacingUp === 0) {
            this.state[cardId] = CARD_DICTIONARY.FACE_UP;
        } else if (numberOfCardsFacingUp === 1) {
            //    TODO: MATCH CARD
            this.state[cardId] = CARD_DICTIONARY.FACE_UP;
        } else {
            //    TODO: FLIP BACK ALL CARDS
        }
    }

    getNumberOfCardsFacingUp() {
        return this.state.reduce((item, currentCount) => {
            if (item === CARD_DICTIONARY.FACE_UP) {
                return currentCount + 1;
            }
            return currentCount;
        }, 0);
    }

    getShuffledTiles(size) {
        if (size % 2 !== 0) {
            throw new Error("size cannot be uneven numbers, would make up for some really terrible pairing, l0l");
        }
        if (size * size / 2 > this.kittenImages.length) {
            throw new Error("insufficient kittens provided to make more cats");
        }
        const arr = _.range(0, Math.floor(size * size / 2));
        return _.shuffle([...arr, ...arr]);
    }

    getKittenImage(kittenImageId = 0) {
        return kittens[kittenImageId];
    }

}

export default MemoryBoard;
