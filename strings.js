//Strings is a datatype that allows you to store a sequence of characters

var jobTitle = "Software Developer"
console.log(typeof jobTitle)
console.log(jobTitle.toUpperCase()) //Changing string to uppercase
console.log(jobTitle.substring(0, 7)) //For substring

//Concatenate

var a = 'Software'
var b = 'Developer'
console.log(a + " " + b) // using plus sign
console.log(`${a}$ ${b.toUpperCase()}`) //using dollar sign