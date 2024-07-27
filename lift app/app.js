let floors= document.querySelectorAll(".floor")
let lift =  document.querySelector(".lift");
let btn0 =  document.getElementById("0");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");

document.getElementById("0").addEventListener("click", () => {
    btn0.classList.add("pointer");
    btn1.classList.remove("pointer");
    btn2.classList.remove("pointer");
    btn3.classList.remove("pointer");
    btn4.classList.remove("pointer");
    lift.style.bottom = "105px"
    
 })
document.getElementById("1").addEventListener("click", () => {
    btn0.classList.remove("pointer");
    btn1.classList.add("pointer");
    btn2.classList.remove("pointer");
    btn3.classList.remove("pointer");
    btn4.classList.remove("pointer");
   lift.style.bottom = "205px"
   
})
document.getElementById("2").addEventListener("click", () => {
    btn0.classList.remove("pointer");
    btn1.classList.remove("pointer");
    btn2.classList.add("pointer");
    btn3.classList.remove("pointer");
    btn4.classList.remove("pointer");
    lift.style.bottom = "305px";
   
 })
 document.getElementById("3").addEventListener("click", () => {
    btn0.classList.remove("pointer");
    btn1.classList.remove("pointer");
    btn2.classList.remove("pointer");
    btn3.classList.add("pointer");
    btn4.classList.remove("pointer");
    lift.style.bottom = "405px";
    
 })
 document.getElementById("4").addEventListener("click", () => {
    btn0.classList.remove("pointer");
    btn1.classList.remove("pointer");
    btn2.classList.remove("pointer");
    btn3.classList.remove("pointer");
    btn4.classList.add("pointer");
    lift.style.bottom = "505px";
    lift.style.zIndex = "90"
 })