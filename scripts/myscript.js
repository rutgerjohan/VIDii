var pipe64 = document.querySelector("ol li:first-of-type button");
var pipeSun = document.querySelector("ol li:nth-of-type(2) button");
var pipeGal = document.querySelector("ol li:nth-of-type(3) button");
var pipeOdy = document.querySelector("ol li:nth-of-type(4) button");

document.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON'){
        event.target.classList.add('playAnimation');
    }
});
// Code hierboven was eerst de code hieronder

// pipe64.addEventListener("click", pipe64Animation);
// pipeSun.addEventListener("click", pipeSunAnimation);
// pipeGal.addEventListener("click", pipeGalAnimation);
// pipeOdy.addEventListener("click", pipeOdyAnimation);
// function pipe64Animation() {
//     pipe64.classList.add("playAnimation");
// }
// function pipeSunAnimation() {
//     pipeSun.classList.add("playAnimation");
// }
// function pipeGalAnimation() {
//     pipeGal.classList.add("playAnimation");
// }
// function pipeOdyAnimation() {
//     pipeOdy.classList.add("playAnimation");
// }



// Functies voor animaties van de image wnr je op de pipe klikt.
//arrow function / operator ipv variabel aanmaken > funtie oproepen.
pipe64.addEventListener("click", () => {
    document.querySelector("ol li:first-of-type img").classList.add("uitDeBuis")
});
pipeSun.addEventListener("click", () =>{
    document.querySelector("ol li:nth-of-type(2) img").classList.add("uitDeBuis")
});
pipeGal.addEventListener("click", () =>{
    document.querySelector("ol li:nth-of-type(3) img").classList.add("uitDeBuis")
});
pipeOdy.addEventListener("click", () => {
    document.querySelector("ol li:nth-of-type(4) img").classList.add("uitDeBuis")
});



// typewriter effect voor de textboxes
// speed blijft hetzelfde, wel telkens andere counters etc.
var speed = 50;
var i=0;
var txt64 = "Uit deze buis komt de vliegende hoed van Mario! Hiermee krijgt Mario magische krachten...";
var txtBox64 = document.querySelector("ol li:first-of-type p");
txtBox64.addEventListener("click", typeWriter64)

function typeWriter64() {
    if (i < txt64.length) {
        document.querySelector("ol li:first-of-type p").innerHTML += txt64.charAt(i);
        i++;
        setTimeout(typeWriter64, speed);
    }
}


var l=0;
var txtSun1 = "'De Flash Liquid Ultra Dousing Device'";
var txtBoxSun1 = document.querySelector("ol li:nth-of-type(2) p:first-of-type");
txtBoxSun1.addEventListener("click", typeWriterSun1);

function typeWriterSun1() {
    if (l < txtSun1.length) {
        document.querySelector("ol li:nth-of-type(2) p:first-of-type").innerHTML += txtSun1.charAt(l);
        l++;
        setTimeout(typeWriterSun1, speed);
    }
}


var m=0;
var txtSun2 = "laat jou hoger springen en killt enemies!";
var textBoxSun2 = document.querySelector("ol li:nth-of-type(2) p:nth-of-type(2)");
textBoxSun2.addEventListener("click", typeWriterSun2);

function typeWriterSun2() {
    if (m < txtSun2.length) {
        document.querySelector("ol li:nth-of-type(2) p:nth-of-type(2)").innerHTML += txtSun2.charAt(m);
        m++;
        setTimeout(typeWriterSun2, speed);
    }
}


var o=0;
var txtGal = "Met deze ster kan je de hele wereld aan! Luma helpt jou met behalen van sterren!";
var txtBoxGal = document.querySelector("ol li:nth-of-type(3) p");
txtBoxGal.addEventListener("click", typeWriterGal);

function typeWriterGal() {
    if (o < txtGal.length) {
        document.querySelector("ol li:nth-of-type(3) p").innerHTML += txtGal.charAt(o);
        o++;
        setTimeout(typeWriterGal, speed);
    }
}


var p=0;
var txtOdy = "Cappy helpt je door te veranderen in het object waar je hem op gooit! Super handig.";
var txtBoxOdy = document.querySelector("ol li:nth-of-type(4) p");
txtBoxOdy.addEventListener("click", typeWriterOdy);

function typeWriterOdy() {
    if (p < txtOdy.length) {
        document.querySelector("ol li:nth-of-type(4) p").innerHTML += txtOdy.charAt(p);
        p++;
        setTimeout(typeWriterOdy, speed);
    }
}



document.addEventListener('click', (event) => {
    if(event.target.tagName === 'IMG'){
        event.target.classList.add('zweven');
    }
});
// Jeffrey hielp :D

// Code die ik zelf had gemaakt is hier onder. Jeffrey heeft geholpen met het makkelijker maken van deze code!
// powerups gaan zweven heen en weer bij een onclick
// var image64 = document.querySelector("ol li:first-of-type img");
// var imageSun = document.querySelector("ol li:nth-of-type(2) img");
// var imageGal = document.querySelector("ol li:nth-of-type(3) img");
// var imageOdy = document.querySelector("ol li:nth-of-type(4) img");

// image64.addEventListener("click", zweven64);
// imageSun.addEventListener("click", zwevenSun);
// imageGal.addEventListener("click", zwevenGal);
// imageOdy.addEventListener("click", zwevenOdy);

// function zweven64() {
//     image64.classList.add("zweven");
// }
// function zwevenSun() {
//     imageSun.classList.add("zweven");
// }
// function zwevenGal() {
//     imageGal.classList.add("zweven");
// }
// function zwevenOdy() {
//     imageOdy.classList.add("zweven");
// }


// document.addEventListener('keyDown', (event) => {

//     var name = event.key;
//     if (name === 'Control') {
//         alert("firwboewibw");
//     }

// });

var sound64 = new Audio("assets/mario64Sound.mp3");
var soundGal = new Audio("assets/marioGalSound.mp3")
var soundOdy = new Audio("assets/marioOdySound.mp3");

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'ArrowDown') {
        document.getElementById('imageJumpScare').classList.toggle('jumpscare');
        sound64.play();
    }
    if (name === 'a') {
        soundGal.play();
    }
    if (name === 'b') {
        soundOdy.play();
    }
});