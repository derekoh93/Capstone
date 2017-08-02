"use strict";angular.module("capstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).otherwise({redirectTo:"/"})}]),angular.module("capstoneApp").controller("MainCtrl",["$scope","ngMap",function(a,b){a.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDtnE5ga16TGvvIM6i90-3BlucdIl4DMY",b.getMap().then(function(a){console.log(a.getCenter()),console.log("markers",a.markers),console.log("shapes",a.shapes)})}]),angular.module("capstoneApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("capstoneApp").factory("current",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("capstoneApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <h1>About</h1> <p class="lead"> This application will help users find attractions in an area near them. </p></div>'),a.put("views/current.html",""),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Map</h1> <p class="lead"> </p></div> <div map-lazy-load="https://maps.google.com/maps/api/js" map-lazy-load-params="{{googleMapsUrl}}"> <ng-map center="41,-87" zoom="3"></ng-map> </div> <div class="row marketing"> <h4>Saved Locations</h4> <p> This section will show all of the saved sections. </p></div>')}]);