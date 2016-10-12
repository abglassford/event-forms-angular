(function() {
  'use strict';

  const app = angular.module('exercisesApp');

  app.controller('reverseController', function () {
    this.reverseString = function (input) {
      let newString = input.split('').reverse().join('')
      this.reversedString = newString
    }
  })
}());
