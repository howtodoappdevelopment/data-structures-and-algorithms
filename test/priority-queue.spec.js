const {PriorityQueue} = require("../data structures/priority-queue");
const {expect} = require("chai");
describe("Priority queue", function() {
    it("should enqueue and dequeue item", function() {
        const queue = new PriorityQueue()
        queue.enqueue(1)
        queue.enqueue(2, 3)
        expect(queue.peek()).to.equal(2)
        expect(queue.dequeue()).to.equal(2)
        expect(queue.dequeue()).to.equal(1)
        expect(queue.dequeue()).to.equal(undefined)
    })
    it("should change priority of item", function() {
        const queue = new PriorityQueue()
        queue.enqueue(1)
        queue.enqueue(2, 99)
        queue.changePriority(1, 100)
        expect(queue.peek()).to.equal(1)
        expect(queue.dequeue()).to.equal(1)
        expect(queue.dequeue()).to.equal(2)
    })
})