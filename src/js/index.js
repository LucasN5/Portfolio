document.querySelectorAll(".contactIcons li").forEach(function (li) {
  li.addEventListener("click", function () {
    var url = li.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  });
});
