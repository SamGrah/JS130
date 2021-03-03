function newStack() {
  let stack = [];
  return {
    push(element) {
      stack.push(element);
    },

    pop(element) {
      stack.pop(element);
    },

    printStack() {
      stack.forEach(element => console.log(element));
    },
  };
}

let stack = newStack();

