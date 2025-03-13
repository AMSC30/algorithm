const LinkedList = require("../linked-list/LinkedList");

function createHashCode(key) {
  if (typeof key === "number") {
    return key;
  }
  const keyString = String(key);

  let charCode = 0;

  for (let i = 0, l = keyString.length; i < l; i++) {
    charCode += keyString.charCodeAt(i);
  }

  const hashCode = charCode % 37;

  return hashCode;
}
class HashMap {
  constructor() {
    this._count = 0;
    this.items = {};
  }
  put(key, value) {
    if (key != null && value != null) {
      const hashCode = createHashCode(key);

      if (this.items[hashCode] === undefined) {
        const linkedList = new LinkedList();
        this.items[hashCode] = linkedList;
      }

      this.items[hashCode].push(value);
      this._count++;
      return true;
    }
    return false;
  }

  get(key) {
    if (key == null) return undefined;

    const hashCode = createHashCode(key);
    const linkedList = this.items[hashCode];

    if (!linkedList || linkedList.isEmpty()) return undefined;

    const result = linkedList.getElementAt(0);

    return result;
  }

  remove(key) {
    if (!this.has(key)) return false;

    const hashCode = createHashCode(key);

    this.items[hashCode] = new LinkedList();
    return true;
  }

  has(key) {
    const hashCode = createHashCode(key);
    return this.items[hashCode] !== undefined;
  }

  isEmpty() {
    return this._count === 0;
  }
}
module.exports = HashMap;
