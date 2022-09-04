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

  const node = document.createElement("div");
  node.classList.add("block");
  node.style.cssText = `
  position: absolute;
  height: 50px;
  width: 1px;
  top: 200px;
  left: 500px;
  opacity: 0;
  `;
}

/* End of: function to be fired after the page has loaded */
