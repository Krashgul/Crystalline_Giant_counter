
const SYMBOLS_COUNTERS = ["flying", "first_strike", "deathtouch", "hexproof", "lifelink", "menace", "reach", "trample",
  "vigilance", "Power"
];

let cards = document.querySelectorAll("div.counter");

cards = [...cards]; //10

let activeCard = "";

const clickCard = function () {
  // console.log("klik")
  activeCard = this;
  console.log(this);
  activeCard.classList.remove("crystal");
  activeCard.classList.remove("counter");
  activeCard.classList.remove("card");
  activeCard.innerHTML = `<p>${(this.className)}</p>`;
  activeCard.classList.add("counter")
};

const init = () => {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * SYMBOLS_COUNTERS.length);
    card.classList.add(SYMBOLS_COUNTERS[position]);
    SYMBOLS_COUNTERS.splice(position, 1);
  })

  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("crystal")
      card.addEventListener("click", clickCard)
    })
  }, 1);
}


init()