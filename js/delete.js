function excluirProdutoLista() {

    if (categorias.hasOwnProperty(categoria.value)) {

        const categoriaSelecionada = categoria.value;
        const lista = categorias[categoriaSelecionada]
        const itens = lista.querySelectorAll("li");

        console.log(categoriaSelecionada)
        console.log(lista)
        console.log(itens)

        const excluirProduto = document.querySelector("#txtNome").value.trim().toLowerCase();
        let verificaItem = false;

        console.log(excluirProduto)

        for (let i = 0; i < itens.length; i++) {

            if (excluirProduto.toLowerCase() === itens[i].textContent.trim().toLowerCase()) {
                alert(`encontramos o produto ${excluirProduto}`)
                itens[i].remove()
                verificaItem = true;
                break;
            }
        }

        if (verificaItem == false) {
            alert(`O item "${excluirProduto}" NÃO foi encontrado na lista`)
        }

    }
}