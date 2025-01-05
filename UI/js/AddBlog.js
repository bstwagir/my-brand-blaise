

var myHeaders = new Headers();
    myHeaders.append("authorization", JSON.parse(localStorage.getItem('current_user')).accessToken);
console.log(JSON.parse(localStorage.getItem('current_user')).accessToken, myHeaders);
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
/**function readURL(input) {
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
        onchange="readURL(this);"
        upload.single("image")
    }
    return reader;
}*/
function Blog(){

    const form = document.getElementById("myForm");
      const storageKey = "blogData";
      let blogData = JSON.parse(localStorage.getItem(storageKey)) || [];
      form.addEventListener("submit", (event) => {
          event.preventDefault();
          const formValues = {
              title: form.title.value,
              categories: form.categories.value,
              content: form.content.value,
              image: form.image.value,             
          };

          serverPost= () =>{ var myHeaders = new Headers();
            myHeaders.append("authorization", JSON.parse(localStorage.getItem('current_user')).accessToken);
            myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(formValues),
          redirect: 'follow'
        };
        
        fetch("http://localhost:5000/server/posts", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));}


          if(formValues.title && formValues.categories && formValues.content){
              blogData.push(formValues);
              if (blogData.length > 0) {
                serverPost()
                localStorage.setItem(storageKey, JSON.stringify(blogData));
                document.getElementById('confirm').style.display = 'block';
                localStorage.removeItem('image');
              }} 
          form.title.value = "";
          form.content.value = "";
          form.categories.value = "";
          form.image.value = "";;
      });
      console.log(blogData)
    }

// Show Sidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });
  
// Hide Sidebar
 closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
  });

   /**  title: form.title.value,
              categories: form.categories.value,
              content: form.content.value,
              image: localStorage.getItem('image'),*/
