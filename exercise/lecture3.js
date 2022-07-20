// 1.	Default + rest + spread
// 1.1
let str = "hello"
let arr = str.split('')
// console.log(arr)
// 1.2
var array1 = [1, 2, 3];
var randomValue = 'something';
var array2 = [4, 5, 6];
let mergeArray = [...array1,randomValue,...array2]
// console.log(mergeArray)
// 1.3
function sum(...numbers){
    let ans = 0;
    numbers.forEach((el) => ans+=el)
    return ans
}
// console.log(sum(1,2,3,4,5))
// 1.4
function sum(...numbers){
    let ans = 0;
    numbers.forEach((el) => ans+=el)
    return ans - numbers[0]
}
// console.log(sum(1,2,3))
// 1.5
function sum(...numbers){
    let ans = 0;
    numbers.forEach((el) => ans+=el)
    return ans - numbers[numbers.length - 1]
}
// console.log(sum(1,2,3))
// 1.6
function sum(...numbers){
    let ans = 0;
    numbers.forEach((el,index) => index < 3 ? ans+=el : ans )
    return ans
}
// console.log(sum(4,2,3,4,5))

// 3.	Iterators + for .. of
// 3.1 
let getCountdownIterator = {
    from: 9,
    to: 1
  };
// call to for .. of initially calls
  getCountdownIterator[Symbol.iterator] = function(){
    //... it returns the iterator object:
    // 2.Onward, for..of works only with the iterator object below,asking it for
    // next values 
    return {
        current: this.from,
        last: this.to,
    //3.next() is called on each iteration by the for..of loop
    next(){
        //4.it should return the value as an obj {done:..,value:..}
        if(this.current >= this.last){
            return {done : false ,value: this.current--}
        }else{
            return {done:true}
        }
    }
    }
  }
//  console.log([...getCountdownIterator]) // if range is iterable for will work
// 3.2 
// call to for .. of initially calls
let fibo = []
fibo[0] = 0
fibo[1] = 1
let getFibo = {
    from: 5,
    to: 100,
    cnt: 2
  };
// call to for .. of initially calls
  getFibo[Symbol.iterator] = function(){
    //... it returns the iterator object:
    // 2.Onward, for..of works only with the iterator object below,asking it for
    // next values 
    return {
        current: this.from,
        last: this.to,
        cnt: this.cnt,
    //3.next() is called on each iteration by the for..of loop
    next(){
        //4.it should return the value as an obj {done:..,value:..}
        if(this.current > this.last) return {done:true}
        else if(this.current <= this.last){
            fibo[this.cnt] = fibo[this.cnt -1 ] + fibo[this.cnt -2]
            this.current = fibo[this.cnt]
            this.cnt++
            return {done : false ,value: this.current}
        }
    }
    }
  }
//   console.log([...getFibo])


// 4. Generators
// 4.1
let getCountdownIteratorByGenerator = {
    from: 9,
    to: 1,
    *[Symbol.iterator](){
        for(let value = this. from;value >= this.to;value--){
            yield value
        }
    }
}
// console.log([...getCountdownIteratorByGenerator])
// 4.2
let fibo1 = []
fibo1[0] = 0
fibo1[1] = 1

let fiboGen = {
    from: 2,
    to: 20,
    cnt: 2,
    *[Symbol.iterator](){
        for(let i = this.from; i <= this.to ;i++){
            fibo1[this.cnt] = fibo1[this.cnt - 1] + fibo1[this.cnt -2]
            let value = fibo1[this.cnt]
            this.cnt++
            yield value
        }
    }
}
// console.log([...fiboGen])
//4.3
const ans = function *filter( fiboGen) {
    let arr = [...fiboGen]
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] % 2 ==0){
            yield arr[i]
        }
    }
}
// console.log([...ans(fiboGen)])




