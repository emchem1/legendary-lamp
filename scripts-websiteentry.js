const form = document.getElementById("websiteentryform");
  const fullnameInput = document.getElementById("fullname");
  const foodInput = document.getElementById("food");

    if (!form || !fullnameInput || !foodInput) {
    console.error("Form or required input fields are missing in the HTML.");
    return;
    }

    form.addEventListener("submit", function (e) {
    e.preventDefault();
      
    const fullname = fullnameInput.value;
    const rsvp = document.querySelector('input[name="rsvp"]:checked')?.value || "";
    const food = foodInput.value;
    const drink = document.querySelector('input[name="drink"]:checked')?.value || "";

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("rsvp", rsvp);
    formData.append("food", food);
    formData.append("drink", drink);

    fetch("https://script.google.com/macros/s/AKfycbyzuj_ZA22EaDmWFsUJ5K8meFvLBJiKl613kTz6n4nBo7vs8VuYw2tAkomil7BQsG_W/exec", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById("response-message").innerText = "Thank you for your response!";
      document.getElementById("rsvpform").reset();
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("response-message").innerText = "There was a problem submitting the form.";
    });
  });
});
