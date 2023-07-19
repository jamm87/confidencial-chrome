// Escuchar cuando se carga la página
window.addEventListener('load', function() {
    // Obtener todos los elementos con la clase específica
    var elements = document.getElementsByClassName('newsType__content--closed');
  
    // Aplicar los estilos deseados a cada elemento
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'block';
      // Agrega aquí cualquier otra propiedad que desees modificar
    }
  });
