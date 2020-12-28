if (window.performance.navigation.type == 1) {
  var RandomDice1 = Math.floor(Math.random() * 6) + 1;
  var RandomDice2 = Math.floor(Math.random() * 6) + 1;

  if (RandomDice1 > RandomDice2) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
  } else if (RandomDice1 == RandomDice2) {
    document.querySelector("h1").innerHTML = "Draw";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Won";
    
  }
  document
    .querySelector("img.img1")
    .setAttribute("src", "images/dice" + RandomDice1 + ".png");
  document
    .querySelector("img.img2")
    .setAttribute("src", "images/dice" + RandomDice2 + ".png");
}
