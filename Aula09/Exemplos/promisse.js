function consultar(event){
    event.preventDefault();
    debugger

    let cep = document.querySelector('#cep').value;
    let carregar = document.querySelector('.carregando');
    carregar.style.visibility = 'visible'

    if(cep.length == 0){
        window.alert("Digite alguma coisa viado");
        return;
    }

    cep = cep.replace(".", "").replace("-","");

    let x = consultarCEP(cep).then(dados => {
        document.querySelector('#rua').value = dados.logradouro
        document.querySelector('#bairro').value = dados.bairro
        document.querySelector('#estado').value = dados.estado
        carregar.style.visibility = 'visible';
    });

}

function consultarCEP(cep){
    let link = `https://viacep.com.br/ws/${cep}/json/`

    return fetch(link).then(retorno => retorno.json())
}