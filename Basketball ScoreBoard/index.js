const homeBtn = document.querySelectorAll(".home-btn");
const guestBtn = document.querySelectorAll(".guest-btn");
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
const newGameBtn = document.getElementById("new-game-btn");

let homeTeamScore = 0;
let guestTeamScore = 0;

function ifWinner() {
  if (homeTeamScore > guestTeamScore) {
    homeScore.classList.add("winnerHighlight");
    guestScore.classList.remove("winnerHighlight");
  } else if (guestTeamScore > homeTeamScore) {
    guestScore.classList.add("winnerHighlight");
    homeScore.classList.remove("winnerHighlight");
  } else {
    guestScore.classList.remove("winnerHighlight");
    homeScore.classList.remove("winnerHighlight");
  }
}
ifWinner();

homeScore.textContent = 0;
guestScore.textContent = 0;

function newGameRender() {
  newGameBtn.addEventListener("click", () => {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeTeamScore = 0;
    guestTeamScore = 0;
    ifWinner();
  });
}
newGameRender();

function increment() {
  homeBtn.forEach((button) => {
    button.addEventListener("click", () => {
      homeScore.textContent = homeTeamScore += Number(button.value);

      ifWinner();
    });
  });
  guestBtn.forEach((button) => {
    button.addEventListener("click", () => {
      guestScore.textContent = guestTeamScore += Number(button.value);
      ifWinner();
    });
  });
}
increment();
