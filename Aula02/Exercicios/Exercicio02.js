let formataParaReal = (num) => {
    let numComDuasDecimais = num.toFixed(2);

    let numForma = numComDuasDecimais.toString();

    numForma.replace(".", ",")

    return "R$"+ numForma;
}

console.log(formataParaReal(3.0003))