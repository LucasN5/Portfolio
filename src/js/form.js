const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Enviando mensagem...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Mensagem Enviada! :)";
      } else {
        console.log(response);
        result.innerHTML =
          "A mensagem não foi enviada, me contate pelo linkedln :>";
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Algo deu errado!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 2000);
    });
});
