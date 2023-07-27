type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>
        this.length++;
        if(!this.tail) {
            this.tail = this.head = node;
        }
        this.tail.next = node;
        this.tail = node;
    }
    
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        //Free value
        head.next = undefined;
        if(this.length === 0){
            this.tail = undefined;
        } 
        return  head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
