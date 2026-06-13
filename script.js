/* ==========================
   FECHA DE INICIO
========================== */

// CAMBIAR POR SU FECHA

const startDate = new Date("2026-05-13T18:00:00");


/* ==========================
   CONTADOR
========================== */

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60));

    const minutes = Math.floor(diff / (1000 * 60));

    const seconds = Math.floor(diff / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toLocaleString();
    document.getElementById("minutes").textContent = minutes.toLocaleString();
    document.getElementById("seconds").textContent = seconds.toLocaleString();
}

updateCounter();

setInterval(updateCounter, 1000);


/* ==========================
   CARRUSEL
========================== */

const photos = [

    {
        src: "img/foto11.jpg",
        
    },

    {
        src: "img/foto12.jpg",
        
    },

    {
        src: "img/foto16.jpg",
        
    },

    {
        src: "img/foto14.jpg",
        
    },

    {
        src: "img/foto15.jpg",
       
    }

];

// Agregás más hasta foto20.jpg si querés

let currentPhoto = 0;

const sliderImage =
    document.getElementById("slider-image");

const sliderCaption =
    document.getElementById("slider-caption");

function nextPhoto() {

    currentPhoto++;

    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }

    sliderImage.style.opacity = 0;

    setTimeout(() => {

        sliderImage.src =
            photos[currentPhoto].src;

        sliderCaption.textContent =
            photos[currentPhoto].text;

        sliderImage.style.opacity = 1;

    }, 500);
}

setInterval(nextPhoto, 4000);


/* ==========================
   FADE PARA EL CARRUSEL
========================== */

sliderImage.style.transition =
"opacity .5s ease";


/* ==========================
   SOBRE
========================== */

const envelope = document.getElementById("envelope");

let opened = false;

envelope.addEventListener("click", () => {

    if(!opened){

        letter.style.transform =
        "translateY(-120px) scale(1.05)";
        letter.classList.toggle("letter-open");

        opened = true;

    }else{

        letter.style.transform =
        "translateY(0px) scale(1)";

        opened = false;
    }

});


/* ==========================
   CARTA ANIMADA
========================== */

const letter =
document.querySelector(".letter");

letter.style.transition =
".8s ease";


/* ==========================
   ANIMACIÓN AL SCROLL
========================== */

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

},
{
    threshold:0.15
}

);

document
.querySelectorAll("section")
.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);
});


/* ==========================
   LIGHTBOX
========================== */

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML =
'<img id="lightbox-img">';

document.body.appendChild(lightbox);

lightbox.style.cssText = `
position:fixed;
inset:0;
background:rgba(0,0,0,.95);
display:none;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

const lightboxImg =
document.getElementById("lightbox-img");

lightboxImg.style.cssText = `
max-width:90%;
max-height:90%;
border-radius:20px;
`;

document
.querySelectorAll(".polaroid img")
.forEach(img=>{

    img.addEventListener("click", ()=>{

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;
    });

});

lightbox.addEventListener("click", ()=>{

    lightbox.style.display = "none";

});


/* ==========================
   CORAZONES FLOTANDO
========================== */

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.color =
    "rgba(255,255,255,.12)";

    heart.style.fontSize =
    (Math.random() * 15 + 10) + "px";

    heart.style.pointerEvents =
    "none";

    heart.style.zIndex = "-1";

    heart.style.transition =
    "all 8s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform =
        `translateY(-120vh)`;

        heart.style.opacity = 0;

    },100);

    setTimeout(()=>{

        heart.remove();

    },8000);
}

setInterval(createHeart, 1200);


/* ==========================
   EFECTO PARALLAX HERO
========================== */

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector(".hero");

    const scroll =
    window.pageYOffset;

    hero.style.transform =
    `translateY(${scroll * 0.2}px)`;

});


/* ==========================
   MENSAJE FINAL
========================== */

console.log(
"Lucas ❤️ Belu - Primer Mes"
);
