$(document).ready(function() {

    var carrusel = $('#carrusel');
    var listaFotos = $("#lista-fotos");
    var content = "";

    $.getJSON('docs/carrusel.json', function(datos) {
      // console.log(datos);

      var urlImagenes = datos.fotos.map(function (item) {
        return item.url;
      });
      var tituloImagenes =  datos.fotos.map(function (item) {
        return item.titulo;
      });

      carrusel.empty();

      if (urlImagenes.length) {
      	for (var i = 0; i++; i<urlImagenes.length){
      		if (i==0){
      			content = '<div class="item active">';
      		}else {
						content = '<div class="item">';
      		}
      	}
      	content +='<img src="' + urlImagenes[i] + '" alt="' + tituloImagenes[i]+ '">';
      	content += '<div class="container">'+
          		'<div class="carousel-caption">'+
            	'<h1>' + tituloImagenes[i] + '</h1>' +
          '</div>'+
        '</div>';
      }

      var fotos = $("#lista-fotos").html(content);
      carrusel.append(fotos);
      //}
      //contenidos.text(datos.mensaje);

    });
    carrusel.text('Cargando el fichero JSON.');
})