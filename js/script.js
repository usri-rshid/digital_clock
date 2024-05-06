function updateClock() {
  const now = new Date();

  //   console.log(now);
  //   const hours = now.getHours().toString().padStart(2, 0);
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  //   const timeString = `${hours}:${minutes}:${seconds}`;
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  const day = now.getDate().toString().padStart(2, 0);
  const month = (now.getMonth() + 1).toString().padStart(2, 0);
  const year = now.getFullYear().toString();
  const dateString = `${day}/${month}/${year}`;

  document.getElementById("date").textContent = dateString;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
