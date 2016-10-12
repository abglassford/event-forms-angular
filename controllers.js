(function() {
  'use strict';

  const app = angular.module('exercisesApp');

  app.controller('reverseController', function () {

    this.reverseString = function (input) {
      let newString = input.split('').reverse().join('')
      this.input = newString
    }
  })

  app.controller('pingPongController', function () {

    this.player1 = {}
    this.player2 = {}

    this.player1.score = 0;
    this.player2.score = 0;

    this.addPoint = function (player) {
      if (player.score < 11 ) {
        player.score++
      }
    }
  })

}());
