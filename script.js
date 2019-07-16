function embaralhar(lista) {
    let valor_temporario;
    let indice_aleatorio;
  
    for (let i = lista.length -1; i !== 0; i--) {
        indice_aleatorio = Math.floor(Math.random() * i);
  
        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_temporario;
    }
    return lista;
  }
  
  let cartas = document.querySelectorAll(".carta");

  let cartaVirada = null;
  
  let imagensSalvas = ["Coco.png", "crash.png", "FakeCrash.png", "Neo.png", "Oxide.png", "Penta.png", "Pura.png", "RipperRoo.png"];
  
  let imagens = imagensSalvas.concat(imagensSalvas);
  
  imagens = embaralhar(imagens);
  
  for(let i = 0; i < cartas.length; i++){
    cartas[i].style.backgroundImage = `url("imagens/${imagens[i]}")`;
  }
  
  setTimeout(function(){
    for(let carta of cartas){
      carta.style.backgroundImage = 'url("imagens/caixa.png")';
      carta.onclik = function(){

          if(cartaVirada && cartaVirada.id !== carta.id){

        }
        else{}

          carta.style.backgroundImage = 'url("imagens/${imagens[Number(carta.id)]}")';
          carta.onclik = null;
      }
    }
  }, 3000);  