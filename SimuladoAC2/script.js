function alugar (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;

    let cliente = {
        nome: nome,
        email: email,
        telefone: tel
    }
    console.log(cliente)
    fetch(endPointCliente, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        document.getElementById('nome').value = ''
        document.getElementById('email').value = ''
        document.getElementById('tel').value = ''
        window.alert('Cliente cadastrado')
        document.querySelector('#nome').focus()
    })

    let carro = document.getElementById('carro').value
    let modelo = document.getElementById('modelo').value
    let preco = document.getElementById('preco').value
    let data = document.getElementById('reserva').value

    let carOBJ = {
        carro: carro,
        modelo: modelo,
        preco: preco,
        dataReserva: data
    }
    console.log(carOBJ)
    fetch(endPointCarro, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(carOBJ)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        document.getElementById('carro').value = ''
        document.getElementById('modelo').value = ''
        document.getElementById('preco').value = ''
        document.getElementById('reserva'). value = ''
        window.alert('Cliente cadastrado')
        document.querySelector('#nome').focus()
    })  
}

function limpaSelect(){
  let lista = document.querySelector('select')
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
}
}

function setOptions(event) {
  event.preventDefault();
  limpaSelect();

  let select = document.querySelector('select');

  let listaCarros = filtraListaCarros();

  for(let i = 0; i < listaCarros.length; i ++){
    let option = document.createElement('option');
    option.value = listaCarros[i].carro;
    option.textContent = listaCarros[i].carro;
    select.appendChild(option);
  }
}

function filtraListaCarros() {
  let data = document.getElementById('reserva').value;
  return carros.filter((car) => car.dataReserva != data)
}

function escolheCarro(event){
  event.preventDefault();

  let carro = retornaCarroObj();
  let modelo = document.getElementById('modelo').value = carro.modelo
  let preco = document.getElementById('preco'). value = carro.preco
}

function retornaCarroObj(){
  let carro = document.getElementById('carro').value;
  for(let i = 0; i < carros.length; i++){
    if(carro == carros[i].carro){
      return carros[i];
    } 
  }
}

const endPointCliente = "https://67cb71e53395520e6af5562c.mockapi.io/cliente"
const endPointCarro = 'https://67cb71e53395520e6af5562c.mockapi.io/aluno'









const carros = [
    {
      id: 1,
      carro: "HB20",
      modelo: "Hyundai HB20 1.0 Sense",
      preco: 150,
      dataReserva: "2025-05-01"
    },
    {
      id: 2,
      carro: "Onix",
      modelo: "Chevrolet Onix LT 1.0",
      preco: 160,
      dataReserva: "2025-05-02"
    },
    {
      id: 3,
      carro: "Corolla",
      modelo: "Toyota Corolla XEi 2.0",
      preco: 230,
      dataReserva: "2025-05-03"
    },
    {
      id: 4,
      carro: "Argo",
      modelo: "Fiat Argo Drive 1.0",
      preco: 145,
      dataReserva: "2025-05-04"
    },
    {
      id: 5,
      carro: "Kwid",
      modelo: "Renault Kwid Zen 1.0",
      preco: 130,
      dataReserva: "2025-05-05"
    },
    {
      id: 6,
      carro: "Polo",
      modelo: "Volkswagen Polo TSI 1.0",
      preco: 175,
      dataReserva: "2025-05-06"
    },
    {
      id: 7,
      carro: "HR-V",
      modelo: "Honda HR-V EX 1.8",
      preco: 250,
      dataReserva: "2025-05-07"
    },
    {
      id: 8,
      carro: "Compass",
      modelo: "Jeep Compass Longitude 1.3 Turbo",
      preco: 300,
      dataReserva: "2025-05-08"
    },
    {
      id: 9,
      carro: "Tracker",
      modelo: "Chevrolet Tracker LT 1.2 Turbo",
      preco: 280,
      dataReserva: "2025-05-09"
    },
    {
      id: 10,
      carro: "Civic",
      modelo: "Honda Civic Touring 1.5 Turbo",
      preco: 270,
      dataReserva: "2025-05-10"
    }
  ];
  