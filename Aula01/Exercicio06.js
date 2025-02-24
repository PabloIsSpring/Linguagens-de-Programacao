let num = 98;

function calculaDobro(num){
    let dobro = -1
    if(num <= 0){
     return dobro;
    } else {
        dobro = num * 2;
    }

    return dobro;
}

let dobro = calculaDobro(num);

if(num <= 0){
    console.log("So aceitamos numero positivos maiores que zero")
} else {
    console.log(`O dobro de ${num} é ${dobro}`);
}

