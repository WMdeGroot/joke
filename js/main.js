let username;
let userHtml = document.querySelector(".username");
let output = document.querySelector(".output");
let inputValue = document.querySelector(".input");
let confirm = document.querySelector(".confirm").addEventListener("click", submitFunction);

username = prompt("What's your username?", "John Doe");
console.log(username);
alert(`Welcome, ${username}`);
userHtml.innerHTML = `Welcome, ${username}`;


function submitFunction(){
    if(inputValue.value == ""){
        alert("You didn't enter nothing");
        return;
    }

    console.log(inputValue.value);
    console.log(username)
    output.innerHTML += `<p class="lead"> ${username} =  ${inputValue.value} <hr><br>`
    inputValue.value = "";
}