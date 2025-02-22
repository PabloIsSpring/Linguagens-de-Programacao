class pessoa {}
console.log(typeof pessoa);

//funcao nomeada

function subtracao(num1, num2){
    return num1 - num2;
}

console.log(subtracao(10, 8, 2));
console.log(subtracao(10, 4));
console.log(subtracao(10));
console.log(subtracao(5, '5'))

//função não nomeada
let somar = function(num1, num2){
    return num1 + num2;
}
console.log(somar(10, 10));
console.log(somar(7, '5'));

//arrow function
let divisao = (n1, n2) => {
    if(n1 == 0 || n2 == 0){
        return "Impossivel dividir";
    } else {
        return n1 / n2;
    }
}
console.log(divisao(28, 4));

let mult = (n1, n2) => n1 * n2;
console.log(mult(5, 5));

let operacaoMatematica = (n1, n2, operacao) => operacao(n1,n2)

console.log(operacaoMatematica(3, 6, somar));
console.log(operacaoMatematica(10, 5, subtracao));
console.log(operacaoMatematica(3, 6, mult));
console.log(operacaoMatematica(9, 3, divisao));