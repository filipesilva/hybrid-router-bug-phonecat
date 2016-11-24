'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider: angular.ILocationProvider) {
      $locationProvider.hashPrefix('!');
    }
  ]);
