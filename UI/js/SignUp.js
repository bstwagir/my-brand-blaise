function Signup()
{
   /** var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;
    
    localStorage.setItem('userName',JSON.stringify(name))
    localStorage.setItem('userEmail',JSON.stringify(email));
    localStorage.setItem('userPass',JSON.stringify(password)); */
    var ptd = document.getElementById('psw').value

    if(ptd.length < 4) {
        document.getElementById('emailp').innerHTML = 'Password has to be more than 4 characters';
        alert('Password incorrect'); 
    }else{

      let name = document.getElementById('name').value,
          email = document.getElementById('email').value,
          pwd = document.getElementById('psw').value;

  let signupData = JSON.parse(localStorage.getItem('signupData')) || [];

  let exist = signupData.length && 
      JSON.parse(localStorage.getItem('signupData')).some(data => 
          data.email.toLowerCase() == email.toLowerCase() 
      );

  if(!exist){
      signupData.push({ name,email, pwd });
      localStorage.setItem('signupData', JSON.stringify(signupData));
      document.querySelector('form').reset();
      document.getElementById('name').focus();
      document.getElementById('confirm').style.display = 'block'
      location.href="./LogIn.html"
  }
  else{
      document.getElementById('confirm').style.display = 'block'
  }

}}