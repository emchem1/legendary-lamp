const form = document.getElementById("websiteentry");
  const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredpassword = passwordInput.value;
  if (enteredpassword === "bula") {
    window.location.href = "home.html";
  } else {
    alert ("whoops that's wrong");
  }
  });
