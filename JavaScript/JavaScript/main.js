// // Print values in the console :-
// console.log('This is a Log!')
// console.warn('This is a warning!')
// console.error('This is an error!')

// // Data Types :- 
// // 1. Primitive Data Types (PDTs) :-
// // a. number
// variable_one = 100000000.0000000
// console.log(variable_one);
// console.log(typeof(variable_one));
// // 2. string - '' ; " "; ``
// variable_one = `Welcome to JS`
// console.log(variable_one);
// console.log(typeof(variable_one));
// // 3. boolean
// variable_two = false
// console.log(variable_two)
// console.log(typeof(variable_two))
// // 4. null
// variable_three = null;
// console.log(variable_three);
// console.log(typeof(variable_three));        // object -> This is a mistake
// // 5. undefined
// variable_four = undefined
// console.log(variable_four);
// console.log(typeof(variable_four));

// // Conditional Statements :-
// demo = 10
// if(demo >= 0) {
//     console.log(demo + " is a +ve number")
// } else {
//     console.log(demo + " is a -ve number")
// }

// // ES6 Syntax 
// // condition ? TRUE : FALSE
// // Limitiation :- TRUE / FALSE statements one-liner statements
// demo2 = -10
// demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`)

// // let, var, const
// flag = true
// if(flag) {
//     let a
//     var b
//     a = 100
//     b = 200
//     const c = 300;
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(`The value of a inside if-block is ${a}`)
// } else {
//     b = 200
// }



// let , var , const
// flag=true
// if (flag) {
//     a=5
//     b=7
//     c=9
// }
// else{
//     c1=2
//     b1=3
// }
// console.log(a,b,c1)


// loop :-
// for(let i = 0 ; i<5 ; i++ )
// {
//     console.log(i)
// }
// let i=0;
// while(i<5)
// {
// console.log(i)
// i+= 1
// }
  

// ARRAYYYYYYYYYYYYY


// Push - ADD - it add the element in last
// let arr1 = [100,200,300,400]
// // array Spread Operator
// let arr2 = arr1
// arr1.push(-10)
// arr2.push(100)
// console.log(arr2)

// pop - it pop the last element of array
// arr1.pop()
// console.log(arr1)

//  DummyArray 
// let dumyArray = [10,"String",null,true,undefined,Array[10]]
// console.log(dumyArray)

// combined array element --> concat means add and combine the two array in one array
// let num1=[10,20,30,40]
// let num2=[100,200,300,400]
// let combinedArray = num2.concat(num1)
// console.log(combinedArray)



// Matrix- 2d Array in Js

// let twoDArray = [ [10,20,30],[40,50,60],[70,80,90]]
// console.log(twoDArray)
// console.log(twoDArray[1][1])

// []<---Array data type , {} <--- obj data type
// 2 . Js OBJECT _ {  } :-
// let myObj={
//     name: 'user One',
//     email : 'piyush07@gmail.com',
//     password : "X1Regardo",
//     isEmployed : 'True',
//     hobbies : ["Gaming" , 'video editing',"sleeping" ],
//     address :{
//         city: 'AMB-Mango City',
//         district : 'UNA',
//         State : 'Punjab-Himachal',
//         Pincode : [177213,177214]

//     }

// };

// console.log((myObj))
// console.log(`Hii ,this is user ${myObj.name}, my email is ${myObj.email}, My password is ${myObj.password}`)
// console.log(myObj.hobbies[1])
// console.log(myObj.address.city)   // .dotnotaion
// console.log(myObj.address.Pincode[0]);   

// 

let myObj = new Object()

   myObj.name  = 'user One'
   myObj.email  ='piyush07@gmail.com'
   myObj.password  = "X1Regardo"
   myObj.isEmployed  = 'True'
   myObj.hobbies  = ["Gaming" , 'video editing',"sleeping" ]
   myObj.address = {
        city : 'AMB-Mango City',
        district : 'UNA',
        State  : 'Punjab-Himachal',
        Pincode  : [177213,177214]

    }


    // 3. Array of Objects :- [ {}, {}, {} ]
const users = [
    {
        name: 'User One', 
        email: 'userone@service.com',
        password: 'examplepwd',
        isEmployed: true,
        hobbies: ['Music', 'Reading Books', 'Travelling'],
        address: {
            street: 'Street - 1',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    },              // users[0].password ; users[0].address.pincodes[0]
    {
        name: 'User Two', 
        email: 'usertwo@service.com',
        password: 'examplepwd2',
        isEmployed: false,
        hobbies: ['Music', 'Travelling'],
        address: {
            street: 'Street - 2',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    }, 
    {
        name: 'User Three', 
        email: 'userthree@service.com',
        password: 'examplepwd3',
        isEmployed: true,
        hobbies: ['Reading Books', 'Travelling'],
        address: {
            street: 'Street - 3',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    }
]
console.log(users)

// 4. JSON (JavaScript Object Notation)
// JS -> interface -> JSON -> 2 functions.

// 1. stringify() -> AoO to JSON
const myJSONResponse = JSON.stringify(users);
console.log(myJSONResponse)

// 2. parse() -> JSON to AoO
const convertAoO = JSON.parse(myJSONResponse)
console.log(convertAoO)


