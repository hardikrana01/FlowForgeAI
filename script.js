// Smooth fade-in animation for sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.animate(

[
{opacity:0,transform:"translateY(60px)"},
{opacity:1,transform:"translateY(0px)"}
],

{
duration:800,
fill:"forwards"
}

);

}

});

});

sections.forEach(section=>{

section.style.opacity=0;

observer.observe(section);

});

// Navbar background on scroll

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(5,8,22,.9)";

}else{

nav.style.background="rgba(5,8,22,.55)";

}

});