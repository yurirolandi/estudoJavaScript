Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.50 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit Lapis", "preco": 10.50 }',
    '{"nome": "Caneta", "preco": 1.50 }'
]

//Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)


