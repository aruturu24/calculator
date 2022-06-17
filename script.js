const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let math = "";

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
      math = "";
    }else if (item.id == "backspace") {
      display.innerText = display.innerText.slice(0, math.length - 1);
      math = math.slice(0, math.length - 1);
    }else if (math != "" && item.id == "equal") {
      display.innerText = eval(math).toString();
      math = eval(math).toString();
    }else if (math == "" && item.id == "equal") {
      display.innerText = "";
    }else {
      display.innerText += item.id;
      math += item.id;
    }
    DisplayTreatment();
  }
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = false;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

}

function DisplayTreatment() {
  str = math.split("");
  for (i=0; i<str.length; i++) {
    switch (str[i]) {
      case "*":
	str[i] = "X";
	break;
      case "/":
	str[i] = "÷";
	break;
    }
  }
  display.innerText = str.join("");
}
