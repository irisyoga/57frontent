
const registerForm = document.getElementById("register-form");

registerForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const newUser = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        avatar: e.target.avatar.value
    };

    console.log(newUser);
});

async function fetchRegister(newUser) {
    const res = await fetch("https://api.escuelajs.co/api/v1/users/");
    
}