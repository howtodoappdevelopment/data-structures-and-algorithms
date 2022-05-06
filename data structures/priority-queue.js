const PriorityQueue = function() {
    this._queue = {}
    this._priorities = []

    this.peek = () => this.maxPriority() ? this._queue[this.maxPriority()][0] : undefined
    this.enqueue = (item, priority = 1) => {
        !!this._queue[priority]
            ? this._queue[priority].push(item)
            : this._queue[priority] = [item]

        this._priorities = [...new Set([...this._priorities, priority])].sort().reverse()
        console.log(this._queue, this._priorities)
    }
    this.dequeue = () => {
        if (this.maxPriority() === undefined) {
            return;
        }

        const item = this._queue[this.maxPriority()].shift()
        this._clearEmpty(this.maxPriority());

        return item
    }
    this.maxPriority = () => this._priorities[0]
    this.changePriority = (item, priority) => {
        const currentPriority = this._priorities
            .find(priorityKey => this._queue[priorityKey].includes(item))
        if (currentPriority !== undefined) {
            this._queue[currentPriority].splice(this._queue[currentPriority].indexOf(item), 1)
            this._clearEmpty(currentPriority)
        }

        this.enqueue(item, priority)
    }

    this._clearEmpty = (priority) => {
        if (!this._queue[priority].length) {
            this._queue[priority] = undefined;
            this._priorities.splice(this._priorities.indexOf(priority), 1)
        }
    }
}

exports.PriorityQueue = PriorityQueue