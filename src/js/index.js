document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".contactIcons li").forEach(function (li) {
    li.addEventListener("click", function () {
      var url = li.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
