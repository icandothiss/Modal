const openButton = document.getElementById("open");
const container = document.getElementById("container");
const closeButton = document.getElementById("close");

openButton.addEventListener("click", open);
closeButton.addEventListener("click", close);
window.addEventListener("click", function (e) {
  if (container.contains(e.target) || e.target.classList.contains("open")) {
    console.log("in");
    openButton.classList.remove("open");
  } else {
    console.log("out");
    container.classList.add("hidden");
    container.classList.remove("animate");
    openButton.classList.add("open");
  }
});

function open() {
  if (container.classList.contains("hidden")) {
    openButton.classList.add("open");
  }
  container.classList.remove("hidden");
  container.classList.add("animate");
}

function close() {
  container.classList.add("hidden");
  container.classList.remove("animate");
}
