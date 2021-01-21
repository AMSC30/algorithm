class MapStructure {
  constructor() {
    this._count = 0;
    this.items = {};
  }
  set(key, value) {
    if (key != null && value != undefined) {
      this.items[key] = value;
      this._count++;
      return true;
    }
    return false;
  }

  remove(key) {
    if (!this.has(key)) return false;

    delete this.items[key];

    this._count--;

    return true;
  }

  has(key) {
    return Object.prototype.hasOwnProperty(this.items, key);
  }
}
