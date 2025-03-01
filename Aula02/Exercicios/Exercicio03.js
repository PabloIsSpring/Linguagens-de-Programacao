let jurosSimples = (capitalInicial, taxaJuros, mes) => {
    let porcentJuros = taxaJuros / 100;
    let juros = capitalInicial * porcentJuros * mes;

    return juros + capitalInicial;
}

let valor = jurosSimples(1000, 10, 2)

console.log(valor)

let jurosCompostos = (capitalInicial, taxaJuros, mes) => {
    let porcentJuros = taxaJuros / 100;
    let montanteJurosCompostos = capitalInicial * Math.pow(( 1 + porcentJuros), mes);

    return montanteJurosCompostos;
}

let valor2 = jurosCompostos(1000, 5, 12);

console.log(valor2)