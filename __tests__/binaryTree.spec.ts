import BinaryTree from "@src/binaryTree";

describe("Binary Tree", () => {
  it("should create a binary tree", () => {
    // Arrange
    const inputMock = "3 5 2 1 4 6 7".split(" ").map(Number);

    // Act
    const tree = new BinaryTree(inputMock);

    // Assert
    expect(tree).toBeDefined();
    expect(tree.main()).toEqual(inputMock);
  });
  it("should return 0 if no input is provided", () => {
    // Arrange
    const inputMock = [];

    // Act
    const tree = new BinaryTree(inputMock);

    // Assert
    expect(tree).toBeDefined();
    expect(tree.main()).toEqual(0);
  });
});
