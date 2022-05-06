const {Queue} = require("../data structures/queue");
const {expect} = require("chai")

describe("Queue", function() {
    it("should peek element", function() {
        const queue = new Queue()
        queue.enqueue(1)
        expect(queue.peek()).to.equal(1)
    })
    it("should enqueue and dequeue", function() {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        expect(queue.dequeue()).to.equal(1)
        expect(queue.dequeue()).to.equal(2)
        expect(queue.dequeue()).to.equal(undefined)
    })
})