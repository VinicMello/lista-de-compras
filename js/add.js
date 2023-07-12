const categorias = {
    "Alimentação": listaAlimentacao,
    "Frutas e Legumes": listaFrutas,
    "Higiene": listaHigiene,
    "Limpeza": listaLimpeza,
    "Utilidades": listaUtilidades
}

function mostraProdutoLista() {

    if (categorias.hasOwnProperty(categoria.value)) {

        const novoItemLista = document.createElement("li")
        novoItemLista.textContent = novoProduto.value;
        categorias[categoria.value].appendChild(novoItemLista);
    }

    else {
        alert("Selecione uma categoria")
    }

}
