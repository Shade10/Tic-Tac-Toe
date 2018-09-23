$(document).ready(function () {

  var playerX = 'X';
  var playerO = 'O';
  var currentTurn = 1;
  var movesMade = 0;

  // var sqr = document.querySelectorAll('.square');
  var sqr = $(".square");
  var theWinnerIs = $('.winner');
  var reset = $('.reset');

  // sqr.addEventListener(function(){
  // })
  sqr.on('click', function (e) {
    movesMade++;

    if (currentTurn === 1) {
      event.target.innerHTML = playerX;
      event.target.style.color = 'red';
      currentTurn++;
    } else {
      event.target.innerHTML = playerO;
      event.target.style.color = 'goldenrod';
      currentTurn--;
    }

    if (checkIfSomeoneWin()) {
      var theWinner = currentTurn === 1 ? playerO : playerX;
      declareWinner(theWinner)
    }
  });


  function checkIfSomeoneWin() {
    if (movesMade > 4) {
      var moves = Array.prototype.slice.call($('.square'));
      var results = moves.map(function (square) {
        return square.innerHTML;
      });

      var winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      return winningCombos.find(function (combo) {
        if (results[combo[0]] !== "" && results[combo[1]] !== ""
          && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]]
          && results[combo[1]] === results[combo[2]]) {
          return true;
        } else {
          return false;
        }
      })
    }
  }

  function declareWinner(winner) {
    theWinnerIs.css('display', "block");
    reset.css('display', 'block');
    winner = winner === playerX ? 'X' : 'O';
    theWinnerIs.html(winner + " Wins!");
  }

  reset.on('click', function (e) {
    var moves = Array.prototype.slice.call($(".square"));
    moves.map(function (item) {
      return item.innerHTML = "";
    });
    theWinnerIs.html('');
    theWinnerIs.css('display', "none");
    currentTurn = 1;
  })

})


