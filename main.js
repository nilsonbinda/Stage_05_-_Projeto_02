//Elemento que quero capturar
const img1 = document.querySelector("#img1") 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btn1 = document.querySelector("#btn1")

//Capturar evento no elemento img1 e executar uma função
img1.addEventListener('click', toggleScreen)
btn1.addEventListener('click', toggleScreen)


function toggleScreen(){
    screen1.classList.toggle("hide") //caso não exista o elemento ele insere
    screen1.classList.toggle("grid")

    screen2.classList.toggle("hide")
    screen2.classList.toggle("grid")
}
