const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hlink = document.querySelectorAll("#hlink")
hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})
hlink.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})
const hide = document.querySelector("#hide")
hide.addEventListener("click",()=>{
    hide.classList.toggle("hide")
    hide.classList.toggle("bg-white")
})