function displayTime() {
  const dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();

  const isMilitaryTime = document.getElementById("clock").classList.contains("military");

  if (!isMilitaryTime && hrs > 12) {
    hrs = hrs - 12;
  } else if (isMilitaryTime && hrs < 10) {
    hrs = "0" + hrs;
  }

  const formattedHours = hrs.toString().padStart(2, '0');
  const formattedMinutes = min.toString().padStart(2, '0');

  document.getElementById("hours").innerHTML = formattedHours;
  document.getElementById("minutes").innerHTML = formattedMinutes;
}

function toggleMilitaryTime() {
  const clock = document.getElementById("clock");
  clock.classList.toggle("military");
  displayTime();
}

document.getElementById("clock").addEventListener('click', toggleMilitaryTime);

setInterval(displayTime, 100);
