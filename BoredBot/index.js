const boredBtn = document.getElementById("boredBtn");
const $title = document.getElementById("title");

boredBtn.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      boredBtn.style.backgroundColor = "#ABEDA1";
      $title.textContent = `🤗 HappyBot 🤗`;
      $title.style.color = "#FDD689";
    });
});
