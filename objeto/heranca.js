const ferrari = {
    modelo: 'f40',
    velmax: 324
}


const volvo = {
    modelo: 'v40',
    velmax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)