function fact(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(5));


//two pointer approach
//floyds cycle detection algorithm
function hasCycle(head) {
    if (!head) return false;
    let slow = head;
    let fast =head.next;
    while(fast!=slow){
        if(fast==null || fast.next ==null){
            return false;
        }
        slow = slow.next;
        fast =fast.next.next;
    }
    return true;
    //this code of floyds cycle detection algorithm is used to detect cycle in linked list

    //why i am not doing noting 
    //wy i am not doing noting
    //todya nothing do 

    //today nothing we arge doing 
    

    }