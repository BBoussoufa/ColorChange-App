
const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];

function generate() {
  const randomColor =
    COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = randomColor;
  li.style.backgroundColor = randomColor;
  ul.appendChild(li);
}

function reset() {
  const childs = ul.querySelectorAll("li");
  body.style.backgroundColor = "white";
  const arrEl = Array.from(childs);
  for (let i = 0; i <= arrEl.length; i++) {
    arrEl[0].remove(i); // removes one by one
    // arrEl[i].remove()  // reset everything at once
  }
}

const ul = document.getElementById("color-list");
const button = document.getElementById("generate-color");
const button1 = document.getElementById("reset");
const body = document.querySelector("body");

button.addEventListener("click", generate);
button1.addEventListener("click", reset);





