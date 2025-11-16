 let arr= [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function (arr) {
    let sum = 0;
    let max = 0;
    if (arr.length == 1) return arr[0];
    for (let i = 0; i < arr.length; i++) {
       for(let j=0;i<arr.length;j++){
         sum = arr[j] + sum;
        if (max < sum) {
            max = sum;
        }
       }

    }
    return max; 
    //retulk
};
maxSubArray(arr)
//ioijhgjkhgu