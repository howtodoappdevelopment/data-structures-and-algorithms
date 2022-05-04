const LinkedList = function () {
    this._index = 0;
    this._head = null;

    this.prepend = (value) => {
        this._index++
        const next = this._head ? JSON.parse(JSON.stringify(this._head)) : null
        this._head = {value, next}
        return this
    }
    this.append = (value) => {
        this._index++;

        const newNode = {value, next: null}
        if (!this._head) {
            this._head = newNode
            return this;
        }

        let lastNode = this._head
        while (lastNode.next !== null) {
            lastNode = lastNode.next
        }
        lastNode.next = newNode
        return this;
    }
    this.insert = (value, index) => {
        if (this._index < index || index < 0) {
            throw Error("Out of bounds exception");
        }

        if (index === 0) {
            this.prepend(value)
            return this
        }

        let preIndexNode = this._head;
        while (index !== 1) {
            preIndexNode = preIndexNode.next
            index--;
        }

        this._index++;
        preIndexNode.next = {value, next: preIndexNode.next ? preIndexNode.next.next : null }
        return this
    }
    this.delete = (value) => {
        if (!this._head) {
            throw Error("Value not found")
        }

        let newIndex = 1;
        let node = this._head
        while(node.next) {
            if (node.next.value === value) {
                this._index = newIndex
                node.next = null
                return this
            }

            newIndex++;
            node = node.next
        }

        throw Error("Value not found")
    }
    this.find = (value) => {
        if (!this._head) {
            throw Error("Value not found")
        }

        let node = this._head
        while(node.next) {
            if (node.next.value === value) {
                return node.next;
            }

            node = node.next
        }

        throw Error("Value not found")
    }
    this.deleteTail = () => {
        if (!this._head) {
            throw Error("Node is empty, please initiate it")
        }

        if (!this._head.next) {
            return this.deleteHead()
        }

        let tailNode = this._head
        while (tailNode.next && tailNode.next.next) {
            tailNode = tailNode.next
        }
        tailNode.next = null;
        this._index--;
        return this;
    }
    this.deleteHead = () => {
        this._index = 0;
        this._head = null;
    }
    this.fromArray = (values) => {
        this._head = null
        for (let value of values) {
            this.append(value)
        }
        return this
    }
    this.toArray = () => {
        if (!this._head) {
            return [];
        }

        let array = []
        let node = this._head;
        while(node.next) {
            array.push(node.value)
            node = node.next
        }
        array.push(node.value)

        return array
    }
    this.reverse = () => {
        const array = this.toArray().reverse()
        this.fromArray(array)

        return this;
    }
}
exports.LinkedList = LinkedList;