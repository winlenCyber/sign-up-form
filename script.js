const passwordError = document.querySelector("#password-error");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const submit = document.querySelector("#signup-form");

submit.addEventListener("submit", (e) => {
    if(password.value !== confirmPassword.value) {
        e.preventDefault();
        password.classList.add("error");
        confirmPassword.classList.add("error");
        passwordError.textContent = "Passwords do not match.";
    }

    else{
        passwordError.textContent = "";
        password.classList.remove("error");
confirmPassword.classList.remove("error");
    }
})
