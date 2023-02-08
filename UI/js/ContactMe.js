  
  function Message(){

  const form = document.getElementById("myForm");
    const storageKey = "contactData";
    let contactData = JSON.parse(localStorage.getItem(storageKey)) || [];
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formValues = {
            lname: form.lname.value,
            fname: form.fname.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };
        if(formValues.lname && formValues.email && formValues.message){
            contactData.push(formValues);
            if (contactData.length > 0) {
              localStorage.setItem(storageKey, JSON.stringify(contactData));
              document.getElementById('confirm').style.display = 'block'
              
            
            }} 
        form.fname.value = "";
        form.lname.value = "";
        form.email.value = "";
        form.subject.value = "";
        form.message.value = "";
    });
}