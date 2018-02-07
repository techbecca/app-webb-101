# FACIT LAB 4

## MemoryBoard.test.js
```javascript
describe('getKittenImage(id)', () => {
	it('should return kitten with given id', () => {
	   // given
       const id = 0;
       const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
       // when
       const theKitten = board.getKittenImage(id);
		// then
        expect(theKitten).toEqual(kittens[id])
	});
});

describe('getCardState(cardId)', () => {
	
	const unflippedCard = 0;
	const flippedCard = 1;
    const cardId = 4;

	it('should return an unflipped card when the board is created', () => {
        // given
        const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
		// when
		const actual = board.getCardState(cardId);
		// then
        expect(actual).toEqual(unflippedCard);
	});

	it('should return a flipped card when the card has been clicked', () => {
		// given
        const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
		// when
		board.handleClicked(cardId);
        const actual = board.getCardState(cardId);
		// then
        expect(actual).toEqual(flippedCard);
	});
});

describe('getShuffledTiles(size, images)', () => {
	
	it('shuffles the kittens array', () => {
        // given
        const kittens = generateKittens(16);
        // when
        const shuffledKittens = getShuffledTiles(4, kittens);
        // then
        expect(shuffledKittens).not.toEqual(kittens);
	});
	
	it('throws an error if board is too large for the kittens array', () => {
		// given
	    const hugeSizeBoard = 16;
	    const justAFewKittens = 4; 
        const kittens = generateKittens(justAFewKittens);
		// when
		try {
            const shuffledKittens = getShuffledTiles(hugeSizeBoard, kittens);
        } catch (e) {
            // then
            expect(e.message).toEqual("insufficient kittens provided to make more cats");   
        }
	});

	it('throws an error when trying to create a board of uneaven size', () => {
		// given
        const size = 5;
        const kittens = generateKittens(16);
		// when
		try {
            const shuffledKittens = getShuffledTiles(size, kittens);
        } catch (e) {
            expect(e.message).toEqual("size cannot be uneven numbers, would make up for some really terrible pairing, l0l");   
        }
	});
})

```
