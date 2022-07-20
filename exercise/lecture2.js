// ES6
// 1 Arrow function
// 1.1
() => "Hello world"
// 1.2
let x = 5
let square = (x) => x * x
// console.log(square(x))
// 1.3
let numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]
let above70 = () => numbers.filter((ele) => ele > 70)
// console.log(above70())
// 1.4
let inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ];

  
  let value = []
    inventory.forEach((el) =>{
    if(el.type === "machine"){
        value.push(el.value)
    }
  })
//   console.log(value)
  let totalMachineValue = value.reduce((pre,cur)=> pre + cur,0)
//   console.log(totalMachineValue);
// 1.5
function Car() {
    this.speed = 0;
    
    setTimeout(() => {
      this.speed += 10;
    }, 100);
  }
  
  var c = new Car();
  setTimeout(() => {
    // console.log(c.speed)
  }, 200);
  
//   2 Class
// 2.1
// class Animal{
//     constructor(name,thirst = 100,belly = []){
//         this.name = name
//         this.thirst = thirst
//         this.belly = belly
//     }
//     drink(){
//         this.thirst -= 10
//     }
//     eat(food){
//         this.belly.push(food)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this.breed = breed
//     }
//     bark()
// }
  
// 3.	Enhanced Object Literals
function getPrice(service) {
    var price = 50.0;
    
    return {
      service: service,
      
      _price: price,
      
      discount: function(rate) {
      if (rate <= 0 || rate > 1) {
        throw new Error('Invalid discount rate');
      }
  
        this._price *= 1 - rate;
      },
      
      // YOUR_GETTER_FUNCTION_HERE
      get price(){
        return this._price
      }
    };
  }
  
  var priceDetail = getPrice('EXPRESS');
  priceDetail.discount(0.2);
  
//   console.log(priceDetail.price); 
  
//   5 Destructuring
let person = {
    name: 'Joe',
    age: 21,
    married: true,
    hobbies: ['football', 'tennis', 'cooking'],
    contact: {
      phone: '0123456789',
      email: 'name@example.com',
    },
  };

let {name , age,married,hobbies} = person
let myName = name
let myAge = age
let hobbie1 = hobbies[0]
let hobbie2 = hobbies[1]
let checkMarried = (obj) => obj.married === true
let getPhoneAndMail = (obj) =>{
    let {name , age,married,hobbies,contact} = obj
    if(contact.email === ''||contact.email === null || contact.email === undefined) contact.email = 'you@mail.com'
    return {
        phone: contact.phone,
        mail: contact.email
    }
}
// console.log(getPhoneAndMail(person))

  
