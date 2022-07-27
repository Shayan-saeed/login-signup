let page = location.href.split("/");
page = page[page.length - 1] 
    
    
    
    
    let users=[]
    let loggedIn=[]
    function getUsers(){
        let userInStringForm = localStorage.getItem("users");
        let loggedInForm = localStorage.getItem("loggedIn");
        users = JSON.parse(userInStringForm) || [];
        loggedIn = JSON.parse(loggedInForm) || [];
        console.log(users);
        console.log(loggedIn); 
    }
   getUsers();

   function dashboard() {
    if (page === "dashboard.html") {

        let userName = document.getElementById('userName');
        let userEmail = document.getElementById('userEmail');
        let userGender = document.getElementById('userGender');
      
        

        userName.innerText =  loggedIn.name;
        userEmail.innerText =  loggedIn.email;
        userGender.innerText =  loggedIn.gender;
        console.log("loggedIn.Name:", loggedIn);

        
    }
}
dashboard();

    const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");
function sign(){
    let name = document.getElementById("name")
   let email = document.getElementById("email")
  let password = document.getElementById("password")
  let comPassword = document.getElementById("comPassword")
  let gender = document.getElementById("gender")
// let para= document.querySelector("#para")=Registered
let para="Registered Sucessfully";
let pass="please Enter Same Password";
let existEmail="Email already Exist"

if  (password.value ==comPassword.value){
  
     let newUser={
    Name:name.value,
    Email:email.value,
    Password:password.value,
    Gender:gender.value
  };
 
    for (let i = 0; i < users.length; i++) {
    if (users[i].Email === email.value) {
        document.querySelector("#existEmail").innerHTML=existEmail
      return;
    }
    }; 
    
  users.push(newUser);
  localStorage.setItem("users",JSON.stringify(users));
   document.querySelector("#para").innerHTML=para

 
}
else{
    document.querySelector("#pass").innerHTML=pass
}
}
function log() {
    let login_email = document.getElementById('log_email')
    let login_password = document.getElementById('log_pass')
    let passNotCorrect= "Incorrect Login details"

    for (let i = 0; i < users.length; i++) {
        if ( users[i].Email == login_email.value && users[i].Password == login_password.value) {
            localStorage.setItem(" loggedIn", JSON.stringify(users[i]));
            window.location.href="dashboard.html"
             return false;
        }

        if (users[i].Email !==login_email.value &&  users[i].Password !== login_password.value ) {
           document.querySelector("#passNotCorrect").innerHTML=passNotCorrect
       }
    }
}
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";    
}
    
    
 


//     js code to show/hide password and change icon
  pwShowHide.forEach(eyeIcon =>{
      eyeIcon.addEventListener("click", ()=>{
          pwFields.forEach(pwField =>{
              if(pwField.type ==="password"){
                  pwField.type = "text";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye-slash", "uil-eye");
                  })
              } else{
                  pwField.type = "password";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye", "uil-eye-slash");
                  })
              }
          }) 
      })
  })
 
  
      signUp.addEventListener("click", ( )=>{
      container.classList.add("active");
  });
  login.addEventListener("click", ( )=>{
      container.classList.remove("active");
  });
Footer