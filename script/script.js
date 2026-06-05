
// GET USER
const users =JSON.parse(localStorage.getItem("users"))||[]

// DOM INPUT
const singUp = document.getElementById("singUp");
const email = document.getElementById("email");
const name= document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

// SIGNUP FUNCTIONS
if (singUp){
singUp.addEventListener("submit",function(event){
    event.preventDefault();
const emailInput = email.value.trim();
const nameInput = name.value.trim()
const passwordInput = password.value.trim();
const confirmPasswordInput = confirmPassword.value.trim();

// STOP EMPTY FILED
if(!emailInput || !passwordInput || !nameInput){
    message.textContent = "Fill all fields required."
    message.style.color ="red"
    return;
}

// PASSWORD VALIDATION
const passwordLength = passwordInput.length >=6
 const passwordUppercase =/[A-Z]/.test(passwordInput);
const passwordNum = /[0-9]/.test(passwordInput);
const passwordSymbol = /[@#$%&*,.'~<>+=]/.test(passwordInput);

// PASSWORD LOGIC ASSIGNMENT
if (!passwordLength){
    message.textContent = " Password must be greater than 6"
    message.style.color = "red"     
    return; 
}
if(!passwordUppercase){
    message.textContent = "Password must include at least one uppercase character"
    message.style.color ="red"
    return;
}
if(!passwordNum){
    message.textContent = "Password must include at least one number"
    message.style.color = "red"
    return;
    
}
if(!passwordSymbol){
    message.textContent = "Password must include at least one special character"
    message.style.color = "red"
    return;
}

//PASSWORD AND CONFIREMPASSWORD LOGIC 
if (passwordInput !==confirmPasswordInput){
    message.textContent = "Password not matched"
    message.style.color = "red"
    return;
}

// CHECK EXISTING USER EMAIL
 const usersExits= users.some(users => users.email===emailInput)

if(usersExits){
message.textContent = "User already exists!"
message.style.color ="red"
return;
}

// STORE USERS
let newUser = {
name:nameInput,
email:emailInput,
 password:passwordInput
};

// ADD NEW USERS
users.push(newUser);

// SAVE NEW USERS
localStorage.setItem("users",JSON.stringify(users));
})
}            // END OF REGISTRATION


// LOGIN FUNCTION
 const login = document.getElementById("login");
if(login){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const message = document.getElementById("message");

   login.addEventListener ("submit", function (e){
e.preventDefault();
const emailInput = email.value.trim();
const passwordInput = password.value.trim();

if (!emailInput || !passwordInput){
    message.textContent = "Fill all fields Required"
    message.style.color = "red"
    return;
}


// LOGIN  ASSIGNMENT
 const currentUsers = users.find(users => users.email ===emailInput && users.password ===passwordInput);

if(!currentUsers){
    message.textContent = "Invalid user email or password."
  message.style.color = "red"
  return
}else{
     window.location .href = "dashboard.html"
     
}
})
}  // END OF LOGIN LOGIC

   
// LOGOUT FUNCTION
const logout = document.getElementById("logout");
if(logout){
    logout.addEventListener("click",function(event){
        event.preventDefault();
        localStorage.removeItem("user");
        window.location.href = "login.html";
    })
}

// DARK/LIGHT MODE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener ("click", function (){
    document.body. classList.toggle ("dark")
})

// SHOW ITEMS
const sidebar= document.getElementById("sidebar");
sidebar.addEventListener ("click",function(){
document.body.classList.toggle("hidden")
})