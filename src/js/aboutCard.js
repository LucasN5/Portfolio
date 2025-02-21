document.addEventListener("DOMContentLoaded", () => {
  const cardNumber1 = document.getElementById("aboutCardsNumber1");
  const cardNumber2 = document.getElementById("aboutCardsNumber2");
  const cardNumber3 = document.getElementById("aboutCardsNumber3");
  const cardNumber4 = document.getElementById("aboutCardsNumber4");

  let cardCount1 = 0;
  let cardCount2 = 0;
  let cardCount3 = 0;
  let cardCount4 = 0;

  const intervalCard1 = setInterval(() => {
    if (cardCount1 >= 10) {
      clearInterval(intervalCard1);
      return;
    }

    cardCount1++;
    cardNumber1.innerHTML = cardCount1;
  }, 100);

  const intervalCard2 = setInterval(() => {
    if (cardCount2 >= 2) {
      clearInterval(intervalCard2);
      return;
    }

    cardCount2++;
    cardNumber2.innerHTML = cardCount2;
  }, 100);

  const intervalCard3 = setInterval(() => {
    if (cardCount3 >= 195) {
      clearInterval(intervalCard3);
      return;
    }

    cardCount3++;
    cardNumber3.innerHTML = cardCount3;
  }, 100);

  const intervalCard4 = setInterval(() => {
    if (cardCount4 >= 22) {
      clearInterval(intervalCard4);
      return;
    }

    cardCount4++;
    cardNumber4.innerHTML = cardCount4;
  }, 100);
});

/* card1 = 10 card 2 = 2 card 3 = 195 card 4 = 22*/
