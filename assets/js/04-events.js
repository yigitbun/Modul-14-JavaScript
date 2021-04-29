// log the value of the input on every input
const input = document.querySelector('input');
const log = document.getElementById('output');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“

document.querySelector("#submit").addEventListener("click", function(event) {
    document.getElementById("output").innerHTML = "Der Button wurde geklickt!<br>";
    event.preventDefault();
}, false);



// log the message „500px erreicht“, when the user scrolls more than 500px

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    console.log("500px erreicht");
  }
}