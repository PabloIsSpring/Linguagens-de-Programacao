function validaEmail(email){
    if(email.match(/@.+\./) != null){
        return true;
    } else {
        return false;
    }
}

let email = "emanuelpabloferreira@gmail.com"

if(validaEmail(email)){
console.log(`O seu email: ${email} 
É valido`);
} else {
    console.log(`Seu email: ${email}
é inválido`)
}
