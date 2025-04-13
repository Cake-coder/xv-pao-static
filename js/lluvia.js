//const contenedor = document.getElementById("contenedor");

/*function ajustarAlturaContenedor() {
    const contenedor = document.getElementById("contenedor");
    contenedor.style.height = document.body.scrollHeight + "px";
  }
  
  window.addEventListener("load", ajustarAlturaContenedor);
  window.addEventListener("resize", ajustarAlturaContenedor);
  window.addEventListener("scroll", ajustarAlturaContenedor);

function crearEstrella() {
  const estrella = document.createElement("div");
  estrella.classList.add("estrella");
  estrella.innerText = "★"; // Puedes cambiarlo por "🍂" o cualquier otro símbolo
  
  estrella.style.left = Math.random() * window.innerWidth + "px";
  estrella.style.fontSize = 10 + Math.random() * 20 + "px";
  estrella.style.animationDuration = 3 + Math.random() * 3 + "s";

  contenedor.appendChild(estrella);

  // Eliminar la estrella cuando termine de caer
  setTimeout(() => {
    estrella.remove();
  }, 6000);
}

// Crear una estrella cada 200ms
setInterval(crearEstrella, 200);*/


// Ajusta la altura del contenedor para cubrir todo el documento
/*function ajustarAlturaContenedor() {
    contenedor.style.height = document.body.scrollHeight + "px";
  }
  
  // Llamar cuando se cargue, se redimensione o se haga scroll
  window.addEventListener("load", ajustarAlturaContenedor);
  window.addEventListener("resize", ajustarAlturaContenedor);
  window.addEventListener("scroll", ajustarAlturaContenedor);
  
  function crearEstrella() {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.innerText = "★";
  
    estrella.style.left = Math.random() * window.innerWidth + "px";
    estrella.style.top = window.scrollY + "px"; // Estrella cae desde el punto de scroll actual
    estrella.style.fontSize = 10 + Math.random() * 20 + "px";
    estrella.style.animationDuration = 3 + Math.random() * 3 + "s";
  
    contenedor.appendChild(estrella);
  
    setTimeout(() => {
      estrella.remove();
    }, 6000);
  }
  
  // Crear una estrella cada 250ms
  setInterval(crearEstrella, 250);*/

  const contenedor = document.getElementById("efecto-estrellas");

  function crearEstrella() {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.innerText = "★";
  
    const maxWidth = window.innerWidth - 30;
    estrella.style.left = Math.random() * maxWidth + "px";
    estrella.style.fontSize = 10 + Math.random() * 20 + "px";
    estrella.style.animationDuration = 3 + Math.random() * 3 + "s";
  
    contenedor.appendChild(estrella);
  
    setTimeout(() => {
      estrella.remove();
    }, 6000);
  }
  
  setInterval(crearEstrella, 300);
