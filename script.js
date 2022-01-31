
// let comida = null;
// let bebida = null;
// let sobremesa = null;


function escolherPrato(idPrato,classePrato){
    
    const prato = document.querySelector(classePrato , " .selecionado");
    
    if (prato !== null){
        prato.classList.remove("selecionado");
    }
    
    const pratoSelecionado = document.querySelector(idPrato,classePrato);
    
    pratoSelecionado.classList.add("selecionado");

    // comida = pratoSelecionado;     

}

function escolherBebida(idBebida,classeBebida){

    const drink = document.querySelector(classeBebida , ' .selecionado');
        if (drink !== null){
            drink.classList.remove("selecionado");
        }

    const bebidaSelecionada = document.querySelector(idBebida,classeBebida);   

    bebidaSelecionada.classList.add("selecionado");

    // bebida = bebidaSelecionada;

}

function escolherSobremesa(idSobremesa,classeSobremesa){

    const sobre = document.querySelector(classeSobremesa , " .selecionado");
    
    if (sobre !== null){
        sobre.classList.remove("selecionado");
    }
    
    const sobremesaSelecionada = document.querySelector(idSobremesa,classeSobremesa);
    
    sobremesaSelecionada.classList.add("selecionado");

    // sobremesa = sobremesaSelecionada;     
}

