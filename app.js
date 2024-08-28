const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", (e)=> {
    e.preventDefault();
    const type =   password.getAttribute("type");

    if(type === "password"){
        password.setAttribute("type", "text");
        togglePassword.textContent = "Hide"

    } else{
        password.setAttribute("type", "password")
        togglePassword.textContent = "show"
    }
})


/** A simple password Hide and Show toggler... */