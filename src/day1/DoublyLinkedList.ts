interface Node<T> {
    value: T;
    prev?: Node<T>
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }

    prepend(item: T): void {
        const node = {value: item} as Node<T>
        this.length++

        if (!this.head) {
            this.head = this.tail = node
            return
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error('Oh no!')
        } else if (idx === 0) {
            this.prepend(item)
        } else if (idx === this.length) {
            this.append(item)
        }

        let curr = this.head
        const node = {value: item} as Node<T>
        this.length++;

        for (let i = 0; i < idx && curr; ++i) {
            curr = curr.next
        }
        curr = curr as Node<T>

        node.next = curr
        node.prev = curr.prev
        curr.prev = node
        curr.prev.next = curr
    }

    append(item: T): void {
        const node = {value: item} as Node<T>
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node
            return
        }

        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }

    remove(item: T): T | undefined {
        let curr = this.head
        for (let i = 0; i < this.length && curr; ++i) {
            if (curr.value === item) {
                break
            }
            curr = curr.next
        }
        if (!curr) {
            return undefined;
        }


    }

    get(idx: number): T | undefined {
        let curr = this.head
        for (let i = 0; i < idx && curr; ++i) {
            curr = curr.next
        }
        return curr?.value
    }

    removeAt(idx: number): T | undefined {
        let curr = this.head
        for (let i = 0; i < idx && curr; ++i) {
            curr = curr.next
        }
        if(!curr) {
            return undefined
        }
        const node = curr as Node<T>
        this.length--

        
        // if (idx < 0 || idx >= this.length) {
        //     return undefined
        // }
        // if (idx === 0) {
        //     const head = this.head
        //     this.head = head!.next
        //     this.head!.prev = undefined
        //     head!.next = undefined
        //
        //     this.length--
        //
        //     return head?.value
        // } else if (idx === this.length - 1) {
        //     const tail = this.tail
        //     this.tail = tail!.prev
        //     this.tail!.next = undefined
        //     tail!.prev = undefined
        //
        //     this.length--
        //     return tail?.value
        // }

        // let curr = this.head
        // for (let i = 0; i < idx && curr; ++i) {
        //     curr = curr.next
        // }
        //
        // const remove = curr
        // remove!.prev!.next = curr?.next
        // remove!.next!.prev = curr?.prev
        //
        // remove!.prev = undefined
        // remove!.next = undefined
        //
        // this.length--
        // return remove?.value

    }
}