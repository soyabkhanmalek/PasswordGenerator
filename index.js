const myButton = document.getElementById("button")
const slider = document.getElementById("range-slider")
const sliderLabel = document.getElementById("slider-value")
const includeNumbers = document.getElementById("includeNumbers")
const includeSymbols = document.getElementById("includeSymbols")


sliderLabel.textContent = slider.value
let passlength = slider.value

slider.addEventListener("change", function () {
    passlength = slider.value
    sliderLabel.textContent = slider.value
})
const passWord1 = document.getElementById("password1")
const passWord2 = document.getElementById("password2")
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "<", ">", "/", "?", "~"]

/*const charset = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "<", ">", "/", "?", "~"
];*/
let charset = []
//randompass = Math.floor(Math.random() * charset.length);

function generatepassword(){
    let password = ""

    if (includeNumbers.checked){
        charset = [...characters,...numbers]
    } else if (includeSymbols.checked){
        charset = [...characters,...symbols]
    } else if (includeSymbols.checked && includeNumbers.checked){
        charset = [...characters,...numbers,...symbols]
    } else {
        charset = [...characters]
    }


    for (let i = 0; i < passlength; i++) {

        randompass = charset[Math.floor(Math.random() * charset.length)]
         password += randompass
    }
    return password;

}
function generate(){
    const firstpass = generatepassword()
    const secondpass = generatepassword()

    passWord1.textContent = firstpass
    passWord2.textContent = secondpass
}

function copyToClipboard(event) {
    const textToCopy = event.target.textContent;


    if (textToCopy && textToCopy !== "Password") {
        navigator.clipboard.writeText(textToCopy).then(() => {
            //alert("Password copied to clipboard!");
        });
    }
}

// Add the click listeners
passWord1.addEventListener("click", copyToClipboard);
passWord2.addEventListener("click", copyToClipboard);

myButton.addEventListener("click", generate)