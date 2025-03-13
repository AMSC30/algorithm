function iterate(n) {
  if (n === 0) return;

  if (n === 1) return 1;

  if (n > 1) {
    return n * iterate(n - 1);
  } else {
    return n;
  }
}

console.log(iterate(5));
