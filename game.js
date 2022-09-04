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
}

/* End of: function to be fired after the page has loaded */
