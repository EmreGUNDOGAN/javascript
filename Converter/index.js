let metersEl = document.getElementById("meter");
let feetEl = document.getElementById("feet");
let gallonsEl = document.getElementById("gallon");
let litersEl = document.getElementById("liter");
let poundsEl = document.getElementById("pound");
let kilosEl = document.getElementById("kilo");

function convert(valueNum) {
  // Meters to Feet
  let metersValue = (valueNum * 3.2808399).toFixed(2);
  metersEl.textContent = `${valueNum} meters = ${metersValue} feets`;

  //   Feet to Meters
  let feetValue = (valueNum / 3.2808399).toFixed(2);
  feetEl.textContent = `${valueNum} feet = ${feetValue} meters`;

  //   Liters to Gallons
  let literValue = (valueNum / 3.78541178).toFixed(2);
  litersEl.textContent = `${valueNum} liters = ${literValue} gallons`;

  //  Gallons to Liters
  let gallonValue = (valueNum * 3.78541178).toFixed(2);
  gallonsEl.textContent = `${valueNum} gallons = ${gallonValue} liters`;

  //  Kilos to Pound
  let kiloValue = (valueNum * 2.20462262).toFixed(2);
  kilosEl.textContent = `${valueNum} kilos = ${kiloValue} pound`;

  // Pounds to Kilos
  let poundValue = (valueNum / 2.20462262).toFixed(2);
  poundsEl.textContent = `${valueNum} pounds = ${poundValue} kilos`;
}
