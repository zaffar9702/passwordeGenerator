let passwordBox;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#%^&*()_+~{}[]<>?/-=|!";

const allchars = upperCase + lowerCase + number + symbol;
const length = 12;

document.addEventListener("DOMContentLoaded", (event) => {
    passwordBox = document.getElementById("password");
});

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)]

    }

    passwordBox.value = password;
}


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

