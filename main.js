document.addEventListener("DOMContentLoaded", function () {
  const metricInputs = document.querySelectorAll(".metric-inputs");
  const imperialInputs = document.querySelectorAll(".imperial-inputs");
  const imperialRadioButton = document.getElementById("imperialRadioButton");
  const metricRadioButton = document.getElementById("metricRadioButton");

  function toggleInputFields() {
    if (imperialRadioButton.checked) {
      imperialInputs.forEach((input) => (input.style.display = "grid"));
      metricInputs.forEach((input) => (input.style.display = "none"));
    } else if (metricRadioButton.checked) {
      metricInputs.forEach((input) => (input.style.display = "flex"));
      imperialInputs.forEach((input) => (input.style.display = "none"));
    }
  }

  imperialRadioButton.addEventListener("change", toggleInputFields);
  metricRadioButton.addEventListener("change", toggleInputFields);

  toggleInputFields();
});
