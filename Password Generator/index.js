let firstPass = document.getElementById("passwordFirst-El");
let secondPass = document.getElementById("passwordSecond-El");
let thirdPass = document.getElementById("passwordThird-El");
let fourthPass = document.getElementById("passwordFourth-El");

// Slide-Continer

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.textContent = slider.value;
slider.oninput = function () {
  output.textContent = this.value;
};

// End of Slide-Container

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'^+%&/()=?_-*";
const setLength = slider.value;
const length = setLength;
let isClicked = false

function generatePassword(){
    let password = ""
    for (let i = 0; i < slider.value; i++) {
      for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
    let total = password.length / length
    let divideArr = password.match(new RegExp(".{0," + total + "}", "g"));
    firstPass.textContent = divideArr[0];
    secondPass.textContent = divideArr[1];
    thirdPass.textContent = divideArr[2];
    fourthPass.textContent = divideArr[3];
}

//Copying Value
//Success Message


function myFunction(element){
  toastr.options = {
    positionClass: "toast-top-center",
    progressBar: true,
    showDuration: "200",
    hideDuration: "1000",
    timeOut: "2000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
    let value = element.textContent;
    navigator.clipboard.writeText(value);
    toastr.success("Copied!");
}
