class myArray {
  constructor(eleCounts) {
    this.array = [];
    this.init(eleCounts);
  }
  init(eleCounts) {
    this.setData(eleCounts);
  }
  swap(index1, index2) {
    const tempValue = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = tempValue;
  }
  setData(eleCounts) {
    for (let i = 0; i < eleCounts; i++) {
      const data = Math.floor(Math.random() * (eleCounts + 1));
      this.array[i] = data;
    }
  }
  toString() {
    const len = this.array.length;
    let resultStr = "";
    for (let i = 0; i < len; i++) {
      resultStr += this.array[i] + " ";
      if (i % 9 === 0 && i !== 0) {
        resultStr += "\n";
      }
    }
    console.log(resultStr);
  }

  bubbleSort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  selectionSort() {
    let minIndex = 0,
      minValue = this.array[minIndex],
      outerLength = this.array.length - 1;

    for (let i = 0; i < outerLength; ++i) {
      minIndex = i;
      minValue = this.array[minIndex];

      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] < minValue) {
          minIndex = j;
          minValue = this.array[minIndex];
        }
      }

      this.swap(i, minIndex);
    }
  }

  insertionSort() {
    let temp, inner;
    for (let outer = 1; outer < this.array.length; outer++) {
      temp = this.array[outer];
      inner = outer;
      while (inner > 0 && this.array[inner - 1] >= temp) {
        this.array[inner] = this.array[inner - 1];
        --inner;
      }
      this.array[inner] = temp;
    }
  }

  shellSort() {
    const gaps = getGaps(this.array);

    for (let i = 0; i < gaps.length; i++) {
      let d = gaps[i];

      for (let j = i; j < this.array.length; j++) {
        let temp = this.array[j];
        let inner = j;

        for (; inner >= d && this.array[inner - d] >= temp; inner -= d) {
          this.array[inner] = this.array[inner - d];
        }

        this.array[inner] = temp;
      }
    }
  }

  mergeSort(list) {
    list = this.array;

    const length = list.length;

    if (length < 2) return list;

    const middle = Math.floor(length / 2);

    const left = list.slice(0, middle);
    const right = list.slice(middle);

    return merge(this.mergeSort(left), this.mergeSort(right));
  }

  seqSearch(num) {
    let index;
    for (let i = 0; i < this.array.length; i++) {
      if (num === this.array[i]) {
        index = i;
        console.log(index);
        return index;
      }
    }
    return index;
  }

  binSearch(num) {
    if (this.array.length === 0) return -1;

    if (this.array.length === 1) {
      if (this.array.includes(num)) {
        return index;
      }
      return -1;
    }

    let start = 0,
      end = this.array.length - 1;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (this.array[mid] > num) {
        end = mid;
      } else if (this.array[mid] < num) {
        start = mid;
      } else {
        return mid;
      }
    }

    return -1;
  }
}
function getGaps(list) {
  const gaps = [];
  let currentGap = Math.floor(list.length / 2);
  while (currentGap >= 1) {
    gaps.push(currentGap);

    currentGap = Math.floor(currentGap / 2);
  }

  return gaps;
}
function mergeSort(list) {
  const length = list.length;

  if (length < 2) return list;

  const middle = Math.floor(length / 2);

  const left = list.slice(0, middle);
  const right = list.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}

function quickSort(list) {
  const length = list.length;

  if (length == 0) return list;

  const lesser = [],
    greater = [],
    baseValue = list[0];
  for (let i = 1; i < length; i++) {
    const currentValue = list[i];

    if (currentValue > baseValue) {
      greater.push(currentValue);
    } else {
      lesser.push(currentValue);
    }
  }

  return quickSort(lesser).concat(baseValue, quickSort(greater));
}

const array = new myArray(20);
console.log(array.binSearch(0));
// array.toString();
