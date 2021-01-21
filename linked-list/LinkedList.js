class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._count = 0;
    this._head = null;
    this._tail = null;
  }
  push(data) {
    const node = new Node(data);
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    return ++this._count;
  }

  insert(data, index) {
    const node = new Node(data);

    if (index > this._count || index < 0) return false;

    if (index === this._count) {
      return this.push(data);
    }

    if (index === 0) {
      node.next = this._head;
      this._head = node;
      return ++this._count;
    }

    let elementFound = this.getElementAt(index - 1);
    node.next = elementFound.next;
    elementFound.next = node;

    return true;
  }

  getElementAt(position) {
    if (position > this._count - 1 || position < 0) return undefined;

    let currentNode = this._head;
    let currentIndex = 0;

    while (position > currentIndex) {
      currentIndex++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  indexOf(element) {
    let currentNode = this._head;
    let currentIndex = 0;

    while (currentNode.value !== element && currentNode.next) {
      currentIndex++;
      currentNode = currentNode.next;
    }

    return currentNode.value !== element ? -1 : currentIndex;
  }

  remove(element) {
    let elementIndex = this.indexOf(element);

    if (elementIndex !== -1) {
      return this.removeAt(elementIndex);
    }
  }

  removeAt(position) {
    if (position < 0 || position > this._count - 1) return false;

    if (position === 0) {
      this._head = this._head.next;
      return true;
    }

    let preElement = this.getElementAt(position - 1);
    let currentElement = this.getElementAt(position);
    preElement.next = currentElement.next;

    if (position === this._count - 1) {
      this._tail = preElement;
    }
    return currentElement;
  }

  size() {
    return this._count;
  }

  isEmpty() {
    return this._count === 0;
  }
}

module.exports = LinkedList;
