//==============================
// DIABOLICAL
// script.js
//==============================

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(0,0,0,.82)";
        header.style.backdropFilter = "blur(18px)";
        header.style.borderBottom = "1px solid rgba(212,175,55,.18)";

    } else {

        header.style.background = "rgba(0,0,0,.55)";
        header.style.backdropFilter = "blur(14px)";
        header.style.borderBottom = "1px solid rgba(255,215,0,.08)";

    }

});


//==============================
// Fade Sections
//==============================

const sections = document.querySelectorAll(
".collection,.story,.journal,.newsletter"
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(80px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1200,
fill:"forwards",
easing:"ease"

});

}

});

},{
threshold:.18
});

sections.forEach(section=>{

section.style.opacity="0";

observer.observe(section);

});


//==============================
// Bottle Hover Glow
//==============================

document.querySelectorAll(".bottle img").forEach(bottle=>{

bottle.addEventListener("mouseenter",()=>{

bottle.style.filter=
"drop-shadow(0 0 50px rgba(255,180,0,.55))";

});

bottle.addEventListener("mouseleave",()=>{

bottle.style.filter=
"drop-shadow(0 0 25px rgba(255,170,0,.12))";

});

});


//==============================
// Luxury Cursor Glow
//==============================

const glow=document.createElement("div");

glow.className="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
