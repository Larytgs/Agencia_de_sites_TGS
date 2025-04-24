window.addEventListener("scroll", function () {
  const menu = document.getElementById("menuOculta");
  if (window.scrollY > 0) {
    menu.classList.add("fixo");
  } else {
    menu.classList.remove("fixo");
  }
});
