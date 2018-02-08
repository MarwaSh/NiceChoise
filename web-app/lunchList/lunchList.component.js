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
            id: 3,
            title: 'Wok Away',
            img: 'wokaway'
        },
        {
            id: 1,
            title: 'Bang Bang',
            img: 'bangbang'
        },
        {
            id: 2,
            title: 'BBB',
            img: 'BBB'
        }
    ];
}