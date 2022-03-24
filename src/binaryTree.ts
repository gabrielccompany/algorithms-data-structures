interface Node {
  left?: Node;
  right?: Node;
  value: number;
}

export default class BTHeigth {
  input: number[];
  node: Node;

  constructor(input: number[]) {
    this.input = input;
  }

  recursiveBuildTree(queue: number[], node: Node): Node {
    const current = queue.shift();

    if (!current) return node;

    if (current < node.value && !node.left) {
      node.left = { value: current };
      return this.recursiveBuildTree(queue, node.left);
    }

    return node;
  }

  main() {
    // Doing this because side effect of the orinal array (shift removes the first element)
    const treeNodesArray = Array.from(this.input);
    const rootValue = treeNodesArray.shift();
    const initialNode: Node = { value: rootValue };
    if (!rootValue) return 0;

    this.recursiveBuildTree(treeNodesArray, initialNode);

    return this.input;
  }
}
