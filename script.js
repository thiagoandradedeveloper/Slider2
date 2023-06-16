window.onload = () => {
    const btnNext = document.getElementById("btnNext");
    const btnBack = document.getElementById("btnBack");
    let imagens = document.querySelectorAll(".imgPrincipal");
    const miniaturas = document.getElementById("miniaturas");
    const container  = document.querySelector(".container");
    miniaturas.innerHTML = "";
    imagens.item(0).style.opacity = 1;

    imagens.forEach((element,key) => {        
        miniaturas.innerHTML += `<div id='${key}'></div>`;
        element.setAttribute('id','imgPrincipal'+key)
        element.addEventListener("click",()=>{
            
            thisElement = imagens[position];
            
            if(thisElement.getAttribute("data-url") != null){
                
                if(thisElement.getAttribute("data-linkMode") == null)
                    window.location = thisElement.getAttribute("data-url")
                else
                    window.open(thisElement.getAttribute("data-url"), thisElement.getAttribute("data-linkMode"))
            }
        })
    })

    const colecaoMiniaturas = document.querySelectorAll("#miniaturas div");
    colecaoMiniaturas.forEach((element,key)=>{        
        
        novaImagem = document.createElement("img");
        novaImagem.style.opacity = 1;
        novaImagem.src = imagens[key].src;
        novaImagem.style.width = "60px";
        novaImagem.style.height = "30px";
        element.appendChild(novaImagem);

        element.addEventListener("click",(e)=>{

            position = key;

            for(img of imagens){ img.style.opacity = 0; }
            for(divMini of colecaoMiniaturas){ divMini.style.border = "3px solid black"; }
            
            imagens[key].style.opacity = 1;
            element.style.border = "3px solid red"
        })
    })

    colecaoMiniaturas[0].style.border = "3px solid red";
    position = 0;

    function avancar(){
        position++;
        if(position > imagens.length-1) position = 0;
        for(img of imagens){ img.style.opacity = 0; }
        for(divMini of colecaoMiniaturas){ divMini.style.border = "3px solid black"; }
        colecaoMiniaturas[position].style.border = "3px solid red";
        imagens[position].style.opacity = 1;
    }
    function voltar(){
        position--;
        if(position < 0) position = imagens.length-1;
        for(img of imagens){ img.style.opacity = 0; }
        for(divMini of colecaoMiniaturas){ divMini.style.border = "3px solid black"; }
        colecaoMiniaturas[position].style.border = "3px solid red";
        imagens[position].style.opacity = 1;
    }

    btnNext.addEventListener("click",()=>{ avancar() })
    btnBack.addEventListener("click",()=>{ voltar() })

    let avancarQuadro = setInterval(avancar, 5000);

    container.onmouseover = function(){
        clearInterval(avancarQuadro)
    }
    container.onmouseout = function(){
        avancarQuadro = setInterval(avancar, 5000);
    }
}