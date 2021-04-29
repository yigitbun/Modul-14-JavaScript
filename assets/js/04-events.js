// log the value of the input on every input
// const input = document.querySelector('input');
// const log = document.getElementById('output');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }


let input = document.getElementById("input");

input.addEventListener("input", ()=> {
  console.log(input.value)
})
// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“

// document.querySelector("#submit").addEventListener("click", function(event) {
//     document.getElementById("output").innerHTML = "Der Button wurde geklickt!<br>";
//     event.preventDefault();
// }, false);

let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  let output = document.getElementById("output");
  output.innerText = "Der Button wurde geklickt!"
})

// log the message „500px erreicht“, when the user scrolls more than 500px

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//     console.log("500px erreicht");
//   }
// }
let isScrolled = false;
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 500 && !isScrolled){
    isScrolled = true;
    console.log("500px erreicht");
  }
})