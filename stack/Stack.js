class Stack {
  constructor() {
    this._items = [];
  }
  push(data) {
    this._items.push(data);
  }
  pop() {
    if (this.isEmpty()) return false;
    return this._items.pop();
  }
  size() {
    return this._items.length;
  }
  isEmpty() {
    return this._items.length === 0;
  }
}

module.exports = Stack;
