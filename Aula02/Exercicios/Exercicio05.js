let vetor = [1, 2, 10, -1];

let maiorMenor = (vetor) => {
    let maior = 0;
    let menor = 0;
    for(let i = 0; i < vetor.length; i++){
        if(maior > vetor[i]){
            maior = vetor[i]
        }

        if(menor < vetor[i]){
            menor = vetor[i];
        }
    }

    console.log(maior+" "+ menor)
}

maiorMenor(vetor);