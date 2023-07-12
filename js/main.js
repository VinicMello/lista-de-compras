//objetos
const novoProduto = document.getElementById("txtNome"); //input
const enviar = document.getElementById("bt"); //button
const categoria = document.getElementById("selectCategoria"); //select
const adicionar = document.getElementById("adicionar-produto"); //checkbox add
const excluir = document.getElementById("excluir-produto"); //checkbox excluir

//listas
const listaAlimentacao = document.getElementById("lista-alimentacao")
const listaFrutas = document.getElementById("lista-frutas")
const listaHigiene = document.getElementById("lista-higiene")
const listaLimpeza = document.getElementById("lista-limpeza")
const listaUtilidades = document.getElementById("lista-utilidades")


enviar.addEventListener("click", () =>{valida()});








