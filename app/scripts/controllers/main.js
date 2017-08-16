'use strict';

/**
 * @ngdoc function
 * @name capstoneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the capstoneApp
 */
 angular.module('capstoneApp')
 .controller('MainCtrl', ['$scope',
     function ($scope) {

         $scope.center = [47.6062, -122.3321];
         $scope.latlng = [47.6062, -122.3321];
         $scope.getpos = function (event) {
             $scope.lat = event.latLng.lat();
             $scope.lng = event.latLng.lng();
             $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
         };


         $scope.placeMarker = function(){
             console.log(this.getPlace());
             var loc = this.getPlace().geometry.location;
             $scope.latlng = [loc.lat(), loc.lng()];
             $scope.center = [loc.lat(), loc.lng()];
         };

     }]);
