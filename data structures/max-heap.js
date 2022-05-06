const MaxHeap = function() {
    this._heap = []

    this.peek = () => this._heap[0]
    this.add = (value) => {
        this._heap.push(value)
        this._reindexFromBottom()
    }
    this.remove = (value) => {
        const valueIndex = this._heap.indexOf(value)
        if (valueIndex > -1) {
            this._heap.splice(valueIndex, 1)
        }
        this._reindexFromTop()
    }
    this.swap = (sourceIndex, destinationIndex) => {
        const tmp = this._heap[sourceIndex]
        this._heap[sourceIndex] = this._heap[destinationIndex]
        this._heap[destinationIndex] = tmp
    }
    this.hasLeftChild = (index) => this.getLeftChild(index) !== undefined
    this.hasRightChild = (index) => this.getRightChild(index) !== undefined

    this.getParent = (index) => this._heap[this.parentIndexOf(index)]
    this.getLeftChild = (index) => this._heap[index * 2 + 1]
    this.getRightChild = (index) => this._heap[index * 2 + 2]

    this.parentIndexOf = (index) => Math.floor((index - 1) / 2)

    this._reindexFromTop = () => {
        if (this._heap.length === 0) {
            return;
        }

        let index = 0
        while (
            this._heap[index] < (this.getLeftChild(index) || 0)
            || this._heap[index] < (this.getRightChild(index) || 0)
            ) {
            if (!this.hasLeftChild(index)) {
                break;
            }

            if (this.getLeftChild(index) < (this.getRightChild(index) || 0)) {
                this.swap(index, this.getRightChild(index))
                continue;
            }

            this.swap(index, this.getLeftChild(index))
        }
    }
    this._reindexFromBottom = () => {
        if (this._heap.length === 0 || this._heap.length === 1) {
            return;
        }

        const heapSize = this._heap.length
        let index = heapSize - 1
        while (this.getParent(index) < this._heap[index]) {
            this.swap(this.parentIndexOf(index), index)
            index = this.parentIndexOf(index)
        }
    }
}

exports.MaxHeap = MaxHeap
