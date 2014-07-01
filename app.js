(function(){
  "use strict";
  var myApp = angular.module('myApp', ['ngTouch']);
  myApp.controller("myCtrl", function($scope) {
    var cards = [
        " J♠", " K♣", " 5♣", " 2♥", " 9♠", " A♠", " 3♥", " 6♣", " 8♦", " A♣",
        "10♠", " 5♥", " 2♦", " K♦", " 7♦", " 8♣", " 3♠", " A♦", " 7♠", " 5♠",
        " Q♦", " A♥", " 8♠", " 3♦", " 7♥", " Q♥", " 5♦", " 7♣", " 4♥", " K♥",
        " 4♦", "10♦", " J♣", " J♥", "10♣", " J♦", " 4♠", "10♥", " 6♥", " 3♣",
        " 2♠", " 9♥", " K♠", " 6♠", " 4♣", " 8♥", " 9♣", " Q♠", " 6♦", " Q♣",
        " 2♣", " 9♦"
    ];
    $scope.foo = 0;
    $scope.swipeLeft = function () {
      if ($scope.foo < 51) {
        $scope.foo++;
      }
    };
    $scope.swipeRight = function () {
      if ($scope.foo > 0) {
        $scope.foo--;
      }
    };
    $scope.pad = function() {
      var card = $scope.getCard();
      return card[0] === " ";
    };
    $scope.pad2 = function() {
      return $scope.foo + 1 < 10;
    };
    $scope.getCard = function() {
      return cards[$scope.foo];
    };
    $scope.getClass = function() {
      var card = $scope.getCard();
      var last = card[card.length - 1];
      if (last === "♦" || last === "♥") {
        return "red";
      } else {
        return "black";
      }
    }
  });
})();