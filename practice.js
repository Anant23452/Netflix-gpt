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
    //retulk ytfy t
};
maxSubArray(arr)
// let built map
let map1 = new Map();
let map2= {};
//ioijhgjkhgumlkm lghkjhrregflj;jiklmdg5r4



//detect cycle in undireted connected graph
function pahsecycle(edges){
    let graph = {};
    for(let [x,y] of edges){
        if(!graph[x])graph[x]=[];
        if(!graph[y])graph[y]=[];
        graph[x].push(y);
        graph[y].push(x);
        let visited = new Set();
        let dfs = (curr,parent)=>{
           visted.add(curr);
           for(let neighbor of graph[curr]){
            if(!visited.has(neighbor)){
                dfs(neighbor,curr);
            }
            else if(neighbor!==parent){
                return true;
            }
            return false;
           }    
        }
        return dfs(0,-1);
    }
}
console.log(pahsecycle([[0,1],[1,2],[2,0]]))
