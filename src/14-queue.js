const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    const start = this.stack;
    if (!start) return 0;
    let count = 1;
    let current = start;
    while (current.next) {
      current = current.next;
      count++;
    }
    return count;
  }

  enqueue(element) {
    const { stack } = this;
    if (!stack) {
      const newElement = {};
      ListNode.call(newElement, element);
      this.stack = newElement;
    } else {
      let lastElement = stack;
      while (lastElement.next) {
        lastElement = lastElement.next;
      }
      const newElement = {};
      ListNode.call(newElement, element);
      lastElement.next = newElement;
    }
  }

  dequeue() {
    const { value } = this.stack;
    if (!value) return 'В очереди пусто';
    this.stack = this.stack.next;
    return value;
  }
}

module.exports = Queue;
