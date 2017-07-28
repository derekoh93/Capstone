'use strict';

/**
 * @ngdoc function
 * @name capstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capstoneApp
 */
var app = angular.module('capstoneApp', ['ngMap']);
  app.controller('MainCtrl', function($scope,ngMap) {
  $scope.googleMapsUrl='https://maps.googleapis.com/maps/api/js?key=AIzaSyCDtnE5ga16TGvvIM6i90-3BlucdIl4DMY';
  ngMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});
