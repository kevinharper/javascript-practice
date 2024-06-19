let firstName='Freddy';
let lastName='Krugar'
const dateOfBirth = '1/1/1963';
console.log(firstName  + ' ' +lastName + ' was born on ' + dateOfBirth);

let testVar = 'tester';
testVar = 20;
console.log(testVar);
console.log(typeof testVar);

let person = {
    name: 'Freddy Krugar',
    age : 61
}
console.log(person);
person.name = 'Student1';
person['name'] = 'Student2';
console.log(person.name);


let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);

function ending(firstName, lastName) {
    console.log('Goodbye ' + firstName + ' ' + lastName);
}
ending('Kevin', 'Harper');

function square(number){
    return number*number;
}

let squareOf3=square(3);
squareOf3 = 3**2;
console.log(square(3));

let x = 10;
x *= 2; // same as x = x * 2

// strict equality (type & value are equal)
console.log(x === 20);  //boolean x is equal to 20
console.log(x !== 21);  //boolean x is not equal to 20

//loose equality - if types don't match it converts type on left to match type on right
console.log('1' == 1);
console.log(x == '20');
console.log(true == 1);

let years = 120;
let type = years > 100 ? 'century' :  'not a century';

//falsy (evaluated to false)
//    undefined
//    null
//    0
//    false
//    ''
//    NaN  (not a number)

//truthy (everything else)

let truthy = false || 200;
console.log(truthy); 

let falsy = false && 200;
console.log(falsy);

//first truthy value in operator becomes value since the operation short circuits after first truthy
let answerIsOne = false || 1 || 2 || false;
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

//swapping
let a = 'red';
let b = 'blue';
let c =b;
b = a;
a = c;
console.log(a);
console.log(b);

//conditional
let hour = 22;
if(hour >= 6 && hour <= 12){
    console.log('Good morning');
} else if (hour > 12 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
}
let role = 'admin';
switch(role){
    case 'guest':
        console.log('Welcome Guest');
        break;
    case 'moderator':
        console.log('Welcome Moderator');
        break;
    case 'admin':
        console.log('Welcome Admin'); 
        break; 
    default:
        console.log('Welcome Unknown User');          
}

for(let i = 0; i < 5; i++){
    console.log('Value of i is less than five.  Here is it=' + i);
}
//do while loops are always executed once because condition is at end
b=0;
do {
    console.log('Value of b is less than five.  Here is it=' + b);
    b++;
} while (b < 5)
while(b < 8){
    console.log('Value of b is less than eight.  Here is it=' + b); 
    b++;
}

const person2 = {
    name: 'Kevin',
    age: 29
}
// for in loop to iterate over properties of an object
for(let key in person2){
    console.log('Property in object is ' + key, 'value is ' + person2[key]);
}

let colors = ['red', 'blue', 'green'];
for(let color of colors){
    console.log('Current color is ', color);
}

function maximum(a,b){
    return (a > b) ? a : b;
}
let highNumber = maximum(10,20);
console.log('High number is ', highNumber);

function fizzbuzz(input){
    if(typeof input != 'number')
        return NaN;
    if ((input %3===0) && (input %5===0))
        return 'fizzbuzz'
    if(input % 3 === 0)
        return 'fizz'
    if(input % 5 === 0)
        return 'buzz'
    return input;
}
console.log(fizzbuzz(15));



