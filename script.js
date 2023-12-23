function convertTemperature() {
    var tempInput = document.getElementById("temperature").value;
    var tempUnit = document.getElementById("unit").value;
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
  
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Temperature in Celsius: " + celsius.toFixed(2) + " °C</p>" +
                          "<p>Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F</p>" +
                          "<p>Temperature in Kelvin: " + kelvin.toFixed(2) + " K</p>";
    resultDiv.style.display = "block"; 
    }
 