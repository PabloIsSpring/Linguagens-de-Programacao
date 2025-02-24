function inverteString(texto){
    let textoInverso = "";
    for(let i = texto.length; i >= 0; i--){
        textoInverso += texto.charAt(i)
    }

    return textoInverso;
}

let texto = "Amo programar em Java";

let textoInverso = inverteString(texto);

console.log(textoInverso);