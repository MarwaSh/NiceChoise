angular
    .module('niceChoice')
    .component('lunchList', {
        templateUrl: 'lunchList/lunchList.template.html',
        controller: LunchListController
    });

LunchListController.$inject = ['$http'];
function LunchListController($http) {
    this.title = 'Lunch Options';

    //$http.get();
    this.lunchList = [
        {
            id: 1,
            title: 'lunch 1'
        },
        {
            id: 2,
            title: 'lunch 2'
        },
        {
            id: 3,
            title: 'lunch 3'
        }
    ];
}