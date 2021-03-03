
const SYMBOLS_COUNTERS = ["flying", "first_strike", "deathtouch", "hexproof", "lifelink", "menace", "reach", "trample",
 "vigilance", "power"];

let COUNTERS = document.querySelectorAll("div.counter");

COUNTERS = [...COUNTERS]; //10

let ACTIVE_COUNTERS = "";

const clickCOUNTERS = function () {
 console.log("klik")
 ACTIVE_COUNTERS = this;
 ACTIVE_COUNTERS.classList.remove("crystal");
 ACTIVE_COUNTERS.classList.remove("counter");
 ACTIVE_COUNTERS.innerHTML = `<p>${(this.className)}</p>`;
 ACTIVE_COUNTERS.classList.add("counter");
 console.log(this);
 if (ACTIVE_COUNTERS.className == "first_strike counter") {
  ACTIVE_COUNTERS.innerHTML = `<p>first strike</p>`;
 };

};

const init = () => {
 COUNTERS.forEach(COUNTER => {
  const position = Math.floor(Math.random() * SYMBOLS_COUNTERS.length);
  COUNTER.classList.add(SYMBOLS_COUNTERS[position]);
  SYMBOLS_COUNTERS.splice(position, 1);
 })

 setTimeout(() => {
  COUNTERS.forEach(COUNTER => {
   COUNTER.classList.add("crystal")
   COUNTER.innerHTML = `<p color=#333 !important;>counter</p>`
   COUNTER.addEventListener("click", clickCOUNTERS)
  })
 }, 1);
}


init()