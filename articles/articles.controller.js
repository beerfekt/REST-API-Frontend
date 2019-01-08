    'use strict';

    angular
        .module('myApp')
        .controller('ArticlesController', ArticlesController);

    /** @ngInject */
    function ArticlesController($state, $scope, $http){
        var vm = this;

        vm.goHome = goHome;
        vm.showArticles = showArticles;
        vm.showArticleDetails = showArticleDetails;

        //Go to home
        function goHome(){
            $state.go('home');
        }

        function showArticles(){
            //TODO: AJAX erfüllt? Was macht promise von Jonas
            $http({
                method : "GET",
                url : "http://rest-tutorial.test/api/articles/list"
            }).then(function mySuccess(response) {
                $scope.articles = response.data;
            }, function myError(response) {
                $scope.articles = [{"title":"keine Artikel vorhanden!"}];
            });
        }


        //Click Detail of Article

        function showArticleDetails($articleId){
            console.log($articleId);

            let urlString = "http://rest-tutorial.test/api/articles/list/"+$articleId;

            //TODO: Klickbar machen (sichtbar)
            //TODO: reduntanten code auslagern (methode oder besser: service?)
            $http({
                method : "GET",
                url : urlString
            }).then(function mySuccess(response) {
                $scope.article = response.data;
                console.log($scope.article.title + "\n" + $scope.article.content);
            }, function myError(response) {
                $scope.article = [{"title":"keine Artikelbeschreibung verfügbar!"},{"content":""}];
            });

        }



    };