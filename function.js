//variable number of arguements using the arguements function
// you can omit the parameters in function signature since we are accessing them with the arguements object
function sum(){
    console.log(arguments);

    let total = 0;
    for(let value of arguments){
        total += value;
    }
    
    return total;
}

console.log(sum(1, 2, 3, 4, 5));

//rest operator takes a variable number of args and puts them in an array
function test1(...args){
    return args.reduce((a,b)=> a + b);
}
console.log(test1(1,2,3,4,5));

function salePrice(discount, ...fullPrices){
    const total = fullPrices.reduce((a,b) => a + b);
    return total * (1 - discount);
}
console.log(salePrice(.1, 50, 25, 100));

//setting defaULT values.  Default value should be last set of params.  Put params without defaults first
function interest(principal, rate = 4.5, years = 30){
    return principal * rate/100 * years;
}

//throwing an exception inside setter function
const person = {
    firstName: Mickey,
    lastName: MouseEvent,
    set fullName(value){
        if(typeof value != 'string' ) throw new Error('Value is not a string');
        const parts = value.split(' ');
        if(parts.length !==2) throw new Error('Must provide first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

//catching an exception
try{
    person.fullName(true);
} catch (e){
    alert(e);
}

function playVideo(){
    console.log(this);
}
//using call or apply you can set this to the value passed in
playVideo.call({name: 'Minnie'})
playVideo.apply({name: 'Minnie2'})