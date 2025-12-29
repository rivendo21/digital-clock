function updateClock() {
  let now = new Date();

  let hours = now.getHours().toString().padStart(2, 0);
  let minutes = now.getMinutes().toString().padStart(2, 0);
  let seconds = now.getSeconds().toString().padStart(2, 0);
  let stdTime = hours >= 12 ? "PM" : "AM";
  hours = Math.floor(hours / 2) - 1;
  document.getElementById(
    "clock"
  ).innerHTML = `${hours}:${minutes}:${seconds}${stdTime}`;
}
updateClock();
setInterval(updateClock);
