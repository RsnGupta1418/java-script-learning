/*
Primitive type 

7 types - String, Undefined, Number, Boolean, null, BigInt, Symbol
*/

// const id= Symbol("123")
// const newId = Symbol("234")
// const newId1 = Symbol("234")

// console.log(id)
// console.log(newId)
// console.log(newId1)

// console.log(id === newId)

/*
nonPrimitive type (Reference)

3- Array Object Function
*/

// const heros = ["sukla" , 'tripathi', 'bhaiya' , 'kalin']
// console.log(heros)

// let myobj ={
//     age: 48,
//     personName: "hitesh",
// }



//-------------------------------------------------------------------------------------------


//  Stack (primitie data type)    Heap (non-Primitive data type)

let myName = "rahul"

let yourName = myName
yourName = 'ravi'

console.log(myName)
console.log(yourName)

console.log("------------------------------------------")

let myObj = {
    email: 'raushan1418@gmail.com',
    age: 4848
}

let myObj1 = myObj

myObj1.email = 'rahul23232@gmail.com'

console.log(myObj)
console.log(myObj1)
