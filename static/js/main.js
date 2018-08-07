
let pos = 0;
let turno = 0;
let txtBanner = ["Colegio Paula Montal","Egresada 2017"];
let tipeo = document.querySelector('#tipeo-contenedor');
const speed = 250;

setTimeout(autoTipeo, speed);

function autoTipeo() {
  if (pos < txtBanner[turno].length) {
    tipeo.innerHTML += txtBanner[turno].charAt(pos);
    pos++;
    setTimeout(autoTipeo, speed);
  } else {
  	setTimeout(borrarTipeo, speed+100);
  }
}

function borrarTipeo() {
	if (pos >= 0) {
      var str=txtBanner[turno].toString().substring(0, pos);
      tipeo.innerHTML = str;
      pos--;
      setTimeout(borrarTipeo, speed-100);
    } else {
      turno++;
      if(turno>=txtBanner.length) 
        turno=0;
      setTimeout(autoTipeo, speed);
    }
}