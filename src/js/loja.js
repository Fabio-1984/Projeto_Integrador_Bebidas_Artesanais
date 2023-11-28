function navBar() {
    var x = document.getElementById("menu");
    if (x.className === "menuResp") {
        x.className += " responsive";
    } else {
        x.className = "menuResp";
    }
}

const arrayProdutos = [
    {
        imagem: 'src="src/img/bebidas/WHISKY CANEM (BLENDED).png"',
        titulo: "Whisky Lamas Canem (Blended)",
        preco: "140,70",
        processoProducao: "d" 
    },
    {
        imagem: 'src="src/img/bebidas/WHISKY UNION (PURE MALT).png"',
        titulo: "Whisky Union Distillery Wine Cask",
        preco: "234,40",
        processoProducao: "d"
    },
    {
        imagem: 'src="src/img/bebidas/image_92983_1_1_1_1.jpg"',
        titulo: "Cachaça Claudionor",
        preco: "47,70",
        processoProducao: "d"
    },
    {
        imagem: 'src="src/img/bebidas/casa-amarela-premium-prata-670-ml_1_650.jpg"',
        titulo: "Cachaça Casa Amarela",
        preco: "30,10",
        processoProducao: "d"
    },
    {
        imagem: 'src="src/img/bebidas/cerveja-bierbaum-bock-garrafa-600-ml-www.vinhobr.com.br.webp"',
        titulo: "Cerveja Bierbaum Bock 600ml.",
        preco: "18,91",
        processoProducao: "f"
    },
    {
        imagem: 'src="src/img/bebidas/BobeBrownTrooper-vinhobr.com.br.png"',
        titulo: "Cerveja Bodebrown Tropper Cacau Ipa 473ml.",
        preco: "16,11",
        processoProducao: "f"
    },
    {
        imagem: 'src="src/img/bebidas/vinhos-tintos-sociedade-cooperativa-vinicola-rio-grandense-cabernet-franc-1951-1653591681376.jpg"',
        titulo: "Coop. Vinícula Rio-Grandense Cabernet Franc 1951",
        preco: "699,90",
        processoProducao: "f"
    },
    {
        imagem: 'src="src/img/bebidas/vinhos-tintos-vinho-salvattore-reserva-cabernet-sauvignon-1604787703353.jpg"',
        titulo: "Salvattore Reserva Cabernet Sauvignon 2020",
        preco: "94,90",
        processoProducao: "f"
    }  
]

for(let i = 0; i < arrayProdutos.length; i++){
    const novoProduto = document.createElement('div');
    novoProduto.innerHTML = 
    `<div class="bebidaBox">
    <div class="bebidaImg">
        <img class="bebida-img-tag" ${arrayProdutos[i].imagem}>
    </div>
    <div class="bebidaTit">
        ${arrayProdutos[i].titulo}
    </div>
    <div class="bebidaVal">
        <label for="precoItem">Preço: R$</label>
        <span class="span-preco">${arrayProdutos[i].preco}</span>
    </div>
    <div class="quantidadeEBotao">
        <div>
            <label for="quantidade">Quantidade:</label>
            <input type="number" min='1' id="quantidade" name="quantidade" class="qtde-itens">
        </div>
        <button type="submit" class="botao-submit-loja">Adicionar ao Carrinho</button>
    </div>
    `
    const divElement = document.querySelector('.bebidaContainer');
    divElement.appendChild(novoProduto);
}