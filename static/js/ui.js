const galeria = document.querySelector('#galeria');
galeria.addEventListener('click',mostrarGaleria);

function mostrarGaleria(){
    mostrarFotos();
}

function mostrarFotos(){
        let template = 
        `<div class="img-container">
        ${fotos.map(foto =>
          `<img src="${foto.imagen}">
           `).join('')}</div>`;
        document.querySelector('#main-template').innerHTML = template;
    
    }




