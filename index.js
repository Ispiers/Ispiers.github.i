window.addEventListener("load", ()=>{
    document.querySelector(".load").classList.add("hidden")
})


const images = ['url("./bg1.jpg")', 'url("./bg2.jpeg")', 'url("./bg3.jpg")',]
const change = document.querySelector(".changing")
let i = 0

function loop(){
    setTimeout(()=>{
        if (i<images.length){
        document.documentElement.style.setProperty("--bgImage", (images[i]))
        i++
        loop()
        }else{
           i=0;
           loop()
        }
    }, 12000)
}
loop()

let observer = new IntersectionObserver(function (observables){
    observables.forEach(function (observable){
        if (observable.intersectionRatio >0.5){
            if (observable.target.className=="description c1"){
                observable.target.parentNode.style.opacity = 1
                observable.target.style.animation = "apparition 1.6s"
            }
            else if (observable.target.className=="description c2"){
                observable.target.parentNode.style.opacity = 1
                observable.target.style.animation = "apparition2 1.6s"
            }
            else if (observable.target.className=="description c3"){
                observable.target.style.animation = "apparition 1.6s"
                observable.target.parentNode.style.opacity = 1
            }
            else if (observable.target.className=="cons"){
                observable.target.style.animation = "letter 1s"
                observable.target.style.opacity = 1
            }
            else if (observable.target.className=="encourage-text"){
                observable.target.style.animation = "monter 1s"
                observable.target.style.opacity = 1
            }

        }
    })

},{
    threshold:[0.5]
}
)
const encourage = document.querySelector(".encourage-text")
const letter1 = document.querySelector(".cons")
console.log(letter1)
const descps = document.querySelectorAll(".description")
descps.forEach((descp)=>{
    observer.observe(descp)
})
observer.observe(letter1)
observer.observe(encourage)

const btn_control = document.querySelector("#header-bar .nav-bar button")
const menu = document.querySelector(".menu")
btn_control.addEventListener("click", ()=>{
    menu.classList.toggle("visible")
})