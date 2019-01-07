
//Factory simples 

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

//Factory 2 

function criarProduto(nome, preco) {
    return {
      nome,
      preco,
      desconto: 0.1
    }
}

console.log(criarProduto('computado', 2100))