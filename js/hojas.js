const contenedor = document.getElementById("contenedor");
const hojas = ["hoja1.png", "hoja2.png", "hoja3.png", "hoja4.png", "hoja5.png"];

function crearHoja() {
  const hoja = document.createElement("div");
  hoja.classList.add("hoja");

  // Selecciona una hoja aleatoria
  const hojaSeleccionada = hojas[Math.floor(Math.random() * hojas.length)];
  hoja.style.backgroundImage = `url('/imagenes/hojas/${hojaSeleccionada}')`;
  hoja.style.backgroundSize = "contain";
  hoja.style.backgroundRepeat = "no-repeat";

  // Posición horizontal aleatoria
  hoja.style.left = Math.random() * window.innerWidth + "px";

  // Tamaño aleatorio
  hoja.style.width = 30 + Math.random() * 50 + "px";
  hoja.style.height = 30 + Math.random() * 50 + "px";

  // Duración y velocidad de caída
  hoja.style.animationDuration = 4 + Math.random() * 4 + "s";

  contenedor.appendChild(hoja);

  // Eliminar después de que termine la animación
  setTimeout(() => {
    hoja.remove();
  }, 9000);
}

// Crear una hoja cada 300ms
setInterval(crearHoja, 300);