const home = document.querySelector("#home")
const fun = document.querySelector("#social")
const skill = document.querySelector("#skill")
const project = document.querySelector("#project")
const about = document.querySelector("#about")
const contact = document.querySelector("#contact")

const content = document.querySelector(".content")
const funlove = document.querySelector("#fun")
const skills = document.querySelector(".skills")
const projects = document.querySelector(".project")
const aboutme = document.querySelector(".aboutv")
const contactclass = document.querySelector(".contact")

home.addEventListener('click',()=>{
    content.scrollIntoView({
        behavior:"smooth"
    })
})

fun.addEventListener('click',()=>{
    funlove.scrollIntoView({
        behavior:"smooth"
    })
})

skill.addEventListener('click',()=>{
    skills.scrollIntoView({
        behavior:"smooth"
    })
})

project.addEventListener('click',()=>{
    projects.scrollIntoView({
        behavior:"smooth"
    })
})

about.addEventListener('click',()=>{
    aboutme.scrollIntoView({
        behavior:"smooth"
    })
})

contact.addEventListener('click',()=>{
    contactclass.scrollIntoView({
        behavior:"smooth"
    })
})
document.addEventListener('keydown',(e)=>{
    let keypress=e.key;
    if(keypress=='t'){
        window.scrollBy(0,document.querySelector("html").getBoundingClientRect().top);
    }
    else if(keypress=='b'){
        window.scrollBy(0,document.querySelector("html").getBoundingClientRect().bottom);
    }
    else if(keypress==1){
        content.scrollIntoView({
            behavior:"smooth"
        })
    }
    else if(keypress==2){
        funlove.scrollIntoView({
            behavior:"smooth"
        })
    }
    else if(keypress==3){
        skills.scrollIntoView({
            behavior:"smooth"
        })
    }
    else if(keypress==4){
        projects.scrollIntoView({
            behavior:"smooth"
        })
    }
    else if(keypress==5){
        aboutme.scrollIntoView({
            behavior:"smooth"
        })
    }
    else if(keypress==6){
        contactclass.scrollIntoView({
            behavior:"smooth"
        })
    }
})