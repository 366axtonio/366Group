document.querySelector(".menu-button").addEventListener("click", () => {
  const menu = document.querySelector(".sidebar");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});
