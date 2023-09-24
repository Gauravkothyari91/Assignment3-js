const car = {
    make: 'Swift',
    model: 'A23D67',
    year: 2004,
};

function displayAllProperties(car){
    for(const property in car){
        console.log(`${property}: ${car[property]}`);
    }
}displayAllProperties(car);

// output   make: Swift
//          model: A23D67
//          year: 2004