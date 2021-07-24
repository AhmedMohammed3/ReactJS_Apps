const person = {
    name: 'Ahmed',
    age: 23,
    location: {
        city: 'Cairo',
        temp: '100'
    }
}

const { name: first = "Anon", age } = person;

console.log(`${first} is ${age}`)

const { city, temp: lol } = person.location;
console.log(`It's ${lol} in ${city}`)
