const form = document.getElementById("form");
const luckyButton = document.getElementById("btn-lucky");
const imagesButton = document.getElementById("images_btn");

form.addEventListener("submit", (x) => {
  const input = x.target.searchbar;
  const url = `https://www.google.com/search?q=${encodeURIComponent(input.value)}`;
  window.open(url, "_blank");
});

luckyButton.addEventListener("click", () => {
  alert("You are feeling lucky");
});

function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

