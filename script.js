let passwordInputElement = document.getElementById("password");
let conformPasswordInputElement = document.getElementById("conform-password");
let passwordConformation = document.querySelector(
  ".form-one div:nth-child(3) > p "
);
let temp;

let getValidPassword = () => {
  passwordInputElement.classList.remove("error");
  conformPasswordInputElement.classList.remove("error");

  passwordInputElement.classList.add("valid");
  conformPasswordInputElement.classList.add("valid");

  passwordConformation.innerText = "*Password do match";

  passwordConformation.style.color = "green";
};

let getInvalidPassword = () => {
  passwordInputElement.classList.remove("valid");
  conformPasswordInputElement.classList.remove("valid");

  passwordInputElement.classList.add("error");
  conformPasswordInputElement.classList.add("error");

  passwordConformation.innerText = "*Password do not match";

  passwordConformation.style.color = "red";
};

let checkValidPassword = () => {
  if (temp === conformPasswordInputElement.value) {
    getValidPassword();
  } else if (temp !== conformPasswordInputElement.value) {
    getInvalidPassword();
  }
};

conformPasswordInputElement.onkeyup = () => {
  return checkValidPassword();
};
