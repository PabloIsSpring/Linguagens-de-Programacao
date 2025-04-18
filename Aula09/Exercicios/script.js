const conteudo = document.querySelector('.conteudo')
let links = document.querySelectorAll('a')
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = e.target.getAttribute('href');
        fetch(url)
        .then(response => response.text())
        .then(data => {
            conteudo.innerHTML = data;
        })
    })
    console.log(fetch(links[1]))
})