const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))


//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) problema
//console.log(JASON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) problema
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))