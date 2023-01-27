const startCount = document.getElementById("timer");

const countDown = function () {
   startCount.textContent = Number(startCount.textContent) - 1;
   if (startCount.textContent === 0) {
      clearInterval;
      alert("Вы победили в конкурсе");
   }
};

// setInterval(countDown, 1000);
