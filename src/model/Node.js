class Node {
    constructor(value) {
        this.value = value;
        this.neighbours = {};
    }

    addLeft(anotherNode) {
        this.neighbours.left = anotherNode;
    }

    addRight(anotherNode) {
        this.neighbours.right = anotherNode;
    }

    addChild(anotherNode) {
        if (!this.neighbours.children) {
            this.neighbours.children = [];
            this.neighbours.children.push(anotherNode);
        }
    }
}

export default Node;
