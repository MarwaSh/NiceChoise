angular
    .module('niceChoice')
    .component('googleBusinessCard', {
        templateUrl: 'googleBusinessCard/googleBusinessCard.template.html',
        controller: GoogleBusinessCardController,
        bindings: {
            id: '<'
        }
    });

GoogleBusinessCardController.$inject = ['$element'];
function GoogleBusinessCardController($element) {

    var buildGoogleCard = function (id) {
        //$element
        console.log('id: ', id);
    }

    this.$onInit = function (changesObj) {
        buildGoogleCard(this.id)
    }
}