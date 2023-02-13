const bordRegions = document.querySelectorAll("#gameBord span");
let vBoard = [];
let turnPlayer = "";
console.log(bordRegions);

let player1 = "";
let player2 = "";

const item1 = document.getElementById("r1");
const item2 = document.getElementById("r2");
const item3 = document.getElementById("r3");
const item4 = document.getElementById("r4");
const item5 = document.getElementById("r5");
const item6 = document.getElementById("r6");
const item7 = document.getElementById("r7");
const item8 = document.getElementById("r8");
const item9 = document.getElementById("r9");

function updateTitle() {
  const player = document.getElementById("turnPlayer");
  player.innerText = " " + turnPlayer;
}

document.getElementById("start").addEventListener("click", function () {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  turnPlayer = player1;
  const player = document.getElementById("turnPlayer");
  console.log(player.innerText);
  updateTitle();

  document.querySelector("h2").innerHTML =
    'Vez de:<span id="turnPlayer">' + turnPlayer + "</span>";

  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";

  for (let i = 0; i < bordRegions.length; i++) {
    bordRegions[i].innerText = "";
  }

  vBoard = [
    ["1.1", "1.2", "1.3"],
    ["2.1", "2.2", "2.3"],
    ["3.1", "3.2", "3.3"],
  ];

  item1.classList.remove("win");
  item2.classList.remove("win");
  item3.classList.remove("win");
  item4.classList.remove("win");
  item5.classList.remove("win");
  item6.classList.remove("win");
  item7.classList.remove("win");
  item8.classList.remove("win");
  item9.classList.remove("win");

  jogar();
});

function jogar() {
  for (let i = 0; i < bordRegions.length; i++) {
    bordRegions[i].addEventListener("click", function () {
      if (turnPlayer == player1) {
        if (bordRegions[i].innerText === "X") {
          return;
        } else if (bordRegions[i].innerText === "O") {
          return;
        } else {
          bordRegions[i].innerText = "X";
          addelement("X", i);
          let ganhou = verificar();

          if (ganhou) {
            return;
          } else {
            turnPlayer = player2;
            updateTitle();
          }
        }
      } else {
        if (bordRegions[i].innerText === "X") {
          return;
        } else if (bordRegions[i].innerText === "O") {
          return;
        } else {
          bordRegions[i].innerText = "O";

          addelement("O", i);
          let ganhou = verificar();
          if (ganhou) {
            return;
          } else {
            turnPlayer = player1;
            updateTitle();
          }
        }
      }
    });
  }
}

function addelement(element, position) {
  if (position === 0) {
    vBoard[0].splice(0, 1, element);
  } else if (position === 1) {
    vBoard[0].splice(1, 1, element);
  } else if (position === 2) {
    vBoard[0].splice(2, 1, element);
  } else if (position === 3) {
    vBoard[1].splice(0, 1, element);
  } else if (position === 4) {
    vBoard[1].splice(1, 1, element);
  } else if (position === 5) {
    vBoard[1].splice(2, 1, element);
  } else if (position === 6) {
    vBoard[2].splice(0, 1, element);
  } else if (position === 7) {
    vBoard[2].splice(1, 1, element);
  } else if (position === 8) {
    vBoard[2].splice(2, 1, element);
  }

  console.log(vBoard);
}

function verificar() {
  let ganhou = false;
  for (let i = 0; i < vBoard.length; i++) {
    if (vBoard[i][0] == vBoard[i][1] && vBoard[i][1] == vBoard[i][2]) {
      ganhou = true;

      if (ganhou) {
        document.querySelector("h2").innerHTML =
          '<span id="turnPlayer"> O jogador: ' + turnPlayer + " venceu!</span>";
        if (i == 0) {
          item1.classList.add("win");
          item2.classList.add("win");
          item3.classList.add("win");
        } else if (i == 1) {
          item4.classList.add("win");
          item5.classList.add("win");
          item6.classList.add("win");
        } else {
          item7.classList.add("win");
          item8.classList.add("win");
          item9.classList.add("win");
        }
      }
      return ganhou;
    } else if (vBoard[0][i] == vBoard[1][i] && vBoard[1][i] == vBoard[2][i]) {
      ganhou = true;
      if (ganhou) {
        document.querySelector("h2").innerHTML =
          '<span id="turnPlayer"> O jogador: ' + turnPlayer + " venceu!</span>";

        if (i == 0) {
          item1.classList.add("win");
          item4.classList.add("win");
          item7.classList.add("win");
        } else if (i == 1) {
          item2.classList.add("win");
          item5.classList.add("win");
          item8.classList.add("win");
        } else {
          item3.classList.add("win");
          item6.classList.add("win");
          item9.classList.add("win");
        }
      }
      return ganhou;
    } else if (vBoard[0][0] == vBoard[1][1] && vBoard[1][1] == vBoard[2][2]) {
      ganhou = true;
      if (ganhou) {
        document.querySelector("h2").innerHTML =
          '<span id="turnPlayer"> O jogador: ' + turnPlayer + " venceu!</span>";
        item1.classList.add("win");
        item5.classList.add("win");
        item9.classList.add("win");
      }

      return ganhou;
    } else if (vBoard[0][2] == vBoard[1][1] && vBoard[1][1] == vBoard[2][0]) {
      ganhou = true;
      if (ganhou) {
        document.querySelector("h2").innerHTML =
          '<span id="turnPlayer"> O jogador: ' + turnPlayer + " venceu!</span>";
        item3.classList.add("win");
        item5.classList.add("win");
        item7.classList.add("win");
      }
      return ganhou;
    } else {
    }
  }
  return ganhou;
}
