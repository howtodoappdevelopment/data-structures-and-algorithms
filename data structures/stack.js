const Stack = function() {
    this._head = null;
    this._stack = [];

    this.peek = () => this._head
    this.isEmpty = () => !this._head
    this.push = (value) => {
        this._head = value;
        this._stack.push(value)
    }
    this.pop = () => {
        if (!this._head) {
            throw Error("Out of bounds error")
        }

        const lastItem = this._stack.pop()

        if (this._stack.length === 0) {
            this._head = null
        }
        else {
            this._head = this._stack.slice(-1)[0]
        }
        return lastItem
    }
    this.toArray = () => this._stack
    this.toString = () => this._stack.join(", ")
}

exports.Stack = Stack