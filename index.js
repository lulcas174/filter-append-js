let pessoas = [{
    nome: ['João', 'Maria'],
    idade: [20, 30],
}];
let bens = [{
    carro: ['Fusca', 'Gol'],
    marca: ['VW', 'Volkswagen'],
}];
pessoas.filter(function (item) {
    item.nome = item.nome.map(function (nome) {
       if (nome == 'João'){
            pessoas.push({altura: 1.75});
            bens.map(function (itens) {
                pessoas.push(itens);
            })
            console.log(pessoas)
       }
    })
})