let prato = null;
let pratoPreco = null;
let bebida = null;
let bebidaPreco = null;
let sobremesa = null;
let sobremesaPreco = null;

function escolherPrato(div,descricao,preco){
     const pratoSelecionado = document.querySelector('.comida_somente_prato .selecionado');
    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove('selecionado');
    }

    div.classList.add('selecionado');
    prato = descrição;
    pratoPreco = preco;
}

function escolherBebida(div,descricao,preco){
    const bebidaSelecionada = document.querySelector('.comida_somente_bebida .selecionado');
   if(bebidaSelecionada !== null){
       bebidaSelecionada.classList.remove('selecionado');
   }
   div.classList.add('selecionado');
   bebida = descrição;
   pratoPreco = preco;
}

function escolherSobremesa(div,descricao,preco){
    const escolherSobremesa = document.querySelector('.comida_somente_sobremesa .selecionado');
   if(escolherSobremesa !== null){
    escolherSobremesa.classList.remove('selecionado');
   }
   div.classList.add('selecionado');
   prato = descrição;
   pratoPreco = preco;
}
