let email=document.querySelector("#email");
let form=document.querySelector("form");
let pass=document.querySelector("#password");
form.addEventListener("submit",function(detis){
    detis.preventDefault();
        document.querySelector("#email-msg").textContent="";
            document.querySelector("#password-msg").textContent="";


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let emailans=emailRegex.test(email.value);
let passans=passwordRegex.test(pass.value);
if(!emailans){
    document.querySelector("#email-msg").textContent="email is not valid";
}

if(!passans){
    document.querySelector("#password-msg").textContent="password is not valid";
}
})