function iniciarMap() {
  var coord = {lat:-38.8535269 ,lng: -71.7118956};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
    draggable: true // Habilitar la función de arrastrar y soltar
  });

  // Escuchar el evento 'dragend' del marcador
  google.maps.event.addListener(marker, 'dragend', function() {
    // Obtener la latitud y longitud del marcador
    var latitud = marker.getPosition().lat();
    var longitud = marker.getPosition().lng();
  });

  // Escuchar el evento 'dragend' del marcador de usuario
  google.maps.event.addListener(userMarker, 'dragend', function() {
    // Obtener la latitud y longitud del marcador de usuario
    var latitud = userMarker.getPosition().lat();
    var longitud = userMarker.getPosition().lng();
  });
}
