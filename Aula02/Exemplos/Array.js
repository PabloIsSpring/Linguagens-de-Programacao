const qualquerCoisa =[];

qualquerCoisa[0] = 1;

qualquerCoisa[1] = "a";

console.log(qualquerCoisa);

const coisas = [1, 2, 3.5, 4];
console.log(coisas[2]);

coisas[10] = "Pablo";

console.log(coisas);


//itens no começo da lista
coisas.unshift('primeiro');
console.log(coisas);
coisas.shift(coisas);
console.log(coisas);

//itens no final da lista
console.log('tamanho  do array: '+coisas.length);
coisas.push('Ultimo item')
console.log(coisas);