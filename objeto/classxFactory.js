class pessoa {
    constructor(nome) {
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('joão')
p1.falar()

//melhor forma de se fazer 
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}


const p2 = criarPessoa('joao')
p2.falar()