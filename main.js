document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmiForm");
  const metricInputs = document.querySelectorAll(".metric-inputs");
  const imperialInputs = document.querySelectorAll(".imperial-inputs");
  const bmiResult = document.getElementById("bmiResult");
  const weightRange = document.getElementById("weightRange");

  const metricHeightInput = document.getElementById("metricHeight");
  const metricWeightInput = document.getElementById("metricWeight");
  const imperialHeightFeetInput = document.getElementById("imperialHeightFeet");
  const imperialHeightInchesInput = document.getElementById("imperialHeightInches");
  const imperialWeightStonesInput = document.getElementById("imperialWeightStones");
  const imperialWeightPoundsInput = document.getElementById("imperialWeightPounds");

  const MEASUREMENT_METRIC = "metric";
  const BMI_MIN = 18.5;
  const BMI_MAX = 24.9;

  form.addEventListener("change", (event) => handleMeasurementChange(event));
  form.addEventListener("input", () => calculateBMI());

  const handleMeasurementChange = (event) => {
    if (event.target.name === "measurement") {
      const isMetric = event.target.value === MEASUREMENT_METRIC;
      toggleInputs(isMetric);
      resetInputs(
        imperialHeightFeetInput,
        imperialHeightInchesInput,
        imperialWeightStonesInput,
        imperialWeightPoundsInput,
        metricHeightInput,
        metricWeightInput
      );
      calculateBMI();
    }
  };

  const toggleInputs = (isMetric) => {
    metricInputs.forEach((input) => (input.style.display = isMetric ? "flex" : "none"));
    imperialInputs.forEach((input) => (input.style.display = isMetric ? "none" : "grid"));
  };

  const resetInputs = (...inputs) => {
    inputs.forEach((input) => (input.value = ""));
  };

  const calculateBMI = () => {
    const measurement = document.querySelector('input[name="measurement"]:checked').value;
    let height, weight, bmi, idealWeightMin, idealWeightMax;

    if (measurement === MEASUREMENT_METRIC) {
      height = parseFloat(metricHeightInput.value) / 100; // convert cm to meters
      weight = parseFloat(metricWeightInput.value);

      if (!height || !weight) return;

      bmi = weight / (height * height);
      idealWeightMin = BMI_MIN * (height * height);
      idealWeightMax = BMI_MAX * (height * height);

      updateResults(bmi, idealWeightMin, idealWeightMax, "kgs");
    } else {
      const heightFeet = parseFloat(imperialHeightFeetInput.value);
      const heightInches = parseFloat(imperialHeightInchesInput.value);
      const weightStones = parseFloat(imperialWeightStonesInput.value);
      const weightPounds = parseFloat(imperialWeightPoundsInput.value);

      if (!heightFeet || !heightInches || !weightStones || !weightPounds) return;

      height = heightFeet * 12 + heightInches; // convert feet and inches to inches
      weight = weightStones * 14 + weightPounds; // convert stones and pounds to pounds

      bmi = (weight * 703) / (height * height);
      idealWeightMin = BMI_MIN * ((height * height) / 703);
      idealWeightMax = BMI_MAX * ((height * height) / 703);

      updateResults(bmi, idealWeightMin, idealWeightMax, "stones", "lbs");
    }
  };

  const updateResults = (bmi, idealWeightMin, idealWeightMax, unit, subUnit = "") => {
    bmiResult.innerHTML = `Your BMI is...<br /><span class="text-heading-l font-semibold">${bmi.toFixed(
      1
    )}</span>`;
    weightRange.innerHTML = `Your BMI suggests you're a healthy weight. Your ideal weight is between <strong class="contents">${idealWeightMin.toFixed(
      1
    )}${unit}${
      subUnit ? ` (${idealWeightMin.toFixed(1)} ${subUnit})` : ""
    } - ${idealWeightMax.toFixed(1)}${unit}${
      subUnit ? ` (${idealWeightMax.toFixed(1)} ${subUnit})` : ""
    }</strong>`;
  };
});
