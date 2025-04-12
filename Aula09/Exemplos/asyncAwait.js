async function consultar(event){
    event.preventDefault();

    let cep = document.querySelector('#cep').value;
    let carregar = document.querySelector('.carregando');
    carregar.style.visibility = 'visible'

    if(cep.length == 0){
        window.alert("Digite alguma coisa viado");
        return;
    }

    cep = cep.replace(".", "").replace("-","");
    let x = await consultarCEP(cep);

    document.querySelector('#rua').value = x.logradouro
    document.querySelector('#bairro').value = x.bairro
    document.querySelector('#estado').value = x.estado
    
    carregar.style.visibility = 'hidden'
}

async function consultarCEP(cep){
    let link = `https://viacep.com.br/ws/${cep}/json/`

    let retorno = await fetch(link);
    console.log(retorno);
    let dados = await retorno.json();
    console.log(dados);

    return dados;
}