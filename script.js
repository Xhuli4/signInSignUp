const loginForm = document.querySelector(".loginForm");
const signupForm = document.querySelector(".signupForm");
const loginBtn = document.querySelector(".signin button");
const signupBtn = document.querySelector(".signup button");
const backLayer = document.querySelector(".backLayer");

signupBtn.addEventListener('click', () =>{
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    backLayer.style.clipPath = "inset(0 0 0 50%)";
});

loginBtn.addEventListener('click', () =>{
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    backLayer.style.clipPath = "";
});
