async function buscar(event) {
    event.preventDefault();

    let cidade = document.querySelector('#cidade').value
    let p = document.querySelector('.retorno');
    p.textContent = ''

    if(cidade == null){
        window.alert('Digite algo');
        return
    }

    let cidadeObj = await buscarCidade(cidade);

    p.textContent = cidadeObj.toString();
}

async function buscarCidade(cidade) {
    let link = `https://wttr.in/${cidade}?format=3`
    console.log(link)

    let retorno = await fetch(link);
    console.log(retorno)
    let dados = await retorno.text();
    console.log(dados)

    return dados;
}