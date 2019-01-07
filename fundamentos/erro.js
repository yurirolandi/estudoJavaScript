function tratarErroElancar(erro) {
    throw new Erro('erro de processamento')
}

function imprimirNomeGritado(obj) {
    try { // bloco que poode gera erro e pode colocar aqui
    console.log(obj.name.toUPPERCASE() * '!!!')
    } catch (e) { //tratar erro e relancar um tipo 
        tratarErroElancar(e)
    } finally { // sempre sera executado 
        console.log('final')
    }
}


const obj = {
    nome: 'Roberto'
}
imprimirNomeGritado(obj)