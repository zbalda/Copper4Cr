var controlClimate = true;

var baseURL = "chrome-extension://poachhgcefcgdajncinehopdcghbchgm/app.html";
var serverURL = "?coap%3A%2F%2F192.168.0.32%3A5683%2F";

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
  window.location.href = baseURL + serverURL + "temperature";
  document.getElementById("copper-toolbar-get").click();
  temperature = document.getElementById("copper-payload-tab-in").innerHTML;
  temperature = Number(temperature);
  temperature = temperature + "° C";

  return temperature;
}

function getHeaterStatus() {
  window.location.href = baseURL + serverURL + "heater";
  document.getElementById("copper-toolbar-get").click();
  heaterStatus = document.getElementById("copper-payload-tab-in").innerHTML;
  heaterStatus = heaterStatus.toUpperCase();

  if (heaterStatus === "ON") {
    return "on";
  } else if (heaterStatus === "OFF") {
    return "off";
  }
  return "unknown"
}

function getFanStatus() {
  window.location.href = baseURL + serverURL + "fan";
  document.getElementById("copper-toolbar-get").click();
  fanStatus = document.getElementById("copper-payload-tab-in").innerHTML;
  fanStatus = fanStatus.toUpperCase();

  if (fanStatus === "ON") {
    return "on";
  } else if (fanStatus === "OFF") {
    return "off";
  }
  return "unknown"
}
