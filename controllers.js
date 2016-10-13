(function() {
  'use strict';

  const app = angular.module('exercisesApp');

  app.controller('reverseController', reverseController)
  app.controller('pingPongController', pingPongController)
  app.controller('MouseEnterController', MouseEnterController)

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
      number: 1,
      point: 0
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
          this.game.number++
        } else if (p2.score >= 11 && p1.score < p2.score - 1) {
          p2.winner = true
          p1.loser = true
          p2.wins++
          p1.losses++
          this.game.number++
        }
      }
    }
    this.reset = function () {
      this.player1.score = 0
      this.player1.winner = false
      this.player1.loser = false
      this.player2.score = 0
      this.player2.winner = false
      this.player2.loser = false
      this.game.point = 0
      if (this.game.number % 2 === 0) {
        this.player1.serving = false
        this.player2.serving = true
      }
    }
  }

  function MouseEnterController () {
      this.pickRandomNumber = function() {
      this.view.number = Math.floor(Math.random() * 10) + 1;
    };
      this.view = {};
      this.view.number = 5;
      this.view.enterCount = 0;
      this.colors = []
      this.randomColor = function () {
        var x = Math.round(0xffffff * Math.random()).toString(16);
        var y = (6-x.length);
        var z = "000000";
        var z1 = z.substring(0,y);
        var color = "#" + z1 + x;
        this.colors.push(color)
        return color;
      }

      this.saveColor = function () {

      }


      var replaying = false;

      this.replay = function() {
        var displayPrevColor = function() {
          // do some logic to change color
          // if done replay colors
          replaying = false;
          // else
          $timeout(displayPrevColor, 1000);
          // end if/else
        };
        if (!replaying) {
          replaying = true;
          // This timeout starts the timeout loop
          $timeout(function() { displayPrevColor(); }, 500);
        }
      };
  }


}());
