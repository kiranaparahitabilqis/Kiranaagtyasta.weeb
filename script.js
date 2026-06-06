// =========================
// COUNTER STATISTIK
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;
        }
    };

    updateCounter();

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(31,45,36,0.95)";

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.2)";

    }else{

        navbar.style.background =
        "rgba(31,45,36,0.15)";

        navbar.style.boxShadow =
        "none";
    }

});


// =========================
// SCROLL REVEAL
// =========================

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(
".sambutan,.statistik,.potensi"
)
.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================
// BUTTON EFFECT
// =========================

const btn =
document.querySelector(".btn");

if(btn){

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform =
        "translateY(-5px)";
    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform =
        "translateY(0)";
    });

}


// =========================
// BACK TO TOP BUTTON
// =========================

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.display =
        "block";

    }else{

        topButton.style.display =
        "none";
    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });

});


// =========================
// HERO FADE IN
// =========================

window.addEventListener("load",()=>{

    const hero =
    document.querySelector(".hero-content");

    hero.style.opacity = "0";

    hero.style.transform =
    "translateY(40px)";

    setTimeout(()=>{

        hero.style.transition =
        "1.2s";

        hero.style.opacity =
        "1";

        hero.style.transform =
        "translateY(0)";

    },300);

});


// =========================
// ACTIVE MENU
// =========================

const currentPage =
window.location.pathname
.split("/")
.pop();

const links =
document.querySelectorAll(".menu a");

links.forEach(link=>{

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        link.style.background =
        "rgba(201,162,39,0.25)";

        link.style.color =
        "#C9A227";
    }

});