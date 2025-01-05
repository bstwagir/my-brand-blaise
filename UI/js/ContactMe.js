  
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   myHeaders.append("Access-Control-Allow-Origin", "*")


  
  function Message(){

  const form = document.getElementById("myForm");
    const storageKey = "contactData";
    let contactData = JSON.parse(localStorage.getItem(storageKey)) || [];
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formValues = {
            name: form.name.value,
            lname: form.lname.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*")
     
      
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(formValues),
          redirect: "follow",
      };
      const sendMsg = () => {
        console.log(formValues);
      fetch("http://localhost:5000/server/contactQueries", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      }
        if(formValues.name && formValues.email && formValues.message){
            contactData.push(formValues);
            if (contactData.length > 0) {
              localStorage.setItem(storageKey, JSON.stringify(contactData));
              document.getElementById('confirm').style.display = 'block';
              sendMsg()
              
            
            }} 
        form.name.value = "";
        form.lname.value = "";
        form.email.value = "";
        form.subject.value = "";
        form.message.value = "";
    });


}


