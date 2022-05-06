const Queue = function() {
    this._queue = []

    this.peek = () => this._queue.length ? this._queue.slice(-1)[0] : undefined
    this.enqueue = (value) => this._queue.unshift(value)
    this.dequeue = () => this._queue.splice(-1)[0]
}

exports.Queue = Queue;