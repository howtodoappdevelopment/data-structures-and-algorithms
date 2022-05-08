const Node = function(
    parent,
    left,
    right,
    value
) {
    this.parent = parent
    this.left = left
    this.right = right
    this.value = value
}

const Tree = function() {
    this.head = null

    this.insert = (value) => !this.head
        ? this.head = this._toNode(value)
        : this._insertNode(this.head, value)
    this.has = (value) => this._has(this.head, value)
    this.delete = (value) => {
        if (this.head.value === value) {
            this.head = undefined
            return;
        }

        const parent = this.parentOf(value)
        parent.left.value === value
            ? parent.left = undefined
            : parent.right = undefined
    }
    this.parentOf = (value) => (this.find(value) || {}).parent
    this.find = (value) => this._find(this.head, value)
    this.findMin = () => {
        if (!this.head) {
            return;
        }

        let lastLeft = this.head
        while (lastLeft.left) {
            lastLeft = lastLeft.left
        }

        return lastLeft.value;
    }
    this.findMax = () => {
        if (!this.head) {
            return;
        }

        let lastRight = this.head;
        while (lastRight.right) {
            lastRight = lastRight.right
        }

        return lastRight.value
    }

    this._insertNode = (current, value) => {
        const node = value < current.value ? 'left' : 'right'
        !current[node]
            ? current[node] = this._toNode(value, current)
            : this._insertNode(current[node], value)
    }
    this._toNode = (value, parent = null) => new Node(parent, undefined, undefined, value)
    this._has = (current, value) => {
        if (!current) {
            return false;
        }

        if (current.value === value) {
            return true;
        }

        if (current.value < value) {
            return this._has(current.left, value);
        }

        return this._has(current.right, value);
    }
    this._find = (current, value) => {
        if (!current) {
            return;
        }

        if (current.value === value) {
            return current;
        }

        return current.value > value
            ? this._find(current.left, value)
            : this._find(current.right, value);
    }
}

exports.Tree = Tree