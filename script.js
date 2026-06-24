// FAQ DESPLEGABLE

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});

// ANIMACIÓN AL HACER SCROLL

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

const hiddenElements = document.querySelectorAll(
`
.service-card,
.portfolio-card,
.step,
.price-card,
.faq-item
`
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// EFECTO HEADER

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,8,22,.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.3)";

    }else{

        header.style.background =
        "rgba(5,8,22,.85)";

        header.style.boxShadow = "none";

    }

});

// EFECTO PARTÍCULAS

const particles = document.getElementById("particles");

if(particles){

for(let i=0;i<40;i++){

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.top =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
    Math.random() * 5 + "s";

    particles.appendChild(particle);

}

}

// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// EFECTO APARICIÓN

const style =
document.createElement("style");

style.innerHTML = `

.hidden{
opacity:0;
transform:translateY(50px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

#particles{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
z-index:-1;
overflow:hidden;
}

.particle{
position:absolute;
width:4px;
height:4px;
background:#3b82f6;
border-radius:50%;
opacity:.5;
animation:floatParticle linear infinite;
}

@keyframes floatParticle{

0%{
transform:translateY(0);
opacity:0;
}

10%{
opacity:.8;
}

90%{
opacity:.8;
}

100%{
transform:translateY(-100vh);
opacity:0;
}

}

`;

document.head.appendChild(style);

// MENSAJE CONSOLA

console.log(
"NOVARA STUDIO | WEB + IA"
);