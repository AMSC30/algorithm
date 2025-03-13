class SetStructure {
  constructor() {
    this._count = 0;
    this.items = {};
  }

  add(element) {
    if (this.has(element)) return false;

    this.items[element] = element;

    this._count++;

    return true;
  }

  delete(element) {
    if (!this.has()) return false;

    let result = this.items[element];

    delete this.items[element];

    return true;
  }

  clear() {
    this.items = {};
  }

  size() {
    return this._count;
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  values() {
    return Object.values(this.items);
  }

  // 并集
  uniSet(otherSet) {
    const newSet = new SetStructure();

    const selfValues = this.values();
    const otherValues = otherSet.values();

    selfValues.forEach((value) => newSet.add(value));

    otherValues.forEach((value) => newSet.add(value));

    return newSet;
  }

  // 交集
  insertSection(otherSet) {
    const setValues = this.values();

    const resultSet = new SetStructure();

    setValues.forEach((value) => {
      if (otherSet.has(value)) {
        resultSet.add(value);
      }
    });

    return resultSet;
  }

  // 差集
  reset(otherSet) {
    const setValues = this.values();

    const resultSet = new SetStructure();

    setValues.forEach((value) => {
      if (!otherSet.has(value)) {
        resultSet.add(value);
      }
    });

    return resultSet;
  }
}

module.exports = SetStructure;
