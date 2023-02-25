// function to add +1 to the add-passenger button
function addPassenger() {
  var passengerCount = document.getElementById("passenger-count").value;
  document.getElementById("passenger-count").value =
    parseInt(passengerCount) + 1;
}

// function to subtract -1 to the remove-passenger button
function removePassenger() {
  var passengerCount = document.getElementById("passenger-count").value;
  document.getElementById("passenger-count").value =
    parseInt(passengerCount) - 1;
}