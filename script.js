console.log("Heisann");

string = "Hello";

number = 10;

boolean = true;
boolean2 = false;

let sayHello = "Hello";
console.log(sayHello);

const sayGoodbye = "Goodbye";
console.log(sayGoodbye);

function greeting () {
    let welcomeGreeting = "Welcome!"
    let guestName = "Silje"
    console.log(welcomeGreeting, guestName);
}
// greeting();

// DOM Manipulasjon
let button = document.querySelector("button");
console.log(button);

button.addEventListener("click", greeting);

/* En mer avansert måte å skrive en hendelse på som bruker arrow functions.
button.addEventListener("click", () => {
    let welcomeGreeting = "Welcome!"
    let guestName = "Silje"
    console.log(welcomeGreeting, guestName);
}));
*/

// Dark light mode toggle
function darkLightMode() {
    let toggleButton = document.querySelector("#toggleButton");
    console.log(toggleButton);
    let body = document.querySelector("body");
    console.log(body);

    body.classList.toggle("dark");
}

toggleButton.addEventListener("click", darkLightMode);
