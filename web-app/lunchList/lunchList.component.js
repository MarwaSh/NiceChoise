angular
    .module('niceChoice')
    .component('lunchList', {
        templateUrl: 'lunchList/lunchList.template.html',
        controller: LunchListController
    });

function LunchListController() {

    this.title = 'Lunch List component'
}