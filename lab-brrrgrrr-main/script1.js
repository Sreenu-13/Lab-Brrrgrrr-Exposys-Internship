const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // Function to handle the signup process
// Function to handle the signup process
function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Check if the required fields are not empty and if the password matches the confirmation
    if (name && email && password && password === confirmPassword) {
      // Store the credentials in an object
      const userCredentials = {
        name: name,
        email: email,
        password: password,
      };
  
      // Convert the object to a JSON string and store it in Local Storage
      localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
  
      // Redirect the user to the login form
      container.classList.remove("active");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
    } else {
      alert("Please fill in all the required fields.");
    }
  }

  document.getElementById("loginButton").addEventListener("click", function() {

  // Get the email and password input values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Predefined valid email and password combinations for demonstration purposes
  var validCredentials = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    { email: "user3@example.com", password: "password3" }
  ];

  // Check if the entered email and password match any of the valid combinations
  var isValidLogin = validCredentials.some(function(credential) {
    return credential.email === email && credential.password === password;
  });

  if (isValidLogin) {
    // Redirect to the "brrr.html" page after successful login
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
  
  // Add an event listener to the Login button
  const loginSubmitButton = document.getElementById("loginButton");
  loginSubmitButton.addEventListener("click", login);
  
  
  // Add an event listener to the Signup button
  const signupSubmitButton = document.getElementById("signupSubmitButton");
  signupSubmitButton.addEventListener("click", signup);
  

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });