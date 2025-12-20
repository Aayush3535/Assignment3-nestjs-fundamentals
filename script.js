function changeGreeting(){
    const name = document.getElementById("userInput").value;
    const greetingElement = document.getElementById("greeting");
    if (name.trim() !== ""){
        greetingElement.textContent = "Hello, " + name + "!";
    } else{
        greetingElement.textContent = "Hello";
    }
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const color = button.getAttribute('data-color');
        button.style.backgroundColor = color;
    });
});

document.getElementById("greet").addEventListener("click", function(){
    const userField = document.getElementById("userInput");
    const text = document.getElementById("");
    if(userField.value.trim() === ""){
        alert("Enter Your Name!");
        userField.focus();
        return;
    }
    text.textContent = "Hello, " + userField.value + "!";
});
