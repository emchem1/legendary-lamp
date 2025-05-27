
document.getElementById("rsvpform").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const rsvp = document.getElementById("rsvp").value;
  const food = document.getElementById("food").value;
  const drink = document.getElementById("drink").value;

  const formData = new FormData();
  formData.append("fullname", fullname);
  formData.append("rsvp", rsvp);
  formData.append("food", food);
  formData.append("drink", drink);           

  fetch("https://script.google.com/macros/s/AKfycbz4Whv-E_2_ZT_zEv4UNOPxWDurZ4D2L2Kufl7keg4aVSuiAgS3Q_qMGLgdl45OxkFr/exec ", {
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
