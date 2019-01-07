class lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}


class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }


    addLancamento(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }


    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
   
}


const salario = new lancamento('salario', 4500)
const contaDeLuz = new lancamento('luz', -200)


const contas = new cicloFinanceiro(6, 2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())