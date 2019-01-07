// par nome/valor 
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'falaaaa' // contexto léxico 2 
    return saudacao 
}

// objetos sao grupos aninhados de pares nome/valor 

const cliente = {
    nome: 'pedro',
    idade: 32,
    endereco: {
        logradouro: 'rua muito legal',
        numero: 1123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
