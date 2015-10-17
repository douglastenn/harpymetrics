'use strict';

angular.module('categories').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    $stateProvider

        .state('categories', {
            url: '/admin/reports/categories',
            templateProvider: function($templateCache){
				return $templateCache.get('categories.client.view.html');
			}
        });
	}
]);
