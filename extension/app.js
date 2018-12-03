
// Update the count down every 1 second
var update = setInterval(function() {

  document.getElementById("climateControlInput").onclick = function() {updateClimateControl()};
  document.getElementById("targetTemperatureInput").oninput = function() {updateTargetTemperature()};

  document.getElementById("temperature").innerHTML = getTemperature();
  document.getElementById("heaterStatus").innerHTML = getHeaterStatus();
  document.getElementById("fanStatus").innerHTML = getFanStatus();

  // How to stop interval
  if (false) {
    clearInterval(x);
  }
}, 3000);

function updateClimateControl() {
  // TODO: send POST to update climate control status
  console.log(document.getElementById("climateControlInput").checked);
}

function updateTargetTemperature() {
  // TODO: send POST to update target temperature
  targetTemperature = document.getElementById("targetTemperatureInput").value
  document.getElementById("targetTemperature").innerHTML = targetTemperature;
}


function getTemperature() {
  // TODO: GET temperature from server
  temperature = "75";
  temperature = Number(temperature);

  return temperature;
}

function getHeaterStatus() {
  // TODO: GET heater status from server
  heaterStatus = "on";
  heaterStatus = heaterStatus.toUpperCase();

  if (heaterStatus === "ON") {
    return "on";
  } else if (heaterStatus === "OFF") {
    return "off";
  }
  return "unknown"
}

function getFanStatus() {
  // TODO: GET fan status from server
  fanStatus = "on";
  fanStatus = fanStatus.toUpperCase();

  if (fanStatus === "ON") {
    return "on";
  } else if (fanStatus === "OFF") {
    return "off";
  }
  return "unknown"
}
