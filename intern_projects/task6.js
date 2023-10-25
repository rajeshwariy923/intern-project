document.getElementById("convertButton").addEventListener("click", function () {
  let kelvin = parseInt(document.getElementById("kelvinInput").value);

  let celsius = kelvin - 273;
  let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

  document.getElementById("celsiusResult").textContent = celsius;
  document.getElementById("fahrenheitResult").textContent = fahrenheit;
});
