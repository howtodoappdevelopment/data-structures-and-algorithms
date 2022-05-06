const {LinkedList} = require("../data structures/linked-list");
var expect = require('chai').expect;

describe('Linked list', function() {
    it("should prepend", function() {
        const linkedList = new LinkedList()
        expect(linkedList._head).to.equal(null)
        linkedList.prepend(1)
        expect(linkedList._head.value).to.equal(1)
        linkedList.prepend(2)
        expect(linkedList._head.value).to.equal(2)
        expect(linkedList._head.next.value).to.equal(1)
    })
    it("should append", function () {
        const linkedList = new LinkedList()
        expect(linkedList._head).to.equal(null)
        linkedList.append(1)
        expect(linkedList._head.value).to.equal(1)
        linkedList.append(2)
        expect(linkedList._head.value).to.equal(1)
        expect(linkedList._head.next.value).to.equal(2)
        linkedList.append(3)
        expect(linkedList._head.next.next.value).to.equal(3)
    })
    it("should insert", function() {
        const linkedList = new LinkedList()
        expect(linkedList._head).to.equal(null)
        expect(function() {
            linkedList.insert(1, -1)
        }).to.throw("Out of bounds exception")
        expect(function() {
            linkedList.insert(1, 2)
        }).to.throw("Out of bounds exception")
        linkedList.insert(1, 0)
        expect(linkedList._head.value).to.equal(1)
        linkedList.insert(2, 1)
        expect(linkedList._head.next.value).to.equal(2)
        linkedList.insert(3, 1)
        expect(linkedList._head.next.value).to.equal(3)
        linkedList.insert(4, 2)
        expect(linkedList._head.next.next.value).to.equal(4)
    })
    it("should delete", function() {
        const linkedList = new LinkedList()
        expect(linkedList._head).to.equal(null)
        expect(function() {
            linkedList.delete(1)
        }).to.throw("Value not found")
        linkedList
            .append(1)
            .append(2)
            .append(3)
            .append(4)
        expect(
            linkedList
                .delete(3)
                ._head
                .next
                .next
        ).to.equal(null)
        expect(linkedList._index).to.equal(2)
        expect(function() {
            linkedList
                .delete(5)
        }).to.throw("Value not found")
    })
    it("should find", function() {
        const linkedList = new LinkedList()
        expect(linkedList._head).to.equal(null)
        expect(function() {
            linkedList.find(1)
        }).to.throw("Value not found")
        linkedList
            .append(1)
            .append(2)
            .append(3)
            .append(4)
        expect(
            linkedList
                .find(3)
                .next
                .value
        ).to.equal(4)
        expect(function() {
            linkedList.find(5)
        }).to.throw("Value not found")
    })
    it("should delete tail", function() {
        const linkedList = new LinkedList()
        expect(linkedList._head).to.equal(null)
        expect(function() {
            linkedList.deleteTail()
        }).to.throw("Node is empty, please initiate it")
        linkedList
            .append(1)
            .deleteTail()
        expect(linkedList._head).to.equal(null)
        linkedList
            .append(1)
            .append(2)
            .append(3)
        expect(linkedList.deleteTail()._index).to.equal(2)
        expect(linkedList._head.next.next).to.equal(null)
    })
    it("should delete head", function() {
        const linkedList = new LinkedList()
        expect(linkedList._head).to.equal(null)
        linkedList
            .append(1)
            .deleteHead()
        expect(linkedList._head).to.equal(null)
    })
    it("should convert from array", function() {
        const linkedList = new LinkedList()
        linkedList.fromArray([1, 2, 3])
        expect(linkedList._head.next.next.value).to.equal(3)
    })
    it("should convert to array", function() {
        const linkedList = new LinkedList()
        expect(linkedList.toArray().length).to.equal(0)
        expect(linkedList
            .append(1)
            .append(2)
            .toArray().join(",")).to.equal("1,2")
    })
    it("should reverse", function () {
        const linkedList = new LinkedList()
        expect(linkedList.toArray().length).to.equal(0)
        expect(linkedList
            .append(1)
            .append(2)
            .append(3)
            .append(4)
            .reverse()._head.value).to.equal(4)
    })
})