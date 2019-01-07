for (var i = 0; i < 10; i++) {
    console.log(i)
}

//usando let em loop 

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//compila dentro do bloco, fora do bloco ele não está definido


var funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//imprime o valor de 10 e o i não é respeitado com o var 

//usando o let em loop 

var funcs = []
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//com o LET O I É RESPEITANDO E IMPRIME O VALOR 2 E 8 NO CONSOLE