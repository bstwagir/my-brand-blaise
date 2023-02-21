function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.addEventListener("load", () => {
            localStorage.setItem("image", reader.result)
            console.log('image')
        }) 

        reader.addEventListener("load", () => {
            const imagPre =  localStorage.getItem("image");
            console.log('imagPre')
            document.querySelector('#blah').setAttribute('src', imagPre)
        }) 
        
        reader.readAsDataURL(input.files[0]);
    }
    return reader;
}
function Blog(){

    const form = document.getElementById("myForm");
      const storageKey = "blogData";
      let blogData = JSON.parse(localStorage.getItem(storageKey)) || [];
      form.addEventListener("submit", (event) => {
          event.preventDefault();
          const formValues = {
              title: form.title.value,
              category: form.category.value,
              content: form.content.value,
              image: localStorage.getItem('image'),
          };
          if(formValues.title && formValues.category && formValues.content){
              blogData.push(formValues);
              console.log('blogData')
              if (blogData.length > 0) {
                localStorage.setItem(storageKey, JSON.stringify(blogData));
                document.getElementById('confirm').style.display = 'block';
                localStorage.removeItem('image');
              }} 
          form.title.value = "";
          form.content.value = "";
          form.category.value = "";
          form.subject.value = "";
          form.message.value = "";
          localStorage.removeItem('image');
      });
      console.log('contactData')
    }