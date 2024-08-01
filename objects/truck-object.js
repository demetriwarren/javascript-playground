
//Create an object with at least 5 properties that represents a truck and assign it to a variable.
//Create a function called displayTruck that takes a truck object as a parameter and displays only3 of the properties on separate lines with a label for each.

let truck = {
    color: "red",
    trim: "2door",
    transmission: "manual",
    engine: "V8",
    isFlatbed: true ,
};

function displayTruck(truck) {
    console.log(`
        Color: ${truck.color},
        Trim: ${truck.trim},
        Is a Flatbed?: ${truck.isFlatbed}
    `);
}

displayTruck(truck)