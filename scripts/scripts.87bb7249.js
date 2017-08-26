"use strict";angular.module("capstoneApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMap","ngStorage"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).otherwise({redirectTo:"/"})}]),angular.module("capstoneApp").controller("MainCtrl",["$scope",function(a){a.center=[47.6062,-122.3321],a.latlng=[47.6062,-122.3321],a.getpos=function(b){a.lat=b.latLng.lat(),a.lng=b.latLng.lng(),a.latlng=[b.latLng.lat(),b.latLng.lng()]},a.placeMarker=function(){console.log(this.getPlace());var b=this.getPlace().geometry.location;a.latlng=[b.lat(),b.lng()],a.center=[b.lat(),b.lng()]}}]),angular.module("capstoneApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("capstoneApp").factory("current",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("capstoneApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="jumbotron"> <h1>About</h1> <p class="lead"> This application will help users find attractions in an area around them. </p> <p> I\'m a student that is currently a part of the WATS program at Seattle University, and this is my capstone project for the program. All of this work includes bits and pieces of everything I learned in this program including HTML, CSS, Javascript, scafolding via Yeoman, etc. </p></div>'),a.put("views/current.html",""),a.put("views/main.html",'<div ng-app class="map" ng-controller="MainCtrl"> <p class="lead"> <div class="pac-card" id="pac-card"> <div> <div id="title"> <h1> CityLife Search</h1> </div> </div> <body ng-controller="MainCtrl"> <input places-auto-complete types="[\'geocode\']" on-place-changed="placeMarker()"> <ng-map id="mapa" center="{{center}}" zoom="15" on-click="getpos($event)"> <marker position="{{latlng}}" on-dragend="getpos($event)" animation="Animation.BOUNCE" animation="DROP" draggable="true"></marker> </ng-map> {{latlng}} </body></div></p></div>')}]);