var app = angular.module('myApp', ['ngRoute'])
app.config(function($routeProvider) {
	$routeProvider
		.when('/Lviv', {
			template : '<h1>Lviv</h1><p>is the largest city in western Ukraine and the seventh-largest city in the country overall, with a population of around 728,350 as of 2016. Lviv is one of the main cultural centres of Ukraine.</p>'
		})
		.when('/Kharkiv', {
			template : '<h1>Kharkiv</h1><p>is the second-largest city in Ukraine.The city was the first capital of the Ukrainian Soviet Socialist Republic, from December 1919 to January 1934.Population: 1, 439,036 (2017 est.)</p>'
		})
		.otherwise({
			template : '<h1>Kyiv</h1><p>is the capital and largest city of Ukraine, located in the north central part of the country on the Dnieper.The population in July 2015 was 2,887,974</p>'
		})
})
app.controller('citiesCtrl', function ($scope) {
	$scope.city = 'Kyiv'
})
