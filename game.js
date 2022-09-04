window.addEventListener("load", game);

/* Start of: function to be fired after the page has loaded */
function game() {
  // Setting up variables and assigning elements
  let score = 0;
  const scoreLog = document.querySelector("#status");
  const boundary = document.querySelectorAll("#game .boundary");
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const resultLog = document.querySelector(".example");
  const boundary1 = document.querySelector("#boundary1");
  // When status is true, the game is paused until reset or restart
  let status = false;

  // Centering the score and the result
  scoreLog.style.textAlign = "center";
  resultLog.style.textAlign = "center";

  /* Creating, styling, and adding ".block" to block the user from reaching the end target from the body path */
  const node = document.createElement("div");
  node.classList.add("block");
  boundary1.appendChild(node);
  node.style.cssText = `
  position: absolute;
  height: 50px;
  width: 1px;
  top: 200px;
  left: 500px;
  opacity: 0;
  `;

  // Adding event listeners
  start.addEventListener("mouseover", resetBoundaries);
  start.addEventListener("mouseover", resetStatus);
  start.addEventListener("click", restart);
  end.addEventListener("mouseover", win);
  for (let i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseover", lose);
  }

  // Changing borders to red, decreasing and displaying the score
  function lose() {
    if (!status) {
      status = true;
      score -= 10;
      scoreLog.innerText = "Your score: " + score;
      boundary.forEach((element) => {
        element.style.border = "1px solid red";
      });
      boundary[1].style.borderLeft = "none";
      boundary[1].style.borderRight = "none";
      boundary[4].style.borderBottom = "none";

      // Adding the class ".youlose" to display the result in red bg
      resultLog.classList.add("youlose");
      resultLog.innerText = "You lose!";
    }
  }

  // Resetting boundaries
  function resetBoundaries() {
    boundary.forEach((element) => {
      element.style.border = "1px solid black";
    });
    boundary[1].style.borderLeft = "none";
    boundary[1].style.borderRight = "none";
    boundary[4].style.borderBottom = "none";
  }

  // Resetting borders, increasing and displaying the score
  function win() {
    if (!status) {
      status = true;
      score += 5;
      scoreLog.innerText = score;
      resultLog.innerText = "You win!";
      resetBoundaries();
    }
  }

  // Resetting result, status, and boundaries
  function resetStatus() {
    status = false;
    resultLog.innerText = "";
    resultLog.classList.remove("youlose");
  }
}

/* End of: function to be fired after the page has loaded */
