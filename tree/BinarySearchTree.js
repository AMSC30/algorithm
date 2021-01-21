class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  show() {
    console.log(this.key);
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const node = new Node(key);

    if (this.root === null) return (this.root = node);

    insertNode(this.root, node);
  }
  // 中序遍历 升序访问
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb);
  }
  inOrderTraverseNode(node, cb) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, cb);
      cb(node);
      this.inOrderTraverseNode(node.right, cb);
    }
  }

  // 先序遍历
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb);
  }
  preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node);
      this.preOrderTraverseNode(node.left, cb);
      this.preOrderTraverseNode(node.right, cb);
    }
  }

  // 后序遍历
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb);
  }
  postOrderTraverseNode() {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, cb);
      this.postOrderTraverseNode(node.right, cb);
      cb(node);
    }
  }

  min() {
    return this.getMinNode(this.root);
  }

  getMinNode(node) {
    let current = node;
    while (node != null && node.left != null) {
      current = node.left;
    }
    return current;
  }

  max() {
    return this.getMaxNode(this.root);
  }
  getMaxNode(node) {
    let current = node;
    while (node != null && node.right != null) {
      current = node.right;
    }
    return current;
  }

  hasKey(key) {
    return this.hasNodeWithKey(this.root, key);
  }
  hasNodeWithKey(node, key) {
    if (node == null) {
      return false;
    }

    if (node.key < key) {
      return this.hasNodeWithKey(node.right, key);
    } else if (node.key > key) {
      return this.hasNodeWithKey(node.left, key);
    } else {
      return true;
    }
  }
}

function insertNode(node, newNode) {
  if (node.key > newNode.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(12);
tree.insert(13);
tree.insert(11);
tree.insert(18);
tree.insert(34);
tree.insert(58);
tree.insert(19);

tree.inOrderTraverse((node) => {
  console.log(node.key);
});
