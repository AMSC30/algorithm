class Queue {
  constructor() {
    this._items = [];
  }
  enQueue(data) {
    this._items.push(data);
  }

  deQueue() {
    if (this.isEmpty()) return undefined;
    return this._items.shift();
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this._items[0];
  }

  size() {
    return this._items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this._items = [];
  }
}

module.exports = Queue;
