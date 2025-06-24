//! select elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var nameInvalidMsg = document.getElementById("nameInvalidMsg");
var mailInvalidMsg = document.getElementById("mailInvalidMsg");
var passInvalidMsg = document.getElementById("passInvalidMsg");
var nameValidMsg = document.getElementById("nameValidMsg");
var mailValidMsg = document.getElementById("mailValidMsg");
var passValidMsg = document.getElementById("passValidMsg");

// var incorrectWarning = document.getElementById("incorrect");
var existsWarning = document.getElementById("exists");
var successWarning = document.getElementById("success");
var signUpBtn = document.getElementById("signUpBtn");
var signInLink = document.getElementById("signIn");

//! vars
var users = [];
var passRegex = /^[A-Z][A-Za-z ]{2,25}$/;
var mailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
var passRegex = /^[0-9]{3,9}[a-z]{0,1}$/;

//! Conditions
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

//! functions
function addUser() {
  // بستقبل البيانات من المستخدم
  var user = {
    name: nameInput.value,
    email: emailInput.value,
    pass: passInput.value,
  };
  // هنا بعرف اذا كان الايميل مستخدم قبل كدا ولا لا , لو الايميل مستخدم بريتيرن فوولس و انهى الفنكتشن
  for (var i = 0; i < users.length; i++) {
    if (user.email === users[i].email) {
      existsWarning.classList.remove("d-none");
      return false;
    }
  }
  // هنا الفاليديتشن لو فاليد بنبوشش اليوزر الجديد فالارراى و اللوكال ستوردج و نريتيرنن ترو
  //  و لو خطاء بنظهر له رساله توضح فيها كل الشروط و تريترن فولس
  if (
    validation(nameInput, "nameValidMsg", "nameInvalidMsg") &&
    validation(emailInput, "mailValidMsg", "mailInvalidMsg") &&
    validation(passInput, "passValidMsg", "passInvalidMsg")
  ) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    existsWarning.classList.add("d-none");
    successWarning.classList.remove("d-none");
    return true;
  } else if (
    !validation(nameInput, "nameValidMsg", "nameInvalidMsg") ||
    !validation(emailInput, "mailValidMsg", "mailInvalidMsg") ||
    !validation(passInput, "passValidMsg", "passInvalidMsg")
  ) {
    existsWarning.classList.add("d-none");

    console.log("lol");
    return false;
  }
}

function validation(input, validMsgP, invalidMsgP) {
  var inputValue = input.value;
  var regex = {
    name: /^[A-Z][A-Za-z ]{2,25}$/,
    email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
    pass: /^[0-9]{3,9}[a-z]{0,1}$/,
  };

  var invalidMsg = document.getElementById(invalidMsgP);
  var validMsg = document.getElementById(validMsgP);
  if (regex[input.id].test(inputValue)) {
    invalidMsg.classList.add("d-none");
    validMsg.classList.remove("d-none");
    return true;
  } else {
    invalidMsg.classList.remove("d-none");
    validMsg.classList.add("d-none");
    return false;
  }
}

//! Events
signUpBtn.addEventListener("click", function () {
  if (addUser()) {
    // لو الاادد يوزر رجعت ترو
    addUser(); // شغل فنكتشن الااد يوزر
    signUpBtn.setAttribute("href", "./index.html"); // روح ع صفحه البروفايل
    existsWarning.classList.add("d-none");
    incorrectWarning.classList.add("d-none");
    successWarning.classList.remove("d-none");
  } else {
    console.log("rr");
  }
});

// /* ============================================= */

// الحل بتاعى الاول و اللى هو غلط بس مش مجمع اوى السبب فا عاوز اعمل ترييس للكود معاك لان الهاره دى عندى مش قد كدا
// اللى انا واخد بالى منه انى معملتش تقسيم للفنكتشن بتاعتى زى مانا عامل فوق بمساعده جروك
// المفروض اقسم الفنكتشن مش احط كل الفنكتشن ع بعض كدا فى اف كوندتشن واحده جوا لووب واحده
// لا لازم الف الاول باللوب ع اليوزرز و اشوف الايميل دا مستخدم ولا لا
// لو المييل مستخدم قبل كدا بظهر رساله خطا و اريتيرن فوولس عشان خاطر متنقلش لصفحه اللوج ان و الايفينت يقف لما ادوس ساين اب
// لو مش مستخدم قبل كدا الايفينت بيكول الفنكتشن عادى و بتريترن ترو للايفينت فا و بروح لصفحه اللوج ان

// //! select elements
// var nameInput = document.getElementById("name");
// var emailInput = document.getElementById("email");
// var passInput = document.getElementById("pass");
// var incorrectWarning = document.getElementById("incorrect");
// var existsWarning = document.getElementById("exists");
// var signUpBtn = document.getElementById("signUpBtn");
// var signInLink = document.getElementById("signIn");

// //! vars
// var users = [];
// var nameRegex = /^[A-Z][a-z]{2,12}$/;
// var mailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
// var passRegex = /^[0-9]{3,9}[a-z]{0,1}$/;

// //! Conditions
// if (localStorage.getItem("users") != null) {
//   users = JSON.parse(localStorage.getItem("users"));
// }

// //! functions
// function addUser() {
//   var user = {
//     name: nameInput.value,
//     email: emailInput.value,
//     pass: passInput.value,
//   };

//   for (var i = 0; i < users.length; i++) {
//     if (user.email !== users[i].email) {
//       if (
//         nameRegex.test(user.name) &&
//         mailRegex.test(user.email) &&
//         passRegex.test(user.pass)
//       ) {
//         users.push(user);
//         localStorage.setItem("users", JSON.stringify(users));
//         return true;
//       } else if (
//         !nameRegex.test(user.name) ||
//         !mailRegex.test(user.email) ||
//         !passRegex.test(user.pass)
//       ) {
//         incorrectWarning.classList.remove("d-none");
//         return false;
//       }
//     }
//   }
// }

// //! Events
// signUpBtn.addEventListener("click", function () {
//   if (addUser()) {
//     addUser();
//     signUpBtn.setAttribute("href", "../index.html");
//   } else {
//     incorrectWarning.classList.remove("d-none");
//   }
// });
