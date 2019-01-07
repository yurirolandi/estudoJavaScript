console.log(Math.ceil(6.1)) // arredonda o valor para 7 ceil é alto valor acima

const obj1 = {}
// obj1['nome'] = 'bola2'
obj1.nome = 'bola'
console.log(obj1.nome)


function Obj(nome) {
    this.nome = nome 
}


const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)