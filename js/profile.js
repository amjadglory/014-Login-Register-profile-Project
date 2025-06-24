//! select elements
var logout = document.getElementById("logout");
var profileCard = document.getElementById("profileCard");


var currntUser = JSON.parse(localStorage.getItem("currntUser"));
var currntUserName = currntUser.name;
var h2 = document.createElement("h2");
h2.classList.add("text-warning","pb-5");
h2.innerHTML = currntUserName;
profileCard.append(h2);

logout.addEventListener("click", function () {
  localStorage.removeItem("currntUser");
});
