'use strict';

angular.module('searches').controller('SearchesController', ['$scope', '$http', '$stateParams', 'Search',
    function($scope, $http, $stateParams, Search) {
    
    $scope.username = $('.loggedUser').val();
        
    $scope.getWebsite = function() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            $http.get('/websites/' + $scope.harpyid)
            .success(function(website) {
                $scope.website = website;
            })
            .error(function(err) {
                console.log('Error: ' + err);
                $scope.message = {
                   texto: 'Não foi possível obter a lista.'
                };
            });
        }
    }
    $scope.getWebsite();
    
    $scope.getMostSearched = function() {
        if($stateParams.harpyid) {
            $scope.harpyid = $stateParams.harpyid;
            Search.getMostSearched($stateParams.harpyid).then(
            function success(result) {
                console.log('result', result);
                $scope.searchesMostSearched = result.data;
                $scope.drawChart( result.data );
            }, 
            function failed(err) {
                console.log('Error: ' + err);
            })
        }
    };

      $scope.drawChart = function( data ) {
                $scope.chartSearch = {};
                $scope.chartSearch.type = "PieChart";

                var arrChart = [];
                $(data).each(function(i,e) { 
                   var chart = {};
                   chart.c = [];
                    
                   chart.c.push({ v: e.search });
                   chart.c.push({ v: e.quantity });

                   arrChart.push( chart );
                });


                $scope.chartSearch.data = {"cols": [
                    {id: "t", label: "Termo da busca", type: "string"},
                    {id: "s", label: "Quantidade", type: "number"}
                ], "rows": arrChart };

            };

    $scope.getMostSearched();

  }
]);
