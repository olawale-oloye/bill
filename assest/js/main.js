// Variables for input and bottom

const form = document.querySelector("form");
const bill = document.querySelector(".bill");
/* const tip5 = document.querySelector(".tip5");
const tip10 = document.querySelector(".tip10");
const tip15 = document.querySelector(".tip15");
const tip25 = document.querySelector(".tip25");
const tip50 = document.querySelector(".tip50"); */
const tipBtns = document.querySelectorAll("button");
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
  console.log(tipAmount);
  tipAmountPlaceholder.textContent = `$${tipAmount} `;
  totalPerPerson = Number(
    ((tipAmount + Number(bill.value)) / numPeople.value).toFixed(2)
  );
  totalPerPersonPlaceholder.textContent = `$${totalPerPerson}`;
  console.log(totalPerPerson);
}

// Validate form inputs
tipCustom.addEventListener("Keydown", (e) => {
  if (e.key === "Enter") {
    if (tipCustom.value === "") {
      /* 
      console.log(tipCustom.value);
      console.log("Please input a value"); */
      return;
    } else if (validateInputFields() == true) {
      return;
    } else {
      calcTipTotal(tipCustom.value);
    }
  }
});

// If any of the button is not clicked, function should not run? can we implement this ?

form.addEventListener("click", function (e) {
  e.preventDefault();

  tipBtns.forEach((tipBtn) => {
    tipBtn.addEventListener("click", function () {
      if (validateInputFields() === true) return;
      const perValue = +tipBtn.textContent.replace(/%/g, "");
      calcTipTotal(perValue);
    });
  });

  // console.log(Number(tipCustom.value));

  /*  tip5.addEventListener("click", function () {
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
  }); */
});

reset.addEventListener("click", function () {
  bill.value = "";
  numPeople.value = "";
  tipAmountPlaceholder.textContent = "$0.00";
  totalPerPersonPlaceholder.textContent = "$0.00";
  errorTxt.textContent = "";
});
