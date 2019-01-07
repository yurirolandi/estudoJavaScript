const aprovados = ['Amanda', 'Aldo', 'Yuri', 'Daniela']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


