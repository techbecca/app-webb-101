import MemoryBoard, { getShuffledTiles, kittens } from "../MemoryBoard";
import _ from "lodash";
const generateKittens = (size) => _.range(0, size)
	.map(id => ({ url: `kitten_${id}.jpg`, id }));

describe('constructor()', () => {
	it('when size = 4', () => {
		const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
		expect(board.kittenImageId.length).toEqual(16);
	});

	it('it should throw an error when size = 5', () => {
		expect(() => new MemoryBoard({ size: 5, kittenImages: generateKittens(6) })).toThrow();
	});

	it('when size = 6', () => {
		const board = new MemoryBoard({ size: 6, kittenImages: generateKittens(18) });
		expect(board.kittenImageId.length).toEqual(36);
	});

	it('cannot initialize when size is greater than the amount of kittens * 2', () => {
		expect(() => new MemoryBoard({ size: 4, kittenImages: generateKittens(6) })).toThrow();
	});

	it('should produce an array with pairs', () => {
		const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
		expect(board.kittenImageId.sort()).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]);
	});
});

describe('getNumberOfCardsFacingUp()', () => {
	it('should know number of cards facing up', () => {
		// given
		const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
		// when
		board.handleClicked(5);

		// then
		const actual = board.getNumberOfCardsFacingUp();
		expect(actual).toBe(1);
	});
});
describe('getCurrentCardIndexFacingUp()', () => {
	it('should display THE card facing up', () => {
		// given
		const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
		// when
		board.handleClicked(5);

		const actual = board.getCurrentCardIndexFacingUp();
		expect(actual).toBe(5)
	});

});

// TODO: Implement this!
describe('getKittenImage(id)', () => {
	it('should return kitten with given id', () => {
	   // given
       const id = 0;
       const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
       // when
       const theKitten = null;
		// then
        expect(theKitten).toEqual(kittens[id])
	});
});

describe('getCardState(cardId)', () => {
	it('should return the given flip state of a cardId from the state', () => {
        // given
        // const board = new MemoryBoard(...);
        // when
		// then
        // const actual = board.getCardState(...);
        // expect(actual).toEqual(...)
        expect(true).toEqual(false);
	})
});

describe('getShuffledTiles(size, images)', () => {
    it('shuffles', () => {
        // given
            // const kittens = generateKittens(...);
        // when
            // shuffling...
        // then
            // expect(...).not.toEqual(kittens);
        expect(true).toEqual(false);
    })
})
