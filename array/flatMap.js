const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.2
    }, {
        nome: 'Ana',
        nota: 8
    }, {
        nome: 'Maria',
        nota: 5
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Pedro',
        nota: 9.4
    }, {
        nome: 'Jose',
        nota: 6.6
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)