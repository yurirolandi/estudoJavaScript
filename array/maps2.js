const carrinho = [
    '{"nome": "Borracha", "preco": 3.50 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit Lapis", "preco": 10.50 }',
    '{"nome": "Caneta", "preco": 1.50 }'
]

//Retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

