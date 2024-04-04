const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

const setClock = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  
  rotation(secHand, secondsRatio);
  rotation(minHand, minutesRatio);
  rotation(hourHand, hoursRatio);
}

const rotation = (e, rotationRatio) => {
  e.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
setInterval(setClock, 1000);