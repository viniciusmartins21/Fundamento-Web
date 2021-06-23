/*
acessando os elementos 

o JS é case sensitiv = reconhece letras maiusulas e minusculas

por tag: getElementsByTagName()
por tag: getElementByTagId()
por tag: getElementsByTagName()
por tag: getElementsByClassName()
por seletor: querrySelector()
*/
// alert('Stella a caminho')

let nome = window.document.getElementById('nome')
let animal = window.document.querySelector('#animal')
let assunto = window.document.querySelector('#assunto')
let = nomeOk
let = animalOk
let = assuntoOk


nome.style.width = '100%'
animal.style.width = '100%'

function enviar() {
    if(nomeOk == true && animalOk == true && assuntoOk == true) {
        alert ('Formulario enviado com sucesso!')
    } else {
        alert('Preencha o formulario corretamente antes de enviar')
    }
}


function validaNome () {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3 )  {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}


function validaAnimal () {
    let txtAnimal = document.querySelector('#txtAnimal')
    if (animal.value.length < 3 )  {
        txtAnimal.innerHTML = 'Animal Inválido'
        txtAnimal.style.color = 'red'
    } else {
        txtAnimal.innerHTML = 'Animal Válido'
        txtAnimal.style.color = 'green'
        animalOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 150 ) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo  200 caracterer'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else { 
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

