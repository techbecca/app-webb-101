
import MemoryBoard from './MemoryBoard';
import DomManager from './DomManager';

class GameManager {
    constructor({ gameElement, size }) {
        this.memoryBoard = new MemoryBoard(size);
        this.domManager = new DomManager({ node: gameElement, memoryBoard: this.memoryBoard });
    }

    start() {}

    end() {}
}

export default GameManager;
