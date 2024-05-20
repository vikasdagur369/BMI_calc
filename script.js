document.querySelector("#bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = "";
  let categoryClass = "";
  let emoji = "";

  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "underweight";
    emoji = "😔";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
    categoryClass = "normal";
    emoji = "😃";
    categoryClass += " normal-animation";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    categoryClass = "overweight";
    emoji = "😊";
  } else {
    category = "Obesity";
    categoryClass = "obesity";
    emoji = "😅";
    categoryClass += " fatty-animation";
  }

  results.innerHTML = `BMI: <span class="bmi-category ${categoryClass}">${bmi} (${category}) ${emoji}</span>`;
});

document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#results").innerHTML = "";
});
