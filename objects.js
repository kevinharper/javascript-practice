const circle = {
    radius: 1,
    location: {
        lat: 3,
        lon: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw the circle');
    }
};

//factory function
function createCircle(radius, lat, lon, isVisible){
    return {
        radius: radius,
        location: {
            lat: lat,
            lon: lon
        },
        isVisible: inVisible,
        draw: function() {
            console.log('draw the circle');
        }
    };    
}
//we can shorten if the attributes and args have same names
function createCircle2(radius, location, isVisible){
    return {
        radius,
        location,
        isVisible,
        draw() {
            console.log('draw the circle');
        }
    };    
}

let ourLocation = {
    lat: 2,
    lon: 1
}
let ourCircle = createCircle2(1, ourLocation, true);
console.log(ourCircle);

//constructor functions should use Pascal case like OneTwoThreeFour
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw the circle from Constructor function');
    }
}
const circle3 = new Circle(1);
//below is a long hand way to create a new instance of circle using the call method
//this way allows us to pass our own object for this reference
Circle.call({}, 1);
Circle.apply({}, [1]);

const square = {
    length: 2
};
// add a property to square on the fly 
square.dimension = 2;
//remove property
delete square.dimension;

//primitives are copied by value
//objects are copied by reference

const circle4 = {
    radius: 1,
    draw(){
        console.log('draw the circle from Constructor function');
    }
};

for (let key in circle4){
    console.log(key, circle4[key]);
}

let colors = ['blue', 'red', 'green'];
// for of loop is for iterables
for(let color of colors){
    console.log(color, colors[color]);
}
//any object can be iteratable using methods from superclass Object
for(let key of Object.keys(circle)){
    console.log(key);
}
for(let entry of Object.entries(circle)){
    console.log(entry);
}

if('radius' in circle4){
    console.log('Circle contains radius');
}

//old manual way to copy an object
const anotherObject = {};
for(let key in circle4){
    anotherObject[key] = circle4[key]; 
}
//newer way to copy object using Object superclass
const anotherObject2 = Object.assign({}, circle4);
// you can even add additional properties to the new object
const anotherObject3 = Object.assign({color : 'yellow'}, circle4);
//another way to clone an object using spread operator which spreads the properties into another object 
const anotherObject4 = {...circle4};

//string object instead of a string primitive
const objectString = new String('I\'m a string');
if(objectString.includes('string')){
    console.log('objectString includes the substring \'string\'');
}

//template literal for a string with single quote
const templateLiteral = `I'm a string`;
const emailMessage = 
`To whom it may concern,

Hello, ${templateLiteral}.

Thank you,
Kevin`;
console.log(emailMessage);

let address = {
    street: 'Elm St',
    city: 'Dallas',
    zipCode: '75000'
};

for (key in address){
    console.log(key, address[key]);
}

let blogPost = {
    title: 'Programming',
    body: 'Programming in Javascript in flexible',
    author: 'Me',
    views: 7,
    comments: [
        {author: 'Dave', body: 'Nice work!'},
        {author: 'John', body: `Well, I guess it's ok!`}
    ],
    isLive: true
};

//blogPost object using constructor function
function blogPost2(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
let anotherBlogPost = new blogPost2('Advanced js', 'Revolutionary new js', 'Kevin');