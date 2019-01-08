'use strict';

angular
    .module('myApp')
    .controller('HomeController', HomeController);

/** @ngInject */
function HomeController($state){
    var vm = this;

    vm.goToArticles=goToArticles;

    //Go to courses
    function goToArticles(){
        $state.go('articles');
    }

};