class UI {
    static mostrarFotos(){
        const template = `${fotos.map(foto =>
           `<img src="${foto.imagen}">`).join('')}`;
        document.querySelector('#template').innerHTML = template;
    
    }
}
// UI.mostrarFotos();