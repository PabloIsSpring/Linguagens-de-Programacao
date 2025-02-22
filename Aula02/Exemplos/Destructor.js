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
let {nome, email} = aluno;
console.log(nome)

let {nome: a, telefone: b} = aluno;
console.log(a, b);
let [x, y, z] = [1, 2, 3];
console.log(y);

