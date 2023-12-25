// const todolist = {
//     todos: [
//       { id: 1, content: "study english", completed: false },
//     ],
  
//     addTodo: function (todo) {
//       this.todos.push(todo);
//     },
  
//     deleteTodo: function (index) {
//       this.todos.splice(index, 1);
//     },
//   };


// // todolist.todos.map((element)=>{

// //     for (const key in element) {
// //         if (element.hasOwnProperty(key)){
// //             console.log(key,':' ,element[key]);


// //         }


        
// //         }
    
  
// // })


  





// //   todolist.addTodo({ id: 2, content: "like true", completed: true });
// //   console.log(todolist.todos);
  
// //   todolist.deleteTodo(0); // Delete the first todo
// //   console.log(todolist.todos);
  

// // function todolist(){
// //     this.todos=[]
// // }

// // const todolist= new todolist()


// // todolist.prototype.addtodo=function(value){
// //     this.todos.push(value)
// // }

// // todolist.prototype.delete=function(index){
// //     this.todos.splice(index,1)
// // }



// const sum=Function('a','b','return a+b')
// console.log(sum(2,3))  
// console.log(sum(44,35))  



// call 

// const person = {
//     name: 'John',
//     sayHello: function (greeting) {
//       console.log(`${greeting}, ${this.name}!`);
//     },
//   };
  
// const anotherPerson = {
//     name: 'Jane',
//   };
  

  
// person.prototyoe.greet=function (){
//     this.sayHello("Hey");
// }

// person.sayHello(anotherPerson, 'Hi');






// function  greet(messages){

//     console.log(`${messages},${this.name} `)

// }

// const person={'name':'john'}

// console.log('sanu')

// const person1=greet.bind(person,'hello')
// person1()

// // greet.call(person,'hioi')


// The use of call and bind is still relevant and valuable in certain scenarios, especially when dealing with functions and contexts dynamically. Let's clarify the differences and use cases for each:

// 1. Using bind:
// Purpose: Creates a new function with a specified this value and optionally initial arguments.
// Use Case:
// Useful when you want to create a new function with a specific context that can be passed around and invoked later.
// Commonly used with event listeners in React to bind methods to component instances.
// javascript
// Copy code
// const boundFunction = originalFunction.bind(thisArg, arg1, arg2, ...);
// 2. Using call:
// Purpose: Invokes a function with a specified this value and arguments provided individually.
// Use Case:
// Useful when you want to immediately invoke a function with a specific context and arguments.
// Commonly used for borrowing methods from other objects or invoking functions with a different context.
// javascript
// Copy code
// originalFunction.call(thisArg, arg1, arg2, ...);
// 3. Using Prototypes:
// Purpose: Sharing methods across multiple instances of an object.
// Use Case:
// Ideal when you have many instances of an object and want to share methods to save memory.
// A clean and efficient way to organize and reuse methods.
// javascript
// Copy code
// function Constructor() {}
// Constructor.prototype.methodName = function () {};





// by suing call you are invoking the function and by using bind you are creating a 
// new function and this will beenfical we you taking some ReferenceE and 
// in case of addEventListener you some how need the bind metyhod wen you are 
// using thre particuar function Constructor


// this context is diffrent compared to browedret envirenemnt

// class React{

//     constructor(name,url){
//         this.name='Sanu',
//         this.url='https://facebook.com'


//     }

//     addtodo(params) {
//         console.log('Add Todo Called');
//         console.log('Add Todo Called',this.url);

        
//     }



// }

// const data1=new React()

// data1.addtodo('sanu')
// console.log(data1.name)
// console.log(data1.url)


// console.log(`data1 is ${data1.name}`);
// console.log(`data1 is ${data1.url}`);

 

// const student={

//     'firstname':'sanu',

//     set changename(name){
//         this.firstname=name
//     } 

// }


// student.changename='salu'
// console.log(student.firstname)



// // also we can use Object.defineProperty()

// Object.defineProperty(student,'getname',{

//     set:function(value){
//         this.firstname=value
//     }

// })

// obj menas ={}
// prop=functionname
// descriptor=geter and setter

// Object.defineProperty(obj, prop, descriptor)



// const array={
//     log:['a','b','c'],

//     get latest(){
//         return this.log[this.log.length-1]
//     }
// }


// console.log(array.latest)



// function sanu(name, age) {
//     let whythis = {};

//     whythis.name = name;
//     whythis.age = age;

//     return whythis; // Adding this return statement
// }

// const obj1 = sanu('salu', 19);
// const obj2 = sanu('sanu', 21);

// console.log(obj1); // { name: 'salu', age: 19 }
// console.log(obj2); // { name: 'sanu', age: 21 }


// class Sanu {
//     constructor(name, age) {
//         this._name = name; // Using an underscore to differentiate the property
//         this.age = age;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }
// }

// const obj1 = new Sanu('sanu', 21);
// const obj2 = new Sanu('salu', 19);

// console.log(obj1.name); // Outputs: sanu
// console.log(obj2.name); // Outputs: salu

// obj1.name = 'updatedSanu';
// console.log(obj1.name); // Outputs: updatedSanu



// class React {
//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }
// }

// const obj1 = new React('John', 25);

// console.log(obj1.name); 

// obj1.name = 'Jane';
// console.log(obj1.name); 

