"use strict";

const submit_btn = document.querySelector(".submit_btn");
const rateContainer = document.querySelector(".rating_container");
const appreciateContainer = document.querySelector(".appreciation_container");
const rate__num__circle = document.querySelector(".rate_num");
const submitBtn = document.querySelector(".submit_btn");
let element = null;

function outerFunction() {
  let rate_number = document.querySelectorAll(".rate__num__circle");
  function handleClick(e) {
    rate_number.forEach((num) => num.classList.remove("active"));
    e.target.classList.add("active");
    element = e.target.textContent.trim();
  }
  rate_number.forEach((num) => num.addEventListener("click", handleClick));
}

outerFunction();

// function that display the message
function showMessage() {
  appreciateContainer.innerHTML = "";
  const html = `
        <div class="appreciate_img">
            <img src="images/illustration-thank-you.svg" alt="thank_you">
        </div>
        <div class="msg_container">
            <div class="selected_msg">
                You selected ${element} out of 5
            </div>
        </div>

        <p>
            <h3 class="appreciate_title">Thank you!</h3>
        </p>

        <div class="appreciate_text">
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don't hesitate to get in touch!
            </p>
        </div>
        `;
  appreciateContainer.insertAdjacentHTML("afterbegin", html);
}

// show the message when the submit button is clicked
submitBtn.addEventListener("click", function () {
  rateContainer.style.display = "none";
  appreciateContainer.style.display = "block";
  showMessage();
});
