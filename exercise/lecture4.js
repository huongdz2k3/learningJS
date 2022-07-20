// 4 
// 4.1
let arr = [NaN, 0, 16, false, -21, '',undefined, 45, null]
var filtered = arr.filter(function(x) {
    if(!isNaN(x) && x !== false && x !== ''&& x !== undefined && x !== null) return true
});
// console.log(filtered)
// 4.2
function remove_array_element(arr,num){
    return arr.filter((el) => el !== num)
}

// console.log(remove_array_element([2, 5, 9, 6], 5));
// 4.3
const players = [
    {
      id: 1,
      scores: [7, 8, 3, 4]
    },
    {
      id: 2,
      scores: [5, 10, 9, 6]
    },
    {
      id: 3,
      scores: [9, 7, 4, 8]
    }
  ]
  
  const numOfScoers = players.map((el) => el.scores)
  const sum = numOfScoers.reduce((pre,cur) => {
    let sumTmp = pre
    cur.forEach((el) => sumTmp+= el)
    return sumTmp
  },0)
//   console.log(sum)
// 4.5
let arr1 = [5, 10, 15, 20, 25, 30]
for(let i = 0 ; i < arr1.length;i++){
    arr1[i] += 10    
}
console.log(arr1)