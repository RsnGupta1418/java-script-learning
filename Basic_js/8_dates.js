let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23, 4, 40, 30)    // month stated from 0 in js.
// console.log(myCreatedDate.toLocaleString())

const takeTime = new Date("04-02-2004")
// console.log(takeTime.toLocaleDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(takeTime.getTime())

// console.log(Math.floor(Date.now()/1000))

const myTime = new Date()
// console.log(myTime.getDate())
// `${myTime.getDate()} the date is`

const myNewTime = myTime.toLocaleString('default',{
    month:'long'
})
console.log(myNewTime)

// var currentTime = new Date().toLocaleTimeString('en-IN', {hour: '2-digit', minute:'2-digit'});
// console.log(currentTime);

// var currentTime = new Date().toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata', hour12: false});
// console.log(currentTime);

var currentTime = new Date().toLocaleTimeString('en-IN', {hour12: false});
console.log(currentTime);
