function displayMailingLabel(name, address, city, state, zip){
console.log(name);
console.log(address);
console.log(`${city}, ${state} ${zip}`);
}

displayMailingLabel("Craig McKeachie", "232 Soneta Street", "Cincinnati", "OH", 45245)


//another way to do the displayMailingLabel function is below:

function displayMailingLabel(name, address, city, state, zip){
return `
${name};
${address}
${city}, ${state} ${zip}
`
}

displayMailingLabel("Craig McKeachie", "232 Soneta Street", "Cincinnati", "OH", 45245)