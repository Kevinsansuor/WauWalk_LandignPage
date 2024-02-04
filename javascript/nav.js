// elemento .link
const links = document.querySelectorAll(".link");

// Función para añadir la clase "active" al elemento
function activarLink(event) {
  // Eliminamos la clase "active" de todos los elementos
  links.forEach((link) => link.classList.remove("active"));

  // Añadimos la clase "active" al elemento que ha recibido el click
  event.target.classList.add("active");
}

// Añadimos un evento "click" a cada elemento "link"
links.forEach((link) => link.addEventListener("click", activarLink));
