class Node {
    constructor(value, next1) {
        this.value = value;
        this.neighbours = {};
        this.neighbours.left = next1;
    }
}

export default Node;
