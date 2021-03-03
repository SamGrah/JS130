'use strict';

class Element {
  constructor(value, nextElement) {
    this.value = value;
    this.nextElement = (function() {
      if (!nextElement) return null;
      return nextElement;
    })();
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextElement;
  }

  isTail() {
    return this.nextElement === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.firstElement = null;
  }

  head() {
    return this.firstElement;
  }

  peek() {
    return this.size() ? this.firstElement.datum() : null;
  }

  push(newValue) {
    let newElement = new Element(newValue, this.head());
    this.firstElement = newElement;
  }

  pop() {
    let removedValue = this.firstElement.datum();
    this.firstElement = this.firstElement.nextElement;
    return removedValue;
  }

  size() {
    if (this.isEmpty()) return 0;

    let sizeCount = 1;
    let element = this.firstElement;
    while (!element.isTail()) {
      element = element.next();
      sizeCount += 1;
    }

    return sizeCount;
  }

  isEmpty() {
    return !this.firstElement;
  }

  toArray() {
    let arr = [];
    if (this.isEmpty()) return arr;

    let element = this.firstElement;
    while (true) {
      arr.push(element.datum());
      if (!element.nextElement) break;
      element = element.nextElement;
    }

    return arr;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  static fromArray(arr) {
    let newList = new SimpleLinkedList();
    if ( !arr || !arr.length ) return newList;
    arr = arr.slice().reverse().forEach(value => newList.push(value));
    return newList;
  }

  _lastElement() {
    if (this.isEmpty()) return null;
    let element = this.firstElement;
    while (!element.isTail()) element = element.next();
    return element;
  }
}

module.exports = {
  Element,
  SimpleLinkedList
};