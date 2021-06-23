/**
 * Autor : Guilherme Pereira Colusso
 * Github : https://github.com/guiihcolusso
 * Contato : guiihcolusso@gmail.com
 */


var botao = document.getElementById("submit");
var usuario = document.getElementById("usuario");
var senha = document.getElementById("senha");

usuario.focus();

var usuarioPadrao = "master" //Digite o Usuario que sera a padrao para login
var senhaPadrao = "12345" // Digite a Senha que sera a padrao para login

function AposLogin(){
    window.open("https://www.google.com/") //Site que ira abrir apos login :)
}


function fecha(){
    window.close();
}

function login(){
    if(usuario.value == usuarioPadrao && senha.value == senhaPadrao){
        alert("Usuario Logado com sucesso :) \n\nSeja Bem-vindo!")

        AposLogin();
        fecha();
    }
    
    else{
        alert("Usuario ou senha invalido!")
    }
    
    usuario.value = "";
    senha.value = "";
    usuario.focus();
}

botao.onclick = login;
