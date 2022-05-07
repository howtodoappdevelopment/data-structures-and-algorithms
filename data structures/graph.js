const Edge = function(vertex1, vertex2) {
    this._vertexes = [vertex1, vertex2]

    this.contains = (vertex) => this._vertexes
        .map(vertex => vertex._value)
        .find(value => value === vertex._value)
    this.getOppositeVertexTo = (vertex) => {
        if (!this.contains(vertex)) {
            return;
        }

        if (this._vertexes[0]._value !== vertex._value) {
            return this._vertexes[0];
        }

        if (this._vertexes[1]._value !== vertex._value) {
            return this._vertexes[1]
        }
    }
}

const Vertex = function(value) {
    this._value = value;
}

const Graph = function () {
    this._vertexes = [];
    this._edges = [];

    this.addVertex = (vertex) => {
        const existingVertex = this.findVertexBy(vertex._value)
        if (existingVertex) {
            return;
        }

        this._vertexes.push(vertex)
    }
    this.findVertexBy = (value) => this._vertexes
        .find(vertex => vertex._value === value)
    this.getNeighbors = (vertex) => this._edges
        .map(edge => edge.getOppositeVertexTo(vertex))
        .filter(neighbor => neighbor !== undefined)
    this.addEdge = (vertex1, vertex2) => {
        const graphContainsVertexes = this.findVertexBy(vertex1._value)
            && this.findVertexBy(vertex2._value)
        if (this.findEdge(vertex1, vertex2) || !graphContainsVertexes) {
            return;
        }

        this._edges.push(new Edge(vertex1, vertex2))
    }
    this.deleteEdge = (vertex1, vertex2) => {
        const edge = this.findEdge(vertex1, vertex2)
        if (!edge) {
            return;
        }

        const index = this._edges.indexOf(edge)
        this._edges.splice(index, 1)
    }
    this.findEdge = (vertex1, vertex2) => this._edges
        .find(edge => edge.getOppositeVertexTo(vertex1)._value === vertex2._value)
}

exports.Graph = Graph
exports.Vertex = Vertex