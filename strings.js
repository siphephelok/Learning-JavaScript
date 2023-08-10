//Objects is a collection of properties, each property has a value

var person = {
    firstName: 'Siphephelo', 
    age: 15,
    isMale: true,
    dob: new Date(2000, 1 , 27).toJSON(),

    //Nested objects

    address: {
        city: 'Durban',
        postCode: 'SW9'
    }
} 

//Accessing Objects

console.log(person)
console.log(person.firstName)
console.log(person.address.city)
