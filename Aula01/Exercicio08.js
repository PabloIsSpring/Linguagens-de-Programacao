function contaVogais(texto){
    let qtdVogais = 0;
    for(let i = 0; i < texto.length; i++){
        switch(texto.charAt(i).toLowerCase()){
            case "a":
                qtdVogais++;
                break;
            case "e":
                qtdVogais++;
                break;
            case "i":
                qtdVogais++;
                break;
            case "o":
                qtdVogais++;
                break;
            case "u":
                qtdVogais++;
                break;
        }
    }
    return qtdVogais;

}

let texto = "Pablo Emanuel de Melo Ferreira";

console.log(`A quantidade de vogais do texto ${texto}, é: ${contaVogais(texto)}`)