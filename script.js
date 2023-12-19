const phoneInput = document.querySelector("#phone");
const mailInput = document.querySelector("#mail");
const pwdInput = document.querySelector("#password");
const cfrmPwdInput = document.querySelector("#confirm_password");

function getHelperInput(input) {
  const helperInput = input.nextElementSibling;
  return helperInput;
}

function removeValidClass(el) {
  el.classList.remove("validInput");
  el.classList.add("invalidInput");
}

function removeInvalidClass(el) {
  el.classList.remove("invalidInput");
  el.classList.add("validInput");
}

function clearInput(input, helper) {
  input.value === ""
    ? (helper.classList.remove("validInput", "invalidInput"),
      (helper.textContent = "*"))
    : null;
}

phoneInput.addEventListener("input", () => {
  const helperInput = getHelperInput(phoneInput);

  if (phoneInput.validity.patternMismatch) {
    removeValidClass(helperInput);
    helperInput.textContent = "*Phone number format 0990099000";
    return;
  }
  removeInvalidClass(helperInput);
  helperInput.textContent = "Great job!";

  clearInput(phoneInput, helperInput);
});

mailInput.addEventListener("input", () => {
  const helperInput = getHelperInput(mailInput);

  if (mailInput.validity.typeMismatch) {
    removeValidClass(helperInput);
    helperInput.textContent = "*Example: yourmail@example.com";
    return;
  }
  removeInvalidClass(helperInput);
  helperInput.textContent = "You have a nice email ;)";

  clearInput(mailInput, helperInput);
});

pwdInput.addEventListener("input", () => {
  const helperInput = getHelperInput(pwdInput);

  if (pwdInput.validity.tooShort) {
    removeValidClass(helperInput);
    helperInput.textContent = "*Min length 5 symbols";
    return;
  }
  removeInvalidClass(helperInput);
  helperInput.textContent = "Password is good";

  clearInput(pwdInput, helperInput);
});

cfrmPwdInput.addEventListener("input", () => {
  const helperInput = getHelperInput(cfrmPwdInput);

  if (cfrmPwdInput.value !== "" && cfrmPwdInput.value === pwdInput.value) {
    removeInvalidClass(helperInput);
    cfrmPwdInput.setCustomValidity("");
    helperInput.textContent = "Password confirm!";
    return;
  } else {
    removeValidClass(helperInput);
    cfrmPwdInput.setCustomValidity(":invalid");
    helperInput.textContent = "*Passwords do not match";
  }

  clearInput(cfrmPwdInput, helperInput);
});
