'use strict';

/**
 * @ngdoc service
 * @name capstoneApp.current
 * @description
 * # current
 * Factory in the capstoneApp.
 */
angular.module('capstoneApp')
  .factory('current', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
