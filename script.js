let prato = null;
let pratoPreco = null;
let bebida = null;
let bebidaPreco = null;
let sobremesa = null;
let sobremesaPreco = null;
let contadorProdutos = 0;

function escolherPrato(div,descricao,preco){
    desmarcarProduto('comida_somente_prato');  
    div.classList.add('selecionado');
    prato = descricao;
    pratoPreco = preco;
    contadorProdutos = contadorProdutos + 1;
    fecharPedido()
    
}

function escolherBebida(div,descricao,preco){
    desmarcarProduto('comida_somente_bebida');     
    div.classList.add('selecionado');
    bebida = descricao;
    bebidaPreco = preco;
    contadorProdutos = contadorProdutos + 1;
    fecharPedido()
    
}

function escolherSobremesa(div,descricao,preco){
   desmarcarProduto('comida_somente_sobremesa');    
   div.classList.add('selecionado');
   sobremesa = descricao;
   sobremesaPreco = preco;
   contadorProdutos = contadorProdutos + 1;
   fecharPedido()
   
}

function desmarcarProduto(produto){
const produtoSelecionado = document.querySelector(`.${produto} .selecionado`);
    if(produtoSelecionado !== null){
        produtoSelecionado.classList.remove('selecionado');
        contadorProdutos = contadorProdutos - 1;
    }
        
}

function fecharPedido(){
       const button = document.querySelector('.footer-dentro');
        if (contadorProdutos === 3){
        button.classList.add('botao_selecionado');
        button.innerHTML = "Fechar pedido"; 
    }
}

function enviarPedido(){    
 const linkDaMensagem = montarMensagemWhatsApp();
 window.open(linkDaMensagem, `_blank`).focus();
}

function montarMensagemWhatsApp() {
const numero = prompt("Digite seu número no formato: 55XXXXXXXXXXX");
const nome = prompt("Qual o seu nome?")
const endereco = prompt ("Diga qual o seu endereço:");
const total = (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2); 
let mensagem = `
Olá, gostaria de fazer o pedido: 
- Prato: ${prato} 
- Bebida: ${bebida} 
- Sobremesa: ${sobremesa} 
*Total*: R$ ${total}
Nome: ${nome}
Endereço: ${endereco}`

mensagem = encodeURIComponent(mensagem);
const url = `https://wa.me/${numero}?text=${mensagem}`;
return `https://wa.me/${numero}?text=${mensagem}`;

}