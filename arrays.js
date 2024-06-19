const first = [1,2,3];
const second = [4,5,6];
//conbine the arrays with spread operator
const combined = [...first, ...second];
//printing each element in combined array
combined.forEach(function(number) {
    console.log(number);
});
//using fat arraw syntax for function
combined.forEach(number =>
    console.log(number)
);


const numbers = [1,2,3];
// keeps looping until false is encountered.  Stops after first false
const twoOrBigger = numbers.every(function(value) {
    return value <=2;
});
console.log(twoOrBigger);

// keeps looping until some of the values return true.  Stops after first true
const atLestOne = numbers.some(function(value){
    return value <=2;
});
console.log(atLestOne);

const filterAnswer = numbers.filter(function(value){
    return value ===2;
});
console.log('Filter answer=', filterAnswer);
// same but as an arrow function.  Arrow functions don't need return keyword
const filterAnswer2 = numbers.filter( n => n ===2);
console.log('Filter2 answer=', filterAnswer2);
//using the filters value to make objects with map function
//when returning an object use () to tell javascript it is an object and not a code block
const filteredObj = filterAnswer2.map(n => ({value: n}));
console.log('Object=', filteredObj);

//chaining them together
console.log (numbers.filter(n => n===2).map(n =>({value : n})));

//reducing an array
//if you omit the initial value it uses the first value in the array as initial value
console.log('Sum=' + numbers.reduce(
    (sum,n) => sum + n
));
