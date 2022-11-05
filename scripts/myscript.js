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



// Functies voor animaties van de image wnr je op de pipe klikt
pipe64.addEventListener("click", powerUp64);
function powerUp64() {
    var image64 = document.querySelector("ol li:first-of-type img");
    image64.classList.add("uitDeBuis")
}
pipeSun.addEventListener("click", powerUpSun);
function powerUpSun() {
    var imageSun = document.querySelector("ol li:nth-of-type(2) img");
    imageSun.classList.add("uitDeBuis");
}
pipeGal.addEventListener("click", powerUpGal);
function powerUpGal() {
    var imageGal = document.querySelector("ol li:nth-of-type(3) img");
    imageGal.classList.add("uitDeBuis");
}
pipeOdy.addEventListener("click", powerUpOdy);
function powerUpOdy() {
    var imageOdy = document.querySelector("ol li:nth-of-type(4) img");
    imageOdy.classList.add("uitDeBuis");
}


// typewriter effect voor de textboxes
var speed = 50;
var i=0;
var txt64 = "Uit deze buis komt de vliegende hoed van Mario! Hiermee krijgt Mario magische krachten...";
var txtBox64 = document.querySelector("ol li:first-of-type nav");
txtBox64.addEventListener("click", typeWriter64)

function typeWriter64() {
    if (i < txt64.length) {
        document.querySelector("ol li:first-of-type nav").innerHTML += txt64.charAt(i);
        i++;
        setTimeout(typeWriter64, speed);
    }
}

var o=0;
var txtGal = "Met deze ster kan je de hele wereld aan! Luma helpt jou met behalen van sterren!";
var txtBoxGal = document.querySelector("ol li:nth-of-type(3) nav");
txtBoxGal.addEventListener("click", typeWriterGal);

function typeWriterGal() {
    if (o < txtGal.length) {
        document.querySelector("ol li:nth-of-type(3) nav").innerHTML += txtGal.charAt(o);
        o++;
        setTimeout(typeWriterGal, speed);
    }
}

var p=0;
var txtOdy = "Cappy helpt je door te veranderen in het object waar je hem op gooit! Super handig.";
var txtBoxOdy = document.querySelector("ol li:nth-of-type(4) nav");
txtBoxOdy.addEventListener("click", typeWriterOdy);

function typeWriterOdy() {
    if (p < txtOdy.length) {
        document.querySelector("ol li:nth-of-type(4) nav").innerHTML += txtOdy.charAt(p);
        p++;
        setTimeout(typeWriterOdy, speed);
    }
}