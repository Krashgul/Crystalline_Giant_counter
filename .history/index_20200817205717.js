
const cardsCounter = ["flying", "first_strike", "deathtouch", "hexproof", "lifelink", "menace", "reach", "trample",
  "vigilance", "power"
];

let cards = document.querySelectorAll("div.counter");

cards = [...cards]; //10

let activeCard = "";

const clickCard = function () {
  // console.log("klik")
  activeCard = this;
  console.log(this);
  activeCard.classList.remove("crystal");
  activeCard.innerText = `${(this.className)}`;

};

const init = () => {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardsCounter.length);
    card.classList.add(cardsCounter[position]);
    cardsCounter.splice(position, 1);
  })

  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("crystal")
      card.addEventListener("click", clickCard)

    })
  }, 1);
}


init()