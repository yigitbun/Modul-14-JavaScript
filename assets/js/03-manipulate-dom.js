// log text content from #headline
// #headline = id="headline"
// .headline = class="headline"

console.log('-------------------');
// var text = document.getElementById("headline").innerHTML;
// console.log(text)

// change the text from the headline to:
// „Cool, sie ist offen! :)“
console.log('-------------------');
// document.getElementById("headline").innerHTML = "Cool, sie ist offen! :)";

console.log('-------------------');
// set value of the input element #input to:
// "Hier steht Text"

// var b = document.getElementById("input");
// b.value = "Hier steht Text";
// set the value of the input element #input
// as the innerHtml of the div #output

// document.getElementById("output").innerHTML = b.value;
// add the class bg-black to the body
// if there it doesn't got it already


// toggle the class border-red on the input

// multiply the data-number attribute by 3
// and update the value in the dom


const input = document.querySelector('input');
const log = document.getElementById('output');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}