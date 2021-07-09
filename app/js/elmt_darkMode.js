// ~ Dark/Light mode

const get_body = document.querySelector("body");
const form_switch = document.getElementsByClassName("form-check-label")[0];
const input_switch = document.getElementById("flexSwitchCheckDefault");

input_switch.addEventListener("click", () => {
  if (input_switch.checked === true) {
    form_switch.innerHTML = "Light ";
    get_body.classList.toggle("dark-mode");
  }

  if (input_switch.checked === false) {
    form_switch.innerHTML = "Dark&nbsp; ";
    get_body.classList.toggle("dark-mode");
  }
});
