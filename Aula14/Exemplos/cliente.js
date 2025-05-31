const linkAPI = 'https://67cb71e53395520e6af5562c.mockapi.io/Cliente'; 
let clientes = [];

function carregarTabela() {
    fetch(linkAPI)
        .then(responsta => responsta.json())
        .then(dados => {
            clientes = dados;
            montarTabela(dados);
        })    
}

function montarTabela(dados){
    const tabela = document.getElementById('tabela-clientes');
    tabela.innerHTML = '';

    dados.forEach(cliente => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefone}</td>
            <td><button class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "editarCliente(${cliente})">Editar</button></td>
            <td><button class = "btn btn-danger" onclick = "excluirCliente(${cliente.id})">Excluir</button></td>`

            tabela.appendChild(tr);
    });
}

function editarCliente(id){
    let url = `https://67cb71e53395520e6af5562c.mockapi.io/Cliente/${id}`

    let cliente = clientes.find(c => c.id === id);
    if(!cliente) {
        alert('Cliente não encontrado')
    }

    document.getElementById('cadId').value = cliente.id
    document.getElementById('cadNome').value = cliente.nome
    document.getElementById('cadEmail').value = cliente.email
    document.getElementById('cadTelefone').value = cliente.telefone

    fetch(`${linkAPI}/${id}`)
}

function excluirCliente(id){
    let url = `https://67cb71e53395520e6af5562c.mockapi.io/Cliente/${id}`
    
    let confirmacao = confirm("Deseja realmente excluir esse cliente?")
    if(!confirmacao) {
        return;
    }

    fetch(url, {
        method: 'DELETE'
    })
    .then(resposta => resposta.json())
    .then(() => {
        carregarTabela()
    })
}

function pesquisarCliente(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value.toLowerCase();

    let filtro = clientes.filter(cliente =>
                            cliente.nome.toLowerCase().startsWith(nome))
    montarTabela(filtro);
    
}