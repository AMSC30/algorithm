const Queue = require("./Queue");

function hotPotato(elementList, num) {
  const queue = new Queue();
  let winner = null;

  elementList.forEach((element) => {
    queue.enQueue(element);
  });

  if (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enQueue(queue.deQueue());
    }
    queue.deQueue();
  }

  return queue.peek();
}

const persons = ["tom", "jack", "jerry"];
console.log(hotPotato(persons, 3));
