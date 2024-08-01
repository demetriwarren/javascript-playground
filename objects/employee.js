let employee = {            //this is a function literal
    firstName: 'Emily',
    lastName: 'Morgan',
    formatName: (firstName, lastName) => 
        `${lastName}, ${firstName}`
};
console.log(employee.firstName, employee.lastName);         //pulling the name is called dot notation
console.log(employee.formatName(employee.firstName, employee.lastName));

console.log(employee["firstName"]);             //use the bracket syntax when you dont know what the propery name is going to be. (when its not hard coded.)