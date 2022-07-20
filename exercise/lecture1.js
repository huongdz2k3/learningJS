// ex 1
function findArea(a,b,c) {
    let p = (a + b + c) /2
    return Math.sqrt(p * (p - a) * (p - b) * ( p -c))
}
// console.log(findArea(5,6,7))
// ex 2 
function reverse(num){
    return num.toString().split("").reverse().join("")
}
// ex 3
let max = Math.max(-5,-2,-6,0,-1)
// alert(max)
// ex 4 
let arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
arr.sort((a,b) => a > b ? 1 : -1)
// console.log(arr)
// ex 5 
function power_of_2(num){
    for(let i = 2 ; i <= Math.sqrt(num);i++){
        if(num % 2 ==0){
            while(num % 2 ==0){
                num/=2
            }
        }
        else return false
    }
    return true
}
// console.log(power_of_2(256)) true
// ex6
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12
};

let listProp = Object.keys(student)
// console.log(listProp)
// ex7
let arr1 = [1,2,4,3,2]
function getRandomIntRange(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(arr1[getRandomIntRange(0,arr1.length -1)])
// ex8
function string_to_array (str){
    return str.split(' ')
}
// console.log(string_to_array('Robin Singh'))
// ex9
function is_weekend(date1){
    let date = new Date(date1)
    if(date.getDay() == 0 || date.getDay() == 6){
        return true
    }
    return false
}
// console.log(is_weekend('Nov 16, 2014'))
// ex10
let array = [1,2,3,4,5,6]
let sum = 0
array.forEach(el => sum+=el)
// console.log(sum)