const {MaxHeap} = require("../data structures/max-heap");
const {expect} = require("chai");
describe("Max heap", function() {
    it("should peek value", function() {
        const maxHeap = new MaxHeap();
        expect(maxHeap.peek()).to.equal(undefined)
        maxHeap.add(1)
        expect(maxHeap.peek()).to.equal(1)
    })
    it("should add value", function () {
        const maxHeap = new MaxHeap()
        maxHeap.add(1)
        maxHeap.add(2)
        maxHeap.add(5)
        expect(maxHeap.peek()).to.equal(5)
        expect(maxHeap.getLeftChild(0)).to.equal(1)
        expect(maxHeap.getRightChild(0)).to.equal(2)
    })
    it("should remove value", function () {
        const maxHeap = new MaxHeap()
        maxHeap.add(1)
        maxHeap.add(2)
        maxHeap.add(5)
        maxHeap.add(6)
        maxHeap.remove(6)
        expect(maxHeap.peek()).to.equal(5)
        expect(maxHeap.getLeftChild(0)).to.equal(2)
        expect(maxHeap.getRightChild(0)).to.equal(1)
    })
    it("should swap values", function () {
        const maxHeap = new MaxHeap()
        maxHeap.add(1)
        maxHeap.add(2)
        maxHeap.swap(0, 1)
        expect(maxHeap.peek()).to.equal(1)
        expect(maxHeap.getLeftChild(0)).to.equal(2)
    })
    it("should check if has children", function() {
        const maxHeap = new MaxHeap()
        maxHeap.add(1)
        maxHeap.add(2)
        expect(maxHeap.hasLeftChild(0)).to.equal(true)
        expect(maxHeap.hasRightChild(0)).to.equal(false)
    })
    it("should get parent, left and right nodes", function() {
        const maxHeap = new MaxHeap()
        maxHeap.add(1)
        maxHeap.add(2)
        maxHeap.add(3)
        expect(maxHeap.getParent(2)).to.equal(3)
        expect(maxHeap.getLeftChild(0)).to.equal(1)
        expect(maxHeap.getRightChild(0)).to.eq(2)
    })
    it("should reindex from bottom", function () {
        const maxHeap = new MaxHeap()
        expect(maxHeap._reindexFromBottom()).to.equal(undefined)
    })
    it("should reindex from top", function () {
        const maxHeap = new MaxHeap()
        expect(maxHeap._reindexFromTop()).to.equal(undefined)
    })
})