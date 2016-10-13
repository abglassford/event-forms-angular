(function() {
  'use strict';

  const app = angular.module('exercisesApp');

  app.controller('reverseController', reverseController)
  app.controller('pingPongController', pingPongController)

  function reverseController () {
    this.reverseString = function (input) {
      let newString = input.split('').reverse().join('')
      this.input = newString
    }
  }

  function pingPongController () {

    this.player1 = {
      score: 0,
      serving: true,
      winner: false,
      loser: false,
      wins: 0,
      losses: 0
    }
    this.player2 = {
      score: 0,
      serving: false,
      winner: false,
      loser: false,
      wins: 0,
      losses: 0
    }
    this.game = {
      point: 1,
      playing: true
    }

    this.play = function (player) {
      const p1 = this.player1;
      const p2 = this.player2;

      if (p1.winner === false && p2.winner === false) {
        this.game.point++
        player.score++
        if (this.game.point % 2 === 0) {
          p1.serving = !p1.serving
          p2.serving = !p2.serving
        }
        if (p1.score >= 11 && p2.score < p1.score - 1) {
          p1.winner = true
          p2.loser = true
          p1.wins++
          p2.losses++
          this.game.playing = false
        } else if (p2.score >= 11 && p1.score < p2.score - 1) {
          p2.winner = true
          p1.loser = true
          p2.wins++
          p1.losses++
          this.game.playing = false
        }
      }
    }

    this.reset = function () {
      this.player1.score = 0
      this.player1.serving = true
      this.player1.winner = false
      this.player1.loser = false
      this.player2.score = 0
      this.player2.serving = false
      this.player2.winner = false
      this.player2.loser = false
      this.game.point = 1
    }
  }

}());
