const submitBtn = document.querySelector("#submit-btn");
const colorSeed = document.querySelector("#colorSeed");
const selectMode = document.querySelector("#select-mode");
const rangeCount = document.getElementById("range-count");

function getRangeCountHtml(val) {
  rangeCount.innerHTML = val;
}

//default color scheme

fetch(" https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6")
  .then((res) => res.json())
  .then((data) => {
    let html = "";

    for (let i = 0; i < 6; i++) {
      html += `
      <div class="color-holder" id="color-holder" onclick="copyColorValue(this)"  >
        <div class="color" style="background-color:${data.colors[i].hex.value}" ></div>
        <p id="hexCode"  >${data.colors[i].hex.value}</p>
      </div>
      `;
      document.getElementById("color-container").innerHTML = html;
    }
  });

//generate color after get color scheme

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const range = document.getElementById("range");
  let rangeValue = range.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorSeed.value.slice(1)}&mode=${
      selectMode.value
    }&count=${rangeValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = "";

      for (let i = 0; i < rangeValue; i++) {
        html += `
      <div class="color-holder" id="color-holder" onclick="copyColorValue(this)" >
        <div class="color" style="background-color:${data.colors[i].hex.value}" ></div>
        <p id="hexCode"  >${data.colors[i].hex.value}</p>
      </div>
      `;
      }

      document.getElementById("color-container").innerHTML = html;
    });
});

function copyColorValue(element) {
  let value = element.children[1].textContent;
  navigator.clipboard.writeText(value);

  tooltip.style.display = "block";

  setTimeout(() => {
    tooltip.style.display = "none";
  }, 300);
}
