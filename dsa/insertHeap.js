//making of heap
class MinHeap{
    constructor(){
        this.heap =[];
        //this.heap = [4,5,8,9,10,15,20];
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
}