const peso1 = 1.0 
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))


const avacialao1 = 9.871
const avacialao2 = 6.871

const total = avacialao1 * peso1 + avacialao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // não transforma no valor de media por ser constante
console.log(media.toString(2)) //adicionando o valor 2 entre parentese converte o valor em binario
console.log(typeof media)
console.log(typeof Number) //funcao com N maisculo e com N minisculo e numero