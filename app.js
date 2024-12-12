



// toggle de productos
function toggle(id) {

  

  let contenido = document.querySelectorAll('.mn_principal');
  contenido.forEach(function(mn_principal) {
    if (mn_principal.id === id) {
      mn_principal.style.display = 'block';
    } else {
      mn_principal.style.display = 'none';
    }
  });

}


