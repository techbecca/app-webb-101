import MemoryBoard from "./MemoryBoard";
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
