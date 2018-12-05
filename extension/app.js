var controlClimate = true;
var targetTemperature = 20;

// Update the count down every 1 second
var update = setInterval(function() {

  document.getElementById("climateControlButton").onclick = function() {controlClimateButton()};
  document.getElementById("targetTemperatureInput").oninput = function() {targetTemperatureSlider()};

  // update server and UI
  updateState()

  // How to stop interval
  if (false) {
    clearInterval(x);
  }
}, 3000);

function updateState() {
  document.getElementById("copper-payload-tab-out").value = (controlClimate + ' ' + targetTemperature);
  document.getElementById("copper-toolbar-post").click();
  response = document.getElementById("copper-payload-tab-in").innerHTML;
  if(response !== ""){
    // parse JSON
    var responseObj = JSON.parse(response);

    // get temperature
    temperature = responseObj.temperature;
    temperature = Number(temperature);
    tempF = (temperature * (9/5)) + 32;
    tempF = Math.round(tempF);
    temperature = temperature + "° C";
    tempF = tempF + "° F";

    // get heaterStatus
    heaterStatus = responseObj.heaterStatus;
    heaterStatus = heaterStatus.toUpperCase();
    if (!(heaterStatus === "ON" || heaterStatus === "OFF")) {
      heaterStatus = "unknown";
    }

    // get fanStatus
    fanStatus = responseObj.fanStatus;
    fanStatus = fanStatus.toUpperCase();
    if (!(fanStatus === "ON" || fanStatus === "OFF")) {
      fanStatus = "unknown";
    }

    // update page
    document.getElementById("temperature").innerHTML = temperature;
    document.getElementById("tempF").innerHTML = tempF;
    document.getElementById("heaterStatus").innerHTML = heaterStatus;
    document.getElementById("fanStatus").innerHTML = fanStatus;
  }
}

function controlClimateButton() {
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
}

function targetTemperatureSlider() {
  targetTemperature = document.getElementById("targetTemperatureInput").value;
  targetTemperatureF = ((targetTemperature * (9/5)) + 32);
  targetTemperatureF = Math.round(targetTemperatureF);
  document.getElementById("targetTemperature").innerHTML = targetTemperature + "° C";
  document.getElementById("targetTemperatureF").innerHTML = targetTemperatureF + "° F";
}
