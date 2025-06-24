//! select elements
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var requiredWarning = document.getElementById("required");
var incorrectWarning = document.getElementById("incorrect");
var loginBtn = document.getElementById("loginBtn");
var signUpLink = document.getElementById("signUp");

var users;
if (localStorage.getItem("users") === null) {
  var users = [];
} else {
  var users = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener("click", function () {
  if (emailInput.value === "" || passInput.value === "") {
    requiredWarning.classList.remove("d-none");
    incorrectWarning.classList.add("d-none");
    return;
  } else if (users.length === 0) {
    requiredWarning.classList.add("d-none");
    incorrectWarning.classList.remove("d-none");
    return;
  } else {
    for (var i = 0; i < users.length; i++) {
      if (
        emailInput.value === users[i].email &&
        passInput.value === users[i].pass
      ) {
        console.log("lol");
        loginBtn.setAttribute("href", "./profile.html");
        localStorage.setItem("currntUser", JSON.stringify(users[i]));
        return;
      } else {
        requiredWarning.classList.add("d-none");
        incorrectWarning.classList.remove("d-none");
      }
    }
  }
});
