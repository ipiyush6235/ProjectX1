// DOM -> Document  Object Model

// console.dir(document)
// console.log(document.URL)
// console.log(document.all)

// const myHeading = document.all[4];
// document.all[4].textContent = "Welcome to DOM"
// console.log(myHeading)


 // DOM -> Document  Object Model
// console.log(document.all)
// const myLi = document.all[19]
// console.log(myLi)

// IDENTIFIER METHODS :-
// 1. getElementById()
// const myHeader = document.getElementById('header-title')
// console.log(myHeader)

// // 2. getElementsByClassName
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// // 3. getElementsByTagName
// const myForms = document.getElementsByTagName('form')
// console.log(myForms)

// 4. querySelector(id/className/tagName)
// const myHeader = document.querySelector('form')
// console.log(myHeader)

// console.log( document.querySelector('.list-group-item') )

// 5. querySelectorAll
// console.log( document.querySelectorAll('.list-group-item') )


// DOM MANIPULATION METHODS :-
// const heading = document.querySelector('#header-title')

// 1. textContent -> text in b/w of the <> and </> of the elt
// heading.textContent = 'Welcome to DOM';

// 2. innerHTML -> 
// document.querySelector('#my-div').innerHTML = "<p>Hello...</p>"

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element

// CSS with JavaScript (.style)
// const secondHeading = document.querySelector('#second-heading')

// JS Function - setTimeOut()
// Syntax -> setTimeOut( callfn, timeoutDelay (in ms) )

// setTimeout( () => {
//     secondHeading.style.backgroundColor = 'purple'
//     secondHeading.style.color = 'white'
//     secondHeading.style.textAlign = 'center'
//     secondHeading.style.padding = '10px'
// }, 3000)

// setTimeout(() => {
//     heading.innerHTML = "<h2>Welocme to DOM</h2>"
// }, 5000)

// EVENTS IN DOM :-



//  const myBtn = document.getElementById("btn")

//  myBtn.addEventListener( "click", ()  => {
    // console.log( 'My buttun is clicked')
// }


//  submit button -> button is clicked

// EVENTS IN DOM

// element.addEventListner( eventName, () => {} )
// element.addEventListner( eventName, fuctionName )

// const myBtn = document.getElementById('btn')
// myBtn.addEventListener( 'dblclick', () => {
//     console.log('My Button was Clicked!')
// } )

// document.getElementById('item-one').addEventListener('click', () => {
//     console.log('Item -1 was clicked!')
// })

// #SUBMIT BUTTON 

// document.getElementById('submitBtn').addEventListener('click', () => {
//     console.log('Submit Button was clicked!')
// })

// # Keyboard Events:
// document.getElementById('text-input').addEventListener('keyup',() => { console.log("key is up")
// } )

// document.getElementById('text-input').addEventListener('keypress',() => { console.log("keypress")
//  } )

// # mouse Event ;-

// document.getElementById('add-item').addEventListener('mouseenter', () =>{ console.log(" mouse entered "); } )
// document.getElementById('add-item').addEventListener('mouseleave', () =>{ console.log(" mouse left"); } )



// ## click item one but change the color of the item two :- Event is "click"

// document.getElementById('item-one').addEventListener('click', () => { 
//     document.getElementById('item-two').style.backgroundColor="yellow"  
// })

// #### ALternative :--------
// document.getElementById('submitBtn').addEventListener('click', (e) => { e.preventDefault()
//     console.log(Document.getElementById('text-input'))
// } )


// FUN ACTIVITY
// document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
//     console.log(e);
//     document.querySelector('#container-box').style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`
// })
// document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
//     document.querySelector('#container-box').style.backgroundColor = `rgb(69, ${e.offsetX}, ${e.offsetY})`   
// })

// Dom Relation
// DOM Traversals

// 1. parentElement 
// console.log(document.getElementById('items').parentElement)

// 2. children
// const items= document.getElementById('items').childrens
// for (let i=0; i = items.length ; i++) {
//    if (i%2 == 0)
//     ()
// }



// 5.sibling => PreviousSibling
console.log(document.getElementById('head').previousElementSibling)
console.log(document.getElementById('head').previousSibling)


// 6.Sibling => NextPreviousSibling
console.log(document.getElementById('head').nextElementSibling)
console.log(document.getElementById('head').nextSibling)

// Creating Html Using Js

