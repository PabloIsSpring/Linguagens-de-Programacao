function verificaPalindromo(palavra){
    let isPalindromo = true;
    for(let i = 0; i < palavra.length / 2; i++){
        if(palavra.charAt(i) != palavra.charAt(palavra.length - 1 - i)){
            isPalindromo = false;
            return isPalindromo;
        }
    }
    return isPalindromo;
}

let palavra = "ave";

if(verificaPalindromo(palavra)){
    console.log(`A palavra "${palavra}" é um palindromo`)
} else {
    console.log(`A palavra "${palavra}" não é palindromo`)
}