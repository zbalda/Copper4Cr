
// Update the count down every 1 second
var update = setInterval(function() {

  document.getElementById("climateControlButton").onclick = function() {updateClimateControl()};
  document.getElementById("targetTemperatureInput").oninput = function() {updateTargetTemperature()};

  document.getElementById("temperature").innerHTML = getTemperature();
  document.getElementById("heaterStatus").innerHTML = getHeaterStatus();
  document.getElementById("fanStatus").innerHTML = getFanStatus();

  // How to stop interval
  if (false) {
    clearInterval(x);
  }
}, 3000);

var controlClimate = true;

function updateClimateControl() {

  // toggle button boolean
  if (controlClimate) {
    controlClimate = false;
  } else {
    controlClimate = true;
  }

  // update button text and style
  if (controlClimate) {
    document.getElementById("climateControlButton").innerHTML = "Turn Climate Control System Off"
    document.getElementById("climateControlButton").className = "btn btn-danger";
    document.getElementById("dimmable").className = "";
  } else {
    document.getElementById("climateControlButton").innerHTML = "Turn Climate Control System On"
    document.getElementById("climateControlButton").className = "btn btn-success";
    document.getElementById("dimmable").className = "dimmed";
  }
  // TODO: send POST to update climate control status with control climate var
}

function updateTargetTemperature() {
  // TODO: send POST to update target temperature
  targetTemperature = document.getElementById("targetTemperatureInput").value
  document.getElementById("targetTemperature").innerHTML = (targetTemperature + "° C");
}


function getTemperature() {
  // TODO: GET temperature from server
  temperature = "20";
  temperature = Number(temperature);
  temperature = temperature + "° C";

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
