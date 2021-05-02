// listen to the submit of the form and prevent default
// then save the form data inside a variable and send it to https://hsh.blnq.dev/javascript-basics/form-fetch.php
// log the response


// let submit = document.getElementById("submit");
// submit.addEventListener("click", (event) => {
//   event.preventDefault();
// })

// const xhr = new XMLHttpRequest();

// xhr.onload = function () {
//     const serverResponse = document.getElementById("output");
//     serverResponse.innerHTML = this.responseText;
// };

// xhr.open("POST", "dom.php");
// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhr.send("name=philip&message=how's it going")

fetch('https://openlibrary.org/books/OL7353617M.json')
    .then((response) => {
        return response.json();
    })
    .then((data1) => {
        console.log("================================")
        console.log("fetched--->", data1);
        console.log("fetched--->", data1.title);
        console.log("fetched--->", data1.first_sentence.value);
        console.log("fetched--->", data1.isbn_13[0]);
        console.log("================================")

    });

    
// console.log(request);

// get data from public api https://openlibrary.org/books/OL7353617M.json
// and display the title, first sentence & isbn 13 in the #output element

