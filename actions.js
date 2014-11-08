var fn = {
    init: function() {
        alert(1);
        navigator.geolocation.getCurrentPosition(geoloc.onSuccess, geoloc.onError);
        if(geoloc.lat != null && geoloc.lon != null){
            //Posición del mapa
            var latlng = new google.maps.LatLng(geoloc.lat, geoloc.lon);
            var myOptions = {
                zoom: 8,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
            //Marcador
            var marker = new google.maps.Marker({
                position: latlng, 
                map: map,
                title:"Mi posición"
            });
        }else{
            $('#map_canvas').text('Error al asignar latitud y longitud');
        }
    }
};
$(geoloc.deviceready);

var geoloc = {
    lat: null,
    lon: null,
    deviceready: function(){
        alert();
        document.addEventListener('deviceready',fn.init,false);
    },
    onSuccess: function(position){
        alert(2);
        geoloc.lat = position.coords.latitude;
        geoloc.lon = position.coords.longitude;
    },
    onError: function(error){
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
}