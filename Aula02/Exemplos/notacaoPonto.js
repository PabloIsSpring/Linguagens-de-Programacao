//notação ponto

let objeto01 = {

}

objeto01.nome = "Pablo";
console.log(objeto01);

let aluno = {
    nome: "Pablo",
    email: "pablo@gmail.com",
    telefone: "(15) 992315512",
    endereco: {
        rua: "Alameda rosa",
        numero: 1,
        bairro: "longe"
    },
    nota: [10, 8, 7.5, 10]
}

console.log(aluno.endereco.rua);
console.log(aluno.nota[2]);
