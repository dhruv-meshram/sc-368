// console.log(document)

// document.getElementById("title").innerText = "hi!!!";

// const title= document.getElementById("title")
// title.innerText = "W";
// title.style.color="red";   

// let age = parseInt(prompt("Whats you age?"));

// if (age>25){
//     title.innerText="Can drink";
//     title.style.color = 'green';
// }

// else{
//     title.innerText = "Can't drink";
//     title.style.color = 'red';
// }


const inputText = document.getElementById('Todo Title')

function Card(Todo){
    return(
    '<div class="card" style="width: 18rem;"> <img src="..." class="card-img-top" alt="..."> <div class="card-body"> <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content. </p> <div> </div>')
}
const Todos=[];
function onClickSubmitButton(){
    console.log(inputText.value);
    Todos.push(inputText.value);
    Todos.forEach((todo) => {
        list.innerHTML += "<li>" + todo + "</li>";
    })

}

const countdown = document.getElementsByClassName('countdown')[0]
let initialCount = 10;
const timer=setInterval(countdown,1000);
function countdown(){
    initialCount = initialCount -1;
    
    
}