const form = document.getElementById('contact-form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const nome = document.getElementById('NomeContato').value
    const tel = document.getElementById('TelContato').value

    let linha = "<tr><td>" + nome + "</td><td>" + tel + "</td></tr>"
    const tabela = document.querySelector('tbody')
    tabela.innerHTML += linha

    NomeContato.value = ''
    TelContato.value = ''

})