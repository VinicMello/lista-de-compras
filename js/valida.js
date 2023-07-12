function valida() {

    const produto = document.getElementById("txtNome").value

    if (!produto.trim()) {
        alert("Digite o nome do produto");
        novoProduto.classList.add("input-erro");
        categoria.value = "#"
        adicionar.checked = false;
        excluir.checked = false
        return;
    }

    else if ((excluir.checked && adicionar.checked) || (!adicionar.checked && !excluir.checked)) {
        alert('Não é possivel realizar a operação!\nSelecione uma opção.')
        adicionar.checked = false;
        excluir.checked = false
    }

    else {

        if (adicionar.checked && !excluir.checked) {
            mostraProdutoLista()

        }
        else if (excluir.checked && !adicionar.checked) {
            excluirProdutoLista()

        }
    }

    adicionar.checked = false;
    excluir.checked = false;
    categoria.value = "#";
    novoProduto.value = "";
    novoProduto.classList.remove("input-erro");
}