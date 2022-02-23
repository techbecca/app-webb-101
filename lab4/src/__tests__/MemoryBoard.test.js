import _ from "lodash";
import MemoryBoard, { getShuffledTiles, kittens } from "../MemoryBoard";

const generateKittens = (size) =>
  _.range(0, size).map((id) => ({ url: `kitten_${id}.jpg`, id }));

describe("constructor()", () => {
  it("should construct a board when size = 4", () => {
    const board = new MemoryBoard({
      size: 4,
      kittenImages: generateKittens(8),
    });
    expect(board.kittenImageId.length).toEqual(16);
  });

  it("should throw an error when size = 5", () => {
    expect(
      () => new MemoryBoard({ size: 5, kittenImages: generateKittens(6) })
    ).toThrow();
  });

  it("should construct a board when size = 6", () => {
    const board = new MemoryBoard({
      size: 6,
      kittenImages: generateKittens(18),
    });
    expect(board.kittenImageId.length).toEqual(36);
  });

  it("should not initialize when size is greater than the amount of kittens * 2", () => {
    expect(
      () => new MemoryBoard({ size: 4, kittenImages: generateKittens(6) })
    ).toThrow();
  });

  it("should produce an array with pairs", () => {
    const board = new MemoryBoard({
      size: 4,
      kittenImages: generateKittens(8),
    });
    expect(board.kittenImageId.sort()).toEqual([
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
    ]);
  });
});

describe("getNumberOfCardsFacingUp()", () => {
  it("should know number of cards facing up", () => {
    // given
    const board = new MemoryBoard({
      size: 4,
      kittenImages: generateKittens(8),
    });
    // when
    board.handleClicked(5);

    // then
    const actual = board.getNumberOfCardsFacingUp();
    expect(actual).toBe(1);
  });
});
describe("getCurrentCardIndexFacingUp()", () => {
  it("should display THE card facing up", () => {
    // given
    const board = new MemoryBoard({
      size: 4,
      kittenImages: generateKittens(8),
    });
    // when
    board.handleClicked(5);

    const actual = board.getCurrentCardIndexFacingUp();
    expect(actual).toBe(5);
  });
});

// TODO: Implement these failing tests!

describe("getKittenImage(id)", () => {
  it("should return a kitten with given a kitten id", () => {
    // given
    const kittenId = 0;
    const board = new MemoryBoard({
      size: 4,
      kittenImages: generateKittens(8),
    });
    // when
    const theKitten = board.getKittenImage(kittenId);
    // then
    expect(theKitten).toEqual(kittens[kittenId]);
  });
});

describe("getCardState(cardId)", () => {
  const unflippedCard = 0;
  const flippedCard = 1;
  const cardId = 4;

  it("should return an unflipped card when the board is created", () => {
    // given
    const board = new MemoryBoard(4);
    // when
    const actual = board.getCardState(3);
    // then
    expect(actual).toEqual(unflippedCard);
  });

  it("should return a flipped card when the card has been clicked", () => {
    // given
    const board = new MemoryBoard(4);
    // when
    // clicking on card with given cardId...
    board.handleClicked(cardId);
    const actual = board.getCardState(cardId);
    // then
    expect(actual).toEqual(flippedCard);
    // expect(true).toEqual(false);
  });
});

describe("getShuffledTiles(size, images)", () => {
  it("should return an array of shuffeled the kittens", () => {
    // given
    // const kittens = generateKittens(...);
    // when
    // shuffling...
    // const shuffledKittens = getShuffledTiles(4, kittens);
    // then
    // expect(...).not.toEqual(kittens);
    expect(true).not.toEqual(true);
  });

  it("should throw an error if board is too large for the kittens array", () => {
    // given
    const hugeSizeBoard = 16;
    const justAFewKittens = 4;
    // const kittens = ...
    // when
    // try {
    // 	shuffling
    // } catch (e) {
    // 	//then
    // 	expect(e.message).toEqual(...);
    // }
    expect(true).toEqual(false);
  });

  it("should throw an error when trying to create a board of uneaven size", () => {
    // given
    const size = 5;
    // when
    // You got this now, right!? Give it a try (and a catch!) :)
    // then
    expect(true).toEqual(false);
  });
});
