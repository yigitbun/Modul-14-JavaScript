// log text content from #headline
// #headline = id="headline"
// .headline = class="headline"

// let headline = document.getElementById("headline").innerHTML;
let headline = document.getElementById("headline");
// console.log(headline.textContent)

// change the text from the headline to:
// „Cool, sie ist offen! :)“
// document.getElementById("headline").innerHTML = "Cool, sie ist offen! :)";
headline.innerText = "Cool, sie ist offen! :)"

console.log('-------------------');
// set value of the input element #input to:
// "Hier steht Text"
let inputElement = document.getElementById("input");
inputElement.value = "Hier steht Text";

// var b = document.getElementById("input");
// b.value = "Hier steht Text";
// set the value of the input element #input
// as the innerHtml of the div #output

let outputElement = document.getElementById("output");
outputElement.innerHTML = inputElement.value;

// document.getElementById("output").innerHTML = b.value;
// add the class bg-black to the body
// if there it doesn't got it already
if (!document.body.classList.contains("bg-black")) {
  document.body.classList.add("bg-black")
}

// toggle the class border-red on the input
inputElement.classList.toggle("border-red");

// multiply the data-number attribute by 3
// and update the value in the dom
outputElement.dataset.number *=3
console.log(outputElement.dataset.number);

// const input = document.querySelector('input');
// const log = document.getElementById('output');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }