import MemoryBoard from "../MemoryBoard";
import _ from "lodash";
const generateKittens = (size) => _.range(0, size)
	.map(id => ({ url: `kitten_${id}.jpg`, id }));

describe('shuffling', () => {

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

describe('card flipping logic', () => {
	it('should know number of cards facing up', () => {
		// given
		const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
		// when
		board.handleClicked(5);

		// then
		const actual = board.getNumberOfCardsFacingUp();
		expect(actual).toBe(1);
	});

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
describe('getCardState()', () => {
	it('should return the given cardId from the state', () => {
	  // given
		// when
		// then
	})
});

describe('turnBackAllCardsFacingUp()', () => {
	it('should turn back all cards facing up', () => {
	   // given
		// when
		// then
	});
});
