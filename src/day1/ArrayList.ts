export default class ArrayList<T> {
    public length: number;
    private arr: T[];
    private capacity: number

    constructor(capacity: number) {
        this.length = 0
        this.arr = new Array<T>()
        this.capacity = capacity
    }

    private upscale(): void {
        this.capacity *= 2
    }

    prepend(item: T): void {
        if (this.length === this.capacity) {
            this.upscale()
        }
        this.arr.unshift(item)
        this.length++
    }

    insertAt(item: T, idx: number): void {
        if (idx >= this.length) {
            throw Error('Cannot insert there!')
        }
        if (this.length === this.capacity) {
            this.upscale()
        }
        this.length++
        for (let i = this.length - 1; i > idx; i--) {
            this.arr[i] = this.arr[i - 1]
        }
        this.arr[idx] = item
    }

    append(item: T): void {
        if (this.length === this.capacity) {
            this.upscale()
        }
        this.arr.push(item)
        this.length++
    }

    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] === item) {
                const res = this.arr[i]
                for (let j = i; j < this.length - 1; j++) {
                    this.arr[j] = this.arr[j + 1]
                }
                this.arr.pop()
                this.length--
                return res
            }
        }
        return undefined
    }

    get(idx: number): T | undefined {
        if (idx >= this.length) {
            return undefined
        }
        return this.arr[idx]
    }

    removeAt(idx: number): T | undefined {
        const candidate = this.get(idx)
        if (candidate) {
            return this.remove(candidate)
        }
        return undefined
    }
}