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

    extractMin(){
        if(this.heap.length<1)return null;
        let min = this.heap[0];
        let lastIndex = this.heap.length-1;
        //swap
        [this.heap[0],this.heap[lastIndex]]=[this.heap[lastIndex],this.heap[0]];
        this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

   heapifyDown(i){
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    let smallest = i;
    let n = this.heap.length;
    if(left<n && left<this.heap[smallest]){
        smallest = left;
    }
    if(right<n && right<this.heap[smallest]){
        smallest = right;
    }
    if(smallest != i){
        //swap
        [this.heap[smallest],this.heap[i]]=[this.heap[i],this.heap[smallest]];
        this.heapifyDown(smallest);
    }
   } 

   peek(){
    if(!this.heap.length)return null;
    return this.heap[0]
   }
}

let Heap = new MinHeap();
console.log(Heap);
Heap.intsert(3);
console.log(Heap);
Heap.extractMin();
console.log(Heap);
console.log(Heap.peek());