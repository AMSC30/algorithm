const Stack = require("./Stack");

function toBinary(number, base = 2) {
  const stack = new Stack();

  const baseRes = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";

  while (number) {
    const rem = number % base;
    number = Math.floor(number / 2);
    stack.push(rem);
  }

  while (!stack.isEmpty()) {
    result += baseRes[stack.pop()];
  }

  return result;
}

console.log(toBinary(212121213, 8));
