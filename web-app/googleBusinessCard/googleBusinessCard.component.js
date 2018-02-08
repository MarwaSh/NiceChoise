angular
    .module('niceChoice')
    .component('googleBusinessCard', {
        templateUrl: 'googleBusinessCard/googleBusinessCard.template.html',
        controller: GoogleBusinessCardController,
        bindings: {
            id: '<'
        }
    });

GoogleBusinessCardController.$inject = [];
function GoogleBusinessCardController() {

    /*var initMap = function (id) {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -33.866, lng: 151.196},
            zoom: 15
        });

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
            placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4' // id
        }, function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                        'Place ID: ' + place.place_id + '<br>' +
                        place.formatted_address + '</div>');
                    infowindow.open(map, this);
                });
            }
        });
    }*/

    this.$onInit = function (changesObj) {
       // console.log('id: ', this.id);
        //  initMap(this.id)
    }
}