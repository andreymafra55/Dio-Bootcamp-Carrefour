const lista = [
    {
        name:'Sabao em po',
        preco: 30
    },
    {
        name:'Cereal',
        preco: 12
    },
    {
        name:'Toalha',
        preco:10
    }
]

const SaldoDisponivel = 1000

function calculaSaldo(saldoDisponivel,lista) {
    return lista.reduce (function (prev,current){
        return prev - current.preco;
    },saldoDisponivel)
}

console.log(calculaSaldo(SaldoDisponivel,lista))