'use strict'; //obedecendo o padrao ecma script 6

const myForm = document.getElementById("form");// criação de constante que pega o id do formulario
myForm.addEventListener('submit', gravar); //adicionando um evento
function gravar(evento){

    evento.preventDefault();// impede que o html feche na hora que receber o submit do formulario
    const formData = new FormData(this); //criando um objeto de uma interface para criar os campos de chave e valor, o this se refere ao myForm
    const searchParams = new URLSearchParams(); 
    //incluido os parametros no form data

    for(const par of formData){
        searchParams.append(par[0], par[1]); // index da coluna o 0 é nome e 1 matricula
    }

    fetch('cadastrodealuno.php', { //ESTUDAR SOBRE FETCH, 
        method:'POST', //request
        body: formData
    }).then(function(response){
        document.getElementById('nome_aluno').value=""; // limpando os campos apos enviar os dados
        document.getElementById('matricula').value="";  // limpando os campos apos enviar os dados
        return alert('Dados gravados com sucesso!');
    }).catch(function(error){
        console.log(error);
    });

}