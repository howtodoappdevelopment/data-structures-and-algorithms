const {Graph, Vertex} = require("../data structures/graph");
const {expect} = require("chai");
describe("Graph", function() {
    it("should add vertex and find it", function() {
        const graph = new Graph();
        [1, 2, 3, 4].forEach(n => graph.addVertex(n))
        expect(graph.findVertexBy(3))
    })
    it("should get neighbors", function() {
        const graph = new Graph();
        expect(graph.getNeighbors(new Vertex(1)).length).to.equal(0);
        [1, 2, 3, 4].forEach(n => graph.addVertex(new Vertex(n)));
        graph.addEdge(new Vertex(1), new Vertex(2))
        graph.addEdge(new Vertex(1), new Vertex(3))
        graph.addEdge(new Vertex(1), new Vertex(4))
        expect(graph.getNeighbors(new Vertex(1)).length).to.equal(3)
        graph.addEdge(new Vertex(1), new Vertex(4))
        expect(graph.getNeighbors(new Vertex(1)).length).to.equal(3)
    })
    it("should delete edge", function() {
        const graph = new Graph();
        [1, 2, 3, 4].forEach(n => graph.addVertex(new Vertex(n)));
        graph.addEdge(new Vertex(1), new Vertex(2))
        graph.addEdge(new Vertex(1), new Vertex(3))
        graph.addEdge(new Vertex(1), new Vertex(4))
        graph.deleteEdge(new Vertex(1), new Vertex(4))
        expect(graph.getNeighbors(new Vertex(1)).length).to.equal(2)
        graph.deleteEdge(new Vertex(1), new Vertex(4))
        expect(graph.getNeighbors(new Vertex(1)).length).to.equal(2)
    })
})