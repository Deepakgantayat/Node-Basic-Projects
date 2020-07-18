const name = require('./single-export')
const {city, country} = require('./multi-export-1')
const {n1,n2,add}= require('./multi-export-2')

console.log(name)
console.log(city, country)

console.log(add(n1,n2))