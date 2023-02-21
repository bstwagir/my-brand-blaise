
    
function Login() {
    let email = document.getElementById('email').value, pwd = document.getElementById('psw').value;
    let formData = JSON.parse(localStorage.getItem('signupData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('signupData')).some(data => data.email.toLowerCase() === email && data.pwd.toLowerCase() === pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "./Dashboard.html";
    }
    event.preventDefault();
}
/**
function Login()
{
    var getEmail = JSON.parse(localStorage.getItem('userEmail'));
    var getPass = JSON.parse(localStorage.getItem('userPass'));
    
    var enterEmail = document.getElementById('email').value;
    var enterPass = document.getElementById('psw').value;
    
   

    if( enterEmail==getEmail) {

        if(enterPass==getPass){

            alert('Log In Successfully')

        }else(
            alert('Wrong Password')
        )
    }else(
        alert('Wrong Email')
    )
    
}*/
