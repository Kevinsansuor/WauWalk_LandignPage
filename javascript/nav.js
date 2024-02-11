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

// Seleccionamos el elemento "navMobile-contenido"
const navMobileContenido = document.querySelector(".navMobile-contenido");

// Agregamos un evento "click" al elemento
navMobileContenido.addEventListener("click", function() {
  // Función que se ejecuta al hacer clic en el elemento

  const menu = document.querySelector(".links-contenido");

  // Cambiamos la condición del `if`
  if (menu.classList.contains("active")) {
    // Eliminar la clase "active"
    menu.classList.remove("active");
  } else {
    // Añadir la clase "active"
    menu.classList.add("active");
  }
});


