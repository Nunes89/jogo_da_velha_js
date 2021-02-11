const x = document.querySelector(".x");
const o = document.querySelector(".o");
const boxes = document.querySelectorAll(".box");
const buttons = document.querySelectorAll("#buttons-container button");
const messageContainer = document.querySelector("message");
const messageText = document.querySelector("message p");
let secondPlayer;
let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let elemento = checkElement(player1, player2);

    if (this.childNodes.length == 0) {
      let cloneDoElemento = elemento.cloneNode(true);
      this.appendChild(cloneDoElemento);

      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
    }
  });
}

function checkElement(player1, player2) {
  if (player1 == player2) {
    elemento = x;
  } else {
    elemento = o;
  }
  return elemento;
}
