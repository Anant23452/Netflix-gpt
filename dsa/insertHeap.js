//making of heap
class MinHeap{
    constructor(){
        // this.heap =[];
        this.heap = [4,5,8,9,10,15,20];
    }
    getLeftChildIndex(i){
        return 2*i+1;
    }
    getRightChildIndex(i){
        return 2*i+2;
    }
    getParentIndex(i){
        return Math.floor((i-1)/2);
    }

    intsert(val){
        this.heap.push(val);
        let lastIndex = this.heap.length-1;
        this.heapifyUp(lastIndex);
    }
    heapifyUp(i){
        while(i>0){
            let ParentIndex = this.getParentIndex(i);
            if(this.heap[i]<this.heap[ParentIndex]){
                [this.heap[i],this.heap[ParentIndex]]=[this.heap[ParentIndex],this.heap[i]];
                i= ParentIndex;
            }
            else{
                break;
            }
        }
    }
}

let Heap = new MinHeap();
console.log(Heap.heap);
Heap.intsert(3);
console.log(Heap);