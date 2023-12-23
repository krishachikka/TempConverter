function convertTemperature() {
  var tempInput = document.getElementById("temperature").value;
  var tempUnit = document.getElementById("unit").value;
  var resultDiv = document.getElementById("result");
  
  if (isNaN(tempInput)) {
    resultDiv.innerHTML = "<p>Invalid input. Please enter a valid number.</p>";
    resultDiv.style.display = "block";
    return;
  }

  var celsius = 0;

  switch (tempUnit) {
    case "celsius":
      celsius = parseFloat(tempInput);
      break;
    case "fahrenheit":
      celsius = (parseFloat(tempInput) - 32) * (5 / 9);
      break;
    case "kelvin":
      celsius = parseFloat(tempInput) - 273.15;
      break;
    default:
      break;
  }

  var fahrenheit = (celsius * 9/5) + 32;
  var kelvin = celsius + 273.15;

  resultDiv.innerHTML = "<p>Temperature in Celsius: " + celsius.toFixed(2) + " °C</p>" +
                        "<p>Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F</p>" +
                        "<p>Temperature in Kelvin: " + kelvin.toFixed(2) + " K</p>";
  resultDiv.style.display = "block"; 
}
