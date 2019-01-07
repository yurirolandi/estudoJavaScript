


function teste1(num) {
    if(num > 7)
    console.log(num)
    console.log('final')
}
teste1(5)
teste1(8)
//colocar varias setenças em um bloco colocar chave


function teste2(num) {
    if(num > 7) {
        console.log(num)
    }
}

//não use ponto e virgula em uma estrutura de if, não usar com as estruturas de controle 


teste2(6)
teste2(8)


const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(6)
imprimirResultado(10)



