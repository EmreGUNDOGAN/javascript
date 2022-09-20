let taskWashCar = document.getElementById("taskWashCar");
let taskMowLawn = document.getElementById("taskMowLawn");
let taskPullWeeds = document.getElementById("taskPullWeeds");

let totalFirst = document.getElementById("totalFirst");
let totalSecond = document.getElementById("totalSecond");
let totalThird = document.getElementById("totalThird");

let washCarBtn = document.getElementById("washCarBtn");
let mowLawnBtn = document.getElementById("mowLawnBtn");
let pullWeedsBtn = document.getElementById("pullWeedsBtn");

let totalPayment = document.getElementById("payment");

const washCarObj = {
  service: "Wash Car",
  price: 10,
};

const mowLawnObj = {
  service: "Mow Lawn",
  price: 20,
};

const pullWeedsObj = {
  service: "Pull Weeds",
  price: 30,
};

let washCar = false;
let mowLand = false;
let pullWeeds = false;

const mowLawnCost = [];
const pullWeed = [];

function washCarRender() {
  let carCost = [10];
  taskWashCar.textContent = "Wash Car";
  totalFirst.textContent = carCost;

  const washCarTotal = carCost.map(function (cost) {
    const totalCar = cost;
    console.log(typeof totalCar);
    return totalCar;
  });

  const washCarTotalNum = Number(washCarTotal);

  return total.push(washCarTotalNum);
}



// if (washCar === true) {
//   totalPayment.textContent = "true";
// } else {
//   totalPayment.textContent = "false";
// }

// const washCarTotal = carCost.map(function (cost) {
//   const totalCar = cost;
//   console.log(typeof totalCar);
//   return totalCar;
// });

// const mowLandTotal = mowLawnCost.map(function (cost) {
//   const totalCarmowLand = cost;
//   console.log(typeof totalCarmowLand);
//   return totalCarmowLand;
// });

// const carTotalNum = Number(washCarTotal);
// const mowLandNum = Number(mowLandTotal);
// total = carTotalNum + mowLandNum;
// totalPayment.textContent = total;

// const total = washCarTotal + mowLandTotal;
// const totalLast = Number(total);
// console.log(typeof totalLast);

// const mowLandNum = Number(mowLandNum);

// console.log(typeof mowLandNum);

// totalPayment.textContent = washCarTotal + mowLandTotal;

// totalPayment.textContent = totalCost;
// totalFinal = carCost.map(function (costFinal) {
//   let total = costFinal;
//   return total;
// });

// function washCarRender() {
//   totalFirst.textContent = carCost;
//   const totalCarCost = carCost.map(function (cost) {
//     let carTotal = totalCost.push(cost);
//     return carTotal;
//   });

// const cost = Number([]);
// console.log(cost);
// const deneme = Number(cost);
// console.log(deneme);
// const serviceCost = new Array(1).fill(deneme);
// console.log(serviceCost);

// function washCarRender() {
//   let washCarCost = washCarObj.price;
//   cost.push(washCarCost);
//   return washCarCost;
// }
