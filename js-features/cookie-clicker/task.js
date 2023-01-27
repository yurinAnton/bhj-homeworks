const imgCookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");

function increaseSize() {
   imgCookie.height = 300;
   imgCookie.width = 300;
}
function reduceSize() {
   imgCookie.height = 200;
   imgCookie.width = 200;
}

function onclickCookie(increaseSize, reduceSize) {
   const isClicked = false;
   clickCounter.textContent = Number(clickCounter.textContent) + 1;
   if (isClicked === true) {
      increaseSize();
      isClicked = false;
   } else if (isClicked === false) {
      reduceSize();
      isClicked = true;
   }
}

imgCookie.onclick = onclickCookie;
