document.addEventListener("DOMContentLoaded", function () {
  const hamburguer = document.querySelector(".hamburguer");
  const navList = document.querySelector("#navList");

  hamburguer.addEventListener("click", function () {
    navList.classList.toggle("active");
    hamburguer.classList.toggle("active");
  });
});
