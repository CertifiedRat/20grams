const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const socialmedia = document.querySelector(".socialmedia");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  socialmedia.classList.toggle("active");
}

/* Form */
const form = document.querySelector("form#contactform");
form?.addEventListener("invalid", cancelPopup, true);
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
