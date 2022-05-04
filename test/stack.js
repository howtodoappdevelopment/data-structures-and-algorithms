const {Stack} = require("../data structures/stack");
const {expect} = require("chai");
describe("Stack", function() {
    it("should push item", function() {
        const stack = new Stack()
        stack.push(1)
        expect(stack.peek()).to.equal(1)
    })
    it("should pop item", function() {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)
        expect(stack.pop()).to.equal(2)
        expect(stack.peek()).to.equal(1)
        expect(stack.pop()).to.equal(1)
        expect(stack.peek()).to.equal(null)
        expect(function() {
            stack.pop()
        }).to.throw("Out of bounds error")
    })
    it("should tell if is empty", function() {
        const stack = new Stack()
        expect(stack.isEmpty()).to.equal(true)
    })
})