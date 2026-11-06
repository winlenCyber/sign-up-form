const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const submit = document.querySelector("#signup-form");

submit.addEventListener("submit", (e) => {
    if(password.value !== confirmPassword.value) {
        e.preventDefault();
    alert("Password not match")
    }
})
