// Variables for input and bottom

const form = document.querySelector("form");
const bill = document.querySelector(".bill");
const tip5 = document.querySelector(".tip5");
const tip10 = document.querySelector(".tip10");
const tip15 = document.querySelector(".tip15");
const tip25 = document.querySelector(".tip25");
const tip50 = document.querySelector(".tip50");
const tipCustom = document.querySelector(".tip-custom");
const numPeople = document.querySelector(".num-people");
const tipAmountPlaceholder = document.querySelector(".inner-right-top span");
const totalPerPersonPlaceholder = document.querySelector(
  ".inner-right-bottom span"
);
const reset = document.querySelector(".rst-btn button");
const errorTxt = document.querySelector(".error");
const errorBill = document.querySelector(".error-bill");
let tipAmount;
let totalPerPerson;

function clearField() {
  setTimeout(function () {
    errorBill.textContent = "";
    errorTxt.textContent = "";
  }, 5000);
}

function validateInputFields() {
  if (bill.value === "" || bill.value === 0) {
    errorBill.textContent = "Enter bill amount!";
    clearField();
    return true;
  }
  if (numPeople.value === "" || numPeople.value === 0) {
    errorTxt.textContent = "Can't be zero";
    clearField();
    return true;
  }
}

function calcTipTotal(tipPercent) {
  tipAmount = Number(
    ((bill.value * (+tipPercent / 100)) / numPeople.value).toFixed(2)
  );
  tipAmountPlaceholder.textContent = `$${tipAmount} `;
  totalPerPerson = Number(
    ((tipAmount + Number(bill.value)) / numPeople.value).toFixed(2)
  );
  totalPerPersonPlaceholder.textContent = `$${totalPerPerson}`;
}

// Validate form inputs

form.addEventListener("click", function (e) {
  e.preventDefault();

  tip5.addEventListener("click", function () {
    if (validateInputFields() === true) return;
    calcTipTotal(5);
  });

  tip10.addEventListener("click", function () {
    if (validateInputFields() === true) return;
    calcTipTotal(10);
  });

  tip15.addEventListener("click", function () {
    if (validateInputFields() === true) return;
    calcTipTotal(15);
  });

  tip25.addEventListener("click", function () {
    if (validateInputFields() === true) return;
    calcTipTotal(25);
  });

  tip50.addEventListener("click", function () {
    if (validateInputFields() === true) return;
    calcTipTotal(50);
  });

  tipCustom.addEventListener("change", function () {
    if (validateInputFields() === true) return;
    calcTipTotal(tipCustom.value);
  });
});

reset.addEventListener("click", function () {
  bill.value = "";
  numPeople.value = "";
  tipAmountPlaceholder.textContent = "$0.00";
  totalPerPersonPlaceholder.textContent = "$0.00";
  errorTxt.textContent = "";
});
