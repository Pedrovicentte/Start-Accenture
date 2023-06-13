// var nome = 'Shay' -> var simples
// var nome = ['Ana', 'Luan', 'Pablo'] -> Array guarda mais de um informação/lista. 
// posições -> 0      1        2        3
var nome = ['Ana', 'Luan', 'Pablo', 'Pedro', 'Nadmila', 'Lilyan']

// console.log(nome)

console.log(nome[4]) // <-- Mostra dados numa posição específica.

nome[0] = 'Giovanna' //<-- Substituiu a Ana pela Giovanna, o [0] determina a posição.
console.log(nome)

nome.push('Mariana')// <-- Adiciona elementos na última posição da lista.
console.log(nome)

nome.splice(4, 0, 'Atena') // Inserindo elemento -> (Posição para inserir, 0 <-- e apra não mudar nenhum elemento e nesse caso acrescentar, "adiciona novo elemento")
console.log(nome)

nome.splice(1,1)// Removendo da lista
console.log(nome)

console.log(nome.length)// O "length" mostra a quantidade de elementos dentro da array.

//Ajustar em ordem crescente 

console.log(nome.sort())//O .sort() ajusta os nomes em ordem crescente.

for(let pos=0; pos<nome.length;pos++){
    console.log(`A posição ${pos} tem ${nome[pos]}`)
}

for(let cont in nome){
    console.log(nome[cont])
}