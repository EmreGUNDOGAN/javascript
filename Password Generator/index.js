passwordFirstEl = document.getElementById("passwordFirst-El");
passwordSecondEl = document.getElementById("passwordSecond-El");
passwordThirdEl = document.getElementById("passwordThird-El");
passwordFourthEl = document.getElementById("passwordFourth-El");

// Text-Copy

function myFunction() {
  /* Get the text field */
  let copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

// Slide-Continer

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.textContent = slider.value;
slider.oninput = function () {
  output.textContent = this.value;
};

// End of Slide-Container

function generatePassword() {
  // First Password
  {
    let setLength = slider.value;
    let length = setLength,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'^+%&/()=?_-*",
      password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordFirstEl.textContent = password;
  }
  

  // Second Password
  {
    let setLength = slider.value;
    let length = setLength,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'^+%&/()=?_-*",
      password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordSecondEl.textContent = password;
  }
  // Third Password
  {
    let setLength = slider.value;
    let length = setLength,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'^+%&/()=?_-*",
      password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordThirdEl.textContent = password;
  }
  // Fourth Password
  {
    let setLength = slider.value;
    let length = setLength,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'^+%&/()=?_-*",
      password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordFourthEl.textContent = password;
  }
}
