//function declaration 

function multiply1(x, y){
    return x * y;
}
console.log(multiply1(10, 5));

//function expression assigning an anonymous function into a variable

let multiply2 = function (x, y){
    return x * y;
}

console.log(multiply2(5, 5))


//arrow function                        
let multiply3 = (x, y) => {
    return x * y;
}

console.log(multiply3(5, 3))


//if the arrow function is only 1 line of code inside, u can remove the curly braces and you dont need the "return" keyword bc its automatically there without being called. 
let multiply4 = (x, y) => x * y;

console.log(multiply4(5, 2))