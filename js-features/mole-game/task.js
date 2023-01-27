const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");
const moleInHole = document.getElementsByClassName("hole hole_has-mole");
const moleNotInHole = document.getElementsByClassName("hole");

function deadMoleCounter() {
   deadMole.textContent = Number(deadMole.textContent) + 1;
}
function lostMoleCounter() {
   lostMole.textContent = Number(lostMole.textContent) + 1;
}

moleInHole.onclick = deadMoleCounter;
moleNotInHole.onclick = lostMoleCounter;
