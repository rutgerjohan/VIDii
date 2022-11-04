var pipe64 = document.querySelector("ol li:first-of-type div");
var pipeSun = document.querySelector("ol li:nth-of-type(2) div");
var pipeGal = document.querySelector("ol li:nth-of-type(3) div");
var pipeOdy = document.querySelector("ol li:nth-of-type(4) div");

pipe64.addEventListener("click", pipe64Animation);
pipeSun.addEventListener("click", pipeSunAnimation);
pipeGal.addEventListener("click", pipeGalAnimation);
pipeOdy.addEventListener("click", pipeOdyAnimation);

function pipe64Animation() {
    pipe64.classList.add("playAnimation");
}
function pipeSunAnimation() {
    pipeSun.classList.add("playAnimation");
}
function pipeGalAnimation() {
    pipeGal.classList.add("playAnimation");
}
function pipeOdyAnimation() {
    pipeOdy.classList.add("playAnimation");
}