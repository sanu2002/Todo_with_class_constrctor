// Map,filter,reduce and higwer order function

// Use map when you want to transform an array
// Use filter to select a subset of data from an array, and
// Use reduce when you want to return a single value as a result.







// let a={a:1,b:2}
// let b=Object.entries(a)

// for (const [iterator,value] of b) {
//     console.log(iterator,value)
//     console.log(typeof(value))
//     console.log(typeof(iterator))
    
// }



// const arr=[1,2,3,4,5]

// // const newarray=arr.map((element)=>(element+1))



// // const newarray=arr.map((element)=>{
// //     return element + 1;

// // })

// console.log(newarray)
// console.log(arr)





// let array=(e)=>{
//     let x = 10 ;
//     let y = 6;
//     console.log(x+y)
// }

// a()



// function myArray() {
//     return 'I am Sanu';
// }


// function dj(){
//     return 'I am Salu';


// }

// console.log(dj())
// console.log(myArray())

// (function invoked() {
//     console.log('I am Sanu');
// })();

// Avoiding Global Pollution: Variables declared inside an IIFE do not pollute the global namespace, reducing the risk of naming collisions in large codebases.

// Module Pattern: IIFE is often used in conjunction with the module pattern to create private variables and methods. It allows you to create a module with private and public members.



// const a=()=>{
//     console.log('i am sanu')
// }

// THERE IS 2 WAY OF WRITING WIT CURLY BRASES AND WITHOUT CURLY BRACES 
// const a=()=>(console.log('I AM SANU'))

// console.log(a())


// let a=[1,2,3,4]
// let b=[1,2,3,4]

// console.log(...a,...b)



// let a=[{a:'1'},{b:'2'}]
// let b=[{a:'1'},{b:'2'}]

// console.log(...a,...b)

// let a = [1, 2, 3, 4, 5];

// let sum = a.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 20);

// console.log(sum);
