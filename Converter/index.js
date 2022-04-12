let metersEl = document.getElementById("meters");
let feetEl = document.getElementById("feet");
let gallonsEl = document.getElementById("gallons");
let litersEl = document.getElementById("liters");
let poundsEl = document.getElementById("pounds");
let kilosEl = document.getElementById("kilos");

function convert(valueNum) {
  // Meters to Feet

  let metersValue = (valueNum * 3.2808399).toFixed(3);
  metersEl.textContent = `${valueNum} meters = ${metersValue} feets`;

  //   Feet to Meters

  let feetValue = (valueNum / 3.2808399).toFixed(3);
  feetEl.textContent = `${valueNum} feet = ${feetValue} meters`;

  //   Liters to Gallons
  let literValue = (valueNum / 3.78541178).toFixed(3);
  litersEl.textContent = `${valueNum} liters = ${literValue} gallons`;

  //  Gallons to Liters
  let gallonValue = (valueNum * 3.78541178).toFixed(3);
  gallonsEl.textContent = `${valueNum} gallons = ${gallonValue} liters`;

  //  Kilos to Pound
  let kiloValue = (valueNum * 2.20462262).toFixed(3);
  kilosEl.textContent = `${valueNum} kilos = ${kiloValue} pound`;

  // Pounds to Kilos
  let poundValue = (valueNum / 2.20462262).toFixed(3);
  poundsEl.textContent = `${valueNum} pounds = ${poundValue} kilos`;
}
